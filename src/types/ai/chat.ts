export type ChatMessageType = {
    message: string;
    sender: 'user' | 'ai';
    timestamp: Date;
};