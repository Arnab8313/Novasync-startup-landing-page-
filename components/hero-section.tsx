"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps {
  onCtaClick?: () => void
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-40" />

      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                ✨ The Future of Collaboration
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            >
              Sync Smarter.
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Work Better.
              </span>
              <br />
              Together.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-foreground/70 max-w-lg leading-relaxed">
              AI-powered collaboration that keeps your remote team in perfect sync. Get intelligent meeting summaries,
              task synchronization, and smart notifications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onCtaClick}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
              >
                Start Free Trial
              </button>
              <button
                onClick={onCtaClick}
                className="px-8 py-4 rounded-lg border border-primary/50 text-foreground hover:bg-background/50 font-semibold transition-all flex items-center justify-center gap-2"
              >
                Watch Demo <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Mockup with Gradient Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-20 rounded-2xl" />
              <div className="relative w-full h-80 bg-gradient-to-br from-primary/30 via-background to-accent/30 rounded-2xl shadow-2xl border border-primary/20 overflow-hidden flex items-center justify-center">
                {/* Dashboard mockup elements */}
                <div className="space-y-4 w-full h-full p-8 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/20 rounded w-3/4" />
                    <div className="h-4 bg-accent/20 rounded w-1/2" />
                    <div className="h-4 bg-primary/10 rounded w-2/3" />
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="h-3 bg-primary/15 rounded w-full" />
                    <div className="h-3 bg-accent/15 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
