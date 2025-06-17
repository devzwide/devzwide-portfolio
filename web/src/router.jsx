import { createBrowserRouter } from "react-router-dom";

import Index from "./Index.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import Introduction from "./pages/Introduction.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Journey from "./pages/Journey.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "",
                element: <Introduction />,
            },
            {
                path: "chat",
                element: <ChatBot />,
            },
            {
                path: "about",
                element: <About />,
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
        ]
    },
]);

export default router;
