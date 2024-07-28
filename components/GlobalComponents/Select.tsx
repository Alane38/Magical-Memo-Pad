import React from "react"

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
}

export default function Select({ ...props }: Props): JSX.Element {
  return (
    <div className="flex flex-col gap-0.5">
      {props.label && (
        <label htmlFor={props.id} className="translate-x-4 text-sm font-light text-white">
          {props.label}
        </label>
      )}
      <select {...props} className={`bg-darkBlue input-shadow stroke-custom rounded-2xl border border-[#08437b] bg-gradient-to-l from-[#004b93] to-[#07498a] px-3.5 py-3 text-sm font-light text-white focus:outline-none ${props.className}`}>
        {props.children}
      </select>
    </div>
  )
}
