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
    return (
        <>
        </>
    )
}