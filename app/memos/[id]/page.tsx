"use client"

import Modal from "@/components/GlobalComponents/Modal"
import Background from "@/components/HomePage/Background"
import { useSearchParams } from "next/navigation"

export default function Page({ params }: { params: { id: string } }): JSX.Element {
  const modalId = params.id
  const researchParams = useSearchParams()
  const modalAction = researchParams.get("action") as "createMemo" | "deleteMemo" | "updateMemo"

  return (
    <main className="w-screen overflow-hidden text-black">
      <div className="relative size-full">
        <Background>
          <div className="mt-16 p-4">
            <Modal action={modalAction} id={modalId} />
          </div>
        </Background>
      </div>
    </main>
  )
}
