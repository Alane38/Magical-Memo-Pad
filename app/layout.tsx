import Sidebar from "@/components/GlobalComponents/Sidebar";
import "./globals.css";
import { Oxygen } from "next/font/google"
import Modal from "@/components/GlobalComponents/Modal";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oxygen.className} min-h-screen bg-white flex`} suppressHydrationWarning>
        {/* <StrictMode>{children}</StrictMode> */}
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
