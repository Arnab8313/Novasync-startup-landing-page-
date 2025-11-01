"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
              {/* Header with close button */}
              <div className="relative p-8 pb-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-background rounded-lg transition-colors"
                >
                  <X size={20} className="text-foreground/60" />
                </button>

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20">
                  <span className="text-2xl">🚧</span>
                </div>

                <h2 className="text-2xl font-bold mb-2">Coming Soon!</h2>
                <p className="text-foreground/70">
                  NovaSync sign-up isn't available yet. But we're working hard to launch soon. Stay tuned!
                </p>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Be among the first</p>
                      <p className="text-sm text-foreground/60">Join our waitlist for early access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Exclusive launch offer</p>
                      <p className="text-sm text-foreground/60">Get special pricing at launch</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Got it!
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
