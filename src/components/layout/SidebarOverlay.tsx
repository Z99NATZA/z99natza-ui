// import { memo } from "react";

// type SidebarOverlayProps = {
//     isOpen: boolean;
//     closeSidebar: () => void;
// };

// function SidebarOverlay({ isOpen, closeSidebar }: SidebarOverlayProps) {
//     return (
//         <div onClick={closeSidebar} className={`${!isOpen ? 'hidden' : ''} fixed inset-0 bg-black/50 backdrop-blur-sm z-40`}></div>
//     );
// }

// export default memo(SidebarOverlay);


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
