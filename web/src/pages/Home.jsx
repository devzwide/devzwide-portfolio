import SideBar from "../components/SideBar.jsx";
import ChatBot from "./ChatBot.jsx";

const Home = () => {
    return (
        <main className="bg-white flex items-center justify-center max-h-screen">
            <SideBar />
            <ChatBot />
        </main>
    );
};

export default Home;
