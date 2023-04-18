import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=" shadow bg-[#0C1B30]">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-300">
        <Link to="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</Link>
        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blogs</a>
    </div>
    </nav>
  )
}

export default Navbar
