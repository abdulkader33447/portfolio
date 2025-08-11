import { FiLink } from "react-icons/fi";
import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-router";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <div className="sm:w-8/12 mx-auto text-center lg:mt-30 md:mt-15 mt-15">
      <div>
        <h1
          data-aos="fade"
          data-aos-duration="3000"
          className="lg:text-7xl md:text-5xl text-3xl font-semibold"
        >
          Hey, This is Abdul Kader
        </h1>
        <p className="lg:mt-10 md:mt-7 mt-5 lg:text-2xl md:text-xl xl:px-40 lg:px-11 px-6">
          I design and build modern, responsive, and user-friendly web
          applications using React, Tailwind CSS, and Node.js.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-10 md:mt-10 mt-8">
        <div data-aos="fade-right" data-aos-duration="1000">
          <Link
            to="#projects"
            onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
            className="btn btn-outline rounded-xl hover:border-[#3b4c74] transition duration-700"
          >
            See Projects
            <MdArrowDownward />
          </Link>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <Link className="sm:flex hidden btn btn-outline rounded-xl hover:border-[#3b4c74] transition duration-700">
            Let’s Connect
            <FiLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
