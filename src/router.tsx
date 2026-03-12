import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ProjectsPage from "./routes/ProjectsPage";
import MyStack from "./routes/MyStack";
import ProfessionalExperience from "./routes/ProfessionalExperience";
import SocialsPage from "./routes/SocialsPage";
import HomePageEn from "./routes/HomePageEn";
import ProjectsPageEn from "./routes/ProjectsPageEn";
import MyStackEn from "./routes/MyStackEn";
import ProfessionalExperienceEn from "./routes/ProfessionalExperienceEn";
import SocialsPageEn from "./routes/SocialsPageEn";

export const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/projects", element: <ProjectsPage />},
    {path: "/mystack", element: <MyStack />},
    {path: "/professionalxp", element: <ProfessionalExperience />},
    {path: "/socials", element: <SocialsPage />},
    {path: "/en", element: <HomePageEn />},
    {path: "/en/projects", element: <ProjectsPageEn />},
    {path: "/en/mystack", element: <MyStackEn />},
    {path: "/en/professionalxp", element: <ProfessionalExperienceEn />},
    {path: "/en/socials", element: <SocialsPageEn />},
    
  ]);
