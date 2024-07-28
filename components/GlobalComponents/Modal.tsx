"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import MemoForm from "../Forms/MemoForm"
import { XMark } from "../Icons/XMark"

type Props = {
  action: "createMemo" | "deleteMemo" | "updateMemo"
  id?: string
  children?: React.ReactNode
}

export default function Modal({ ...props }: Props): JSX.Element {
  const searchParams = useSearchParams()
  const modal = searchParams.get("action") === props.action
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(!!modal)

  useEffect(() => {
    if (modal) {
      setIsVisible(true)
    }
  }, [modal])

  const handleClose = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (!isVisible) {
      router.push("/memos")
    }
  }, [isVisible, router])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: "0" }
  }

  return (
    <>
      {isVisible && (
        <motion.div 
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-white bg-opacity-5 backdrop-blur"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="m-auto bg-darkBlue shadow"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center p-2 shadow-lg h-full justify-center">
              <div className="flex justify-between w-full py-2 px-8 items-center">
                <h1 className="text-white text-2xl">{props.action === "createMemo" ? "Create" : props.action === "updateMemo" ? "Update" : "Delete"} Memo</h1>
                <button onClick={handleClose}>
                  <XMark size={20} className="text-white cursor-pointer" />
                </button>
              </div>
              <MemoForm action={props.action} memoId={props.id} />
              {props.children}
              <br />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
