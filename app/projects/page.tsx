import AnimatedText from "@/lib/animatedText";
import ProjectCard from "@/lib/projectCard";
import React from "react";
import ProjectImg from "../.././public/images/projectImgPlaceholder.jpg";

export default function Projects() {
  return (
    <section>
      <div>
        <AnimatedText text="My Projects" className="" />
      </div>
      <div>
        {/*Interxchange - web3 frontend */}
        <ProjectCard
          projectImg={ProjectImg}
          heading="Interxchange"
          description="Web3 + Frontend - Ethereum"
          className="!w-2/3 !h-[40%]"
        />
      </div>
      <div>
        {/*Finance dashboard - web2 frontend + api */}
        <ProjectCard
          projectImg={ProjectImg}
          heading="Finance Dashboard"
          description="Frontend + APIs"
          className=""
        />
        {/*Ecommerce project-fullstack web2 */}
        <ProjectCard
          projectImg={ProjectImg}
          heading="SportNut Store"
          description="Fullstack - MERN"
          className=""
        />
        {/*Aries project-fullstack web2 */}
        <ProjectCard
          projectImg={ProjectImg}
          heading="Aries Hyperledger Verification"
          description="Web3 Fullstack - Aries Hyperledger ***verify this"
          className=""
        />
        {/*Game-general programming */}
        <ProjectCard
          projectImg={ProjectImg}
          heading="TicTacToe Game"
          description="General programming + Problem solving"
          className=""
        />
      </div>
    </section>
  );
}
