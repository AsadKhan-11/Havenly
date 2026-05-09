"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Eye, FileText, Handshake, Key, Sparkles, ChevronRight, Check, Clock, Shield, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const phases = [
  {
    num: "01", icon: Search, title: "Discovery & Consultation", tagline: "Understanding your vision", duration: "1–2 Weeks",
    description: "Every relationship begins with listening. During this phase, we conduct an in-depth consultation to understand your lifestyle, aesthetic preferences, investment goals, and non-negotiables.",
    details: ["Personal lifestyle assessment and preference mapping", "Investment horizon and financial framework discussion", "Market intelligence briefing for target locations", "Creation of your custom property profile", "Assignment of a dedicated senior advisor"],
    image: "/office.png",
  },
  {
    num: "02", icon: Eye, title: "Global Search & Curation", tagline: "Activating our worldwide network", duration: "2–6 Weeks",
    description: "Leveraging our international network and proprietary database, we source properties that match your profile — including off-market opportunities that never appear on public listings.",
    details: ["Access to our off-market portfolio (40%+ of transactions)", "Pre-screening and quality verification of each property", "Curated shortlist with comprehensive property dossiers", "Virtual previews and 3D walkthroughs where available", "Comparative market analysis for each shortlisted property"],
    image: "/interior.png",
  },
  {
    num: "03", icon: Eye, title: "Private Viewings", tagline: "Experiencing spaces firsthand", duration: "1–3 Weeks",
    description: "We arrange exclusive, unhurried property tours at your convenience. Every viewing is a private experience — no open houses, no competing buyers.",
    details: ["Private, appointment-only viewings at your schedule", "Architectural and design commentary from our experts", "Neighborhood lifestyle and amenity briefing", "Discreet transportation and itinerary coordination", "Post-viewing debrief and feedback integration"],
    image: "/property-villa.png",
  },
  {
    num: "04", icon: FileText, title: "Due Diligence & Analysis", tagline: "Protecting your investment", duration: "2–4 Weeks",
    description: "Before any offer is made, our team conducts exhaustive due diligence. We coordinate with independent inspectors, legal counsel, and financial advisors.",
    details: ["Comprehensive property inspection coordination", "Title search and legal compliance verification", "Structural and environmental assessment review", "Tax implications and ownership structure advisory", "Insurance and maintenance cost projection"],
    image: "/exterior.png",
  },
  {
    num: "05", icon: Handshake, title: "Bespoke Negotiation", tagline: "Securing the best terms", duration: "1–3 Weeks",
    description: "Our expert negotiators work tirelessly to secure your investment on the most favorable terms with deep market intelligence and strategic patience.",
    details: ["Strategic offer formulation based on market data", "Multi-round negotiation management", "Contingency structuring to protect your position", "Coordination with seller's representatives", "Term sheet and preliminary agreement review"],
    image: "/property-mansion.png",
  },
  {
    num: "06", icon: Key, title: "Seamless Closing & Beyond", tagline: "From keys to concierge", duration: "2–6 Weeks",
    description: "A frictionless closing process managed by our dedicated legal and concierge partners. Our relationship doesn't end at the handover.",
    details: ["Full closing coordination with legal teams", "Final walk-through and condition verification", "Key handover and property onboarding", "Interior design and furnishing referral service", "Ongoing lifestyle concierge and portfolio advisory"],
    image: "/hero.png",
  },
];

export function ProcessPage() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero (full-screen) ── */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image src="/property-penthouse.png" alt="Our Process" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-24 pb-20 md:pb-28 max-w-7xl mx-auto">
          <motion.p {...fadeUp} transition={{ duration: 0.6 }} className="text-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-4">How We Work</motion.p>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-serif text-pearl leading-[1.1] mb-5">The Acquisition<br />Process</motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.8, delay: 0.25 }} className="text-pearl/50 font-sans text-lg md:text-xl max-w-2xl leading-relaxed">Six refined phases designed to transform your vision into a seamless reality.</motion.p>
        </div>
      </section>

      {/* ── Overview Stats ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ icon: Clock, val: "6", lab: "Refined Phases" }, { icon: Users, val: "1", lab: "Dedicated Advisor" }, { icon: Shield, val: "100%", lab: "Client Discretion" }, { icon: Sparkles, val: "18+", lab: "Years Perfecting" }].map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex flex-col items-center">
              <s.icon size={20} className="text-gold mb-3" />
              <p className="text-3xl font-serif text-pearl mb-1">{s.val}</p>
              <p className="text-pearl/40 text-[10px] uppercase tracking-[0.2em] font-sans">{s.lab}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Interactive Phase Selector ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4">Step by Step</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl">Explore Each Phase</h2>
          </motion.div>

          {/* Phase Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
            {phases.map((phase, i) => (
              <button key={i} onClick={() => setActivePhase(i)}
                className={`px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  activePhase === i ? "bg-gold text-obsidian shadow-[0_0_25px_rgba(212,175,55,0.2)]" : "border border-white/10 text-pearl/50 hover:text-pearl hover:border-white/20"
                }`}
              >
                <span className="hidden md:inline">{phase.num}. </span>{phase.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Phase Detail */}
          <AnimatePresence mode="wait">
            <motion.div key={activePhase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden">
                <Image src={phases[activePhase].image} alt={phases[activePhase].title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
                <div className="absolute top-6 left-6"><span className="text-6xl md:text-8xl font-serif text-white/10">{phases[activePhase].num}</span></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-[10px] uppercase tracking-[0.2em] font-medium">
                    <Clock size={10} className="inline mr-1.5 -mt-0.5" />{phases[activePhase].duration}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    {(() => { const Icon = phases[activePhase].icon; return <Icon size={18} className="text-gold" />; })()}
                  </div>
                  <p className="text-gold/70 text-xs uppercase tracking-[0.2em] font-semibold">{phases[activePhase].tagline}</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-pearl mb-6">{phases[activePhase].title}</h3>
                <p className="text-pearl/50 font-sans text-base md:text-lg leading-relaxed mb-8">{phases[activePhase].description}</p>
                <div className="space-y-3">
                  {phases[activePhase].details.map((d, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                      <Check size={14} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-pearl/60 font-sans text-sm">{d}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-10">
                  {activePhase > 0 && (
                    <button onClick={() => setActivePhase(activePhase - 1)} className="px-5 py-2.5 rounded-full border border-white/10 text-pearl/50 text-[11px] uppercase tracking-[0.15em] font-medium hover:border-white/20 hover:text-pearl transition-all">Previous</button>
                  )}
                  {activePhase < phases.length - 1 && (
                    <button onClick={() => setActivePhase(activePhase + 1)} className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-pearl text-[11px] uppercase tracking-[0.15em] font-medium hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all">
                      Next Phase <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── FAQ (shared component) ── */}
      <FAQ />

      <PreFooterCTA />
      <Footer />
    </div>
  );
}
