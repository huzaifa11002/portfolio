import Herosection from "./components/herosection";
import Skills from "./components/skills"
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import Blog from "./components/blog";

export default function Home() {
  return (
    <>
      <Herosection/>
      <About/>
      <Skills/>
      <Work/>
      <Blog/>
      <Contact/>
    </>
  );
}

