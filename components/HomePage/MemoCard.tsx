import React from "react"
import { MagicProperty, Memo } from "@prisma/client"
import { Pencil } from "../Icons/Pencil"
import { Trash } from "../Icons/Trash"
import { Hamburger } from "../Icons/Hamburger"
import { motion } from "framer-motion"
import Link from "next/link"

export default function MemoCard({ ...props }: Memo): JSX.Element {
  const getMagicAnimation = () => {
    switch (props.magicProperty) {
      case MagicProperty.COLOR_TRANSFORMATION:
        return {
          animate: { backgroundColor: ["#ffcc00", "#ff9900", "#ffcc00"] },
          transition: { duration: 5, repeat: Infinity }
        }
      case MagicProperty.FLOATING_ANIMATION:
        return {
          animate: { y: [0, -10, 0] },
          transition: { duration: 2, repeat: Infinity }
        }
      case MagicProperty.SPARKLING_GLITTER:
        return {
          animate: { opacity: [1, 0.8, 1] },
          transition: { duration: 1, repeat: Infinity }
        }
      case MagicProperty.INVISIBLE_INK:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 2 }
        }
      case MagicProperty.MYSTIC_GLOW:
        return {
          animate: { boxShadow: ["0 0 5px #ff00ff", "0 0 15px #ff00ff", "0 0 5px #ff00ff"] },
          transition: { duration: 3, repeat: Infinity }
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className="from-primary to-primary/30 relative my-4 w-auto max-w-xl transform rounded-3xl bg-gradient-to-r p-6 text-white shadow-2xl transition duration-500 hover:scale-105 hover:shadow-2xl"
      {...getMagicAnimation()}
    >
      <div className="absolute right-4 top-4 flex space-x-2">
        <Link href={"/memos/" + props.id + "?action=updateMemo"} className="rounded-full bg-warning p-2 transition duration-300 hover:bg-yellow-700">
          <Pencil size={18} />
        </Link>
        <Link href={"/memos/" + props.id} className="rounded-full bg-danger p-2 transition duration-300 hover:bg-red-700">
          <Trash size={18} />
        </Link>
        <div className="group relative">
          <button className="rounded-full bg-darkGrey p-2 transition duration-300 group-hover:bg-gray-700">
            <Hamburger size={18} />
          </button>
          <div className="pointer-events-none absolute right-0 z-10 mt-2 w-60 rounded-lg bg-white p-2 text-xs text-black opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
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
      {/* <div>
        <p className="text-sm font-light italic">Magic Property: {MagicProperty[props.magicProperty]}</p>
      </div> */}
    </motion.div>
  )
}