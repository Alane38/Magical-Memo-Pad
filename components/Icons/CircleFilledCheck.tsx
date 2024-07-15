import { ComponentPropsWithoutRef } from "react";

export const CircleFilledCheck = (
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
        d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM12 22.5L4.5 15L6.615 12.885L12 18.255L23.385 6.87L25.5 9L12 22.5Z"
        fill="currentColor"
      />
    </svg>
  );
};