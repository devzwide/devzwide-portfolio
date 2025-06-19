import SideBar from "./components/SideBar.jsx";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <div className="h-screen w-screen max-w-full bg-white flex flex-col overflow-hidden">
            <div className="min-h-full flex flex-col md:flex-row flex-1 items-stretch justify-start gap-4 overflow-hidden">
                <div className="h-full overflow-auto">
                    <SideBar />
                </div>
                <div className="flex-1 w-full h-full overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Index;
