import SideBar from "./components/SideBar.jsx";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <div className="h-screen w-screen max-w-full bg-white flex flex-col overflow-hidden">
            <div className="flex flex-col md:flex-row flex-1 items-stretch justify-start gap-0 md:gap-4 overflow-hidden">
                {/* Sidebar: shrink to fit on mobile, fixed width on desktop */}
                <div className="w-full md:w-auto">
                    <SideBar />
                </div>
                {/* Main content: always fills available space */}
                <div className="flex-1 w-full h-full overflow-auto pt-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Index;