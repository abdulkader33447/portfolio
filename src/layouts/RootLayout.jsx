import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbaer/Navbar";
import Home from "../Home/Home";

const RootLayout = () => {
  return (
    <div className="roboto min-h-screen w-full bg-[#0f172a] relative text-white sm:pt-30 md:pt-25 pt-20">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      {/* Your Content/Components */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
