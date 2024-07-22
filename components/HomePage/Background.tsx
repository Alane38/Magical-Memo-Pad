import React from "react"
import { Rectangle } from "../Shapes/Rectangle"
import { RoundedRectangles } from "../Shapes/RoundedRectangles"
import { BasicShape } from "../Shapes/BasicShape"

type Props = {
  children: React.ReactNode
}

export default function Background({ children }: Props): JSX.Element {
  return (
    <>
      <div className="absolute z-20 size-full">
        <h1 className="text-primary p-4 text-start text-3xl font-extrabold">Magic MP</h1>
        <Rectangle className="text-tertiary -translate-x-10 translate-y-[30%]" />
        <RoundedRectangles className="text-quaternary -translate-y-[40%]" />
        <BasicShape className=" text-quaternary -translate-y-[3%]" />
      </div>
      <div className="absolute z-30 size-full">
        {children}
      </div>
    </>
  )
}
