import React from "react";
import "@/components/ai/css/chat-input.css";

type ChatInputProps = {
    value: string;
    placeholder: string;
    setValue: (value: string) => void;
    onSend: () => void;
};

export default function ChatInput({ value, placeholder, setValue, onSend }: ChatInputProps) {
    const MAX_HEIGHT = window.innerHeight * 0.3; // 30dvh
    const MIN_HEIGHT = 50; // 50px

    const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        const textarea = e.currentTarget;
    
        // Shift + Enter (newline + auto-grow)
        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
    
            const { selectionStart, selectionEnd, value } = textarea;
    
            // กันกรณี selection* เป็น null (ตาม type ของ DOM)
            if (selectionStart === null || selectionEnd === null) return;
    
            const newValue =
                value.substring(0, selectionStart) +
                "\n" +
                value.substring(selectionEnd);
    
            setValue(newValue);
    
            // คำนวณความสูง (หลัง React อัปเดต DOM)
            requestAnimationFrame(() => {
                textarea.style.height = "auto";
                const rawHeight = textarea.scrollHeight;
                const newHeight = Math.max(
                    MIN_HEIGHT,
                    Math.min(rawHeight, MAX_HEIGHT),
                );
                textarea.style.height = `${newHeight}px`;
                textarea.style.overflowY =
                    newHeight > 100 ? "auto" : "hidden";
            });
    
            return;
        }
    
        // Enter (ส่งข้อความ)
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
    
            requestAnimationFrame(() => {
                const newHeight = MIN_HEIGHT;
                textarea.style.height = `${newHeight}px`;
                textarea.style.overflowY = "hidden";
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.target;
        
        setValue(textarea.value);
    
        textarea.style.height = `${MIN_HEIGHT}px`;
    
        const rawHeight = textarea.scrollHeight;
        const newHeight = Math.max(
            MIN_HEIGHT,
            Math.min(rawHeight, MAX_HEIGHT),
        );
    
        textarea.style.height = `${newHeight}px`;
        textarea.style.overflowY =
            newHeight > 100 ? "auto" : "hidden";
    };
    
    const handleSend = () => {
        if (!value.trim()) return;
        
        onSend();
    };
    
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 p-4">
            <div className="max-w-4xl mx-auto">
                <div className="relative flex items-center gap-2">
                    <textarea
                        className="flex-1 px-4 py-3 pr-14 rounded-xl bg-slate-800 border border-slate-700
                           focus:border-emerald-500/50 focus:outline-none focus:ring-2
                           focus:ring-emerald-500/20 transition-all resize-none  nice-scroll
                           h-[50px] max-h-[30dvh] overflow-hidden
                        "
                        rows={1}
                        value={value}
                        placeholder={placeholder}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                    />
                    <button
                        onClick={handleSend}
                        className="cursor-pointer absolute right-4 bottom-2 p-2 rounded-lg bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!value.trim()}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}