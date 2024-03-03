"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from '../assets/logo.jpeg'
import Image from "next/image";
import img1 from '../assets/img1.png';

import { motion } from "framer-motion";
import Contact from "../components/Contact";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 11,
        ease: "linear",
      },
    },
  },
};

const GithubLink = "https://github.com/ArjunCodess";
const InstagramLink = "https://www.instagram.com/arjuncodess/";
const DevLink = "https://dev.to/arjuncodess";
const TwitterLink = "https://twitter.com/arjuncodess";
const LinkTree = "https://linktr.ee/ArjunCodess";

const PROJECTS = [
  {
    imgLink: img1,
    year: '2024',
    title: "PalettePro: The Color Palette Generator",
    subT: "Upload an image, and it will extract hex color names and generate palettes for your creative projects.",
    liveCode: "https://github.com/ArjunCodess/palettepro",
    liveLink: "https://palettepro.vercel.app/",
  },
];

let BLOGS = [
  {
    date: "Jan 2024",
    title: "14 Things To Check Before Deploying a Website 👨‍💻🔥",
    reactions: "570+ Reactions",
    subTitle:
      "Dropping a website out into the wild web is a big deal, so making sure every last detail is tightened up first is key...",
    link: "https://dev.to/arjuncodess/14-things-to-check-before-deploying-a-website-49ee",
  },
  {
    date: "Jan 2024",
    title: "🌟 The Ultimate Developer's Toolkit 👨‍💻",
    reactions: "294+ Reactions",
    subTitle:
      "I always felt a bit lost when I was starting on my programming journey. It's true — it was a very frustrating experience. Maybe you're feeling a little frustrated, too!...",
    link: "https://dev.to/arjuncodess/the-ultimate-developers-toolkit-4a7f",
  },
  {
    date: "Dec 2023",
    title: "The Top 10 GitHub Repositories Making Waves 🌊📊",
    reactions: "271+ Reactions",
    subTitle:
      "GitHub, the popular online platform for software and web development collaboration, provides helpful tools to optimize processes...",
    link: "https://dev.to/arjuncodess/the-top-10-github-repositories-making-waves-4p1o",
  },
];

