import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbaer/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

export const LenisContext = createContext(null);

const RootLayout = () => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    Aos.init({ once: true });
    Aos.refresh();

    const lenisInstance = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 0.1,
    });

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <div className="roboto  min-h-full w-full bg-[#0f172a] relative text-white lg:pt-30 md:pt-25 pt-20">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle 500px at 70% 10%, rgba(59,130,246,0.3), transparent)",
            backgroundAttachment: "fixed",
          }}
        />

        <Navbar />
        <Outlet />
      </div>
    </LenisContext.Provider>
  );
};

export default RootLayout;
