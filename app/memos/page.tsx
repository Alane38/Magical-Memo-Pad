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
    <div className="mt-10 grid h-screen w-auto grid-cols-2 gap-4 overflow-y-scroll border p-4 sm:grid-cols-1 md:grid-cols-2">
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

export default function Page() {
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
    <main className="w-screen overflow-hidden text-black">
      <div className="relative size-full">
        <Background>
          <div className="mt-16 p-4">
          {modalAction !== "createMemo" && modalId ? (
              <Modal action={modalAction} id={modalId} />
            ) : modalAction === "createMemo" ? (
              <Modal action={modalAction} />
            ) : null}
            <Link href="?action=createMemo">
              <button type="button" className="rounded-full bg-blue-500 p-2 transition duration-300 hover:bg-blue-700">
                Open Modal
              </button>
            </Link>
            <Suspense fallback={<LoadingSpinner />}>
              <MemosList />
            </Suspense>
          </div>
        </Background>
      </div>
    </main>
  )
}
