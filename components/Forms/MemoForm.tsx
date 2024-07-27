"use client"

import { MagicProperty } from "@prisma/client"
import React, { useState } from "react"
import Input from "../GlobalComponents/Input"
import Textarea from "../GlobalComponents/Textarea"
import Select from "../GlobalComponents/Select"
import Button from "../GlobalComponents/Button"

type Props = {
  action: (string & "createMemo") | "deleteMemo" | "updateMemo"
}

const MemoForm = ({ action }: Props): JSX.Element => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [magicProperty, setMagicProperty] = useState<MagicProperty>("COLOR_TRANSFORMATION")
  const [error, setError] = useState<string | null>(null)

  const createNote = async () => {
    try {
      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, magicProperty: magicProperty }),
      })

      if (!response.ok) {
        throw new Error("Failed to create memo")
      }

      setTitle("")
      setContent("")
      setMagicProperty("COLOR_TRANSFORMATION")
      setError(null)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unknown error occurred")
      }
    }
  }

  const renderFormContent = () => (
    <>
      <div className="flex flex-col justify-between gap-3">
        <Input
          label="Title"
          type="text"
          placeholder="Ex: My Memo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          label="Content"
          placeholder="Ex: This is my memo content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Select
          label="Magic Property"
          value={magicProperty}
          onChange={(e) => setMagicProperty(e.target.value as MagicProperty)}
        >
          <option value="COLOR_TRANSFORMATION">Color Transformation</option>
          <option value="FLOATING_ANIMATION">Floating Animation</option>
          <option value="SPARKLING_GLITTER">Sparkling Glitter</option>
          <option value="INVISIBLE_INK">Invisible Ink</option>
          <option value="MYSTIC_GLOW">Mystic Glow</option>
        </Select>
      </div>
      <Button onClick={createNote} className="self-end">
        Create
      </Button>
    </>
  )

  return (
    <div className="bg-darkBlue mx-auto flex h-96 w-96 max-w-xl flex-col justify-between gap-3 p-4 text-white">
      {error && <p className="text-red-500">{error}</p>}
      {action === "createMemo" ? renderFormContent() : <p>Action not supported</p>}
    </div>
  )
}

export default MemoForm
