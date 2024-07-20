import { ComponentPropsWithoutRef } from "react"

export const BasicShape = (props: ComponentPropsWithoutRef<"svg"> & { className?: string }) => {
  return (
    <svg
      //width="1000"
      //height="1000"
      viewBox="0 0 1000 8000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path d="M0 0H1000V8000H0V0Z" fill="currentColor" />
    </svg>
  )
}
