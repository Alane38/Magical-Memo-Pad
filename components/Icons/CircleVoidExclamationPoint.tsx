import { ComponentPropsWithoutRef } from "react";

export const CircleVoidExclamationPoint = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number, className?: string },
) => {
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
        d="M13.5 19.5H16.5V22.5H13.5V19.5ZM13.5 7.5H16.5V16.5H13.5V7.5ZM14.985 0C6.705 0 0 6.72 0 15C0 23.28 6.705 30 14.985 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 14.985 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
        fill="currentColor"
      />
    </svg>
  );
};