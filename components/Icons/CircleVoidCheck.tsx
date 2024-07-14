import { ComponentPropsWithoutRef } from "react";

export const CircleVoidCheck = (
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
      {...props}
    >
      <path
        d="M21.885 8.37L12 18.255L6.615 12.885L4.5 15L12 22.5L24 10.5L21.885 8.37ZM15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
        fill="black"
      />
    </svg>
  );
};
