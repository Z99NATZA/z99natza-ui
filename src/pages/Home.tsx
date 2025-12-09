import Footer from "@/components/layout/Footer";
import "@/css/pages/home.css";
import axios from "axios";
import { useEffect } from "react";
import { me } from "@/constants/me";

export default function Home() {
    useEffect(() => {
        axios.get('http://localhost:3000/api/users')
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);
    
    const img01 = '/images/waifu/wallpaperwaifu-01.jpg';
    const img02 = 'https://images-ng.pixai.art/images/orig/06ac951b-bcd8-4673-adce-4ea9d40f3234';
    const img03 = '/images/waifu/rapi.png';
    const img04 = '/images/waifu/shark-chan-original.png';
    
    const name01 = 'Wallpaper waifu';
    const name02 = 'Ryuu lion';
    const name03 = 'Rapi';
    const name04 = 'Shark chan';
    
    const aboutDescription = 'ไวฟุ';
    const heartPoints = 148338;

    return (
        <div>
            {/* Hero Section */}
            <section className="px-4 py-12 md:py-20 max-w-6xl mx-auto">
                <div className="text-center space-y-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-white p-1 float-animation glow-effect">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                            <img
                                src="/images/waifu/shark-chan-chibi-02.png"
                                alt="Profile Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text fade-in-up">
                        {me.name}
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto fade-in-up delay-1">
                        ❤️ {heartPoints}
                    </p>

                    <div className="flex gap-4 justify-center fade-in-up delay-2">
                        <button className="px-6 py-3 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
                            ❤️
                        </button>
                        <button className="px-6 py-3 border-2 border-emerald-400 rounded-full hover:bg-emerald-400/10 transition-all">
                            ❤️
                        </button>
                    </div>
                </div>
            </section>

            {/* Waifu Section */}
            <section className="px-4 py-12 md:py-16 max-w-6xl mx-auto">
                <div className="bg-slate-800/50 rounded-3xl p-6 md:p-10 border border-emerald-500/20 card-hover">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text slide-in">
                        ฉันคนนี้ ใจดีเสมอ
                    </h3>

                    <div className="space-y-4 text-slate-300 text-sm md:text-base slide-in delay-1">
                        <p>{aboutDescription}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-slate-700/50 rounded-xl p-4 text-center card-hover fade-in-up delay-2">
                            <img 
                                src={img01} 
                                alt={name01}
                                className="w-full h-40 object-cover object-top rounded-lg mb-2"
                            />
                            <div className="text-slate-400 text-sm">
                                {name01}
                            </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 text-center card-hover fade-in-up delay-3">
                            <img 
                                src={img02} 
                                alt={name02}
                                className="w-full h-40 object-cover object-top rounded-lg mb-2"
                            />
                            <div className="text-slate-400 text-sm">
                                {name02}
                            </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 text-center card-hover fade-in-up delay-4">
                            <img 
                                src={img03}
                                alt={name03}
                                className="w-full h-40 object-cover object-top rounded-lg mb-2"
                            />
                            <div className="text-slate-400 text-sm">
                                {name03}
                            </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4 text-center card-hover fade-in-up delay-4">
                            <img 
                                src={img04}
                                alt={name04}
                                className="w-full h-40 object-cover object-top rounded-lg mb-2"
                            />
                            <div className="text-slate-400 text-sm">
                                {name04}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="px-4 py-12 md:py-16 max-w-6xl mx-auto"
            >
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
                    ทักษะ
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20 card-hover">
                        <h4 className="text-lg md:text-xl font-bold mb-4 text-emerald-400">
                            Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-sm text-emerald-300 hover:bg-slate-700 transition-colors">
                                PHP
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-sm text-emerald-300 hover:bg-slate-700 transition-colors">
                                JavaScript
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-sm text-emerald-300 hover:bg-slate-700 transition-colors">
                                TypeScript
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-emerald-500/30 rounded-lg text-sm text-emerald-300 hover:bg-slate-700 transition-colors">
                                Rust
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20 card-hover">
                        <h4 className="text-lg md:text-xl font-bold mb-4 text-cyan-400">
                            Framework/Library
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:bg-slate-700 transition-colors">
                                Laravel
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:bg-slate-700 transition-colors">
                                Axum
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:bg-slate-700 transition-colors">
                                React
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:bg-slate-700 transition-colors">
                                Next.js
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:bg-slate-700 transition-colors">
                                Vue.js
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:bg-slate-700 transition-colors">
                                Alpine.js
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/20 card-hover">
                        <h4 className="text-lg md:text-xl font-bold mb-4 text-blue-400">
                            UI/Styling
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:bg-slate-700 transition-colors">
                                HTML
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:bg-slate-700 transition-colors">
                                CSS
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:bg-slate-700 transition-colors">
                                Tailwind CSS
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-blue-500/30 rounded-lg text-sm text-blue-300 hover:bg-slate-700 transition-colors">
                                Bootstrap
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 card-hover">
                        <h4 className="text-lg md:text-xl font-bold mb-4 text-purple-400">
                            Database
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-slate-700 transition-colors">
                                MS SQL
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-slate-700 transition-colors">
                                MySQL
                            </span>
                            <span className="px-3 py-1.5 bg-slate-700/50 border border-purple-500/30 rounded-lg text-sm text-purple-300 hover:bg-slate-700 transition-colors">
                                PostgreSQL
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="px-4 py-12 md:py-16 max-w-6xl mx-auto"
            >
                <div className="bg-linear-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-6 md:p-10 border border-emerald-400/30 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                        Socials
                    </h3>
                    <p className="text-slate-300 mb-8 text-sm md:text-base">
                        ❤️ Love you ❤️
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a
                            href="https://github.com/Z99NATZA"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-all card-hover"
                        >
                            <img
                                src="/images/social/github.webp"
                                alt="TikTok"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-sm md:text-base">Github</span>
                        </a>

                        <a
                            href="https://www.youtube.com/@z99natza/videos"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-all card-hover"
                        >
                            <img
                                src="/images/social/youtube.svg.webp"
                                alt="TikTok"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-sm md:text-base">
                                Youtube
                            </span>
                        </a>

                        <a
                            href="https://www.tiktok.com/@z99natza"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-all card-hover"
                        >
                            <img
                                src="/images/social/tiktok.png"
                                alt="TikTok"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-sm md:text-base">Tiktok</span>
                        </a>
                    </div>
                </div>
            </section>
            
            <Footer />
            
        </div>
    );
}
