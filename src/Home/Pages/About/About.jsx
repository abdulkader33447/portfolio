import "aos/dist/aos.css";
import { GiSkills } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="about"
      className="text-center lg:mt-40 md:mt-15 mt-15 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25"
    >
      <h1
        data-aos="fade"
        data-aos-duration="3000"
        className="lg:text-5xl md:text-4xl text-2xl font-semibold"
      >
        About Me
      </h1>

      {/* grid section */}
      <div className="sm:w-8/12 w-11/12 mx-auto grid xl:grid-cols-2 grid-cols-1 sm:gap-8 gap-5 sm:mt-10 mt-7">
        {/* left box */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-5 p-3 shadow-md text-white"
        >
          <div className="flex sm:gap-5 gap-3">
            <img
              className="sm:size-20 size-12 sm:rounded-2xl rounded-xl border border-[#4a6197]"
              src="https://i.ibb.co.com/FTdSmdP/Whats-App-Image-2025-08-11-at-19-09-19-fc10f1e3.jpg"
              alt="image"
            />
            <div className="flex flex-col text-start justify-center">
              <h1 className="font-bold">Abdul Kader</h1>
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                abdulkader33447@gmail.com
              </a>
            </div>
          </div>
          <p className="text-start mt-5">
            a passionate Front-End Developer with over eight months of dedicated
            learning and hands-on practice in the MERN stack. During this
            journey, I’ve built dynamic, responsive, and scalable web
            applications that prioritize both performance and user experience.
          </p>
          <p className="text-start mt-5">
            I have a strong foundation in React, JavaScript, and modern UI
            frameworks like Tailwind CSS. My development approach blends clean,
            maintainable code with creative design, ensuring every project I
            build is not only functional but also engaging.
          </p>
        </div>

        {/* right box */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-5 p-3 shadow-md text-white"
        >
          <div className="">
            <GiSkills className="size-5 mb-2" />
            <div className="text-start">
              <h1 className="font-bold text-start">Modern Front-End Skills</h1>
              <p>
                Focused on modern front-end development with React, Tailwind
                CSS.
              </p>
            </div>
          </div>
          <hr className="text-[#3b4c74] my-5" />
          <div className="">
            <FaBookOpenReader className="size-5 mb-2" />
            <div className="text-start">
              <h1 className="font-bold text-start">Continuous Learner</h1>
              <p>
                Moving forward, I aim to master modern technologies like
                Next.js, Redux, PostgreSQL, Prisma, GraphQL, and Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
