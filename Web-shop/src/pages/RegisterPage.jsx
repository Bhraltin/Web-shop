import { useState } from "react"
import {Link} from "react-router-dom"
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff } from "lucide-react"
import Background from "../components/background"
export default function RegisterPage () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })

      const [errors, setErrors] = useState({})
      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setShowConfirmPassword] = useState(false)
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value,
        })
    
    
        if (errors[name]) {
          setErrors({
            ...errors,
            [name]: "",
          })
        }
      }
      const validateForm = () => {
        const newErrors = {}
    
        // Name validation
        if (!formData.name.trim()) {
          newErrors.name = "Name is required"
        }
    
        // Email validation
        if (!formData.email) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid"
        }
    
        // Password validation
        if (!formData.password) {
          newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters"
        }
    
        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match"
        }
    
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
      }
      const handleSubmit = (e) => {
        e.preventDefault()
    
        if (validateForm()) {
          // Here you would typically handle the registration logic
          console.log("Form submitted:", formData)
          // For demo purposes, redirect to dashboard
          window.location.href = "/dashboard"
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col">
        <Background />
        <Header isLoggedIn={false} />
  
        <main className="flex-1 flex items-center justify-center p-4 relative z-10">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
  
            <h1 className="text-3xl font-bold text-white mb-6">Create Account</h1>
  
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white/90 text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/50" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 bg-white/10 border ${
                      errors.name ? "border-red-400" : "border-white/20"
                    } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>
  
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
  
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-white/90 text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/50" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-2 bg-white/10 border ${
                      errors.confirmPassword ? "border-red-400" : "border-white/20"
                    } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-white/50" />
                    ) : (
                      <Eye className="h-5 w-5 text-white/50" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-300 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
  
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 bg-white/10 border-white/20 rounded focus:ring-white/30 text-purple-600"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white/80">
                  I agree to the{" "}
                  <a href="#" className="font-medium text-white hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-medium text-white hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
  
              <button
                type="submit"
                className="w-full bg-white text-purple-600 font-medium py-2 px-4 rounded-lg hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-500"
              >
                Create Account
              </button>
  
              <div className="text-center text-white/80 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-white hover:underline">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    )
}