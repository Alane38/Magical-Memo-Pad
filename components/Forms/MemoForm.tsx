"use client"

import { MagicProperty } from "@prisma/client"
import React, { useState, useEffect } from "react"
import Input from "../GlobalComponents/Input"
import Textarea from "../GlobalComponents/Textarea"
import Select from "../GlobalComponents/Select"
import Button from "../GlobalComponents/Button"
import { useRouter } from "next/navigation"

type Props = {
  action: "createMemo" | "deleteMemo" | "updateMemo"
  memoId?: string
}

const MemoForm = ({ ...props }: Props): JSX.Element => {
  const Router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [magicProperty, setMagicProperty] = useState<MagicProperty>("COLOR_TRANSFORMATION")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMemo = async () => {
      if (props.memoId && (props.action === "updateMemo" || props.action === "deleteMemo")) {
        try {
          const response = await fetch(`/api/memos/${props.memoId}`)
          const data = await response.json()
          setTitle(data.title)
          setContent(data.content)
          setMagicProperty(data.magicProperty)
        } catch (err) {
          setError("Failed to fetch memo")
        }
      }
    }
    fetchMemo()
  }, [props.memoId, props.action])

  const createNote = async () => {
    try {
      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, magicProperty }),
      })

      if (!response.ok) {
        throw new Error("Failed to create memo")
      }

      setTitle("")
      setContent("")
      setMagicProperty("COLOR_TRANSFORMATION")
      setError(null)

      Router.push("/memos")
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unknown error occurred")
      }
    }
  }

  const updateNote = async () => {
    try {
      const response = await fetch(`/api/memos/${props.memoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, magicProperty }),
      })

      if (!response.ok) {
        throw new Error("Failed to update memo")
      }

      setError(null)
      Router.push("/memos")
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unknown error occurred")
      }
    }
  }

  const deleteNote = async () => {
    try {
      const response = await fetch(`/api/memos/${props.memoId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete memo")
      }

      setTitle("")
      setContent("")
      setMagicProperty("COLOR_TRANSFORMATION")
      setError(null)
      Router.push("/memos")
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
      <div className="flex flex-col justify-between gap-3 mb-6">
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
      <Button onClick={props.action === "createMemo" ? createNote : updateNote} className="self-end">
        {props.action === "createMemo" ? "Create" : "Update"}
      </Button>
    </>
  )

  const renderDeleteContent = () => (
    <>
      <p className="mb-6">Are you sure you want to delete this memo?</p>
      <Button onClick={deleteNote} className="self-end">
        Delete
      </Button>
    </>
  )

  return (
    <div className="bg-darkBlue mx-auto flex h-auto w-96 max-w-xl flex-col justify-between gap-3 p-4 text-white">
      {error && <p className="text-red-500">{error}</p>}
      {props.action === "createMemo" || props.action === "updateMemo" ? renderFormContent() : renderDeleteContent()}
    </div>
  )
}

export default MemoForm
