import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AboutMePage from "./routes/AbouteMePage";
import ProjectsPage from "./routes/ProjectsPage";
import MyStack from "./routes/MyStack";
import ProfessionalExperience from "./routes/ProfessionalExperience";
import SocialsPage from "./routes/SocialsPage";

export const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/about", element: <AboutMePage />},
    {path: "/projects", element: <ProjectsPage />},
    {path: "/mystack", element: <MyStack />},
    {path: "/professionalxp", element: <ProfessionalExperience />},
    {path: "/socials", element: <SocialsPage />},
    
  ]);