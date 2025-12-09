export default function WelcomeScreen() {
    return (
        <div className="text-center space-y-6">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-white p-1 float-animation glow-effect">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                    <img
                        src="/images/waifu/shark-chan-chibi-03.png"
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
       
            <h2 className="text-3xl font-bold gradient-text mb-3 fade-in-up delay-2">
                ผบ. ว่าไงขาาาาา
            </h2>
        </div>
    );
};
