import { Link } from "react-router-dom";



export default function Header() {
  return (
<header className="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20 w-ful">
<div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand on left */}
            <div className="flex items-center">
              <Link to="/" className="text-white font-bold text-xl">
                BidHub
              </Link>
            </div>
            </div>
            </div>
    </header>
  )
}