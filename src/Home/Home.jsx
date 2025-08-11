import React from "react";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Journey from "./Pages/Journey/Journey";
import Projects from "./Pages/Projects/Projects";
import Hero from "./Pages/Hero/Hero";
import DownloadCV from "./Pages/DownloadCV/DownloadCV";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Journey />
      <DownloadCV/>
    </div>
  );
};

export default Home;
