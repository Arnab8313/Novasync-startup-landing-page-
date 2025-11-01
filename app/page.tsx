"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ProductSection from "@/components/product-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import ComingSoonModal from "@/components/coming-soon-modal"
import ScrollToTopButton from "@/components/scroll-to-top-button"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false)

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleTheme} className="p-2 rounded-full glass hover:bg-white/20 transition-colors">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <ComingSoonModal isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} />

      <Navbar onCtaClick={() => setIsComingSoonOpen(true)} />
      <HeroSection onCtaClick={() => setIsComingSoonOpen(true)} />
      <FeaturesSection />
      <ProductSection onCtaClick={() => setIsComingSoonOpen(true)} />
      <TestimonialsSection />
      <PricingSection onCtaClick={() => setIsComingSoonOpen(true)} />
      <NewsletterSection />
      <Footer />

      <ScrollToTopButton />
    </main>
  )
}
