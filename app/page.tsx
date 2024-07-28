"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const [showMore, setShowMore] = useState(false)

  return (
    <main className="w-screen h-screen overflow-hidden bg-gradient-to-r from-blue-200 to-purple-200 text-black">
      <div className="flex flex-col items-center justify-center h-full p-6 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-blue-800"
        >
          Welcome to the Magic Notepad
        </motion.h1>
        <p className="text-xl text-center text-gray-700">
          <span className="font-semibold">Challenge Title:</span> Magic Notepad
        </p>
        <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-blue-700">Challenge Overview</h2>
          <p className="mt-2 text-gray-600">
            Create an application called <span className="font-semibold">Magical Memo Pad</span> using TypeScript and Next.js. This application allows users to create and manage notes with a touch of magic. Each note can have a unique magical property, enhancing the user experience. Implement a design inspired by <a href="https://www.figma.com/community/file/877826120491545963" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">this Figma design</a>.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          {showMore && (
            <div className="mt-4 text-gray-600">
              <h3 className="text-xl font-semibold text-blue-700">Requirements:</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Use TypeScript to define note types and other data structures.</li>
                <li>Follow clean coding practices and implement error handling.</li>
                <li>Use Next.js for server-side rendering and client-side navigation.</li>
                <li>Each note should have a magical property, such as a color-changing effect or floating animation.</li>
                <li>Implement the design inspired by <a href="https://www.figma.com/community/file/877826120491545963" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">this Figma template</a>.</li>
                <li>Use PostgreSQL for data persistence.</li>
                <li>Consider Docker for simplifying configuration.</li>
              </ul>
              <h3 className="text-xl font-semibold text-blue-700 mt-4">Evaluation Criteria:</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Proficiency in typing and absence of type-related errors.</li>
                <li>Code cleanliness and effective error handling.</li>
                <li>Appropriate use of Next.js and React components.</li>
                <li>Creative implementation of the notes' magical properties.</li>
                <li>Adherence to the design and attention to detail in the implementation.</li>
                <li>Good integration of PostgreSQL and connection management.</li>
              </ul>
              <h3 className="text-xl font-semibold text-blue-700 mt-4">Submission Guidelines:</h3>
              <p className="text-gray-600">
                Share a link to a public repository, such as GitHub or GitLab, hosting the code and documentation of your project. Include a README.md file detailing the key aspects of your implementation.
              </p>
            </div>
          )}
        </div>
        <Link href="/memos">
          <button className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-800 transition duration-300">
            View the Application
          </button>
        </Link>
      </div>
    </main>
  )
}
