import React from 'react';

const Contact = () => {
    return (
        <section className="">
            <div className="py-8 lg:pt-16 mx-auto max-w-screen-md">
                <p className="mb-8 lg:mb-16 font-light text-center light:text-slate-800 dark:text-gray-400 sm:text-xl">Having a project in mind or looking for some chit-chat, I&apos;m always ready!</p>
                <form
                    method="POST"
                    action="https://getform.io/f/ffb58dee-b77e-4202-bda5-1da637ea6f33"
                    className="space-y-8"
                >
                    <div>
                        <label htmlFor="email" className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">Your Email</label>
                        <input type="email" name="email" id="email" className="block p-3 w-full text-sm light:text-gray-900 dark:bg-slate-50 dark:bg-neutral-800/20 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:text-white light:focus:text-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="fullname" className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">Full Name</label>
                        <input type="text" name="fullname" id="fullname" className="block p-3 w-full text-sm light:text-gray-900 dark:bg-slate-50 dark:bg-neutral-800/20 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="text-neutral-500 text-xs font-InterBold uppercase font-bold my-5">Your Message</label>
                        <input name="message" type="text" id="message" rows="6" className="block p-2.5 w-full text-sm light:text-gray-900 dark:bg-slate-50 dark:bg-neutral-800/20 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Can you help me ship this project?..."></input>
                    </div>

                    <button type="submit" className="w-full justify-center gap-x-4 light:text-gray-900 hover:bg-slate-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-white dark:hover:bg-slate-700 me-2 mb-2 light:text-slate-800">
                        Send <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>

                    </button>
                </form>
            </div>
        </section>

    )
}

export default Contact