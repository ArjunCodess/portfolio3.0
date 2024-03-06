import React from "react";
import Link from "next/link"
import Image from 'next/image'

const NotFound = () => {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
          <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 ERROR
          </p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn&apos;t exist.
          </p>

          <div class="flex items-center mt-6 gap-x-3">
            <button class="hover:text-black text-white flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-blue-700 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span><Link href="/">Home</Link></span>
            </button>
          </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <Image
            class="w-full max-w-lg lg:mx-auto"
            src="https://merakiui.com/images/components/illustration.svg"
            alt=""
            height={550}
            width={550}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;