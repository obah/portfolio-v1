import AnimatedText from "@/lib/animatedText";
import SkillCard from "@/lib/skillCard";
import React from "react";
import { FaReact, FaNode, FaEthereum } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <div>
        <AnimatedText text="About Me" className="" />
        <p>
          I'm a passionate software engineer, focused on making innovative web
          solutions to meet the business needs of my clients effectively and
          efficiently.
        </p>
        <p>
          With over 2 years experience in web development, I have developed and
          still developing great skill across various Web2 and Web3 technologies
          and I also employ different DevOps techniques when working. You can
          see some of my previous works in the projects section
        </p>
        <p>
          I enjoy working in teams I can meaningful impact to and learn from.
          Feel free to contact me if you have any job opportunities for me or
          you want to collaborate
        </p>
      </div>
      <div>
        <h2>My Skillset</h2>
        <div className="flex items-center justify-evenly">
          <SkillCard
            heading="Frontend dev"
            subheading="React, NextJs"
            content="Experienced in turning web designs to code, using HTML, CSS, JavaScript, TypeScript, React, NextJs"
            logo=<FaReact style={{ fontSize: "30px", color: "orange" }} />
            className=""
          />
          <SkillCard
            heading="Backend dev"
            subheading="Node, MongoDb"
            content="Skilled in creating efficient backends for web applications using Node+Express, MongoDb. I also do CI/CD with Python, Git, AWS"
            logo=<FaNode style={{ fontSize: "30px", color: "orange" }} />
            className=""
          />
          <SkillCard
            heading="Blockchain dev"
            subheading="Ethereum, Solana"
            content="Passionate about the blockchain and experienced in developing smart contracts and DeFi applications on both networks"
            logo=<FaEthereum style={{ fontSize: "30px", color: "orange" }} />
            className=""
          />
        </div>
      </div>
    </section>
  );
}
