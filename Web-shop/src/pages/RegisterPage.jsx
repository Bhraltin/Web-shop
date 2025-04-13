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
    return (
        <>
        </>
    )
}