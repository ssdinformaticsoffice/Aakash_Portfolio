import { Link } from "react-router-dom";

const NAME = "Akash Verma";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/akash-verma",
  github: "https://github.com/akash-verma",
  stream: "/contact",
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} <Link to="/">{NAME}</Link>
        </p>
        <p>
          Enjoyed your stay? Drop your thoughts at{" "}
          <Link to={SOCIALS.stream} className="under">
            Stream
          </Link>
        </p>
        <div className="socials">
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}