function Home() {
  const [show, setShow] = useState(BLOGS[0]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className="max-w-5xl mx-auto px-10">

        <div className="mt-20 lg:mt-32">

          {/* marquee */}
          <div className="marquee relative lg:my-16 my-14 h-10 max-w-6xl overflow-x-hidden">
            <div className=" bg-gradient-to-r absolute z-10 w-20 rounded-md h-9 transition-all ease-in duration-200" />
            <motion.div
              className="track"
              variants={marqueeVariants}
              animate="animate"
            >
              <div className="flex gap-x-5 mt-2 uppercase font-semibold justify-evenly text-base text-neutral-400">
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
                DEVELOPER 👨‍💻 WRITER ✍️ STUDENT 👨‍🎓
              </div>
            </motion.div>
            <div className=" bg-gradient-to-l absolute right-0 z-10 to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
          </div>

          <section className="lg:flex lg:flex-row">

            <div className="lg:w-11/12">
              <div className="flex gap-x-4">
                <Image
                  width={300}
                  height={300}
                  className="w-16 h-16 rounded-full object-cover"
                  src={logo}
                  alt="Profile"
                />
                <div>
                  <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
                    Arjun Vijay Prakash
                  </h2>
                  <Link href="https://twitter.com/harshii04">
                    <span className="text-neutral-500 ">@ArjunCodess</span>
                  </Link>
                </div>
              </div>

              <div className="mt-6 max-w-3xl">
                <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold">
                  About Me
                </h3>
                <p className="dark:text-neutral-300 font-InterMedium text-sm lg:text-lg mt-3">
                  Passionate Talented 14yo Aspiring Full-Stack Developer(MERN), Writer(20K+ Followers) and Student(Grade 8th) by Profession from India 🇮🇳
                </p>

                <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">
                  Achievements
                </h3>
                <div className="dark:text-neutral-300 font-InterMedium mt-3 text-sm lg:text-lg">
                  <ul>
                    <li>👨‍💻 Learnt Full Stack Dev at 14</li>
                    <li>🛠 Made 20+ Projects Using MERN</li>
                    <li>💵 Made my first 140$ w/ Freelancing</li>
                    <li>🌟 Hit 20K+ Followers on Blog</li>
                    <li>⚡️ Listed as the Top Writer on DEV.to</li>
                  </ul>
                </div>

                <div className="flex gap-x-4">
                  <button className="mt-10 w-1/2 border border-neutral-700/30 rounded-md p-2 lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
                    <Link href="https://dev.to/arjuncodess">View Blog</Link>
                  </button>

                  <button className="mt-10 w-1/2 border border-neutral-700/30 rounded-md p-2 lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
                    <Link href="https://github.com/arjuncodess">View Github</Link>
                  </button>
                </div>
              </div>

            </div>

            {/* desktop */}
            <div className="hidden w-1/12 my-10 ml-auto lg:flex justify-center">
              <div>
                <ul className="text-lg wrapper">
                  <Link href={LinkTree} target="_blank" rel="noreferrer">
                    <li className="icon link mt-10">
                      <span>
                        <i className="fas fa-link fa-spin"></i>
                      </span>
                    </li>
                  </Link>

                  <Link href={GithubLink} target="_blank" rel="noreferrer">
                    <li className="icon github my-10">
                      <span>
                        <i className="fab fa-github fa-spin"></i>
                      </span>
                    </li>
                  </Link>

                  <Link href={TwitterLink} target="_blank" rel="noreferrer">
                    <li className="icon twitter">
                      <span>
                        <i className="fab fa-twitter fa-spin"></i>
                      </span>
                    </li>
                  </Link>

                  <Link href={InstagramLink} target="_blank" rel="noreferrer">
                    <li className="icon instagram my-10">
                      <span>
                        <i className="fab fa-instagram fa-spin"></i>
                      </span>
                    </li>
                  </Link>

                  <Link href={DevLink} target="_blank" rel="noreferrer">
                    <li className="icon dev">
                      <span>
                        <i className="fab fa-dev fa-spin"></i>
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* mobile */}
            <div className="mt-12">
              <h3 className="lg:hidden inline-block text-neutral-500 text-xs font-InterBold uppercase font-bold my-10">
                Socials
              </h3>
              <ul className="text-lg wrapper lg:hidden flex flex-row gap-x-10 justify-center">
                <Link href={LinkTree} target="_blank" rel="noreferrer">
                  <li className="icon link">
                    <span>
                      <i className="fas fa-link fa-spin"></i>
                    </span>
                  </li>
                </Link>

                <Link href={GithubLink} target="_blank" rel="noreferrer">
                  <li className="icon github">
                    <span>
                      <i className="fab fa-github fa-spin"></i>
                    </span>
                  </li>
                </Link>

                <Link href={TwitterLink} target="_blank" rel="noreferrer">
                  <li className="icon twitter">
                    <span>
                      <i className="fab fa-twitter fa-spin"></i>
                    </span>
                  </li>
                </Link>

                <Link href={InstagramLink} target="_blank" rel="noreferrer">
                  <li className="icon instagram">
                    <span>
                      <i className="fab fa-instagram fa-spin"></i>
                    </span>
                  </li>
                </Link>

                <Link href={DevLink} target="_blank" rel="noreferrer">
                  <li className="icon dev">
                    <span>
                      <i className="fab fa-dev fa-spin"></i>
                    </span>
                  </li>
                </Link>
              </ul>
            </div>


          </section>

          {/* Marquee text */}

          <div>
            <div className="marquee relative mt-16 h-10 max-w-6xl overflow-x-hidden">
              <div className="bg-gradient-to-r absolute z-10 w-20 rounded-md h-9 transition-all ease-in duration-200" />
              <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
              >
                <div className="flex gap-x-5 mt-2 uppercase font-semibold justify-evenly text-sm text-neutral-700">
                  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
                  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
                  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
                  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
                </div>
              </motion.div>
              <div className=" bg-gradient-to-l absolute right-0 z-10 to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
            </div>
          </div>

          {/* PROJECTS  */}

          <div className="lg:mt-14 mt-12">
            {PROJECTS.map((each, i) => (
              <div key={i}>
                <div className="flex flex-col lg:flex-row gap-x-8 my-6">
                  <div className="h-60 lg:w-1/2 w-full flex justify-center items-center">
                    <Image
                      alt="project"
                      className="rounded-md md:mt-20 lg:mt-0"
                      src={each.imgLink}
                    />
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <div className="w-fit flex items-center gap-x-2">
                      <div className="px-2 py-1 text-xs font-semibold border rounded-full dark:border-neutral-700">
                        <span>{each.year}</span>
                      </div>
                      <div className="flex items-center gap-x-3">
                      </div>
                    </div>

                    <div className="">
                      <h1 className="font-InterBold text-lg max-w-lg mt-4 font-bold">
                        {each.title}
                      </h1>
                      <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                        {each.subT}
                      </p>
                      <div className="flex gap-x-5">
                        <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm text-black hover:tracking-widest transition-all duration-300 hover:font-bold dark:text-neutral-400 font-semibold shadow-md">
                          <Link href={each.liveCode}>View Code</Link>
                        </button>

                        <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm text-black hover:tracking-widest transition-all duration-300 hover:font-bold dark:text-neutral-400 font-semibold shadow-md">
                        <Link href={each.liveLink}>View Live</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Marque texts */}

          <div>
            <div className="marquee my-16 h-10 relative  max-w-6xl overflow-x-hidden">
              <div className=" bg-gradient-to-r absolute z-10  to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
              <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
              >
                <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
                  BLOG ✦ 20K FOLLOWERS SOON ✦ ARTICLES ✦ 200K VIEWS SOON ✦
                  BLOG ✦ 20K FOLLOWERS SOON ✦ ARTICLES ✦ 200K VIEWS SOON ✦
                  BLOG ✦ 20K FOLLOWERS SOON ✦ ARTICLES ✦ 200K VIEWS SOON ✦
                  BLOG ✦ 20K FOLLOWERS SOON ✦ ARTICLES ✦ 200K VIEWS SOON ✦
                  BLOG ✦ 20K FOLLOWERS SOON ✦ ARTICLES ✦ 200K VIEWS SOON ✦
                </div>
              </motion.div>
              <div className=" bg-gradient-to-l absolute right-0 z-10 to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
            </div>
          </div>

          {/* Blog */}

          <div className="max-w-3xl mx-auto">
            <div>
              {BLOGS.map((blog) => (
                <div key={blog.title} className="my-8 p-2 rounded-md">
                  <div className="border border-neutral-700 rounded-full w-fit px-2 p-1 flex items-center">
                    <span className="text-xs text-neutral-700 dark:text-neutral-300">
                      {blog.date}
                    </span>
                  </div>

                  <div className="flex gap-x-4 my-6">
                    <div>
                      <h1 className="font-InterBold font-extrabold lg:text-xl text-lg mb-4">{blog.title}</h1>
                      <Link href={blog.link} className="font-semibold hover:underline">
                        {blog.reactions}
                      </Link>
                    </div>
                  </div>

                  <p className="text-neutral-500 text-lg max-w-3xl">
                    {blog.subTitle}
                  </p>

                  {/* If you want to add a button to view the full blog post */}
                  <Link href={blog.link}>
                    <p className="mt-6 border border-neutral-700/30 rounded-md px-2 py-2 flex justify-between items-center gap-x-2 lg:w-36 bg-neutral-800/20 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-900 transition-colors">
                      <span>Read Article</span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Marque texts */}

          <div>
            <div className="marquee relative my-16 h-10 max-w-6xl overflow-x-hidden">
              <div className=" bg-gradient-to-r absolute z-10 w-20 rounded-md h-9 transition-all ease-in duration-200" />
              <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
              >
                <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
                  ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
                  ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
                  ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
                  ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
                </div>
              </motion.div>
              <div className="bg-gradient-to-l absolute right-0 z-10 to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;