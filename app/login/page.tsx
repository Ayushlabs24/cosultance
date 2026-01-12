"use client"

import type React from "react"
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import AuthImageSlider from "@/components/auth-image-slider"
import axiosInstance from "@/utils/axiosInstance"


export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    } else {
      newErrors.email = ""
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      valid = false
    } else {
      newErrors.password = ""
    }

    setErrors(newErrors)
    return valid
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (validateForm()) {
  //     // In a real app, you would handle authentication here
  //     console.log("Login form submitted:", formData)

  //     // Simulate successful login
  //     router.push("/")
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!validateForm()) return;

    try {
      // window.alert("login shuru")
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await axios.post(`${apiUrl}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      }, {withCredentials: true});

      // window.alert("tokens and all"+res.data)
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user)); // optional

      // window.alert(token+"  "+user)
      if (user?.role === "admin") {
        // window.alert("ja rha admin pe")
        router.push(`${process.env.NEXT_PUBLIC_ADMIN_PANEL_URL}`);
      } else if (user?.role === "user") {
        // window.alert("ja rha user pe")
        router.push(`${process.env.NEXT_PUBLIC_USER_PANEL_URL}`);
      } else {
        setLoginError("Invalid role.");
      }

    } catch (err: any) {
      setLoginError(err.response?.data?.msg || "Login failed.");
    }
  };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoginError("");

//   if (!validateForm()) return;
//   try {
//     const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
//       email: formData.email,
//       password: formData.password,
//     });

     

//     // Redirect based on role
//     if (res.data.user.role === "admin") {
//       window.location.href = `${process.env.NEXT_PUBLIC_ADMIN_PANEL_URL}/dashboard`;
//     } else {
//       window.location.href = `${process.env.NEXT_PUBLIC_USER_PANEL_URL}/dashboard`;
//     }
//   } catch (err: any) {
//     setLoginError(err.response?.data?.msg || "Login failed.");
//   }
// };

  return (
    <div className="relative min-h-screen w-full flex items-start justify-center lg:justify-start lg:pl-[12%] pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lOGINbACK.png"
          alt="Login Background"
          fill
          priority
          className="object-cover object-right lg:object-[80%_center]"
        />
        {/* Bottom Fade to blend with footer */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      {/* Glassmorphic Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 md:p-10 mx-4"
      >
        <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-[2.5rem] shadow-2xl p-8 md:p-10 overflow-hidden relative">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">Welcome Back</h1>
            <p className="text-gray-300 font-medium">Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {loginError && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-red-500/20 border border-red-500/50 text-red-200 text-sm py-3 px-4 rounded-xl text-center"
              >
                {loginError}
              </motion.div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#0EA5E9]">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#0EA5E9]" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-2xl
                    focus:ring-[#0EA5E9] focus:border-[#0EA5E9] transition-all
                    ${errors.email ? "border-red-500/50 bg-red-500/5" : ""}
                  `}
                  placeholder="name@company.com"
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-200">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm font-medium text-[#0EA5E9] hover:text-[#38bdf8] transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#0EA5E9]" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`
                    h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-2xl
                    focus:ring-[#0EA5E9] focus:border-[#0EA5E9] transition-all
                    ${errors.password ? "border-red-500/50 bg-red-500/5" : ""}
                  `}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#0EA5E9]/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Log In
            </Button>
          </form>

          <p className="mt-10 text-center text-gray-300 font-medium">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#0EA5E9] font-bold hover:text-[#38bdf8] transition-colors">
              Sign up free
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

