// import Link from "next/link";
// import React from "react";
// import { TbArrowBackUp } from "react-icons/tb";
// import Image from "next/image";

// function page() {
//   return (
//     <div>
//       <div className="relative max-w-5xl mx-auto px-8 pb-20">
//         <div className="relative mt-14">
//           <h2 className=" text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-white light:text-black text-3xl">
//             Skills
//           </h2>
//           <Link href={"/"}>
//             <div className=" bg-neutral-700/10 rounded-md absolute -top-2 w-12 h-8 flex items-center justify-center ">
//               <TbArrowBackUp className="dark:text-white light:text-black text-xl" />
//             </div>
//           </Link>
//         </div>

//         <div className="mt-10">
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;

"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";

export default function page() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.1}
          maxSize={0.5}
          speed={0.000001}
          particleDensity={0.00001}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      ffjkjf
    </div>
  );
}
