"use client"

import type React from "react"
import axios from "axios";
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


// Update the image section to use the slider
import AuthImageSlider from "@/components/auth-image-slider"
import axiosInstance from "@/utils/axiosInstance";

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
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

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      valid = false
    } else {
      newErrors.fullName = ""
    }

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

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
      valid = false
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits"
      valid = false
    } else {
      newErrors.phone = ""
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

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
      valid = false
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match"
      valid = false
    } else {
      newErrors.confirmPassword = ""
    }

    // Terms agreement validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
      valid = false
    } else {
      newErrors.agreeTerms = ""
    }

    setErrors(newErrors)
    return valid
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (validateForm()) {
  //     // In a real app, you would handle registration here
  //     console.log("Registration form submitted:", formData)

  //     // Simulate successful registration
  //     router.push("/login")
  //   }
  // }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: "user", // ✅ Hardcoded role
    });

    alert(response.data.msg || "Registration successful");
    router.push("/login");
  } catch (error: any) {
    alert(error.response?.data?.msg || "Registration failed");
  }
};



  return (
    <div className="relative min-h-screen w-full flex items-start justify-center lg:justify-start lg:pl-[12%] pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden py-12">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lOGINbACK.png"
          alt="Register Background"
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
        className="relative z-10 w-full max-w-xl p-6 md:p-8 mx-4"
      >
        <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-[2.5rem] shadow-2xl p-8 md:p-10 overflow-hidden relative">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Create an Account</h1>
            <p className="text-gray-300 font-medium">Join us and start your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-200 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#0EA5E9]">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#0EA5E9]" />
                  </div>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`
                      h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl
                      focus:ring-[#0EA5E9] focus:border-[#0EA5E9] transition-all
                      ${errors.fullName ? "border-red-500/50 bg-red-500/5" : ""}
                    `}
                    placeholder="John Doe"
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-xs mt-1 ml-1">{errors.fullName}</p>}
              </div>

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
                      h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl
                      focus:ring-[#0EA5E9] focus:border-[#0EA5E9] transition-all
                      ${errors.email ? "border-red-500/50 bg-red-500/5" : ""}
                    `}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 ml-1">
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#0EA5E9]">
                    <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#0EA5E9]" />
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`
                      h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl
                      focus:ring-[#0EA5E9] focus:border-[#0EA5E9] transition-all
                      ${errors.phone ? "border-red-500/50 bg-red-500/5" : ""}
                    `}
                    placeholder="9999999999"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-200 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#0EA5E9]">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#0EA5E9]" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`
                      h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl
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
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1 ml-1">{errors.password}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-200 ml-1">
                Confirm Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#0EA5E9]">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#0EA5E9]" />
                </div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`
                    h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl
                    focus:ring-[#0EA5E9] focus:border-[#0EA5E9] transition-all
                    ${errors.confirmPassword ? "border-red-500/50 bg-red-500/5" : ""}
                  `}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1 ml-1">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start ml-1 py-1">
              <div className="flex items-center h-5">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="h-4 w-4 bg-white/5 border-white/20 text-[#0EA5E9] focus:ring-[#0EA5E9] rounded cursor-pointer"
                />
              </div>
              <div className="ml-3 text-xs md:text-sm">
                <label htmlFor="agreeTerms" className="font-medium text-gray-300">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#0EA5E9] hover:underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#0EA5E9] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
                {errors.agreeTerms && <p className="text-red-400 text-xs mt-1">{errors.agreeTerms}</p>}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-[#0EA5E9] hover:bg-[#0284c7] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#0EA5E9]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Create Account
            </Button>
          </form>

          <p className="mt-8 text-center text-gray-300 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0EA5E9] font-bold hover:text-[#38bdf8] transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

