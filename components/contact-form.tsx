"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, X } from "lucide-react"

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false) // Changed from isMinimized to isOpen for modal logic
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Listen for custom event to open form
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-form', handleOpen);
    return () => window.removeEventListener('open-contact-form', handleOpen);
  }, []);

  const validateForm = () => {
      let isValid = true;
      const newErrors = { ...errors };
  
      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        isValid = false;
      } else {
        newErrors.name = '';
      }
  
      // Phone validation
      const phoneRegex = /^[\d\s\-()+]{10,20}$/;
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
        isValid = false;
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
        isValid = false;
      } else {
        newErrors.phone = '';
      }
  
      // Email validation
      const emailRegex = /\S+@\S+\.\S+/;
      if (!formData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
      } else {
        newErrors.email = '';
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
    
        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
          setErrors(prev => ({
            ...prev,
            [name]: ''
          }));
        }
    }; 
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      if (validateForm()) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/lead`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
  
          if (response.ok) {
            router.push(`/thank-you?service=your consultation request`);
            setIsOpen(false); // Close modal on success
          } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Submission failed');
          }
        } catch (error: unknown) {
          let errorMessage = 'Failed to submit inquiry';
    
          if (error instanceof Error) {
            errorMessage = error.message;
          } else if (typeof error === 'string') {
            errorMessage = error;
          }
          console.error('Submission error:', error);
          setErrors(prev => ({ ...prev, form: errorMessage }));
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setIsSubmitting(false);
      }
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">Get Free CA Guidance</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-6">
                Fill the form below and our expert will get in touch with you shortly to provide personalized guidance.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="space-y-1">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                    className="h-11"
                  />
                   {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name}</span>}
                </div>

                <div className="space-y-1">
                   <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    disabled={isSubmitting}
                    className="h-11"
                  />
                  {errors.phone && <span className="text-xs text-red-500 ml-1">{errors.phone}</span>}
                </div>

                <div className="space-y-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    disabled={isSubmitting}
                    className="h-11"
                  />
                   {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email}</span>}
                </div>

                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold h-12 w-full mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                    </span>
                  ) : 'GET EXPERT CONSULTATION'}
                </Button>

                <p className="text-[10px] text-center text-gray-400 mt-2">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
