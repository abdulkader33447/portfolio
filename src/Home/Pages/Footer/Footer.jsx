import { useContext } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { LenisContext } from "../../../layouts/RootLayout";

const Footer = () => {
  // console.log(logo);

  const lenis = useContext(LenisContext);

  const navbar_height = 140;

  const handleScrollTo = (id) => {
    if (id === "home") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const element = document.getElementById(id);
    if (!element) return;

    const offsetTop = element.offsetTop - navbar_height;

    if (lenis) {
      lenis.scrollTo(offsetTop, { duration: 2 });
    } else {
      element.scrollIntoView({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="sm:w-8/12 w-full mx-auto text-center lg:mt-40 md:mt-30 mt-20 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25">
      <footer className="footer  sm:footer-horizontal text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img
            onClick={() => handleScrollTo("home")}
            src="https://i.ibb.co.com/1JJrHHpM/download.png"
            alt="icon"
            className="size-10 border border-[#3b4c74] rounded-xl cursor-pointer"
          />
          <p>
            Copyright © {new Date().getFullYear()} Abdul Kader - All right
            reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
          <a
            href="https://www.linkedin.com/in/abdul-kader-80a7a5350"
            target="_blank"
            className="border p-2 border-[#1e2a47] hover:text-[#0274b3] rounded-lg transition duration-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100022417866700"
            target="_blank"
            className="border p-2 border-[#1e2a47] hover:text-[#00a2ff] rounded-lg transition duration-700"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://github.com/abdulkader33447"
            target="_blank"
            className="border p-2 border-[#1e2a47] hover:text-[#310413] rounded-lg transition duration-700"
          >
            <FaGithubSquare />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
