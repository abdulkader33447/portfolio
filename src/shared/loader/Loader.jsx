import Lottie from "lottie-react";
import loaderAnimation from "../../assets/lotties/animation.json";

const Loader = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-[#0f172a] z-[9999]">
      <Lottie animationData={loaderAnimation} loop={true} className="w-40 h-40" />
    </div>
  );
};

export default Loader;
