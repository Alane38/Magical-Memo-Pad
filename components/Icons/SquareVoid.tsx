import { ComponentPropsWithoutRef } from "react";

export const SquareVoid = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 30 30"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M26.6667 3.33333V26.6667H3.33333V3.33333H26.6667ZM26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
