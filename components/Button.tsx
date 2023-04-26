import React from 'react'

export default function Button({ className, children }: any){
  return (
      <button className={`bg-[#FB8500] font-semibold text-sm px-4 py-1 lg:text-base lg:px-[37px] lg:py-[10px] rounded-lg ${className}`}>{ children }</button>
  )
}
