import "./globals.css";
import { Oxygen } from "next/font/google"

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
      <body className={`${oxygen.className} min-h-screen`} suppressHydrationWarning>
        {/* <StrictMode>{children}</StrictMode> */}
        {children}
      </body>
    </html>
  )
}
