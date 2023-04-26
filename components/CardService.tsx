import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface Props{
    src: string,
    title: string,
    description: string,
    link : string
}

export default function CardService(props: Props) {
  return (
      <div className="text-center mx-5">
          <Image src={props.src} alt={props.title} width={64} height={64} className="w-[64px] h-[64px] mx-auto" />

          <div className="mt-5">
              <h1 className="font-bold text-lg">{props.title}</h1>
              <p className="text-base text-[#A3A3A3] mt-2 mb-5">
                  {props.description}
              </p>
              <a href={props.link} className="text-base font-semibold text-[#212529]">
                  View More <AiOutlineArrowRight className="inline" />
              </a>
          </div>
    </div>
  )
}
