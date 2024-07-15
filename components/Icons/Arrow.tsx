import { ComponentPropsWithoutRef } from "react";

export const Arrow = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 41 24"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <g clipPath="url(#clip0_337_87)">
        <path
          d="M27.3506 11H6.8335V13H27.3506V16L34.1668 12L27.3506 8V11Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_337_87">
          <rect width="41" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
