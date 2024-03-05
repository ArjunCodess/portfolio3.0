import Link from "next/link";
import React from "react";
import { TbArrowBackUp, TbBrandVscode } from "react-icons/tb";
import {
  SiNotion,
  SiAdobeaftereffects,
  SiFigma,
  SiSpotify,
  SiDiscord,
  SiGooglechrome,
} from "react-icons/si";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="relative max-w-5xl mx-auto px-8 pb-20">
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
          <Image
            width={384}
            height={384}
            className="w-full h-96 rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1709310875357-dd82b6a761c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4 className="my-11 font-InterBold">How it all started</h4>

          <p className="my-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nemo nulla! Facilis dolorum dolore perferendis quia veniam expedita ab fugit. Magni sunt deleniti corrupti, laudantium commodi fuga, eligendi rem ad blanditiis pariatur cupiditate nulla eum quisquam. Quis fuga, ab, necessitatibus suscipit nam doloribus est facilis magnam aut neque, molestias velit asperiores nemo. Pariatur magni voluptate magnam aut et ratione id.
          </p>

          <h4 className="my-10 font-InterBold">What’s to come</h4>

          <p className="my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nemo nulla! Facilis dolorum dolore perferendis quia veniam expedita ab fugit. Magni sunt deleniti corrupti, laudantium commodi fuga, eligendi rem ad blanditiis pariatur cupiditate nulla eum quisquam. Quis fuga, ab, necessitatibus suscipit nam doloribus est facilis magnam aut neque, molestias velit asperiores nemo. Pariatur magni voluptate magnam aut et ratione id.
          </p>

          <h4 className="font-InterBold">My Stack</h4>

          <div className="flex gap-x-8 justify-around  mt-16">
            <SiNotion className="text-2xl" />
            <SiAdobeaftereffects className="text-[#00005F] text-2xl" />
            <SiFigma className="text-[#00BDFD] text-2xl" />
            <SiSpotify className="text-[#00DA4C] text-2xl" />
            <SiDiscord className="text-[#5264FA] text-2xl" />
            <SiGooglechrome className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;