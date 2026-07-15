"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus("submitting")
    
    // Simulate API submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="space-y-1">
        <h3 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
          write a message
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          drop a line directly. i will get back to you shortly.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 animate-fade-in text-center">
          <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200 font-medium">
            Message sent! Namaste 🙏
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-3 text-[10px] uppercase font-bold tracking-wider font-mono text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="form-name" className="sr-only">Name</label>
              <input
                id="form-name"
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === "submitting"}
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none py-1.5 transition-colors font-mono text-sm placeholder-neutral-400 text-neutral-800 dark:text-neutral-100"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="form-email" className="sr-only">Email</label>
              <input
                id="form-email"
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === "submitting"}
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none py-1.5 transition-colors font-mono text-sm placeholder-neutral-400 text-neutral-800 dark:text-neutral-100"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="form-message" className="sr-only">Message</label>
            <textarea
              id="form-message"
              required
              rows={4}
              placeholder="Your Message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={status === "submitting"}
              className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none py-1.5 transition-colors font-mono text-sm placeholder-neutral-400 text-neutral-800 dark:text-neutral-100 resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={cn(
                "inline-flex items-center justify-center rounded border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50",
                status === "submitting"
                  ? "bg-neutral-50 dark:bg-neutral-950 text-neutral-400"
                  : "bg-transparent hover:bg-neutral-100 text-neutral-700 dark:hover:bg-white/3 dark:text-white"
              )}
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
