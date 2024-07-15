import { ComponentPropsWithoutRef } from "react";

export const SquareFilledCheck = (
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
        d="M26.6667 0H3.33333C1.48333 0 0 1.5 0 3.33333V26.6667C0 28.5 1.48333 30 3.33333 30H26.6667C28.5167 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5167 0 26.6667 0ZM11.6667 23.3333L3.33333 15L5.68333 12.65L11.6667 18.6167L24.3167 5.96667L26.6667 8.33333L11.6667 23.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};