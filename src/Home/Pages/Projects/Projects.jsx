import "aos/dist/aos.css";
import { FaGithub, FaReact } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import {
  SiDaisyui,
  SiDotenv,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import imgOne from "../../../assets/earnly-1f981.web.app_ (1).png";
import imgTwo from "../../../assets/artifacts-vault.web.app_.png";
import imgThree from "../../../assets/hobby-hub-app.web.app_.png";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div
      id="projects"
      className="lg:mt-30sm:w-8/12 mx-auto text-center lg:mt-40 md:mt-30 mt-20 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25"
    >
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
        <span data-aos="fade" data-aos-duration="1000">
          MY
        </span>{" "}
        <span data-aos="fade" data-aos-duration="1500">
          WORKS
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2000">
          AFTER
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2500">
          THE
        </span>{" "}
        <span data-aos="fade" data-aos-duration="3000">
          CODE
        </span>
      </h1>
      <p className="lg:mt-15 mt-10 lg:text-2xl md:text-xl xl:px-80 lg:px-11 px-4">
        <span data-aos="fade" data-aos-duration="500">
          A space where countless hours of
        </span>{" "}
        <span data-aos="fade" data-aos-duration="1000">
          dedication and creativity come
        </span>
        <span data-aos="fade" data-aos-duration="1500">
          {" "}
          together, turning days and nights
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2000">
          into a continuous journey of building,
        </span>
        <span data-aos="fade" data-aos-duration="2500">
          learning, and refining my craft.
        </span>
      </p>

      {/* card container */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:w-8/12 md:w-10/12 w-11/12 mx-auto lg:mt-15 mt-10">
        {/* card one */}
        <div className="card rounded-2xl bg-[#1e2a47]/50 backdrop-blur-lg border border-[#3b4c74]/50 shadow-sm">
          <figure>
            <img src={imgOne} alt="Earnly" />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-lg text-sm justify-between">
              <span data-aos="fade" data-aos-duration="1000">
                Earnly
              </span>

              {/* Live + GitHub links group */}
              <div className="flex items-center gap-2">
                <a
                  data-aos="fade"
                  data-aos-duration="2000"
                  href="https://earnly-1f981.web.app/"
                  target="_blank"
                  className="text-sm flex items-center gap-2 sm:ml-5 ml-1"
                >
                  Live <LuArrowUpRight />
                </a>
                <a
                  data-aos="fade"
                  data-aos-duration="2500"
                  href="https://github.com/abdulkader33447/a10-hobby-hub-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Client Repo"
                  className="flex items-center gap-2 text-sm"
                >
                  <FaGithub className="sm:h-5 h-4 sm:w-5 w-4" />{" "}
                  <span>Client</span>
                </a>
                <a
                  data-aos="fade"
                  data-aos-duration="3000"
                  href="https://github.com/abdulkader33447/a10-hobby-hub-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Server Repo"
                  className="flex items-center gap-2 text-sm"
                >
                  <FaGithub className="sm:h-5 h-4 sm:w-5 w-4" />{" "}
                  <span>Server</span>
                </a>
              </div>
            </h2>
            <p data-aos="fade" data-aos-duration="2500" className="text-start">
              Earnly is a full-featured micro-task and earning platform. It
              enables workers to earn coins by completing small tasks and allows
              buyers to create and manage paid tasks. An admin panel ensures
              smooth moderation of the system.
            </p>
            <div className="card-actions justify-between sm:mt-5 mt-3">
              <a
                data-aos="fade"
                data-aos-duration="500"
                href="https://react.dev/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "0s" }}
              >
                <FaReact
                  key="react"
                  className="text-blue-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>

              <a
                data-aos="fade"
                data-aos-duration="1000"
                href="https://tailwindcss.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "0.5s" }}
              >
                <SiTailwindcss
                  key="tailwind"
                  className="text-cyan-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>

              <a
                data-aos="fade"
                data-aos-duration="1500"
                href="https://daisyui.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "1s" }}
              >
                <SiDaisyui
                  key="daisyui"
                  className="text-purple-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>

              <a
                data-aos="fade"
                data-aos-duration="2000"
                href="https://firebase.google.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "1.5s" }}
              >
                <SiFirebase
                  key="firebase"
                  className="text-yellow-500 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>

              <a
                data-aos="fade"
                data-aos-duration="2500"
                href="https://expressjs.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "2s" }}
              >
                <SiExpress
                  key="express"
                  className="text-gray-300 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>

              <a
                data-aos="fade"
                data-aos-duration="3000"
                href="https://www.mongodb.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "2.5s" }}
              >
                <SiMongodb
                  key="mongodb"
                  className="text-green-500 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* card two */}
        <div className="card rounded-2xl bg-[#1e2a47]/50 backdrop-blur-lg border border-[#3b4c74]/50 shadow-sm">
          <figure>
            <img src={imgTwo} alt="Artifacts Vault" />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-lg text-sm justify-between">
              <span data-aos="fade" data-aos-duration="1000">
                Artifacts Vault
              </span>

              {/* Live + GitHub links group */}
              <div className="flex items-center gap-2">
                <a
                  data-aos="fade"
                  data-aos-duration="2000"
                  href="https://artifacts-vault.web.app/"
                  target="_blank"
                  className="text-sm flex items-center gap-2 sm:ml-5 ml-1"
                >
                  Live <LuArrowUpRight />
                </a>
                <a
                  data-aos="fade"
                  data-aos-duration="2500"
                  href="https://github.com/abdulkader33447/my-artifact-vault-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Client Repo"
                  className="flex items-center gap-2 text-sm"
                >
                  <FaGithub className="sm:h-5 h-4 sm:w-5 w-4" />{" "}
                  <span>Client</span>
                </a>
                <a
                  data-aos="fade"
                  data-aos-duration="3000"
                  href="https://github.com/abdulkader33447/my-artifact-vault-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Server Repo"
                  className="flex items-center gap-2 text-sm"
                >
                  <FaGithub className="sm:h-5 h-4 sm:w-5 w-4" />{" "}
                  <span>Server</span>
                </a>
              </div>
            </h2>
            <p data-aos="fade" data-aos-duration="2500" className="text-start">
              A full-stack web application that allows users to browse, add,
              like, and manage historical artifacts like the Rosetta Stone,
              Antikythera Mechanism, and more.
            </p>
            <div className="card-actions justify-between sm:mt-5 mt-3">
              <a
                data-aos="fade"
                data-aos-duration="500"
                href="https://react.dev/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "0s" }}
              >
                <FaReact
                  key="react"
                  className="text-blue-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="1000"
                href="https://tailwindcss.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "0.5s" }}
              >
                <SiTailwindcss
                  key="tailwind"
                  className="text-cyan-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="1500"
                href="https://sweetalert2.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="float-chain"
                style={{ animationDelay: "1s" }}
              >
                <div
                  className="xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1 flex items-center justify-center"
                  style={{ backgroundColor: "#A5DC86" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    className="sm:h-8 h-6 sm:w-8 w-6"
                  >
                    <path d="M256 48l40.2 122.8h129.2l-104.6 76.1L360 369.2 256 293.8l-104 75.4 39.2-122.4L86.6 170.8h129.2z" />
                  </svg>
                </div>
              </a>
              <a
                data-aos="fade"
                data-aos-duration="2000"
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="float-chain"
                style={{ animationDelay: "1.5s" }}
              >
                <SiFramer
                  key="framer-motion"
                  style={{ color: "#0055FF" }}
                  className="xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="2500"
                href="https://www.mongodb.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "2s" }}
              >
                <SiMongodb
                  key="mongodb"
                  className="text-green-500 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="3000"
                href="https://github.com/motdotla/dotenv"
                target="_blank"
                rel="noopener noreferrer"
                className="float-chain"
                style={{ color: "#ECD53F", animationDelay: "2.5s" }}
              >
                <SiDotenv
                  key="dotenv"
                  className="xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* card three */}
        <div className="card rounded-2xl bg-[#1e2a47]/50 backdrop-blur-lg border border-[#3b4c74]/50 shadow-sm">
          <figure>
            <img src={imgThree} alt="Hobby Hub" />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-lg text-sm justify-between">
              <span data-aos="fade" data-aos-duration="1000">
                Hobby Hub
              </span>

              {/* Live + GitHub links group */}
              <div className="flex items-center gap-2">
                <a
                  data-aos="fade"
                  data-aos-duration="2000"
                  href="https://hobby-hub-app.web.app/"
                  target="_blank"
                  className="text-sm flex items-center gap-2 sm:ml-5 ml-1"
                >
                  Live <LuArrowUpRight />
                </a>
                <a
                  data-aos="fade"
                  data-aos-duration="2500"
                  href="https://github.com/abdulkader33447/a10-hobby-hub-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Client Repo"
                  className="flex items-center gap-2 text-sm"
                >
                  <FaGithub className="sm:h-5 h-4 sm:w-5 w-4" />{" "}
                  <span>Client</span>
                </a>
                <a
                  data-aos="fade"
                  data-aos-duration="3000"
                  href="https://github.com/abdulkader33447/a10-hobby-hub-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Server Repo"
                  className="flex items-center gap-2 text-sm"
                >
                  <FaGithub className="sm:h-5 h-4 sm:w-5 w-4" />{" "}
                  <span>Server</span>
                </a>
              </div>
            </h2>
            <p data-aos="fade" data-aos-duration="2500" className="text-start">
              HobbyHub is a vibrant platform where people can discover, or
              create local hobby-based groups such as book clubs, hiking teams,
              painting circles, and more. It fosters a sense of community
              through shared interests and real-life meetups.
            </p>
            <div className="card-actions justify-between sm:mt-5 mt-3">
              <a
                data-aos="fade"
                data-aos-duration="500"
                href="https://react.dev/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "0s" }}
              >
                <FaReact
                  key="react"
                  className="text-blue-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="1000"
                href="https://tailwindcss.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "0.5s" }}
              >
                <SiTailwindcss
                  key="tailwind"
                  className="text-cyan-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="1500"
                href="https://firebase.google.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "1s" }}
              >
                <SiFirebase
                  key="firebase"
                  className="text-yellow-500 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="2000"
                href="https://daisyui.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "1.5s" }}
              >
                <SiDaisyui
                  key="daisyui"
                  className="text-purple-400 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="2500"
                href="https://www.mongodb.com/"
                target="_blank"
                className="float-chain"
                style={{ animationDelay: "2s" }}
              >
                <SiMongodb
                  key="mongodb"
                  className="text-green-500 xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
              <a
                data-aos="fade"
                data-aos-duration="3000"
                href="https://github.com/motdotla/dotenv"
                target="_blank"
                rel="noopener noreferrer"
                className="float-chain"
                style={{ color: "#ECD53F", animationDelay: "2.5s" }}
              >
                <SiDotenv
                  key="dotenv"
                  className="xl:size-9 lg:size-8 md:size-8 size-8 border rounded-full p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
