import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail } from "lucide-react";

const NAME = "Akash Verma";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/akashverma7054",
  github: "https://github.com/akashverma7054",
  insta: "https://www.instagram.com/a.kash.verma_?stkn=OWhzYXk4OHY0YnJu",
  x: "https://x.com/",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=ssdinformatics.dir@gmail.com",
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()}{" "}
          <Link to="/">{NAME}</Link>
        </p>

        {/* Social Icons */}
        <div className="socials flex items-center gap-3">

          {/* LinkedIn */}
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaLinkedinIn size={17} />
          </a>

          {/* GitHub */}
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaGithub size={18} />
          </a>

          {/* Instagram */}
          <a
            href={SOCIALS.insta}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaInstagram size={18} />
          </a>

          {/* X / Twitter */}
          <a
            href={SOCIALS.x}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            title="X"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaXTwitter size={17} />
          </a>

          {/* Email */}
          <a
            href={SOCIALS.gmail}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            title="Email"
            className="
    flex h-9 w-9
    items-center justify-center
    rounded-full
    transition-all
    duration-300
    hover:-translate-y-1
  "
          >
            <Mail size={17} />
          </a>


        </div>
      </div>
    </footer>
  );
}