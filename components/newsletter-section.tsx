"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function NewsletterSection() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setSubmitted(true)
    setFormData({ name: "", email: "" })
    setErrors({})
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl opacity-40 animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-accent/25 to-primary/15 rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/10" />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get Early Access to NovaSync</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands of professionals syncing smarter with AI-powered collaboration.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 p-8 rounded-2xl bg-card shadow-lg shadow-purple-100 dark:shadow-purple-800/30 border border-border/50"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full px-6 py-3 rounded-xl bg-background border-2 transition-all focus:outline-none ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500 mt-1">
                  ⚠️ {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your work email to join our waitlist"
                className={`w-full px-6 py-3 rounded-xl bg-background border-2 transition-all focus:outline-none ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500 mt-1">
                  ⚠️ {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Get Early Access
            </button>

            <p className="text-xs text-foreground/50 mt-4">We respect your inbox — no spam, ever.</p>
          </motion.form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
            >
              ✅ Thanks for joining NovaSync! We'll notify you when we launch.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
