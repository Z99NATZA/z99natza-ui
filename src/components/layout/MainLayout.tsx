import { useCallback, useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import SidebarOverlay from "./SidebarOverlay";
import Header from "./Header";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setSidebarOpen((prev) => !prev);
    }, []);

    const closeSidebar = useCallback(() => {
        setSidebarOpen(false);
    }, []);

    return (
        <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[101vh]">
            <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <SidebarOverlay isOpen={sidebarOpen} closeSidebar={closeSidebar} />

            <Header onMenuClick={toggleSidebar} />

            <main className="flex-1 pt-14 md:pt-16 px-4 pb-6">{children}</main>
        </div>
    );
}
