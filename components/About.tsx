import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto pt-8 px-5 md:px-10 lg:px-16 xl:px-0 text-black">

                <div className="flex items-center">
                    <div className="w-6/12">
                        <Image src="./img/about-me.svg" width={100} height={100} alt="Photo about me" className="w-[355.91px] h-[537px] mx-auto" />
                    </div>
                    <div className="w-6/12">
                        <h1 className="font-medium text-2xl">Welcome</h1>
                        <h2 className="font-semibold text-4xl relative">
                            <Image src="./img/cloud.svg" alt="Cloud" width={100} height={100} className="absolute -z-10 left-24"/>
                            About <span className="text-[#FB8500]">Me</span>
                        </h2>

                        <p className="font-normal text-xl text-justify text-[#ADB5BD] mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur similique asperiores, odit quae rerum ut ipsa veritatis ipsum! Possimus magnam sequi tempore temporibus quam consequatur optio dolore iste libero illo.</p>

                        <div className="flex justify-start text-center mt-5">
                            <div className="w-2/12">
                                <p className="font-semibold text-xl">3</p>
                                <p className="text-xl text-[#ADB5BD]">Years</p>
                                <p className="text-xl text-[#ADB5BD]">Experience</p>
                            </div>
                            <div className="w-5/12">
                                <p className="font-semibold text-xl">10+</p>
                                <p className="text-xl text-[#ADB5BD]">Project</p>
                                <p className="text-xl text-[#ADB5BD]">Complete</p>
                            </div>
                        </div>

                        <Button className="text-white mt-11">Download Resume</Button>
                    </div>
                </div>

            </div>
        </section>
    )
}
