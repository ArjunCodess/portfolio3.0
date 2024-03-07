"use client";

import React from "react";
import Link from "next/link";

import { TbArrowBackUp } from "react-icons/tb";

import ProjectCard from '../../components/ProjectCard';

const projectData = [
    {
        title: "tweetera",
        subtitle: "Redesigned 'The Product House' landing page for my take-home assignment! My goal was to create an engaging and informative showcase of their brand.",
        imgLink: "/img/img.jpeg",
        codeLink: "https://github.com/yourusername/project1",
        liveLink: "https://example.com/project1"
    },
    {
        title: "dropbox2.0",
        subtitle: "Designed a solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
        imgLink: "/img/img.jpeg",
        codeLink: "https://github.com/yourusername/project2",
        liveLink: "https://example.com/project2"
    },
    {
        title: "tweetera",
        subtitle: "Redesigned 'The Product House' landing page for my take-home assignment! My goal was to create an engaging and informative showcase of their brand.",
        imgLink: "/img/img.jpeg",
        codeLink: "https://github.com/yourusername/project1",
        liveLink: "https://example.com/project1"
    },
    {
        title: "dropbox2.0",
        subtitle: "Designed a solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
        imgLink: "/img/img.jpeg",
        codeLink: "https://github.com/yourusername/project2",
        liveLink: "https://example.com/project2"
    },
];

export default function page() {
    return (
        <section className="relative max-w-5xl mx-auto px-4 pb-20">
            <div className="relative mt-14">
                <h2 className=" text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-white light:text-black text-3xl">
                    Projects
                </h2>
                <Link href={"/"}>
                    <div className=" bg-neutral-700/10 rounded-md absolute -top-2 w-12 h-8 flex items-center justify-center ">
                        <TbArrowBackUp className="dark:text-white light:text-black text-xl" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        imgLink={project.imgLink}
                        codeLink={project.codeLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>

        </section>
    );
}
