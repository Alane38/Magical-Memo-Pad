import { ComponentPropsWithoutRef } from "react";

export const House = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 30 27"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M12 27V17.4706H18V27H25.5V14.2941H30L15 0L0 14.2941H4.5V27H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
