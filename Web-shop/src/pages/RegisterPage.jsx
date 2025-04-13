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
    return (
        <>
        </>
    )
}