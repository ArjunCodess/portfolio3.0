import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
    {
        id: 1,
        name: "Spandan",
        description:
            "Your recent posts on dev.to have reignited my interest in the platform and provided valuable learning experiences. Despite concerns about declining content quality, your contributions have restored my faith in thinking that still there are some people who write valuable content. Keep up the great work!",
        designation: "Student",
    },
    // {
    //     id: 2,
    //     name: "",
    //     description:
    //         "",
    //     designation: "",
    // },
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