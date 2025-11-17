import { memo } from "react";

type SidebarOverlayProps = {
    isOpen: boolean;
    closeSidebar: () => void;
};

function SidebarOverlay({ isOpen, closeSidebar }: SidebarOverlayProps) {
    if (!isOpen) return null; // unmount เมื่อปิด
    
    return (
        <div
            onClick={closeSidebar}
            className="
                fixed inset-0 z-40
                bg-black/50
                animate-in fade-in duration-300
            "
        />
    );
}

export default memo(SidebarOverlay);
