import { ComponentPropsWithoutRef } from "react"

export const Rectangle = (props: ComponentPropsWithoutRef<"svg"> & {className?: string }) => {
  return (
    <svg
      //width={2133}
      //height={824}
      viewBox={`0 0 2133 824`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path
        d="M-83.627 96.9882C-70.8589 35.812 -13.6034 -5.57621 48.4909 1.48424L1039.4 114.156L2029.92 265.029C2090.99 274.331 2135.25 328.136 2132.59 389.849L2125.73 549.44C2125.42 556.598 2124.48 563.714 2122.91 570.704L2087.47 728.817C2073.9 789.379 2016.7 829.85 1955.07 822.502L960.968 703.964L-24.9738 559.207C-87.0905 550.087 -131.913 494.973 -128.183 432.301L-118.566 270.717C-118.215 264.824 -117.433 258.964 -116.227 253.185L-83.627 96.9882Z"
        fill="currentColor"
      />
    </svg>
  )
}
