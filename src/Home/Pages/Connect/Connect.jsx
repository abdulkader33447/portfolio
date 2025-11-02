import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdEmail, MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";
import "./connect.css";

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2l0emlt", // EmailJS Service ID
        "template_7sw3wci", // EmailJS Template ID
        form.current,
        "06nLJnE8kPCufXQI7" // EmailJS Public Key
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent.",
            icon: "success",
            background: "rgba(30,42,71,0.8)", // same dark bg with opacity
            border: "#3b4c74",
            color: "#fff", // white text
            backdrop: `rgba(0,0,0,0.4)`, // soft blur effect
            confirmButtonColor: "#3b4c74", // button color match
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Try again.",
            icon: "error",
            background: "rgba(30,42,71,0.8)",
            color: "#fff",
            backdrop: `rgba(0,0,0,0.4)`,
            confirmButtonColor: "#3b4c74",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:px-5 lg:mt-40 md:mt-30 mt-20">
      <h1 className="text-center lg:text-5xl md:text-4xl text-2xl font-semibold">
        <span data-aos="fade" data-aos-duration="1000">
          Let
        </span>
        <span data-aos="fade" data-aos-duration="1500">
          's
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2000">
          Con
        </span>
        <span data-aos="fade" data-aos-duration="2500">
          tact
        </span>
      </h1>
      <p className="text-center lg:mt-15 mt-10 lg:text-2xl md:text-xl xl:px-80 lg:px-11 px-4">
        <span data-aos="fade" data-aos-duration="500">
          Feel free to
        </span>{" "}
        <span data-aos="fade" data-aos-duration="1000">
          reach out — I’m
        </span>
        <span data-aos="fade" data-aos-duration="1500">
          {" "}
          always open to
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2000">
          new opportunities
        </span>{" "}
        <span data-aos="fade" data-aos-duration="2500">
          and collaborations.
        </span>
      </p>
      <div className="lg:mt-15 mt-10 lg:flex block lg:space-y-none space-y-5 items-center justify-center lg:gap-10 gap-5">
        {/* left */}
        <div
          id="connect"
          data-aos="fade"
          data-aos-duration="1000"
          className="sm:mr-0 mx-auto text-center lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25 border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-6 p-4 shadow-md  w-11/12 sm:w-xl space-y-5">
          {/* email */}
          <div className="flex items-center justify-start sm:gap-5 gap-3">
            <span className="bg-[#3b4c74]/50 rounded-full sm:p-2 p-1">
              <MdEmail className="size-7 text-red-400" />
            </span>
            <a
              href="mailto:abdulkader33447@gmail.com"
              target="_blank"
              className="text-blue-400 underline">
              abdulkader33447@gmail.com
            </a>
          </div>

          {/* whatsapp */}
          <div className="flex items-center justify-start gap-5">
            <span className="bg-[#3b4c74]/50 rounded-full sm:p-2 p-1">
              <IoLogoWhatsapp className="size-7 text-[#2ACF49]" />
            </span>
            <a
              href="https://wa.me/8801568096650"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline">
              +8801568096650
            </a>
          </div>

          {/* linkedin */}
          <div className="flex items-center justify-start gap-5">
            <span className="bg-[#3b4c74]/50 rounded-full sm:p-2 p-1">
              <RiLinkedinBoxFill className="size-7 text-[#086BC9]" />
            </span>
            <a
              href="https://www.linkedin.com/in/abdul-kader-80a7a5350"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline">
              Linkedin
            </a>
          </div>
        </div>

        {/* right */}
        <div
          id="connect"
          data-aos="fade"
          data-aos-duration="1000"
          className="sm:ml-0 mx-auto text-center lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25 border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-6 p-4 shadow-md  w-11/12 sm:w-xl">
          <div className="flex items-center gap-2 mb-4">
            <MdMarkEmailUnread className="size-6 text-red-400" />
            <h2 className="text-lg font-bold">Write an email</h2>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="input focus:border-none focus:outline-none focus:ring-2 focus:ring-[#3b4c74] shadow-none focus:shadow-none border-none  w-full rounded-lg bg-[#1e2a47] transition duration-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="input focus:border-none focus:outline-none focus:ring-2 focus:ring-[#3b4c74] shadow-none focus:shadow-none border-none  w-full rounded-lg bg-[#1e2a47] transition duration-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="textarea input focus:border-none focus:outline-none focus:ring-2 focus:ring-[#3b4c74] shadow-none border-none w-full rounded-lg bg-[#1e2a47] transition duration-500 resize-y overflow-auto"
            />

            <button
              type="submit"
              className="button rounded-xl hover:border-[#3b4c74] transition duration-700 sm:text-[16px] text-sm w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
