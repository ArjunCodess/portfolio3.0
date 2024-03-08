"use client";

import React from "react";
import Link from "next/link";

import { TbArrowBackUp } from "react-icons/tb";

import ProjectCard from '../../components/ProjectCard';

import { SparklesCore } from "../../components/ui/sparkles";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";

const projectData = [
    {
        title: "SortingWiz",
        subtitle: "SortingWiz is a Python and Pygame-based interactive sorting algorithm visualizer. It allows you to see how different sorting algorithms work in real-time by providing a visual representation of the sorting process.",
        imgLink: project1,
        codeLink: "https://github.com/ArjunCodess/algorithm_visualizer_pygame",
        liveLink: "https://github.com/ArjunCodess/algorithm_visualizer_pygame"
    },
    {
        title: "PalettePro",
        subtitle: "PalettePro is a web application built offering users an spontaneous colour palette generation experience. Upload an image, and PalettePro extracts hex colour names, and palettes for creative projects.",
        imgLink: project2,
        codeLink: "https://github.com/ArjunCodess/palettepro",
        liveLink: "https://palettepro.vercel.app/"
    },
    {
        title: "Tweetera",
        subtitle: "Tweetera is a exciting new social media platform that brings people together in real-time conversations. Share your thoughts, connect with friends, and discover trending topics—all in a user-friendly interface.",
        imgLink: project3,
        codeLink: "https://github.com/ArjunCodess/Tweetera",
        liveLink: "https://tweetera.vercel.app/"
    },
    {
        title: "ThinkTankTrivia",
        subtitle: "The React.js Quiz Platform is an interactive online quiz application designed to test and enhance users' knowledge of various web development technologies and programming languages.",
        imgLink: project4,
        codeLink: "https://github.com/ArjunCodess/ThinkTankTrivia",
        liveLink: "https://thinktanktrivia.vercel.app/"
    },
    {
        title: "Dropbox 2.0",
        subtitle: "The Next.js Cloud Storage Platform is an online file storage and sharing application designed to provide users with a seamless and secure experience for managing their digital assets.",
        imgLink: project5,
        codeLink: "https://github.com/ArjunCodess/dropbox-2.0",
        liveLink: "https://dropbox-2-0-arjuncodess.vercel.app/"
    },
    {
        title: "PriceTrackr",
        subtitle: "PriceTrackr is a web application that allows users to track product prices and receive timely notifications about product availability and pricing changes.",
        imgLink: project6,
        codeLink: "https://github.com/ArjunCodess/pricetrackr",
        liveLink: "https://pricetrackr.vercel.app/"
    },
    {
        title: "Memeion",
        subtitle: "Memeion is a dynamic web application that uses Fetch API, Meme API, and Tailwind CSS to create memes. It has a simple user interface that allows users to see memes from popular subreddits with ease.",
        imgLink: project7,
        codeLink: "https://github.com/ArjunCodess/memeion",
        liveLink: "https://memeion.vercel.app/"
    },
    {
        title: "Earth Globe",
        subtitle: "This is an innovative web application presenting a captivating 3D model of the Earth using Three.js and WebGL technologies. Users can navigate and interact with a realistic globe showcasing the powers of the web.",
        imgLink: project8,
        codeLink: "https://github.com/ArjunCodess/earth-globe-threejs",
        liveLink: "https://earth-globe.vercel.app/"
    },
];

export default function page() {
    return (
        <section>
            <div className="w-full absolute inset-0 lg:h-screen">
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

            </div>
        </section>
    );
}
