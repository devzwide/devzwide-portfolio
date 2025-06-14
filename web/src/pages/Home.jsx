import SideBar from "../components/SideBar.jsx";
import ChatBot from "./ChatBot.jsx";

const Home = () => {
    return (
        <main className="bg-white flex items-center justify-start gap-4 max-h-screen">
            <SideBar />
            <ChatBot />
        </main>
    );
};

export default Home;
