import { createBrowserRouter } from "react-router-dom";
import Index from "./Index.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Journey from "./pages/Journey.jsx";
import ChatBot from "./pages/ChatBot.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "chat",
                element: <ChatBot />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "skills",
                element: <Skills />,
            },
            {
                path: "journey",
                element: <Journey />,
            },
            
        ],
    }
]);

export default router;
