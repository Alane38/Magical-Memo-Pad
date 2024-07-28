"use client"

import React from "react"
import { MagicProperty, Memo } from "@prisma/client"
import { Pencil } from "../Icons/Pencil"
import { Trash } from "../Icons/Trash"
import { Hamburger } from "../Icons/Hamburger"
import { motion } from "framer-motion"
import Link from "next/link"

type magicAnimation = {
  initial?: { opacity?: number, filter?: string },
  whileHover?: { filter?: string, scale?: number, opacity?: number },
  transition?: { duration: number, repeat?: number, repeatType?: "loop" | "reverse" }
  animate?: { backgroundColor?: string[], y?: number[], backgroundImage?: string[], opacity?: number, transition: { duration: number, repeat?: number, repeatType?: "loop" | "reverse" } }
}

export default function MemoCard({ ...props }: Memo): JSX.Element {
  const getMagicAnimation = (): magicAnimation => {
    switch (props.magicProperty) {
      case MagicProperty.COLOR_TRANSFORMATION:
        return {
          animate: {
            backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"],
            transition: { duration: 15, repeat: Infinity, repeatType: "loop" }
          }
        };
      case MagicProperty.FLOATING_ANIMATION:
        return {
          animate: {
            y: [0, -10, 0],
            transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }
        };
      case MagicProperty.SPARKLING_GLITTER:
        return {
          animate: {
            backgroundImage: ["radial-gradient(circle, #fff, #ff99ff)", "radial-gradient(circle, #fff, #99ffff)", "radial-gradient(circle, #fff, #ff99ff)"],
            transition: { duration: 15, repeat: Infinity, repeatType: "loop" }
          }
        };
      case MagicProperty.MYSTIC_GLOW:
        return {
          initial: { filter: "brightness(1)" },
          whileHover: { filter: "brightness(1.2)", scale: 1.02 },
          transition: { duration: 0.2 }
        };
      default:
        return {};
    }
  };

  const isMysticGlow = props.magicProperty === MagicProperty.MYSTIC_GLOW;

  const isInvisibleInk = props.magicProperty === MagicProperty.INVISIBLE_INK;

  return (
    <motion.div
    className={`from-primary to-primary/30 relative my-4 w-auto max-w-xl rounded-3xl transition duration-150 bg-gradient-to-r p-6 shadow-2xl hover:scale-105 hover:shadow-2xl ${isMysticGlow ? 'mystic-glow' : ''} ${isInvisibleInk ? 'text-transparent hover:text-white hover:duration-1000' : 'text-white'}`}
      {...getMagicAnimation()}
    >
      <div className="absolute right-4 bottom-4 flex space-x-2 text-white">
        <Link href={"/memos/" + props.id + "?action=updateMemo"} className="rounded-full bg-green-700 p-2 transition duration-300 hover:bg-green-800">
          <Pencil size={18} />
        </Link>
        <Link href={"/memos/" + props.id} className="rounded-full bg-danger p-2 transition duration-300 bg-red-600 hover:bg-red-700">
          <Trash size={18} />
        </Link>
        <div className="group relative">
          <button className="rounded-full bg-darkGrey p-2 transition duration-300 group-hover:bg-gray-700">
            <Hamburger size={18} />
          </button>
          <div className="pointer-events-none absolute right-0 z-10 mt-2 w-64 rounded-lg bg-lightBlue p-2 text-xs text-black opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            <p>Magical Property: {MagicProperty[props.magicProperty]}</p>
            <p>Created at: {new Date(props.createdAt).toLocaleDateString()}</p>
            <p>Updated at: {new Date(props.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      <div className="mb-4 pr-16">
        <h2 className="border-quaternary border-b-2 pb-2 text-3xl font-extrabold">{props.title}</h2>
      </div>
      <div className="mb-6">
        <p className="text-lg font-medium">{props.content}</p>
      </div>
    </motion.div>
  )
}