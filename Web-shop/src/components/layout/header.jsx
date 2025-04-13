import { Link } from "react-router-dom";

import { useState } from "react"

import { ArrowRight } from "lucide-react"



export default function Header() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col">  
<header className="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20 w-ful">
<div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-white font-bold text-xl">
                Web Shop
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-6">
              <Link to="#about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
              >
                Register
              </Link>
            </div>
            </div>
            </div>
    </header>

    </div>
  )
}