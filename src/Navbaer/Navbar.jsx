import { GiJourney } from "react-icons/gi";
import { IoHome, IoPerson, IoConstruct, IoRocket } from "react-icons/io5";
import { PiDownloadFill } from "react-icons/pi";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="hover:bg-transparent hover:text-[#aebbda]">Home</Link>
      </li>
      <li>
        <Link className="hover:bg-transparent hover:text-[#aebbda]" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda]"
          to="/skills"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda]"
          to="/projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="hover:bg-transparent hover:text-[#aebbda]"
          to="/journey"
        >
          Journey
        </Link>
      </li>
    </>
  );

  return (
    <div className="sm:w-fit w-[307px] mx-auto border border-[#3b4c74] rounded-2xl ">
      <div className="navbar items-center justify-center">
        <div>
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div> */}
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
            <li>
              <Link className="hover:bg-transparent hover:text-[#aebbda]">
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
