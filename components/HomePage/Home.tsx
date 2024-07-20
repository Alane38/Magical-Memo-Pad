"use client"

import { useState, useEffect } from "react"

type Memo = {
  id: number
  title: string
  content: string
  magicProperty: {
    type: string
  }
}

export default function Home() {
  const [memos, setMemos] = useState<Memo[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [magicProperty, setMagicProperty] = useState("COLOR_TRANSFORMATION")

  useEffect(() => {
    const fetchMemos = async () => {
      const response = await fetch("/api/memos")
      const data = await response.json()
      setMemos(data)
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
    const newMemo = await response.json()
    setMemos([...memos, newMemo])
    setTitle("")
    setContent("")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Magical Memo Pad</h1>
      <div className="mb-4 text-black">
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
        <select value={magicProperty} onChange={(e) => setMagicProperty(e.target.value)} className="mr-2 border p-2">
          <option value="COLOR_TRANSFORMATION">Color Transformation</option>
          <option value="FLOATING_ANIMATION">Floating Animation</option>
          <option value="SPARKLING_GLITTER">Sparkling Glitter</option>
          <option value="INVISIBLE_INK">Invisible Ink</option>
          <option value="MYSTIC_GLOW">Mystic Glow</option>
        </select>
        <button onClick={createNote} className="bg-blue-500 p-2 text-white">
          Create Memo
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {memos.map((memo: Memo) => (
          <div key={memo.id} className="border p-4 text-black">
            <h2 className="text-xl font-bold">{memo.title}</h2>
            <p>{memo.content}</p>
            <p className="italic">Magic Property: {memo.magicProperty.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}