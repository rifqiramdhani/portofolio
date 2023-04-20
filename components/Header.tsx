import React from 'react'
import Button from './Button'
import Navbar from './Navbar'
import Image from 'next/image'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import useWindowDimensions from '@/lib/useWindowDimensions'

export default function Header() {
    const { height, width } = useWindowDimensions();

    return (
        <section className="bg-[#023047] min-h-screen">
            <div className="container mx-auto pt-8 px-5 lg:px-10 md:px-10 xl:px-0">
                {/* Navbar */}
                <Navbar />
                {/* </Navbar */}

                {/* Header */}
                <div className="flex flex-wrap justify-center items-center mt-5 md:mt-16 xl:mt-20">

                    <div className="w-full md:hidden">
                        <Image src="./img/photo-header.svg" width={100} height={100} alt="My picture" className="w-full h-full md:w-3/5 mx-auto" priority={true} />

                        <div className="absolute right-0 top-20">
                            <div className="flex items-center">
                                <div className="w-1/5">

                                    <a href="https://www.facebook.com/rifqi.li.21/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                                        <BsFacebook className="w-[12px] h-[12px] mobile-m:h-[15px] mobile-m:w-[15px] mobile-l:h-[15px] mobile-l:w-[15px] my-3 sm:h-[22px] sm:w-[22px] sm:my-5 lg:w-[22px] lg:h-[22px]" />
                                    </a>

                                    <a href="https://github.com/rifqiramdhani" target="_blank" rel="noopener noreferrer">
                                        <BsGithub className="w-[12px] h-[12px] mobile-m:h-[15px] mobile-m:w-[15px] mobile-l:h-[15px] mobile-l:w-[15px] my-3 sm:h-[22px] sm:w-[22px] sm:my-5 lg:w-[22px] lg:h-[22px]" />
                                    </a>

                                    <a href="https://www.instagram.com/rifqi_li/" target="_blank" rel="noopener noreferrer">
                                        <BsInstagram className="w-[12px] h-[12px] mobile-m:h-[15px] mobile-m:w-[15px] mobile-l:h-[15px] mobile-l:w-[15px] my-3 sm:h-[22px] sm:w-[22px] sm:my-5 lg:w-[22px] lg:h-[22px]" />
                                    </a>

                                    <a href="https://www.linkedin.com/in/rifqi-ramdhani-5b49b1208/" target="_blank" rel="noopener noreferrer">
                                        <BsLinkedin className="w-[12px] h-[12px] mobile-m:h-[15px] mobile-m:w-[15px] mobile-l:h-[15px] mobile-l:w-[15px] my-3 sm:h-[22px] sm:w-[22px] sm:my-5 lg:w-[22px] lg:h-[22px]" />

                                    </a>
                                </div>
                                <div className="w-full">
                                    <p className="text-[0.6rem] font-medium rotate-90 text-center -ml-4 sm:text-sm">Folow <span className="font-bold">Me</span> On</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full md:w-6/12">
                        <Image src="./img/polygon.svg" alt="Image polygon" width={136} height={136} className="w-20 h-20 absolute z-0 top-[61%] mobile-m:top-[69%] mobile-l:top-[76%] sm:top-[109%] lg:w-[136px] lg:h-[136px] lg:left-6 xl:left-10 md:w-[93px] md:h-[93px] md:top-[161px] xl:top-[46%]"/>
                        
                        <div className="relative z-1 top-10">
                            <h1 className="text-xl font-medium xl:text-4xl my-2 sm:text-2xl md:text-2xl lg:text-2xl">Hi, I&apos;m Moch Rifqi Ramdhani</h1>
                            <h2 className="text-2xl font-bold xl:text-6xl text-[#FB8500] my-2 sm:text-3xl md:text-4xl lg:text-4xl">WEB DEVELOPER</h2>
                            <p className="text-xs text-justify xl:text-base my-2 md:text-sm lg:text-base">
                                Building robust web applications with a holistic approach to development, blending creativity and technology to craft exceptional user experiences. Proficient in front-end and back-end languages, delivering efficient solutions that drive results.
                            </p>

                            <Button className="mt-4">Hire Me</Button>
                        </div>

                    </div>

                    <div className="w-6/12 hidden md:block">
                        <div className="flex relavite">

                            <div className="w-full md:w-11/12 lg:w-11/12 xl:w-full">
                                <Image src="./img/photo-header.svg" width={100} height={100} alt="My picture" className="w-full h-full" />
                            </div>

                            <div className="absolute right-0 md:top-24 xl:right-[46px] xl:top-32">
                                <div className="flex items-center">
                                    <div className="w-1/5">
                                        <a href="https://www.facebook.com/rifqi.li.21/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                                            <BsFacebook className="w-[15px] h-[15px] my-10 sm:h-[22px] sm:w-[22px] md:h-[19px] md:w-[19px] sm:my-5 lg:w-[22px] lg:h-[22px] xl:w-30px] xl:h-[30px]" />
                                        </a>

                                        <a href="https://github.com/rifqiramdhani" target="_blank" rel="noopener noreferrer">
                                            <BsGithub className="w-[15px] h-[15px] my-10 sm:h-[22px] sm:w-[22px] md:h-[19px] md:w-[19px] sm:my-5 lg:w-[22px] lg:h-[22px] xl:w-30px] xl:h-[30px]" />
                                        </a>

                                        <a href="https://www.instagram.com/rifqi_li/" target="_blank" rel="noopener noreferrer">
                                            <BsInstagram className="w-[15px] h-[15px] my-10 sm:h-[22px] sm:w-[22px] md:h-[19px] md:w-[19px] sm:my-5 lg:w-[22px] lg:h-[22px] xl:w-30px] xl:h-[30px]" />
                                        </a>

                                        <a href="https://www.linkedin.com/in/rifqi-ramdhani-5b49b1208/" target="_blank" rel="noopener noreferrer">
                                            <BsLinkedin className="w-[15px] h-[15px] my-10 sm:h-[22px] sm:w-[22px] md:h-[19px] md:w-[19px] sm:my-5 lg:w-[22px] lg:h-[22px] xl:w-30px] xl:h-[30px]" />

                                        </a>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm font-medium rotate-90 text-center -ml-4">Folow <span className="font-bold">Me</span> On</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 xl:mt-5 ">
                    <p className="text-sm pb-5 xl:text-lg font-bold">Let’s build quality product in programming and design with my service</p>
                    <p>
                        width: {width} ~ height: {height}
                    </p>
                </div>
                {/* </Header */}

            </div>
        </section>
    )
}
