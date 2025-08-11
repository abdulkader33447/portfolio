import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbaer/Navbar";
import Aos from "aos";
import ScrollToTop from "../Home/ScrollToTp";

const RootLayout = () => {
  useEffect(() => {
    Aos.init({
      //duration: 2000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
    Aos.refresh()
  }, []);

  return (
    <div className="roboto min-h-full w-full bg-[#0f172a] relative text-white lg:pt-30 md:pt-25 pt-20">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 70% 20%, rgba(59,130,246,0.3), transparent)`,
          backgroundAttachment: "fixed",
        }}
      />
      {/* Your Content/Components */}

      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
