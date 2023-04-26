import Image from 'next/image'
import React from 'react'
import CardService from './CardService'

export default function Service() {
    return (
        <section id="service">
            <div className="container mx-auto pt-8 px-5 md:px-10 lg:px-16 xl:px-0 text-black mt-28">

                <div className="text-center relative">
                    <Image src="./img/cloud.svg" alt="Cloud" width={10} height={10} className="w-[149px] absolute -z-10 right-[29rem] -top-2" />
                    <h1 className="font-semibold text-4xl">My Offered <span className="text-[#FB8500]">Service</span></h1>

                    <p className="font-semibold text-[#A3A3A3] text-xs mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex justify-center items-center mt-14">
                    <div className="w-3/12 pt-3 pb-6 relative overflow-hidden group">
                        <div className="h-full w-full absolute -z-10 bg-[#FDC465] top-[19rem] bottom-0 transition-all duration-1000 group-hover:top-0"></div>
                        <CardService src="./img/laptop.svg" title="Web Development" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="#"  />
                    </div>
                    <div className="w-3/12 pt-3 pb-6 relative overflow-hidden group">
                        <div className="h-full w-full absolute -z-10 bg-[#FDC465] top-[19rem] bottom-0 transition-all duration-1000 group-hover:top-0"></div>
                        <CardService src="./img/handphone.svg" title="App Development" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="#"  />
                    </div>
                    <div className="w-3/12 pt-3 pb-6 relative overflow-hidden group">
                        <div className="h-full w-full absolute -z-10 bg-[#FDC465] top-[19rem] bottom-0 transition-all duration-1000 group-hover:top-0"></div>
                        <CardService src="./img/camera.svg" title="Photography" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="#"  />
                    </div>
                    <div className="w-3/12 pt-3 pb-6 relative overflow-hidden group">
                        <div className="h-full w-full absolute -z-10 bg-[#FDC465] top-[19rem] bottom-0 transition-all duration-1000 group-hover:top-0"></div>
                        <CardService src="./img/copywritting.svg" title="Copywritting" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="#"  />
                    </div>
                </div>
            </div>
        </section>
    )
}
