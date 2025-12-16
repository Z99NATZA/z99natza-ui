import type { ChatMessageType } from "@/types/ai/chat";
import ChatMessage from "./ChatMessage";
import ChatLoading from "./ChatLoading";

type ChatContainerProps = {
    messages: ChatMessageType[];
    loading: boolean;
}

export default function ChatContainer({ messages, loading }: ChatContainerProps) {
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
            
            { loading && <ChatLoading type="dots" />}
        </div>
    )
}
