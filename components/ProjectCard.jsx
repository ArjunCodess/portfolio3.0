import React from 'react'

import Image from "next/image";
import Link from 'next/link';

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ( { title, subtitle, imgLink, codeLink, liveLink }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-800 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {subtitle}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={imgLink}
                        height="1000"
                        width="1000"
                        className="border border-slate-900 h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-6 md:mt-10">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <Link href={liveLink}>Try now →</Link>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <Link href={codeLink}>View Code →</Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default ProjectCard
