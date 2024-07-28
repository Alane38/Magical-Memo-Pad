import React from "react"

export default function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      {...props}
      className={` ${props.className} group rounded-xl text-sm font-thin uppercase text-white shadow-[-3px_-3px_5px_0.45px_rgba(255,255,255,0.10)] hover:shadow-[-3px_-3px_5px_0.45px_rgba(255,255,255,0.15)] focus:outline-none`}
    >
      <div className="stroke-custom from-darkBlue group-hover:from-darkBlue rounded-xl bg-gradient-to-br to-[#155797] px-8 py-2 tracking-widest shadow-[inset_1px_1px_1px_0px_rgba(76,133,187,0.9)] transition-all duration-300 ease-in-out group-hover:-translate-y-0.5  group-hover:translate-x-0.5 group-hover:transform group-hover:bg-gradient-to-tr group-hover:to-[#155797] group-hover:shadow-[inset_1px_1px_1px_0px_#07498f]">
        {props.children}
      </div>
    </button>
  )
}
