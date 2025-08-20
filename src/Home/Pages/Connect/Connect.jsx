import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Swal from "sweetalert2";

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
            border:"#3b4c74",
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
    <div
      id="connect"
      data-aos="fade"
      data-aos-duration="1000"
      className="mx-auto text-center lg:mt-40 md:mt-30 mt-20 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25 border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-6 p-4 shadow-md  w-11/12 sm:w-xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <FaEnvelopeOpenText className="size-6 text-blue-400" />
        <h2 className="text-lg font-bold">Contact Me</h2>
      </div>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="input focus:border-none shadow-none focus:shadow-none border-[#3b4c74] focus:outline-[#3b4c74]/50 input-bordered w-full rounded-lg bg-[#1e2a47]"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="input focus:border-none shadow-none focus:shadow-none border-[#3b4c74] focus:outline-[#3b4c74]/50 input-bordered w-full rounded-lg bg-[#1e2a47]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="textarea input focus:border-none shadow-none focus:shadow-none border-[#3b4c74] focus:outline-[#3b4c74]/50 input-bordered w-full rounded-lg bg-[#1e2a47]"
        />
        <button
          type="submit"
          className="button rounded-xl hover:border-[#3b4c74] transition duration-700 sm:text-[16px] text-sm w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Connect;
