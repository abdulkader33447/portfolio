import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sm:w-8/12 w-full mx-auto text-center lg:mt-40 md:mt-30 mt-20 lg:scroll-mt-40 md:scroll-mt-35 scroll-mt-25">
      <footer className="footer  sm:footer-horizontal text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img
            src="../../../../public/download.png"
            alt="icon"
            className="size-10 border border-[#3b4c74] rounded-xl"
          />
          <p>
            Copyright © {new Date().getFullYear()} Abdul Kader - All right
            reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
          <a href="https://www.linkedin.com/in/abdul-kader-80a7a5350" target="_blank" className="border p-2 border-[#1e2a47] rounded-lg">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100022417866700" target="_blank" className="border p-2 border-[#1e2a47] rounded-lg">
            <FaFacebookSquare />
          </a>
          <a href="https://github.com/abdulkader33447" target="_blank" className="border p-2 border-[#1e2a47] rounded-lg">
            <FaGithubSquare />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
