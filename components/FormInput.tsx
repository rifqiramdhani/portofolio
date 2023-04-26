import React from 'react'

interface Props{
    type: string
    label: string,
    id: string,

}

export default function FormInput(props: Props) {
    return (
        <div className="mb-6 group">
            <label htmlFor={props.id} className="text-[#023047] text-xs font-medium group-hover:shadow-text transition-all delay-200">{props.label}</label>
            <input type={props.type} className="w-full border-b border-black group-hover:shadow-text py-2 focus-visible:!outline-none transition-all delay-100" id={props.id} />
        </div>
    )
}
