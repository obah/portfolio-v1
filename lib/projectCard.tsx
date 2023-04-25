import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({
  projectImg,
  heading,
  description,
  className = "",
}: {
  projectImg: StaticImageData;
  heading: string;
  description: string;
  className: string;
}) {
  return (
    <Link
      href="/"
      target={"_blank"}
      className={`flex flex-col items-center text-left w-1/3 h-[20%] border-transparent rounded-lg text-light ${className}`}
    >
      <Image
        src={projectImg}
        alt="project display picture"
        className="w-full h-auto"
      />
      <h4 className="font-bold text-xl">{heading}</h4>
      <p className="font-medium text-lg">{description}</p>
    </Link>
  );
}
