import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Index from "./Index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "",
                element: <Home />,
            }
        ]
    }
]);

export default router;
