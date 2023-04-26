import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import ItemCardSlider from './ItemCardSlider';

export default function LogoSlider() {

    const [width, setWidth] = useState(0)
    const carousel : any = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <motion.div ref={carousel} className="flex cursor-grab" drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }}>
            <ItemCardSlider />
            <ItemCardSlider />
            <ItemCardSlider />
            <ItemCardSlider />
        </motion.div>
    )
}
