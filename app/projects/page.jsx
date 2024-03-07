"use client";

import React, { useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";

import Link from "next/link";

import Projects from '../../components/Projects';

import image1 from '../../assets/img.jpeg';

const projects = [
    {
        imgLink: {image1},
        title: "Redesigning the landing page for better discoveribility",
        subT: "Redesigned 'The Product House' landing page for my take-home assignment! My goal was to create an engaging and informative showcase of their brand.",
    },
    {
        imgLink: {image1},
        title: "UI/ UX Case Study: Group Food Ordering",
        subT: "Designed an solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
    },
    {
        imgLink: {image1},
        title:
            "UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses",
        subT: "Designed a feature that simplifies local store sales on WhatsApp for businesses..",
    },
    {
        imgLink: {image1},
        title: "Creating Dive platform's Trivia Game",
        subT: "Designed a trivia game to enhance user engagement during sessions on Dive platform.",
    },
];

export default function page() {
    return (
        <div className="relative max-w-5xl mx-auto px-8">
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

            <Projects projects={projects} />
        </div>
    );
}