import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import { ContactMessage } from "../types";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    serviceType: "Web Design",
    budget: "$5k - $10k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const budgetOptions = ["< $5k", "$5k - $10k", "$10k - $25k", "$25k+"];
  const serviceOptions = [
    "Web Design",
    "UI/UX Architecture",
    "Webflow Dev",
    "Front End",
    "Full Project",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real high-fidelity submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        // Reset and close after showing success
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          serviceType: "Web Design",
          budget: "$5k - $10k",
          message: "",
        });
        onClose();
      }, 3500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl md:p-8"
          >
            {/* Grid background inside card */}
            <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

            {/* Accent Glowing Blobs in Background */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full blob-orange/40" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full blob-cyan/40" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neutral-900">
                      Let's Build Masterpieces
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans">
                      Typically responds in under 4 hours
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Form and Feedback States */}
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500"
                    >
                      <CheckCircle2 size={44} className="stroke-[1.5]" />
                    </motion.div>
                    <h4 className="font-display text-2xl font-bold text-neutral-900">
                      Message Transmitted!
                    </h4>
                    <p className="mt-2 max-w-sm font-sans text-sm text-neutral-500">
                      Thank you for reaching out, <span className="font-semibold text-neutral-800">{formData.name}</span>. 
                      An automated receipt has been logged and SD will respond shortly.
                    </p>

                    <div className="mt-6 flex flex-col gap-2 rounded-2xl bg-neutral-50 p-4 text-left font-sans text-xs text-neutral-500 border border-neutral-100 w-full">
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-400">Selected Project:</span>
                        <span className="font-semibold text-neutral-800">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-neutral-400">Budget Range:</span>
                        <span className="font-semibold text-neutral-800">{formData.budget}</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 space-y-4"
                  >
                    {/* Floating Info */}
                    <div className="flex items-center gap-1.5 rounded-xl bg-orange-50/70 p-3 text-xs text-orange-800 border border-orange-100/50">
                      <Sparkles size={14} className="animate-pulse" />
                      <span>Ready to elevate your project with world-class UI design?</span>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-neutral-700 font-sans">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Christopher Henderson"
                          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-neutral-700 font-sans">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. christopher@leanly.com"
                          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                        />
                      </div>
                    </div>

                    {/* Service Type Custom Selectors */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700 font-sans">
                        What Service Do You Need?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            type="button"
                            key={service}
                            onClick={() =>
                              setFormData({ ...formData, serviceType: service })
                            }
                            className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-all ${
                              formData.serviceType === service
                                ? "bg-neutral-900 text-white"
                                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Options */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-700 font-sans">
                        Approximate Budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((budget) => (
                          <button
                            type="button"
                            key={budget}
                            onClick={() =>
                              setFormData({ ...formData, budget: budget })
                            }
                            className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-all ${
                              formData.budget === budget
                                ? "bg-violet-600 text-white"
                                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-700 font-sans">
                        Briefly Describe Your Goals
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell SD about your vision and what you want to achieve..."
                        className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 font-sans text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-violet-200/50 transition-all hover:bg-violet-700 hover:shadow-violet-300/60 disabled:bg-neutral-400"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
