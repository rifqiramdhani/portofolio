import Image from 'next/image'
import React from 'react';

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ItemLogoSlider from './ItemLogoSlider';

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

import CardSlider from './CardSlider'


export default function Project() {
    return (      
        <section id="project">
            <div className="w-full text-black lg:pl-[70px]" >
                <div className="flex items-center justify-end content-end md:flex-wrap">
                    <div className="md:w-full lg:w-3/12 relative">
                        <Image src="/img/cloud.svg" alt="Cloud" width={10} height={10} className="w-[149px] absolute -z-10 md:top-[-9px] md:right-[9rem] lg:top-7 " />
                        <h1 className="font-semibold text-4xl text-center lg:text-left">My Creative Works <span className="text-[#FB8500]">Projects</span></h1>
                        <p className="font-medium text-base text-[#6C757D] mt-12 text-center lg:text-left">
                            I have selected and mentioned here some of my latest projects to share with you.
                        </p>
                    </div>
                    <div className="md:w-full lg:w-9/12 bg-[#023047] overflow-hidden relative" > 
                        <CardSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}
