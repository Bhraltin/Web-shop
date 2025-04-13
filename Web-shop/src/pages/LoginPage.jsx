

import { useState } from "react"
import {Link} from "react-router-dom"
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react"
import Background from "../components/background"
import Layout from "../components/layout/Layout"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically handle the login logic
      console.log("Form submitted:", formData)
      // For demo purposes, redirect to dashboard
      window.location.href = "/dashboard"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col">
      <Background />
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-white mb-6">Welcome Back</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white/90 text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${
                    errors.email ? "border-red-400" : "border-white/20"
                  } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-white/90 text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/50" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-2 bg-white/10 border ${
                    errors.password ? "border-red-400" : "border-white/20"
                  } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-white/50" />
                  ) : (
                    <Eye className="h-5 w-5 text-white/50" />
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-white/10 border-white/20 rounded focus:ring-white/30 text-purple-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-white/80 hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-purple-600 font-medium py-2 px-4 rounded-lg hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-500"
            >
              Sign In
            </button>

            <div className="text-center text-white/80 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-white hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

    
