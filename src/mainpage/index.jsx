import { Header } from "../components/header";
import { MyProjectsSection } from "../components/sections/myProjects";
import { AboutMeSection } from "../components/sections/aboutMe";
import "./index.css";

export function Mainpage() {
  return (
    <>
      <Header />
      <main>
        <AboutMeSection/>
        <MyProjectsSection/>
      </main>
    </>
  );
}
