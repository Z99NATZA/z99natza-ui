import ChatContainer from "@/components/ai/ChatContainer";
import ChatInput from "@/components/ai/ChatInput";
import WelcomeScreen from "@/components/ai/WelcomeScreen";
import type { ChatMessageType } from "@/types/ai/chat";
import { useState } from "react";

export default function Ai() {
    const [value, setValue] = useState('');
    const placeholder = 'พิมพ์ข้อความ...';
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    
    const sendMessage = () => {
        setShowWelcomeScreen(false);
        
        setMessages((prev) => [
            ...prev,
            {
                message: value,
                sender: 'user',
                timestamp: new Date()
            }
        ]);
        
        setValue('');
        
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    message: "ผบ.ว่าไงขาาาาา",
                    sender: "ai",
                    timestamp: new Date(),
                },
            ]);
        }, 100);
    }
    
    return (
        <div className="px-4 py-12 md:py-16 max-w-6xl mx-auto">
            {showWelcomeScreen && <WelcomeScreen />}
            {!showWelcomeScreen && <ChatContainer messages={messages} />}
            
            <ChatInput 
                value={value} 
                placeholder={placeholder} 
                setValue={setValue} 
                onSend={sendMessage}
            />
        </div>
    )
}