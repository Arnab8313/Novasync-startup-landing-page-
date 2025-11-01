"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Users, LineChart, Bell, Lock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Meeting Summaries",
      description:
        "Automatically generate intelligent summaries of your team meetings with key decisions and action items.",
    },
    {
      icon: Zap,
      title: "Smart Task Sync",
      description: "Keep tasks in perfect sync across all platforms with intelligent prioritization and assignment.",
    },
    {
      icon: Users,
      title: "Realtime Collaboration",
      description: "Work together seamlessly with live updates, comments, and collaborative editing in real-time.",
    },
    {
      icon: LineChart,
      title: "Analytics Dashboard",
      description: "Track team productivity, project progress, and collaboration metrics with detailed insights.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with intelligent notifications that matter, without the noise and distractions.",
    },
    {
      icon: Lock,
      title: "Secure Cloud Storage",
      description: "Enterprise-grade security with end-to-end encryption for all your collaborative documents.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Teams Choose NovaSync</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything your team needs to collaborate smarter with AI-powered tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
