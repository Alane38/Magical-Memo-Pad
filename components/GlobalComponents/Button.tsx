import React from "react"

export default function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      {...props}
      className={`bg-darkBlue ${props.className} rounded-2xl bg-gradient-to-l from-[#155797] uppercase to-[#004b93] px-8 py-1.5 font-light shadow-[-4px_-4px_15px_0.45px_rgba(255,255,255,0.15)]`}
    >
      {props.children}
    </button>
  )
}
