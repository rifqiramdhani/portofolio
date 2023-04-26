import Image from 'next/image'
import React from 'react'

interface Props {
    src : string,
    alt : string,
    className? : string
}

export default function ItemLogoSlider(props: Props) {
    return (
        <div className="item">
            <Image src={props.src} alt={props.alt} width={100} height={100} className={`!w-20 ${props.className}`} />
        </div>
    )
}
