import "@/components/ai/css/ChatMessage.css";
import Avatar from "./Avatar";
import type { ChatMessageType } from "@/types/ai/chat";
import { formatTime } from "@/utils/time";

export default function ChatMessage({ message, sender, timestamp }: ChatMessageType) {
    const isUser = sender === 'user';
    
    return (
        <div className="space-y-4">
            <div className={`${isUser ? 'justify-end' : 'justify-start'} flex`}>
                <div className={`${isUser && 'flex-row-reverse'} flex max-w-[85%] sm:max-w-[75%] gap-3 items-end`}>
                    {/* Avatar */}
                    <div className={`${isUser ? 'hidden' : ''}`}>
                        <Avatar sender={sender} />
                    </div>
                    
                    {/* Bubble */}
                    <div className={`${isUser ? 'chat-bubble-user rounded-br-sm' : 'chat-bubble-ai rounded-bl-sm'} px-4 py-3 rounded-2xl my-1`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message}
                        </p>
                        <div className={`${isUser ? 'text-end' : 'text-start'} text-xs text-slate-400 mt-1`}>
                            {formatTime(timestamp)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

