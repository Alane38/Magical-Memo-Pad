"use client"

import Link from "next/link"
import { sanitizeUrl } from "@/lib/purify"
import Image from "next/image"
import { XMark } from "../Icons/XMark"
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
  { href: "/memos", label: "Memos", icon: <CircleVoidPlus className="size-4" /> }
]

export default function Sidebar({}: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(true)

  function LocalSidebarList({ href, label, icon }: SidebarListProps): JSX.Element {
    const sanitizedHref = sanitizeUrl(href)

    return (
      <li>
        <Link
          href={sanitizedHref}
          className={`hover:bg-lightBlue/30 group relative flex h-10 items-center p-2 shadow-slate-900/30 hover:shadow-[inset_0_4px_4px_rgba(20,60,96,0.6)]`}
        >
          <div className="absolute left-0 h-full w-1 transform bg-transparent group-hover:border group-hover:bg-white" />
          <div className="ml-3.5 text-white">{icon}</div>
          {isOpen && <span className="typewriter-text ms-2">{label}</span>}
        </Link>
      </li>
    )
  }

  return (
    <>
      {/* Sidebar */}
      <aside
        id="sidebar-level-sidebar"
        className={`bg-primary z-40 min-h-screen h-auto ${isOpen ? "w-64" : "w-16"} transition-width overflow-y-auto duration-300`}
        aria-label="Sidebar"
      >
        <div className="mb-6 flex w-full items-center justify-between space-x-2 p-3">
          <div className="flex h-auto items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Logo"
              priority
              width={64}
              height={64}
              onClick={() => setIsOpen(!isOpen)}
              className="size-9 cursor-pointer rounded-full border-2 border-white"
            />
            {isOpen && <span className="typewriter-text font-extralight text-white">MagicMP</span>}
          </div>

          {isOpen && (
            <div className="mr-3">
              <button
                type="button"
                className="text-white"
                aria-label="Close sidebar"
                onClick={() => setIsOpen(!isOpen)}
              >
                <XMark className=" size-4" />
              </button>
            </div>
          )}
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
