import { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { LenisContext } from "../layouts/RootLayout";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useContext(LenisContext);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
