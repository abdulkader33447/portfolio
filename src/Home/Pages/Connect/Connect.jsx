import { IoCall } from "react-icons/io5";
import { PiMailboxFill } from "react-icons/pi";

const Connect = () => {
  return (
    <div
      id="connect"
      className="mx-auto text-center lg:mt-40 md:mt-30 mt-20 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25"
    >
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
        Contact
      </h1>
      <div className="sm:mt-15 mt-7 w-fit mx-auto">
        <div className="border border-[#3b4c74]/50 bg-[#1e2a47]/30 backdrop-blur-lg rounded-2xl sm:p-5 p-3 shadow-md text-xl space-y-3">
          <h1 className="flex items-center gap-3">
            <PiMailboxFill className="text-blue-400 hover:text-cyan-400 transition-colors"/>

            <span> abdulkader33447@gmail.com</span>
          </h1>
          <h1 className="flex items-center gap-3 ">
            <IoCall className="text-blue-400 hover:text-cyan-400 transition-colors"/>
            <span>0133173419</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Connect;
