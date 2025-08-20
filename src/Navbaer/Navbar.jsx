import React, { useContext, useState, useEffect } from "react";
import { GiJourney } from "react-icons/gi";
import { IoHome, IoPerson, IoConstruct, IoRocket } from "react-icons/io5";
import { PiDownloadFill } from "react-icons/pi";
import { LenisContext } from "../layouts/RootLayout";
import "aos/dist/aos.css";

const Navbar = () => {
  const lenis = useContext(LenisContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbar_height = 140;

  const handleScrollTo = (id) => {
    if (id === "home") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const element = document.getElementById(id);
    if (!element) return;

    const offsetTop = element.offsetTop - navbar_height;

    if (lenis) {
      lenis.scrollTo(offsetTop, { duration: 2 });
    } else {
      element.scrollIntoView({ top: offsetTop, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "download", label: "View Resume" },
  ];

  const cvLink =
    "https://drive.google.com/file/d/1AjFef6xRfK3gSA64nE72e8UvaHjtczgM/view?usp=sharing";

  return (
    <div
      className={`fixed top-0 left-0 right-0 mt-5 z-50 sm:w-fit w-[307px] mx-auto border border-[#3b4c74] rounded-2xl transition-all duration-500 backdrop-blur-md ${
        scrolled ? "bg-[#1e2a47]/60 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar items-center justify-center">
        <div>
          <ul className="flex items-center justify-center gap-7 sm:hidden text-2xl">
            <li data-aos="fade" data-aos-duration="500">
              <button onClick={() => handleScrollTo("home")}>
                <IoHome />
              </button>
            </li>
            <li data-aos="fade" data-aos-duration="1000">
              <button onClick={() => handleScrollTo("about")}>
                <IoPerson />
              </button>
            </li>
            <li data-aos="fade" data-aos-duration="1500">
              <button onClick={() => handleScrollTo("skills")}>
                <IoConstruct />
              </button>
            </li>
            <li data-aos="fade" data-aos-duration="2000">
              <button onClick={() => handleScrollTo("projects")}>
                <IoRocket />
              </button>
            </li>
            <li data-aos="fade" data-aos-duration="2500">
              <button onClick={() => handleScrollTo("journey")}>
                <GiJourney />
              </button>
            </li>
            <li data-aos="fade" data-aos-duration="3000">
              <button onClick={() => handleScrollTo("download")}>
                <a href={cvLink} target="_blank">
                  <PiDownloadFill />
                </a>
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal lg:space-x-5 md:space-x-3 py-0">
            {navItems.map(({ id, label }, index) => {
              const aosDuration = 500 + index * 500;
              return (
                <li key={id} data-aos="fade" data-aos-duration={aosDuration}>
                  {id === "download" ? (
                    <a
                      href={cvLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
                    >
                      {label}
                    </a>
                  ) : (
                    <button
                      className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
                      onClick={() => handleScrollTo(id)}
                    >
                      {label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
