import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Details from "../views/details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/seeMore/:Id",
        element: <Details />
    },
]);