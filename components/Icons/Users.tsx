import { ComponentPropsWithoutRef } from "react";

export const Users = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number, className?: string },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 30 20"
      fill="none"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path
        d="M20.4545 8.18182C22.7182 8.18182 24.5318 6.35455 24.5318 4.09091C24.5318 1.82727 22.7182 0 20.4545 0C18.1909 0 16.3636 1.82727 16.3636 4.09091C16.3636 6.35455 18.1909 8.18182 20.4545 8.18182ZM9.54545 8.18182C11.8091 8.18182 13.6227 6.35455 13.6227 4.09091C13.6227 1.82727 11.8091 0 9.54545 0C7.28182 0 5.45455 1.82727 5.45455 4.09091C5.45455 6.35455 7.28182 8.18182 9.54545 8.18182ZM9.54545 10.9091C6.36818 10.9091 0 12.5045 0 15.6818V19.0909H19.0909V15.6818C19.0909 12.5045 12.7227 10.9091 9.54545 10.9091ZM20.4545 10.9091C20.0591 10.9091 19.6091 10.9364 19.1318 10.9773C20.7136 12.1227 21.8182 13.6636 21.8182 15.6818V19.0909H30V15.6818C30 12.5045 23.6318 10.9091 20.4545 10.9091Z"
        fill="currentColor"
      />
    </svg>
  );
};