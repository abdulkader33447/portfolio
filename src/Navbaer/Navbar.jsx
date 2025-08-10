import { useEffect, useState } from "react";
import { GiJourney } from "react-icons/gi";
import { IoHome, IoPerson, IoConstruct, IoRocket } from "react-icons/io5";
import { PiDownloadFill } from "react-icons/pi";
import { Link } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px এর বেশি স্ক্রল হলে bg change
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/skills"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/journey"
        >
          Journey
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda] transition duration-700"
          to="/download"
        >
          Download CV
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 mt-5 sm:w-fit w-[307px] mx-auto border border-[#3b4c74] rounded-2xl transition-colors duration-500 ${
        scrolled ? "bg-[#1e2a47] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar items-center justify-center">
        <div>
          <ul className="flex items-center justify-center gap-5 sm:hidden text-2xl">
            <li>
              <Link to="/">
                <IoHome />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <IoPerson />
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <IoConstruct />
              </Link>
            </li>
            <li>
              <Link to="/journey">
                <IoRocket />
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <GiJourney />
              </Link>
            </li>
            <li>
              <Link to="/download">
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
