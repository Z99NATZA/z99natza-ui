import { memo } from "react";

type HeaderProps = {
    onMenuClick: () => void;
};

function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="p-4 md:p-6 sticky top-0 bg-slate-900/80 backdrop-blur-lg z-30 border-b border-emerald-500/20">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/*Menu Button*/}
                    <button
                        onClick={onMenuClick}
                        className="menu-icon w-6 h-6 flex flex-col justify-between cursor-pointer"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <h1 className="text-xl md:text-2xl font-bold gradient-text">
                        Z99NATZA
                    </h1>
                </div>
                <div className="hidden md:flex gap-6 text-sm">
                    {/*<a
                        href="#about"
                        className="hover:text-emerald-400 transition-colors"
                    >
                        เกี่ยวกับ
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-cyan-400 transition-colors"
                    >
                        ทักษะ
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-emerald-400 transition-colors"
                    >
                        ติดต่อ
                    </a>*/}
                </div>
            </nav>
        </header>
    );
}

export default memo(Header);