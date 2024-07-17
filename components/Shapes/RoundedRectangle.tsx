import { ComponentPropsWithoutRef } from "react"

export const RoundedRectangle = (props: ComponentPropsWithoutRef<"svg"> & { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1680 739"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path
        d="M1.8179 374.463C-6.45587 312.359 34.5638 255.897 96.2609 244.465L836.138 107.377L1586.17 1.79899C1647.77 -6.87236 1707.56 32.2108 1724.46 92.206L1759.78 217.533C1761.48 223.581 1762.71 229.736 1763.46 235.941L1779.12 366.395C1786.55 428.267 1745.22 483.989 1683.74 494.983L939.982 627.987L195.394 737.462C132.916 746.649 72.1858 706.6 55.9026 645.474L19.9356 510.457L1.8179 374.463Z"
        fill="currentColor"
      />
    </svg>
  )
}
