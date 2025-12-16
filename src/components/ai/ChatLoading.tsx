import Avatar from "./Avatar";
import "@/components/ai/css/ChatLoading.css";

// Loading แบบ Dots (จุดกระโดด)
export function ChatLoadingDots() {
    return (
        <div className="space-y-4">
            <div className="justify-start flex">
                <div className="flex max-w-[85%] sm:max-w-[75%] gap-3 items-end">
                    {/* Avatar */}
                    <div>
                        <Avatar sender="ai" />
                    </div>

                    {/* Bubble */}
                    <div className="chat-bubble-ai rounded-bl-sm px-6 py-4 rounded-2xl my-1">
                        <div className="flex space-x-2">
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                style={{ animationDelay: "300ms" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Loading แบบ Pulse (แถบวิ่ง)
export function ChatLoadingPulse() {
    return (
        <div className="space-y-4">
            <div className="justify-start flex">
                <div className="flex max-w-[85%] sm:max-w-[75%] gap-3 items-end">
                    {/* Avatar */}
                    <div>
                        <Avatar sender="ai" />
                    </div>

                    {/* Bubble */}
                    <div className="chat-bubble-ai rounded-bl-sm px-6 py-4 rounded-2xl my-1 relative overflow-hidden">
                        <div className="flex flex-col space-y-2">
                            <div className="w-16 h-3 bg-slate-600 rounded"></div>
                            <div className="w-24 h-3 bg-slate-600 rounded"></div>
                            <div className="w-12 h-3 bg-slate-600 rounded"></div>
                        </div>
                        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-slate-500/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Loading แบบ Typing (จุดกระพริบ)
export function ChatLoadingTyping() {
    return (
        <div className="space-y-4">
            <div className="justify-start flex">
                <div className="flex max-w-[85%] sm:max-w-[75%] gap-3 items-end">
                    {/* Avatar */}
                    <div>
                        <Avatar sender="ai" />
                    </div>

                    {/* Bubble */}
                    <div className="chat-bubble-ai rounded-bl-sm px-6 py-4 rounded-2xl my-1">
                        <div className="flex space-x-1">
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                                style={{ animationDuration: "1.4s" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                                style={{
                                    animationDuration: "1.4s",
                                    animationDelay: "0.2s",
                                }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                                style={{
                                    animationDuration: "1.4s",
                                    animationDelay: "0.4s",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Loading แบบ Spinner
export function ChatLoadingSpinner() {
    return (
        <div className="space-y-4">
            <div className="justify-start flex">
                <div className="flex max-w-[85%] sm:max-w-[75%] gap-3 items-end">
                    {/* Avatar */}
                    <div>
                        <Avatar sender="ai" />
                    </div>

                    {/* Bubble */}
                    <div className="chat-bubble-ai rounded-bl-sm px-6 py-4 rounded-2xl my-1">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs text-slate-400">
                                กำลังพิมพ์...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Component หลักที่รวม Loading ทุกแบบ (เลือกใช้ได้)
export default function ChatLoading({
    type = "dots",
}: {
    type?: "dots" | "pulse" | "typing" | "spinner";
}) {
    switch (type) {
        case "pulse":
            return <ChatLoadingPulse />;
        case "typing":
            return <ChatLoadingTyping />;
        case "spinner":
            return <ChatLoadingSpinner />;
        case "dots":
        default:
            return <ChatLoadingDots />;
    }
}