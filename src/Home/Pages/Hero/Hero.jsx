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
          className="lg:text-8xl md:text-6xl text-[34px] font-semibold"
        >
          <span data-aos="fade" data-aos-duration="500">
            Hey,
          </span>{" "}
          <span data-aos="fade" data-aos-duration="1000">
            This
          </span>{" "}
          <span data-aos="fade" data-aos-duration="1500">
            is
          </span>{" "}
          <span data-aos="fade" data-aos-duration="2000">
            Abdul
          </span>{" "}
          <span data-aos="fade" data-aos-duration="2500">
            Kader
          </span>
        </h1>
        <p
          data-aos="fade"
          data-aos-duration="2500"
          className="lg:mt-10 md:mt-7 mt-5 lg:text-2xl md:text-xl xl:px-40 lg:px-11 px-6"
        >
          <span data-aos="fade" data-aos-duration="1000">
            I design and build modern,
          </span>{" "}
          <span data-aos="fade" data-aos-duration="1500">
            responsive, and user-friendly web
          </span>{" "}
          <span data-aos="fade" data-aos-duration="2000">
            applications using React,
          </span>{" "}
          <span data-aos="fade" data-aos-duration="2500">
            Tailwind CSS, and Node.js.
          </span>
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-10 gap-6 md:mt-10 mt-8">
        <div data-aos="fade" data-aos-duration="1000">
          <Link
            to="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="button rounded-xl hover:border-[#3b4c74] transition duration-700 sm:text-[16px] text-sm"
          >
            <span data-aos="fade" data-aos-duration="2000">
              See
            </span>{" "}
            <span data-aos="fade" data-aos-duration="2500">
              Projects
            </span>
            <span data-aos="fade" data-aos-duration="3000">
              <MdArrowDownward />
            </span>
          </Link>
        </div>
        <div data-aos="fade" data-aos-duration="1000">
          <Link
            to="#connect"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("connect")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="button flex rounded-xl hover:border-[#3b4c74] transition duration-700 sm:text-[16px] text-sm"
          >
            <span data-aos="fade" data-aos-duration="3000">
              Let’s
            </span>{" "}
            <span data-aos="fade" data-aos-duration="2500">
              Contact
            </span>
            <span data-aos="fade" data-aos-duration="2000">
              <FiLink />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
