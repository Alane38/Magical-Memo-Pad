import { ComponentPropsWithoutRef } from "react"

export const CircleVoidXMark = (props: ComponentPropsWithoutRef<"svg"> & { size?: number; className?: string }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 30 30"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path
        d="M18.885 9L15 12.885L11.115 9L9 11.115L12.885 15L9 18.885L11.115 21L15 17.115L18.885 21L21 18.885L17.115 15L21 11.115L18.885 9ZM15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27Z"
        fill="currentColor"
      />
    </svg>
  )
}
