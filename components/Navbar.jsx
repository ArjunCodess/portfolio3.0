'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  PiHouseThin,
  PiCloudSunLight,
  PiMoonLight,
  PiGithubLogoThin,
  PiTwitterLogoThin,
  PiInstagramLogoThin,
  PiDevToLogoThin,
  PiBrainThin,
  PiPersonSimpleWalkThin,
  PiCodeThin,
} from "react-icons/pi";

import Link from "next/link";

export const generalLinks = [
  {
    href: "/",
    label: "Home",
    Icon: <PiHouseThin />,
  },
  {
    href: "/about",
    label: "About",
    Icon: <PiPersonSimpleWalkThin />,
  },
  {
    href: "/skills",
    label: "Skills",
    Icon: <PiBrainThin />,
  },
  {
    href: "/projects",
    label: "Projects",
    Icon: <PiCodeThin />,
  },
  // {
  //   href: "https://github.com/ArjunCodess",
  //   label: "GitHub",
  //   target: "_blank",
  //   Icon: <PiGithubLogoThin />,
  // },
  // {
  //   href: "https://twitter.com/ArjunCodess",
  //   label: "GitHub",
  //   target: "_blank",
  //   Icon: <PiTwitterLogoThin />,
  // },
  // {
  //   href: "https://dev.com/ArjunCodess",
  //   label: "DEV.to",
  //   target: "_blank",
  //   Icon: <PiDevToLogoThin />,
  // },
  // {
  //   href: "https://instagram.com/ArjunCodess",
  //   label: "Instagram",
  //   target: "_blank",
  //   Icon: <PiInstagramLogoThin />,
  // },
];

function Navbar() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="fixed z-50 flex bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex items-end h-16 gap-2 px-4 pb-1.5 mx-auto outline-0 rounded-2xl box-gen border border-slate-500 backdrop-blur-md dark:ring-[#1a1a1a]">
          {generalLinks.map((link, i) => {
            return (
              <div key={i}>
                <AppIcon
                  href={link.href}
                  rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                  target={link.target}
                  aria-label={link.label}
                  outline={link.outline}
                  mouseX={mouseX}
                  imgs={link.Icon}
                />
              </div>
            );
          })}
          <hr className="h-10 w-[1px] bg-neutral-300 dark:bg-neutral-700 mb-1 border-none" />

          <ThemeToggleNav mouseX={mouseX} />
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;

function AppIcon({ mouseX, imgs, href }) {
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 140, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="z-30 flex items-center justify-center rounded-full border border-neutral-400/20 dark:border-neutral-700 dark:bg-neutral-900/70 cursor-pointer aspect-square "
      >
        <span className="text-3xl">{imgs}</span>
      </motion.div>
    </Link>
  );
}

export function ThemeToggleNav({ mouseX }) {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`z-30 flex items-center justify-center w-10 rounded-full cursor-pointer border border-slate-300 backdrop-blur-md dark:ring-[#1a1a1a] ${resolvedTheme === "dark" ? "bg-neutral-900/70" : "bg-neutral-200/70"} aspect-square py-3 mb-1`}
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      onClick={() => setTheme(otherTheme)}
    >
      {resolvedTheme === "dark" ? (
        <PiMoonLight className="w-6/12 transition stroke-neutral-900 duration-300" />
      ) : (
        <PiCloudSunLight className="w-6/12 transition stroke-neutral-900 duration-300" />
      )}
    </motion.div>
  );
}
