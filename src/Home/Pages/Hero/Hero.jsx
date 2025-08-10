import React from "react";
import { FiLink } from "react-icons/fi";
import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="sm:w-8/12 mx-auto text-center lg:mt-25 md:mt-15 mt-10">
      <div>
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-semibold">
          Hey, This is Abdul Kader
        </h1>
        <p className="lg:mt-10 md:mt-7 mt-5 lg:text-3xl md:text-xl">
          I design and build modern, responsive, and user-friendly web
          applications using React, Tailwind CSS, and Node.js.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-10 md:mt-10 mt-8">
        <Link className="btn btn-outline hover:border-[#3b4c74] transition duration-700">
          See Projects
          <MdArrowDownward />
        </Link>
        <Link className="sm:flex hidden btn btn-outline hover:border-[#3b4c74] transition duration-700">
          Let’s Connect
          <FiLink />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
