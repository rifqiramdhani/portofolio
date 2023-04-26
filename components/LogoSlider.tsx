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

export default function LogoSlider() {
    return (
        <OwlCarousel className='owl-theme' loop margin={10} dots={false} autoplay items={9}>
            <ItemLogoSlider src="./img/javascript.svg" alt="Javascript" />
            <ItemLogoSlider src="./img/typescript.svg" alt="Typescript" />
            <ItemLogoSlider src="./img/bootstrap.svg" alt="Bootstrap" />
            <ItemLogoSlider src="./img/nextjs.svg" alt="Next JS" />
            <ItemLogoSlider src="./img/css-3.svg" alt="CSS 3" />
            <ItemLogoSlider src="./img/reactjs.svg" alt="React JS" />
            <ItemLogoSlider src="./img/laravel.svg" alt="Laravel" />
            <ItemLogoSlider src="./img/codeigniter.svg" alt="Codeigniter" />
            <ItemLogoSlider src="./img/tailwind.svg" alt="Tailwind" />
        </OwlCarousel>
    )
}
