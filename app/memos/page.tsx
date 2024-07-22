"use client"

import { useState, useEffect } from "react"
import Background from "@/components/HomePage/Background"
import { Memo } from "@/types/Memo"
import { MagicProperty } from "@/types/MagicProperty"
import Link from "next/link"

export default function Page() {
  const [memos, setMemos] = useState<Memo[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [magicProperty, setMagicProperty] = useState<MagicProperty>("COLOR_TRANSFORMATION")

  useEffect(() => {
    const fetchMemos = async () => {
      const response = await fetch("/api/memos")
      const data: Memo[] = await response.json()
      console.log(data)
    }

    fetchMemos()
  }, [])

  const createNote = async () => {
    const response = await fetch("/api/memos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, magicPropertyType: magicProperty }),
    })
    const newMemo: Memo = await response.json()
    setMemos([...memos, newMemo])
    setTitle("")
    setContent("")
  }

  return (
    <main className="w-screen overflow-hidden text-black">
      <div className="relative size-full">
        <Background>
          <div className="mt-16 p-4">
            <div className="mx-auto mb-4 flex max-w-xl flex-col text-black">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mr-2 border p-2"
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mr-2 border p-2"
              />
              <select
                value={magicProperty}
                onChange={(e) => setMagicProperty(e.target.value as MagicProperty)}
                className="mr-2 border p-2"
              >
                <option value="COLOR_TRANSFORMATION">Color Transformation</option>
                <option value="FLOATING_ANIMATION">Floating Animation</option>
                <option value="SPARKLING_GLITTER">Sparkling Glitter</option>
                <option value="INVISIBLE_INK">Invisible Ink</option>
                <option value="MYSTIC_GLOW">Mystic Glow</option>
              </select>
              <button onClick={createNote} className="bg-blue-500 p-2 text-white">
                Create Memo
              </button>
              <Link href="?createMemo=true">
                <button type="button" className="bg-blue-500 p-2 text-white">
                  Open Modal
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
