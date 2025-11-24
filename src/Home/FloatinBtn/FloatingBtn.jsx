// import { IoLogoWhatsapp } from "react-icons/io5";
import Lottie from "lottie-react";
import lottieWhatsapp from "../../assets/lotties/whatsapp.json";

const FloatingBtn = () => {
  return (
    <div>

      {/* <a
        href="https://wa.me/8801568096650?text=Hello,%20I%20want%20to%20know%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-500"
      >
        <IoLogoWhatsapp className="sm:text-4xl text-3xl" />
      </a> */}
      
      <a
        href="https://wa.me/8801568096650?text=Hello,%20I%20want%20to%20know%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
      >
        <Lottie
          animationData={lottieWhatsapp}
          loop={true}
          className="w-full h-full"
        />
      </a>
    </div>
  );
};

export default FloatingBtn;
