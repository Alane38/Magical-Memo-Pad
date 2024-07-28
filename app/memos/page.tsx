"use client"

import { useState, useEffect, Suspense } from "react"
import { motion } from "framer-motion"
import Background from "@/components/HomePage/Background"
import Link from "next/link"
import Modal from "@/components/GlobalComponents/Modal"
import { Memo } from "@prisma/client"
import MemoCard from "@/components/HomePage/MemoCard"
import { useSearchParams } from "next/navigation"

// Composant de fallback pour l'indicateur de chargement
function LoadingSpinner() {
  return <div className="absolute bottom-56 top-52 text-center text-4xl">Loading...</div>
}

function MemosList() {
  const [memos, setMemos] = useState<Memo[]>([])

  useEffect(() => {
    const fetchMemos = async () => {
      const response = await fetch("/api/memos")
      const data: Memo[] = await response.json()
      console.log(data)
      setMemos(data)
    }

    fetchMemos()
  }, [])

  return (
    <div className="mt-10 grid  w-auto grid-cols-2 gap-4 overflow-y-scroll p-4 sm:grid-cols-1 md:grid-cols-2 h-[calc(100vh-16rem)]">
      {memos.map((memo, index) => (
        <motion.div
          key={memo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MemoCard {...memo} />
        </motion.div>
      ))}
    </div>
  )
}

function ModalWrapper() {
  const searchParams = useSearchParams()

  const [modalAction, setModalAction] = useState<"createMemo" | "deleteMemo" | "updateMemo">("createMemo")
  const [modalId, setModalId] = useState<string | null>(null)

  useEffect(() => {
    const action = searchParams.get("action")
    const id = searchParams.get("memoId")

    if (action === "createMemo" || action === "deleteMemo" || action === "updateMemo") {
      setModalAction(action)
      setModalId(id)
    } else {
      setModalAction("createMemo")
      setModalId(null)
    }
  }, [searchParams])

  return (
    <>
      {modalAction !== "createMemo" && modalId ? (
        <Modal action={modalAction} id={modalId} />
      ) : modalAction === "createMemo" ? (
        <Modal action={modalAction} />
      ) : null}
    </>
  )
}

export default function Page() {
  return (
    <main className="w-screen overflow-hidden text-black">
      <div className="relative size-full">
        <Background>
          <div className="mt-16 p-4">
            <Link href="?action=createMemo">
              <button type="button" className="rounded-xl bg-darkBlue text-white p-2 transition duration-300 hover:bg-darkBlue/70">
                Create Memo
              </button>
            </Link>
            <Suspense fallback={<LoadingSpinner />}>
              <ModalWrapper />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <MemosList />
            </Suspense>
          </div>
        </Background>
      </div>
    </main>
  )
}
