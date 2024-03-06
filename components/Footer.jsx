import React from "react";

function Footer() {
  return (
    <>
      <span class="relative flex justify-center mx-36">
        <div
          class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
        ></div>
      </span>
      <div className="py-12 mb-48 lg:mb-28 mt-10 lg:mt-10 text-center light:text-slate-800">
        <p className="dark:text-neutral-50 font-InterBold text-lg font-semibold">
          &quot;The only way to do great work is to love what you do.&quot;
        </p>
        <p className="dark:text-slate-200 light:text-slate-700">- Steve Jobs</p>
      </div>
    </>
  );
}

export default Footer;