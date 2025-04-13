
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col">
      <header className="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20 w-full">
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
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md">
              <Link
                to="#about"
                className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="#contact"
                className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-2 px-3 py-2">
                <Link
                  to="/login"
                  className="hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all w-1/2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all w-1/2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
