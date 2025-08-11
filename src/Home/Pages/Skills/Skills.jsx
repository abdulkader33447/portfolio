import { motion } from "framer-motion";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa6";
import { LiaHtml5 } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiExpress,
  SiAxios,
  SiFirebase,
} from "react-icons/si";

const techIcons = [
  <LiaHtml5
    key="html"
    className="text-orange-500 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <FaCss3Alt
    key="css"
    className="text-blue-500 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <IoLogoJavascript
    key="js"
    className="text-yellow-400 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <SiTailwindcss
    key="tailwind"
    className="text-cyan-400 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <SiDaisyui
    key="daisyui"
    className="text-purple-400 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <FaReact
    key="react"
    className="text-blue-400 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <FaGitAlt
    key="git"
    className="text-orange-600 sm:h-12 h-9 sm:w-12 w-9 border-b shadow-lg rounded-lg p-1"
  />,
  <FaGithub
    key="github"
    className="text-white sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
  <SiMongodb
    key="mongodb"
    className="text-green-500 sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
  <FaNodeJs
    key="node"
    className="text-green-600 sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
  <SiExpress
    key="express"
    className="text-gray-300 sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
  <FaFigma
    key="figma"
    className="text-pink-500 sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
  <SiAxios
    key="axios"
    className="text-blue-500 sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
  <SiFirebase
    key="firebase"
    className="text-yellow-500 sm:h-12 h-9 sm:w-12 w-9 border-t shadow-lg rounded-lg p-1"
  />,
];

const Skills = () => {
  const marqueeSpeed = 30;
  const motionDuration = Math.max(5, 900 / marqueeSpeed);

  const half = Math.ceil(techIcons.length / 2);
  const firstHalf = techIcons.slice(0, half);
  const secondHalf = techIcons.slice(half);

  useEffect(() => {
    console.log(
      `Marquee speed: ${marqueeSpeed}, Motion duration: ${motionDuration}`
    );
  }, [marqueeSpeed, motionDuration]);

  return (
    <div
      id="skills"
      className="lg:mt-30sm:w-8/12 mx-auto text-center lg:mt-40 md:mt-15 mt-15 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25"
    >
      <h1
        data-aos="fade"
        data-aos-duration="3000"
        className="lg:text-5xl md:text-4xl text-2xl font-semibold"
      >
        Skills
      </h1>
      {/* marquee section */}
      <div className="sm:w-8/12 w-11/12 mx-auto sm:mt-15 mt-10">
        <motion.h1
          animate={{
            color: [
              "#ff6900",
              "#2b7fff",
              "#fdc700",
              "#00d3f2",
              "#c27aff",
              "#50a2ff",
              "#f54900",
              "#fff",
              "#00c950",
              "#00a63e",
              "#d1d5dc",
              "#f6339a",
              "#2b7fff",
              "#f0b100",
            ],
          }}
          transition={{
            duration: motionDuration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="sm:mb12 mb-6 sm:text-2xl text-xl font-semibold"
        >
          My Strengths
        </motion.h1>

        <Marquee
          speed={marqueeSpeed}
          gradient={false}
          direction="right"
          // className="mb-6"
        >
          {firstHalf.map((icon, idx) => (
            <div
              key={idx}
              className="xl:mx-17 lg:mx-14 md:mx-10 mx-4 flex items-center"
            >
              {icon}
            </div>
          ))}
        </Marquee>

        <div className="h-[10px] mx-auto bg-gradient-to-r from-transparent via-[#3b4c74] to-transparent"></div>
        <Marquee speed={marqueeSpeed} gradient={false} direction="left">
          {secondHalf.map((icon, idx) => (
            <div
              key={idx}
              className="xl:mx-17 lg:mx-14 md:mx-10 mx-4 flex items-center"
            >
              {icon}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
