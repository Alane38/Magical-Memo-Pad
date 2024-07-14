import { ComponentPropsWithoutRef } from "react";

export const CircleFilledPlus = (
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
        d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM22.5 16.5H16.5V22.5H13.5V16.5H7.5V13.5H13.5V7.5H16.5V13.5H22.5V16.5Z"
        fill="black"
      />
    </svg>
  );
};
