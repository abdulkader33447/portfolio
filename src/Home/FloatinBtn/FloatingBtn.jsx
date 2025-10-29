import { IoLogoWhatsapp } from "react-icons/io5";

const FloatingBtn = () => {
  return (
    <div>
      <a
        href="https://wa.me/8801568096650?text=Hello,%20I%20want%20to%20know%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-500"
      >
        <IoLogoWhatsapp className="sm:text-4xl text-3xl" />
      </a>
    </div>
  );
};

export default FloatingBtn;
