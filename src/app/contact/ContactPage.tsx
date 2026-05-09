"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";

export function ContactPage() {
  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero (full-screen) ── */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/office.png" alt="Contact Havenly" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-obsidian/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-24 pb-20 md:pb-28 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-pearl leading-[1.1] mb-5"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-pearl/50 font-sans text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Schedule a private consultation with our team. Every inquiry is handled with complete discretion.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Form (shared component) ── */}
      <Contact />

      <PreFooterCTA />
      <Footer />
    </div>
  );
}
