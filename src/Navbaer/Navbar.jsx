import { useEffect, useState } from "react";
import { GiJourney } from "react-icons/gi";
import { IoHome, IoPerson, IoConstruct, IoRocket } from "react-icons/io5";
import { PiDownloadFill } from "react-icons/pi";
import { Link } from "react-router";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 500, // animation duration in ms
  //     once: true,     // whether animation should happen only once
  //   });
  // }, []);

  const links = (
    <>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="#skills"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("skills")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="#journey"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("journey")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Journey
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="#download"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("download")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Download CV
        </Link>
      </li>
    </>
  );

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className={`fixed top-0 left-0 right-0 mt-5 z-100 sm:w-fit w-[307px] mx-auto border border-[#3b4c74] rounded-2xl transition-all duration-500 backdrop-blur-md ${
        scrolled ? "bg-[#1e2a47]/60 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar items-center justify-center">
        <div>
          <ul className="flex items-center justify-center gap-7 sm:hidden text-2xl">
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <IoHome />
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <IoPerson />
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <IoConstruct />
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <IoRocket />
              </Link>
            </li>
            <li>
              <Link
                to="#journey"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("journey")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <GiJourney />
              </Link>
            </li>
            <li>
              <Link
                to="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("download")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <PiDownloadFill />
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal lg:space-x-5 md:space-x-3 py-0">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
