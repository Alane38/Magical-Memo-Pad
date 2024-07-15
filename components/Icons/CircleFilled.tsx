import { ComponentPropsWithoutRef } from "react";

export const CircleFilled = (
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
        d="M15 7.5C10.86 7.5 7.5 10.86 7.5 15C7.5 19.14 10.86 22.5 15 22.5C19.14 22.5 22.5 19.14 22.5 15C22.5 10.86 19.14 7.5 15 7.5ZM15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
        fill="currentColor"
      />
    </svg>
  );
};
