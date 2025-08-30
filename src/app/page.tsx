import Welcome from "../../components/Welcome";
import AboutMe from "../../components/AboutMe";
import Experience from "../../components/Experience";
import TechStack from "../../components/TechStack";
import Education from "../../components/Education";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto w-full max-w-3xl px-4">
        
        <Welcome/>
        <AboutMe/>
        <section>
          <div >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Experience/>
              </div>
              <div>
                <TechStack/>
              </div>
            </div>
          </div>
        </section>
        
        <Education/>
        <Contact/>
      </div>
    </main>
  );
}
