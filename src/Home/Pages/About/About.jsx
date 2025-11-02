import "aos/dist/aos.css";
import { GiSkills } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdCenterFocusStrong } from "react-icons/md";
import profile from "../../../assets/profile.png";

const About = () => {
  return (
    <div
      id="about"
      className="text-center lg:mt-40 md:mt-30 mt-15 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
        <span data-aos="fade" data-aos-duration="1000">
          ABO
        </span>
        <span data-aos="fade" data-aos-duration="1500">
          UT
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2000">
          ME
        </span>
      </h1>
      <p className="text-center lg:mt-15 mt-10 lg:text-2xl md:text-xl xl:px-80 lg:px-11 px-4">
        <span data-aos="fade" data-aos-duration="500">
          A brief story
        </span>{" "}
        <span data-aos="fade" data-aos-duration="1000">
          of who I am
        </span>
        <span data-aos="fade" data-aos-duration="1500">
          {" "}
          and what drives
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2000">
          me as a
        </span>
        <span data-aos="fade" data-aos-duration="2500">
          developer.
        </span>
      </p>

      {/* grid section */}
      <div className="sm:w-8/12 w-11/12 mx-auto grid xl:grid-cols-3 grid-cols-1 sm:gap-8 gap-5 sm:mt-15 mt-7">
        {/* left box */}
        <div
          data-aos="fade"
          data-aos-duration="1000"
          className="border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-5 p-3 shadow-md text-white">
          <div
            data-aos="fade"
            data-aos-duration="1000"
            className="flex sm:gap-5 gap-3">
            <img
              data-aos="fade"
              data-aos-duration="1500"
              className="sm:size-18 size-12 rounded-full border border-[#4a6197] transition duration-500"
              src={profile}
              alt="image"
            />
            <div
              data-aos="fade"
              data-aos-duration="2000"
              className="flex flex-col text-start justify-center">
              <h1 className="font-bold">Abdul Kader</h1>
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noreferrer">
                abdulkader33447@gmail.com
              </a>
            </div>
          </div>
          <p
            data-aos="fade"
            data-aos-duration="1500"
            className="text-start mt-5">
            A passionate Front-End Developer with over eight months of dedicated
            learning and hands-on practice as a frontend-based MERN stack
            developer. During this journey, I’ve built dynamic, responsive, and
            scalable web applications that prioritize both performance and user
            experience.
          </p>
          <p
            data-aos="fade"
            data-aos-duration="2500"
            className="text-start mt-5">
            I have a strong foundation in React, JavaScript, and modern UI
            frameworks like Tailwind CSS. My development approach blends clean,
            maintainable code with creative design, ensuring every project I
            build is not only functional but also engaging.
          </p>
        </div>

        {/* middle box */}
        <div
          data-aos="fade"
          data-aos-duration="1000"
          className="border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-5 p-3 shadow-md text-white">
          <div data-aos="fade" data-aos-duration="1500">
            <GiSkills
              data-aos="fade"
              data-aos-duration="2000"
              className="size-5 mb-2"
            />
            <div
              data-aos="fade"
              data-aos-duration="2500"
              className="text-start">
              <h1 className="font-bold text-start">Modern Front-End Skills</h1>
              <p>
                Focused on modern front-end development with React, Tailwind
                CSS.
              </p>
            </div>
          </div>
          <hr
            data-aos="fade"
            data-aos-duration="1500"
            className="text-[#3b4c74] sm:my-10 my-5"
          />
          <div data-aos="fade" data-aos-duration="2000">
            <MdCenterFocusStrong className="size-5 mb-2" />
            <div
              data-aos="fade"
              data-aos-duration="2500"
              className="text-start">
              <h1 className="font-bold text-start">Continuous Learner</h1>
              <p>
                Moving forward, I aim to master modern technologies like
                Next.js, Redux, PostgreSQL, Prisma, GraphQL, and Docker
              </p>
            </div>
          </div>
        </div>

        {/* right box */}
        <div
          data-aos="fade"
          data-aos-duration="1000"
          className="border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-5 p-3 shadow-md text-white">
          <div data-aos="fade" data-aos-duration="1500">
            <FaBookOpenReader
              data-aos="fade"
              data-aos-duration="2000"
              className="size-5 mb-2"
            />
            <div
              data-aos="fade"
              data-aos-duration="2000"
              className="text-start">
              <h1 className="font-bold text-start">Interest</h1>
              <p>
                <span data-aos="fade" data-aos-duration="1000">
                  I have a keen interest in reading, with a particular fondness
                  for mystery and thriller genres. Detective stories, in
                  particular, captivate me the most. My passion for this genre
                  began with Rakib Hasan/Shamsuddin Nawab’s "Tin Goyenda"
                </span>
                <span data-aos="fade" data-aos-duration="1500">
                  series, which introduced me to the world of detective fiction.
                  This led me to explore iconic works featuring characters like
                  Sherlock Holmes, Feluda, Satyajit Ray’s Satyanveshi, and{" "}
                </span>
                <span data-aos="fade" data-aos-duration="2000">
                  Sunil Gangopadhyay’s Kakababu. Recently, I have developed an
                  appreciation for audio dramas based on these stories and
                  novels. This interest introduced me to{" "}
                  <a
                    href="https://www.youtube.com/@MirchiBangla"
                    target="_blank"
                    className="text-blue-400 underline">
                    Radio Mirchi Bangla
                  </a>
                  , which delivers these narratives with exceptional
                  storytelling finesse.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
