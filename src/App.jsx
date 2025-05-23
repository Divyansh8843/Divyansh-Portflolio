import React from "react";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./pages/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Projects/Project";
import BlurBlob from "./BlurBlob";
import Skill from "./pages/Skills/Skill";
const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        className="animate-blob"
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      ></BlurBlob>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-4">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
