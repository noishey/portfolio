"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return

    setStatus("submitting")
    
    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || 'mqerarwv'
    if (!formspreeKey) {
      console.warn("Formspree key is missing.")
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="relative group w-full pt-6 border-t border-neutral-200 dark:border-neutral-800">
      {/* Glowing Blur Layer */}
      <div className="absolute inset-x-0 bottom-0 top-6 -inset-0.5 rounded-xl bg-gradient-to-r from-[var(--rainbow-1)] via-[var(--rainbow-3)] to-[var(--rainbow-5)] opacity-20 blur-md group-focus-within:opacity-75 transition-opacity duration-500 animate-[rainbow-flow_6s_linear_infinite] bg-[length:200%_auto]" />
      
      {/* Border Wrapper */}
      <div className="relative p-[1.5px] rounded-xl bg-gradient-to-r from-[var(--rainbow-1)] via-[var(--rainbow-3)] to-[var(--rainbow-5)] bg-[length:200%_auto] animate-[rainbow-flow_6s_linear_infinite] overflow-hidden shadow-lg dark:shadow-neutral-950">
        <div className="bg-white dark:bg-black rounded-[11px] p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="text-sm font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider font-bold">
              let&apos;s connect!!
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              write to me about anything under and above the sun xD
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-lg bg-neutral-50/50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 animate-fade-in text-center">
              <p className="font-mono text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                Message sent! Namaste 🙏
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-3 text-[10px] uppercase font-bold tracking-wider font-mono text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
              <div className="space-y-1">
                <label htmlFor="form-subject" className="sr-only">Subject</label>
                <input
                  id="form-subject"
                  type="text"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={status === "submitting"}
                  className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none py-1.5 transition-colors font-mono text-sm placeholder-neutral-400 text-neutral-800 dark:text-neutral-100"
                />
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

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
                {status === "error" && (
                  <p className="text-xs font-mono text-rose-500 animate-fade-in">
                    Failed to send. Please check your network and try again.
                  </p>
                )}
                <div className="flex justify-end ml-auto">
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
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
