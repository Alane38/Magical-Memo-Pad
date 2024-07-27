"use client"

import { useState, useEffect } from "react"
import Background from "@/components/HomePage/Background"
import Link from "next/link"
import Modal from "@/components/GlobalComponents/Modal"
import { Memo } from "@prisma/client"

export default function Page() {
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
    <main className="w-screen overflow-hidden text-black">
      <div className="relative size-full">
        <Background>
          <div className="mt-16 p-4">
            <Modal action="createMemo" />
            <Link href="?createMemo=true">
              <button type="button" className="bg-blue-500 p-2 text-white">
                Open Modal
              </button>
            </Link>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
              {memos.map((memo) => (
                <div key={memo.id} className="rounded-xl border border-black p-4 text-black">
                  <h2 className="text-xl font-bold">{memo.title}</h2>
                  <p>{memo.content}</p>
                  <p className="italic">Magic Property: {memo.magicProperty}</p>
                </div>
              ))}
            </div>
          </div>
        </Background>
      </div>
    </main>
  )
}
