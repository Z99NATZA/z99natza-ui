import ChatContainer from "@/components/ai/ChatContainer";
import ChatInput from "@/components/ai/ChatInput";
import WelcomeScreen from "@/components/ai/WelcomeScreen";
import type { ChatMessageType } from "@/types/ai/chat";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function Ai() {
    const [value, setValue] = useState('');
    const placeholder = 'พิมพ์ข้อความ...';
    const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    const [chatId] = useState(() => `${Date.now()}_${uuidv4()}`);
    const [loading, setLoading] = useState(false);
    
    const sendMessage = async () => {
        setShowWelcomeScreen(false);
        setLoading(true);

        setMessages((prev) => [
            ...prev,
            {
                message: value,
                sender: 'user',
                timestamp: new Date()
            }
        ]);

        setValue('');

        try {
            const response = await axios.post('http://localhost:3000/api/ai/chat', {
                message: value,
                sender: 'user',
                chatId,
            });

            const data = response.data;

            if (Array.isArray(data)) {
                const aiMessages = data.filter((msg: ChatMessageType) => msg.sender === 'ai');
                
                if (aiMessages.length > 0) {
                    setMessages((prev) => [
                        ...prev,
                        ...aiMessages.map((msg: ChatMessageType) => ({
                            message: msg.message,
                            sender: msg.sender,
                            timestamp: new Date(msg.timestamp),
                        }))
                    ]);
                }
            }
        } 
        catch (error) {
            console.log(error)
            
            setMessages((prev) => [
                ...prev,
                {
                    message: "ขอโทษค้าาาาา ระบบขัดข้อง!",
                    sender: "ai",
                    timestamp: new Date(),
                },
            ]);
        }
        finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="px-4 py-12 md:py-20 max-w-6xl mx-auto">
            {showWelcomeScreen && <WelcomeScreen />}
            {!showWelcomeScreen && <ChatContainer messages={messages} loading={loading} />}
            
            <ChatInput 
                value={value} 
                placeholder={placeholder} 
                setValue={setValue} 
                onSend={sendMessage}
            />
        </div>
    )
}