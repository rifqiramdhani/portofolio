import React from 'react'
import Image from 'next/image'
import LogoSlider from './LogoSlider'

export default function Skill() {

    return (
        <section>
            <div className="container mx-auto pt-8 px-5 md:px-10 lg:px-16 xl:px-0 text-black mb-[72px]">
                <div className="text-center relative">
                    <Image src="/img/cloud.svg" alt="Cloud" width={100} height={100} className="w-[138px] absolute -z-10 left-[45rem] md:left-[27rem]" />
                    <h1 className="font-bold text-[28px]">What Can I Do For Your <span className="text-[#FB8500]">Needs?</span></h1>
                </div>


                <div className="my-16">
                    <LogoSlider />
                </div>
                
            </div>
        </section>
    )
}
