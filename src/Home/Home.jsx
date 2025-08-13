import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Journey from "./Pages/Journey/Journey";
import Projects from "./Pages/Projects/Projects";
import Hero from "./Pages/Hero/Hero";
import Connect from "./Pages/Connect/Connect";
import Footer from "./Pages/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
