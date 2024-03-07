import React from 'react'
import Image from 'next/image';

import { useAnimate, animate, motion } from "framer-motion";

const Projects = ({ projects }) => {
    return (
        <div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
            {projects.map((each, i) => (
                <div key={i}>
                    <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0, filter: "blur(0px)", x: 0 }}
                            className="h-60 box w-64 "
                        >
                            <Image
                                width={600}
                                height={600}
                                alt={each.subT}
                                className=" h-full w-full md:w-64 object-cover rounded-md"
                                src={each.imgLink}
                            />
                        </motion.div>

                        <div>
                            <div className="w-fit flex items-center gap-x-2 ">
                                <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                                    <span>2022</span>
                                </div>
                                <div className=" flex items-center gap-x-3">
                                </div>
                            </div>

                            <div>
                                <h1 className="font-InterBold text-lg max-w-lg mt-4">
                                    {each.title}
                                </h1>
                                <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                                    {each.subT}
                                </p>

                                <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                                    Read Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
                </div>
            ))}
        </div>
    )
}

export default Projects
