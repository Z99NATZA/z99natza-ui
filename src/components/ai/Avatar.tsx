type AvatarProps = {
    sender: 'user' | 'ai',
};

export default function Avatar({ sender }: AvatarProps) {
    return (
        <div>
            {sender === 'user' &&
                <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-sm font-bold">
                    Z
                </div>
            }
            
            {sender === 'ai' &&
                <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-cyan-400 flex items-center justify-center overflow-hidden">
                    <img
                        src="/images/waifu/shark-chan-chibi-02.png"
                        alt="Shark Chan"
                        className="w-full h-full object-cover"
                    />
                </div>
            }
        </div>
    );
}