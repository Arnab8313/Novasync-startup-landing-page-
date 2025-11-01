"use client"

import { motion } from "framer-motion"

export default function ProductSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Gradient Placeholder instead of image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-2xl" />
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/25 via-background to-accent/25 rounded-2xl shadow-2xl border border-primary/20 overflow-hidden flex items-center justify-center">
              {/* Product mockup with animated elements */}
              <div className="space-y-6 w-full h-full p-8 flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="h-3 bg-primary/30 rounded w-2/3" />
                  <div className="h-3 bg-accent/25 rounded w-1/2" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="h-24 bg-primary/20 rounded" />
                  <div className="h-24 bg-accent/20 rounded" />
                  <div className="h-24 bg-primary/15 rounded" />
                  <div className="h-24 bg-accent/15 rounded" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                All your tools,
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  perfectly in sync.
                </span>
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              NovaSync unifies your entire team's workflow. Connect your favorite tools, automate repetitive tasks, and
              let AI handle the heavy lifting. Say goodbye to context switching and hello to seamless collaboration.
            </p>

            <ul className="space-y-3">
              {[
                "Unified team workspace",
                "Intelligent task automation",
                "Cross-platform synchronization",
                "AI-powered insights",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              See How It Works
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
