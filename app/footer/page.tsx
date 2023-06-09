import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full border-t-2 text-light bg-dark">
      <div className="flex w-full px-32 py-8 justify-between">
        <div className="flex justify-start font-bold">
          <h2>OBALOLUWA OLUSOJI</h2>
        </div>
        <nav className="flex justify-end font-medium">
          <a
            href="https://www.github.com/obah"
            target={"_blank"}
            className="px-3 hover:text-amber-500"
          >
            <FaGithub style={{ fontSize: "35px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/obaloluwa"
            target={"_blank"}
            className="px-3 hover:text-amber-500"
          >
            <FaLinkedin style={{ fontSize: "35px" }} />
          </a>
          <a
            href="https://twitter.com/Oba_Ddev"
            target={"_blank"}
            className="px-3 hover:text-amber-500"
          >
            <FaTwitter style={{ fontSize: "35px" }} />
          </a>
          <a
            href="mailto:obaloluwaolusoji@gmail.com"
            target={"_blank"}
            className="px-3 hover:text-amber-500"
          >
            <FaEnvelope style={{ fontSize: "35px" }} />
          </a>
          <a
            href="https://wa.link/4btbvn"
            target={"_blank"}
            className="px-3 hover:text-amber-500"
          >
            <FaWhatsapp style={{ fontSize: "35px" }} />
          </a>
        </nav>
      </div>
      <div className="flex w-full items-center justify-center">
        <span className="">
          {" "}
          &copy; Copyright {new Date().getFullYear()}. Made by{" "}
          <Link href="/" className="underline underline-offset-2">
            Obaloluwa Olusoji
          </Link>
        </span>
      </div>
    </footer>
  );
}
