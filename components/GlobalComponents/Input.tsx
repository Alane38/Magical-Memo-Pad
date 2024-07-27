import React from "react"
import { INPUT_STYLE } from "@/constants/style"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export default function Input({ ...props }: Props): JSX.Element {
  return (
    <div className="flex flex-col gap-0.5">
      {props.label && (
        <label htmlFor={props.id} className="translate-x-4 text-sm font-light text-white">
          {props.label}
        </label>
      )}
      <input {...props} className={`${INPUT_STYLE} ${props.className}`} />
    </div>
  )
}
