"use client"
import Link from "next/link"
import { useSearchParams, usePathname } from "next/navigation"
import MemoForm from "../Forms/MemoForm"
import { XMark } from "../Icons/XMark"

type Props = {
  action: (string & "createMemo") | "deleteMemo" | "updateMemo"
  children?: React.ReactNode
}

export default function Modal({ ...props }: Props): JSX.Element {
  const searchParams = useSearchParams()
  const modal = searchParams.get(props.action)
  const pathname = usePathname()

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
          <div className="m-auto bg-darkBlue shadow">
            <div className="flex flex-col items-center shadow-lg h-full justify-center">
              <div className="flex justify-between w-full py-2 px-8 items-center">
              <h1 className="text-white text-2xl">Create Memo</h1>
              <Link href={pathname}>
                <XMark size={20} className="text-white cursor-pointer" />
              </Link>
              </div>
              <MemoForm action={props.action} />
              {props.children}
              <br />
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}
