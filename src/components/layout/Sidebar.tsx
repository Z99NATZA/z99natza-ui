import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
    isOpen: boolean;
    closeSidebar: () => void;
};

function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
    const location = useLocation();
        
    // Helper function เช็คว่าลิงก์ active หรือไม่
    const isActive = (path: string) => location.pathname === path;
        
    return (
        <div
            className={`
                fixed top-0 left-0 h-full w-72
                bg-slate-900
                z-50
                transition-all duration-300 ease-out
                ${isOpen 
                    ? "translate-x-0 opacity-100" 
                    : "-translate-x-full opacity-0"
                }
            `}
        >
            <div className="p-6 h-full flex flex-col">
                {/*Profile Section*/}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-white p-1 float-animation glow-effect">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                            <img
                                src="/images/logo/shark-chan.png"
                                alt="Profile Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold gradient-text mb-1">
                        Z99NATZA
                    </h2>
                    <p className="text-sm text-slate-400">Web Developer</p>
                </div>

                {/*Navigation Menu*/}
                <nav className="flex-1 space-y-2">
                    <Link
                        to="/"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                            isActive('/') 
                                ? 'bg-linere-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30' 
                                : 'hover:bg-slate-700/50 border border-transparent'
                        }`}
                        onClick={closeSidebar}
                    >
                        <img src="/images/icon/home.png" alt="Home" className="w-5 h-5 object-contain rounded-full" />
                        <span className="text-sm font-medium">หน้าแรก</span>
                    </Link>
                    
                    <Link
                        to="/ai"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                            isActive('/ai')
                                ? 'bg-linere-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30'
                                : 'hover:bg-slate-700/50 border border-transparent'
                        }`}
                        onClick={closeSidebar}
                    >
                        <img src="/images/logo/shark-chan.png" alt="AI" className="w-5 h-5 object-contain rounded-full" />
                        <span className="text-sm font-medium">AI</span>
                    </Link>
                </nav>

                {/*Social Links*/}
                <div className="pt-6 border-t border-slate-700">
                    <p className="text-xs text-slate-400 mb-3">Socials</p>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/Z99NATZA"
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-emerald-500/20 flex items-center justify-center transition-all border border-transparent hover:border-emerald-500/30"
                        >
                            <img
                                src="/images/social/github.webp"
                                alt="TikTok"
                                className="w-5 h-5 object-contain"
                            />
                        </a>
                        
                        <a
                            href="https://www.youtube.com/@z99natza/videos"
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-emerald-500/20 flex items-center justify-center transition-all border border-transparent hover:border-emerald-500/30"
                        >
                            <img
                                src="/images/social/youtube.svg.webp"
                                alt="TikTok"
                                className="w-5 h-5 object-contain"
                            />
                        </a>
                        
                        <a
                            href="https://www.tiktok.com/@z99natza"
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-emerald-500/20 flex items-center justify-center transition-all border border-transparent hover:border-emerald-500/30"
                        >
                            <img
                                src="/images/social/tiktok.png"
                                alt="TikTok"
                                className="w-5 h-5 object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Sidebar);