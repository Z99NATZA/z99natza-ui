import type { ChatMessageType } from "@/types/ai/chat";
import ChatMessage from "./ChatMessage";

type ChatContainerProps = {
    messages: ChatMessageType[];
}

export default function ChatContainer({ messages }: ChatContainerProps) {
    return (
        <div className="max-w-4xl mx-auto">
            {messages.map((message, index) => (
                <ChatMessage 
                    key={index} 
                    message={message.message} 
                    sender={message.sender} 
                    timestamp={message.timestamp} 
                />
            ))}
        </div>
    )
}
