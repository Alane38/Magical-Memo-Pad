"use client"

import Link from "next/link"
import { sanitizeUrl } from "@/lib/purify"
import Image from "next/image"
import { XMark } from "../Icons/XMark"
import { CircleVoidExclamationPoint } from "../Icons/CircleVoidExclamationPoint"
import { House } from "../Icons/House"
import { CircleVoidPlus } from "../Icons/CircleVoidPlus"
import { useState } from "react"

type Props = {}

type SidebarListProps = {
  href: string
  label: string
  icon: React.ReactNode
}

const sidebar: SidebarListProps[] = [
  { href: "/", label: "Home", icon: <House className="size-4" /> },
  { href: "/add", label: "Add", icon: <CircleVoidPlus className="size-4" /> },
  { href: "/contact", label: "Option 3", icon: <CircleVoidExclamationPoint className="size-4" /> },
]

export default function Sidebar({}: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  function LocalSidebarList({ href, label, icon }: SidebarListProps): JSX.Element {
    const sanitizedHref = sanitizeUrl(href)

    return (
      <li>
        <Link
          href={sanitizedHref}
          className="hover:bg-lightBlue/30 group relative flex items-center p-2 shadow-slate-900/30 hover:shadow-[inset_0_4px_4px_rgba(20,60,96,0.6)]"
        >
          <div className="absolute left-0 h-full w-1 transform bg-transparent group-hover:border group-hover:bg-white" />
          <div className="ml-3.5 text-white">{icon}</div>
          <span className="ms-2">{label}</span>
        </Link>
      </li>
    )
  }

  return (
    <>
      <aside id="sidebar-level-sidebar" className="bg-primary z-40 h-screen w-64 overflow-y-auto" aria-label="Sidebar">
        <div className="mb-6 flex w-full items-center justify-between space-x-2 p-3">
          <div className="flex h-auto items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Logo"
              priority
              width={64}
              height={64}
              onClick={() => setIsOpen(!isOpen)}
              className="size-9 rounded-full border-2 border-white"
            />
            <span className="font-extralight text-white">Brand Name</span>
          </div>

          <button type="button" className="text-white" aria-label="Close sidebar" onClick={() => setIsOpen(!isOpen)}>
            <XMark className="mr-2 size-4" />
          </button>
        </div>

        <ul className="list-none font-medium text-white">
          {sidebar.map((item, index) => (
            <LocalSidebarList key={index} {...item} />
          ))}
        </ul>
      </aside>
    </>
  )
}
