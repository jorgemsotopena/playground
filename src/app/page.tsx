import Welcome from "../../components/Welcome";
import AboutMe from "../../components/AboutMe";
import Experience from "../../components/Experience";
import TechStack from "../../components/TechStack";
import Education from "../../components/Education";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Welcome/>
        <AboutMe/>
        <Experience/>
        <TechStack/>
        <Education/>
        <Contact/>
      </div>
    </main>
  );
}
