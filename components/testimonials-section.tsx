"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechFlow",
      quote:
        "NovaSync transformed how our distributed team collaborates. The AI meeting summaries alone save us hours every week.",
      rating: 5,
      initials: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "CEO at CloudStart",
      quote: "The task sync feature is a game-changer. We eliminated so many duplicate efforts and miscommunications.",
      rating: 5,
      initials: "MJ",
    },
    {
      name: "Elena Rodriguez",
      role: "Operations Lead at InnovateLabs",
      quote: "Best investment in collaboration tools we made this year. The team is happier and more productive.",
      rating: 5,
      initials: "ER",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getColorForInitials = (index: number) => {
    const colors = ["bg-primary", "bg-accent", "bg-primary/80"]
    return colors[index % colors.length]
  }

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Teams Are Saying</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover how NovaSync is helping teams work smarter together
          </p>
        </motion.div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
              </div>

              <p className="text-foreground/80 mb-6 flex-1 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-12 h-12 rounded-full ${getColorForInitials(index)} flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl border border-border bg-card"
          >
            <div className="flex gap-1 mb-4">
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
            </div>

            <p className="text-foreground/80 mb-6 text-lg leading-relaxed">"{testimonials[current].quote}"</p>

            <div className="flex items-center gap-3 pt-6 border-t border-border">
              <div
                className={`w-12 h-12 rounded-full ${getColorForInitials(current)} flex items-center justify-center text-white font-bold`}
              >
                {testimonials[current].initials}
              </div>
              <div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-foreground/60">{testimonials[current].role}</p>
              </div>
            </div>

            <div className="flex gap-2 justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
