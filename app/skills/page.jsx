import Link from "next/link";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import { SparklesCore } from "../../components/ui/sparkles";

import * as assets from "../../assets";

const skills = [
  {
    imageUrl: assets.html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: assets.css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: assets.javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: assets.typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: assets.react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: assets.nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: assets.tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: assets.bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: assets.nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: assets.express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: assets.python,
    name: "Python",
    type: "Programming",
  },
  {
    imageUrl: assets.git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: assets.github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: assets.firebase,
    name: "Firebase",
    type: "Database",
  },
  {
    imageUrl: assets.mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: assets.figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: assets.npm,
    name: "NPM",
    type: "Package Manager",
  },
  {
    imageUrl: assets.postman,
    name: "Postman",
    type: "API Client",
  },
  {
    imageUrl: assets.vscode,
    name: "Visual Studio Code",
    type: "Code Editor",
  },
];

function page() {
  return (
    <div className="lg:h-screen">
      <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#777"
          />
        </div>
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
                      className="w-1/2 h-1/2 object-contain animate-fade-in"
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