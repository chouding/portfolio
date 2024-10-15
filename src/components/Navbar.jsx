import uciLogo from "../assets/uciLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-9 items-center">
        <img className="mx-2 w-10" src={uciLogo} alt="logo" />
        <div className="text-m">B.S. in Computer Science at UC Irvine</div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://drive.google.com/file/d/1K6LmzFuYcPK1dFnaM2uHQ9ief94CgdJ4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="transition delay-150 duration-300 ease-in-out hover:text-slate-500"
        >
          <IoDocumentTextSharp />
        </a>
        <a
          href="mailto:raymond.chou523@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition delay-150 duration-300 ease-in-out hover:text-red-400"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/raymondchou523"
          target="_blank"
          rel="noopener noreferrer"
          className="transition delay-150 duration-300 ease-in-out hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/chouding"
          target="_blank"
          rel="noopener noreferrer"
          className="transition delay-150 duration-300 ease-in-out hover:text-slate-400"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
