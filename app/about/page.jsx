import Link from "next/link";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import Image from "next/image";
import img from '../../assets/img.jpeg';

function page() {
  return (
    <div>
      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h2 className=" text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-white light:text-black text-3xl">
            About me
          </h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-2 w-12 h-8 flex items-center justify-center ">
              <TbArrowBackUp className="dark:text-white light:text-black text-xl" />
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="font-bold font-InterBlack dark:text-white light:text-black text-lg md:text-xl lg:text-2xl mb-8 text-center lg:mx-40">
            Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳</h2>
          <Image
            width={384}
            height={384}
            className="w-full h-96 rounded-lg object-cover"
            src={img}
            alt=""
          />

          <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold mt-10">
            About Me
          </h3>

          <p className="mb-9 mt-4 text-sm md:text-base lg:text-lg">
            Hello! My name is Arjun Vijay Prakash. I&apos;m a 14 year full stack developer, from India. With 4 years of experience in web development I&apos;ve grown passionate about designing practical websites that cater to my clients needs. Engaging in hackathons and coding contests has enabled me to demonstrate my proficiency in both end and back end development.
          </p>

          <p className="text-sm md:text-base lg:text-lg">
            As a developer I prioritize keeping of the industry trends and technologies. My aim is to craft websites that not boast aesthetics but also deliver an outstanding user experience. If you&apos;re seeking an devoted developer to breathe life into your website your search ends here. I am confident, in my ability to deliver a top notch product that surpasses your expectations.
          </p>

          <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">
            Achievements
          </h3>
          <div className="dark:text-neutral-300 font-InterMedium mt-3 text-sm lg:text-lg light:text-slate-800">
            <ul>
              <li>👨‍💻 Learnt Full Stack Dev at 14</li>
              <li>🛠 Made 20+ Projects Using MERN</li>
              <li>💵 Made my first 140$ w/ Freelancing</li>
              <li>🌟 Hit 20K+ Followers on Blog</li>
              <li>⚡️ Listed as the Top Writer on DEV.to</li>
            </ul>
          </div>

          {/* desktop */}
          <div className="md:text-right md:block hidden">
            <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">
              Personality Traits
            </h3>
            <div className="dark:text-neutral-300 font-InterMedium mt-3 text-sm lg:text-lg light:text-slate-800">
              <ul>
                <li>Self-motivated, driven to achieve my goals 🚀</li>
                <li>Curious and always eager to learn new things 🧠</li>
                <li>Anti-Social, doesn&apos;t enjoy working with others 👤</li>
                <li>Small-circle, small group of like-minded people 🫂</li>
                <li>Open-minded, enjoy hearing different opinions 💬</li>
                <li>Detail-oriented, pay attention to the little things 🤓</li>
              </ul>
            </div>
          </div>

          {/* mobile */}
          <div className="md:text-right block md:hidden">
            <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">
              Personality Traits
            </h3>
            <div className="dark:text-neutral-300 font-InterMedium mt-3 text-sm lg:text-lg light:text-slate-800">
              <ul>
                <li>🚀 Self-motivated</li>
                <li>🧠 Curious</li>
                <li>👤 Anti-Social</li>
                <li>🫂 Small-circle</li>
                <li>💬 Open-minded</li>
                <li>🤓 Detail-oriented</li>
              </ul>
            </div>
          </div>

          <h3 className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">
            Hobbies & Interests
          </h3>
          <div className="dark:text-neutral-300 font-InterMedium mt-3 text-sm lg:text-lg light:text-slate-800">
            <ul>
              <li>📚 Enthusiastic reader of non-fiction and self-help books</li>
              <li>👨🏼‍💻 Love coding and building stuff out of code</li>
              <li>✍️ Consistent writer of general knowledge, practical tips and dev stuff</li>
              <li>🎵 Music lover, compiling and sharing underrated hip-hop songs</li>
              <li>🎨 Exploring the world of visual arts, with a particular interest in sketching</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;