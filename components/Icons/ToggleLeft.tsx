import { ComponentPropsWithoutRef } from "react";

export const ToggleLeft = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 30 15"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 0H7.5C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15H22.5C26.64 15 30 11.64 30 7.5C30 3.36 26.64 0 22.5 0ZM7.5 12C5.01 12 3 9.99 3 7.5C3 5.01 5.01 3 7.5 3C9.99 3 12 5.01 12 7.5C12 9.99 9.99 12 7.5 12Z"
        fill="black"
      />
    </svg>
  );
};
