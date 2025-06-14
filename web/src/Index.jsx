import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

export default Index;
