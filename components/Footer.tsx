import Image from 'next/image'
import React from 'react'
import { SiGmail } from "react-icons/si"
import FormInput from './FormInput'
import Button from './Button'
export default function Footer() {
    return (
        <footer className="bg-[#ADB5BD] px-20 py-14 mt-28">
            <div className="flex justify-center">
                <div className="w-2/5 relative">

                    <Image src="./img/cloud.svg" alt="Cloud" width={10} height={10} className="w-[134px] absolute z-1 top-0 left-[6.25rem]" />

                    <h1 className="font-bold text-[44px] relative z-10">Let&apos;s <span className="text-[#FB8500]">Work</span> Together</h1>
                    <h2 className="font-bold text-[28px] relative z-10">Get in touch with me</h2>

                    <div className="flex space-x-[12px]">
                        <span className="bg-[#FB8500] p-1 rounded">
                            <SiGmail size={30} />
                        </span>
                        <span className="bg-[#FB8500] p-1 rounded">
                            <SiGmail size={30} />
                        </span>
                    </div>
                </div>
                <div className="w-3/5 bg-white shadow-md rounded px-16 py-5 text-black">
                    <div className="font-bold text-base">
                        <Image src={"/img/gmail.svg"} alt='Gmail' width={30} height={30} className='inline mr-3'/>

                        Send Email
                    </div>

                    <form action="#" className="mt-6">
                        <FormInput type="text" label="Full Name" id="fullname"  />
                        <FormInput type="email" label="Full Name" id="email"  />
                        <FormInput type="text" label="Subject" id="subject"  />
                        <FormInput type="text" label="Message" id="message"  />

                        <div className="text-right">
                            <Button className="text-white !px-[136px]">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
