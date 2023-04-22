import React from "react";
import CustomLink from "@/lib/customLink";

export default function Navbar() {
  return (
    <header className="w-full px-32 py-8 font-medium">
      {/**Logo is here */}
      <nav className="w-1/2 inline-flex items-start">
        <div className="flex items-center justify-center mt 2">
          <CustomLink href="/" title="Obaloluwa" className="" />
          {/**You can use a crown as a logo and your name Obaloluwa */}
        </div>
      </nav>

      <nav className="w-1/2 inline-flex items-center justify-evenly">
        <CustomLink href="/" title="Home" className="" />
        <CustomLink href="/about" title="About Me" className="" />
        <CustomLink href="/projects" title="Projects" className="" />
        <CustomLink href="/contact" title="Contact Me" className="" />
      </nav>
    </header>
  );
}
