import Herosection from "./components/herosection";
import Skills from "./components/skills"
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";

export default function Home() {
  return (
    <>
      <Herosection/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </>
  );
}

