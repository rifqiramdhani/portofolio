import Image from 'next/image'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { RiShareBoxFill } from 'react-icons/ri'
import { motion } from "framer-motion"


export default function ItemCardSlider({ className }: any) {
    
    const string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro officiis magnam consequatur eius voluptatum, quasi dolor, quae deleniti ut vel reiciendis. Eveniet in reprehenderit adipisci exercitationem, hic consequuntur fugiat excepturi."

    const randomNumber = Math.round(Math.random() * 239)
    const substring = string.substring(0, randomNumber)

    console.log(randomNumber)


    return (
        <motion.div className={`group bg-white mr-8 min-w-[311px] my-11 ml-8 cursor-grab transition-all duration-1000 hover:my-0 hover:min-w-[400px] ${className}`}>
            <Image src="/img/projects/project-1.png" alt="Project 1" width={100} height={100} className="w-full h-[204px] transition-all duration-1000 group-hover:h-[250px]" />

            <div className="px-9 mt-5">
                <h2 className="text-center font-semibold text-base drop-shadow-md transition-all duration-1000 group-hover:text-xl">Car Rental</h2>

                <p className="text-xs text-justify mt-3 transition-all duration-1000 group-hover:text-base min-h-[130px]">{string}</p>

                <div className="flex mt-3">
                    <Image src="/img/laravel.svg" alt="Laravel" width={30} height={30} className="!w-8 mx-1 transition-all duration-1000 group-hover:!w-10" />
                    <Image src="/img/reactjs.svg" alt="React JS" width={30} height={30} className="!w-8 mx-1 transition-all duration-1000 group-hover:!w-10" />
                </div>

                <div className="flex justify-between items-center pt-10 pb-5">
                    <div className="w-1/2">
                        <span className="font-semibold text-base">
                            Code <BsGithub size={15} className='inline ml-2' />
                        </span>
                    </div>
                    <div className="w-1/2">
                        <span className="font-semibold text-base">
                            Live Demo <RiShareBoxFill size={15} className='inline ml-2' />
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
