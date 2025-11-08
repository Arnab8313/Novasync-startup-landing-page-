"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PricingSectionProps {
  onCtaClick?: () => void
}

export default function PricingSection({ onCtaClick }: PricingSectionProps) {
  const plans = [
    {
      name: "Starter",
      price: "₹499",
      period: "/month",
      description: "Perfect for small teams starting out",
      features: ["3 Projects", "Basic AI Summaries", "Email Support"],
      cta: "Sign Up",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      description: "Most popular for growing teams",
      features: ["Unlimited Projects", "Priority AI Support", "Team Analytics"],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₹1,999",
      period: "/month",
      description: "For large organizations",
      features: ["Custom Integrations", "Admin Console", "24×7 Support"],
      cta: "Contact Sales",
      highlighted: false,
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
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Simple, transparent pricing in Indian Rupees. All plans include a 7-day free trial.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20 scale-105 md:scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 rounded-xl blur-xl"
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-foreground/60 ml-2 text-sm">{plan.period}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onCtaClick) {
                    onCtaClick()
                  }
                }}
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all pointer-events-auto ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
