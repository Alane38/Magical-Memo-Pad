"use client"

import Link from "next/link"
import { CircleVoidXMark } from "../Icons/CircleVoidXMark"

type Props = {}

type SidebarListProps = {
  href: string
  label: string
  icon: React.ReactNode
}

export function LocalSidebarList({ href, label, icon }: SidebarListProps) {
  return (
    <li>
      <Link
        //onClick={() => console.log("clicked")}
        href={href}
        className="hover:bg-lightBlue group flex items-center p-2 hover:bg-opacity-30"
      >
          {icon}
        <span className="ms-3">{label}</span>
      </Link>
    </li>
  )
}

export default function Sidebar({}: Props) {
  return (
    <>
      <aside id="sidebar-level-sidebar" className="bg-primary z-40 h-screen w-64 overflow-y-auto" aria-label="Sidebar">
        <ul className="space-y-2 font-medium">
            <LocalSidebarList href="/" label="Option 1" icon={<CircleVoidXMark className="size-4 text-white" />} />
            <LocalSidebarList href="/about" label="Option 2" icon={<CircleVoidXMark className="size-4 text-white" />} />
            <LocalSidebarList href="/contact" label="Option 3" icon={<CircleVoidXMark className="size-4 text-white" />} />
        </ul>
      </aside>
    </>
  )
}
