export default function WelcomeScreen() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <div className="w-24 h-24 rounded-full bg-linere-to-br from-emerald-400 via-cyan-400 to-white p-1 float-animation glow-effect mb-6">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                        src="/images/logo/shark-chan.png"
                        alt="Shark Chan"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <h2 className="text-3xl font-bold gradient-text mb-3">
                ผบ. ว่าไงขาาาาา
            </h2>
        </div>
    );
};
