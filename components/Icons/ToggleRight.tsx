import { ComponentPropsWithoutRef } from "react";

export const ToggleRight = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number, className?: string },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 30 15"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path
        d="M22.5 0H7.5C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15H22.5C26.64 15 30 11.64 30 7.5C30 3.36 26.64 0 22.5 0ZM22.5 12C20.01 12 18 9.99 18 7.5C18 5.01 20.01 3 22.5 3C24.99 3 27 5.01 27 7.5C27 9.99 24.99 12 22.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
