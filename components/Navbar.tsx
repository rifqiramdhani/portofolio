import React, { useState } from 'react'

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center">
            <div className="w-6/12 font-bold text-3xl xl:text-4xl">
                Rifqi
            </div>

            <section className="MOBILE-MENU flex lg:hidden w-9/12 justify-end">
                <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                </div>

                <div className={`fixed flex justify-center items-center bg-white z-10 top-0 w-full h-full p-10 lg:hidden transition-all ${isNavOpen ? "right-0" : "-right-full"}`}>
                    <div
                        className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-black">
                        <li className="border-b border-black my-8 uppercase">
                            <a href="#home">Home</a>
                        </li>
                        <li className="border-b border-black my-8 uppercase">
                            <a href="#about">About</a>
                        </li>
                        <li className="border-b border-black my-8 uppercase">
                            <a href="#portofolio">Portofolio</a>
                        </li>
                        <li className="border-b border-black my-8 uppercase">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="w-6/12 hidden lg:block">
                <ul className="flex space-x-20 justify-end">
                    <li className="font-medium text-xl transition duration-500 hover:underline lg:text-lg xl:text-xl"><a href="#home">Home</a></li>
                    <li className="font-medium text-xl transition duration-500 hover:underline lg:text-lg xl:text-xl"><a href="#about">About</a></li>
                    <li className="font-medium text-xl transition duration-500 hover:underline lg:text-lg xl:text-xl"><a href="#portofolio">Portofolio</a></li>
                    <li className="font-medium text-xl transition duration-500 hover:underline lg:text-lg xl:text-xl"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
