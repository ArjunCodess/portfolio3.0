import Link from "next/link";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";

import css from "../../assets/css.svg";
import express from "../../assets/express.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html.svg";
import javascript from "../../assets/javascript.svg";
import mongodb from "../../assets/mongodb.svg";
import nextjs from "../../assets/nextjs.svg";
import nodejs from "../../assets/nodejs.svg";
import react from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import typescript from "../../assets/typescript.svg";
import figma from "../../assets/figma.svg";
import bootstrap from "../../assets/bootstrap.svg";
import python from "../../assets/python.svg";
import firebase from "../../assets/firebase.svg";
import npm from "../../assets/npm.svg";
import postman from "../../assets/postman.svg";
import vscode from "../../assets/vscode.svg";

const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Database",
  },
  {
    imageUrl: npm,
    name: "NPM",
    type: "Package Manager",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "API Client",
  },
  {
    imageUrl: vscode,
    name: "Visual Studio Code",
    type: "Code Editor",
  },
];

function page() {
  return (
    <div className="lg:h-screen">
      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h2 className=" text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-white light:text-black text-3xl">
            Skills
          </h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-2 w-12 h-8 flex items-center justify-center ">
              <TbArrowBackUp className="dark:text-white light:text-black text-xl" />
            </div>
          </Link>
        </div>

        <div className="lg:mt-48 md:mt-30">
          <div className="mt-16 flex flex-wrap md:gap-x-16 gap-x-8 gap-y-8 justify-center items-center">
            {skills &&
              skills.map((skill) => (
                <div className="block-container w-20 h-20 bg-white dark:bg-white rounded-xl" key={skill.name}>
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center border border-slate-800">
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;