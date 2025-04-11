import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AboutMePage from "./routes/AbouteMePage";

export const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/about", element: <AboutMePage />},
    
  ]);