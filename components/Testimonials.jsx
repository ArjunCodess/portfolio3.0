import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
    {
        id: 1,
        name: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        rating: "4.0",
        designation: "engineer",
    },
    {
        id: 2,
        name: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        rating: "4.0",
        designation: "engineer",
    },
    {
        id: 3,
        name: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        rating: "4.0",
        designation: "engineer",
    },
    {
        id: 4,
        name: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        rating: "4.0",
        designation: "engineer",
    },
];

export default function Testimonials() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-1 sm:px-6 lg:px-8">
                <p className="mb-8 lg:mb-12 font-light text-center light:text-slate-800 dark:text-gray-400 sm:text-xl">Here&apos;s Why You Should Hire Me</p>
                <div className="max-w-5xl mx-auto">
                    <HoverEffect items={projects} className="" />
                </div>
            </div>
        </section>
    )
}