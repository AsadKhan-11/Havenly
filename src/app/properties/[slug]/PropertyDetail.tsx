"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  Car,
  Ruler,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Check,
  Share2,
  Heart,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import type { Property } from "@/lib/properties";

export function PropertyDetail({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);
  const [showInquiry, setShowInquiry] = useState(false);

  const nextImage = () =>
    setActiveImage((prev) => (prev + 1) % property.gallery.length);
  const prevImage = () =>
    setActiveImage(
      (prev) => (prev - 1 + property.gallery.length) % property.gallery.length
    );

  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ─── Hero Gallery ─── */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={property.gallery[activeImage]}
              alt={`${property.title} — Image ${activeImage + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/20" />

        {/* Gallery Nav */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex items-center gap-3">
          <button
            onClick={prevImage}
            className="w-11 h-11 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-obsidian transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-white/60 text-xs font-sans tracking-wider">
            {activeImage + 1} / {property.gallery.length}
          </span>
          <button
            onClick={nextImage}
            className="w-11 h-11 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-obsidian transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Back Link */}
        <div className="absolute top-28 left-6 md:left-12 z-20">
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian/40 backdrop-blur-md border border-white/10 text-pearl/80 text-[11px] uppercase tracking-[0.15em] font-medium hover:border-gold/30 hover:text-gold transition-all duration-300"
          >
            <ArrowLeft size={13} />
            <span>All Properties</span>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-28 right-6 md:right-12 z-20 flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-obsidian/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-pearl/60 hover:text-gold hover:border-gold/30 transition-all duration-300">
            <Heart size={16} />
          </button>
          <button className="w-10 h-10 rounded-full bg-obsidian/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-pearl/60 hover:text-gold hover:border-gold/30 transition-all duration-300">
            <Share2 size={16} />
          </button>
        </div>
      </section>

      {/* ─── Property Header ─── */}
      <section className="px-6 md:px-12 lg:px-24 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-obsidian/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] uppercase tracking-[0.2em] font-medium">
                    {property.type}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pearl/70 text-[10px] uppercase tracking-[0.2em] font-medium">
                    {property.status}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-pearl mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin size={14} className="text-gold" strokeWidth={1.5} />
                  <p className="text-pearl/60 font-sans text-sm">
                    {property.address}
                  </p>
                </div>
              </div>
              <div className="lg:text-right flex-shrink-0">
                <p className="text-gold tracking-[0.2em] text-[10px] uppercase font-semibold mb-2">
                  Asking Price
                </p>
                <p className="text-4xl md:text-5xl font-serif text-pearl">
                  {property.price}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <Bed size={18} className="text-gold/70" strokeWidth={1.5} />
                <div>
                  <p className="text-pearl text-lg font-serif">{property.beds}</p>
                  <p className="text-pearl/40 text-[10px] uppercase tracking-wider font-sans">
                    Bedrooms
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath size={18} className="text-gold/70" strokeWidth={1.5} />
                <div>
                  <p className="text-pearl text-lg font-serif">{property.baths}</p>
                  <p className="text-pearl/40 text-[10px] uppercase tracking-wider font-sans">
                    Bathrooms
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Maximize size={18} className="text-gold/70" strokeWidth={1.5} />
                <div>
                  <p className="text-pearl text-lg font-serif">{property.sqft}</p>
                  <p className="text-pearl/40 text-[10px] uppercase tracking-wider font-sans">
                    Sq. Ft.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gold/70" strokeWidth={1.5} />
                <div>
                  <p className="text-pearl text-lg font-serif">
                    {property.yearBuilt}
                  </p>
                  <p className="text-pearl/40 text-[10px] uppercase tracking-wider font-sans">
                    Year Built
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ruler size={18} className="text-gold/70" strokeWidth={1.5} />
                <div>
                  <p className="text-pearl text-lg font-serif">
                    {property.lotSize}
                  </p>
                  <p className="text-pearl/40 text-[10px] uppercase tracking-wider font-sans">
                    Lot Size
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Car size={18} className="text-gold/70" strokeWidth={1.5} />
                <div>
                  <p className="text-pearl text-lg font-serif">
                    {property.parking.split("-")[0]}
                  </p>
                  <p className="text-pearl/40 text-[10px] uppercase tracking-wider font-sans">
                    Parking
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14">
          {/* Left Column — Description & Details */}
          <div className="flex-1 min-w-0 space-y-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-pearl mb-8">
                About This Property
              </h2>
              <div className="space-y-6">
                {property.longDescription.map((para, i) => (
                  <p
                    key={i}
                    className="text-pearl/50 font-sans text-base md:text-lg leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-pearl mb-8">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <p className="text-pearl/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2 font-sans">
                      {h.label}
                    </p>
                    <p className="text-pearl text-lg font-serif">{h.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features & Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-pearl mb-8">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/[0.04]">
                    <Check size={14} className="text-gold flex-shrink-0" />
                    <span className="text-pearl/60 font-sans text-sm">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Thumbnails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-pearl mb-8">
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {property.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveImage(i);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`relative h-32 md:h-40 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i
                        ? "border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                        : "border-transparent hover:border-white/20"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                    {activeImage !== i && (
                      <div className="absolute inset-0 bg-obsidian/30 hover:bg-obsidian/10 transition-colors" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column — Sticky Agent Card */}
          <div className="lg:w-[340px] flex-shrink-0">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Agent Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8"
              >
                <p className="text-gold tracking-[0.3em] text-[10px] uppercase font-semibold mb-6">
                  Your Advisor
                </p>
                <h3 className="text-2xl font-serif text-pearl mb-1">
                  {property.agent.name}
                </h3>
                <p className="text-pearl/40 font-sans text-sm mb-8">
                  {property.agent.title}
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 text-pearl/60 hover:text-gold transition-colors font-sans text-sm"
                  >
                    <Phone size={14} className="text-gold/60" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 text-pearl/60 hover:text-gold transition-colors font-sans text-sm"
                  >
                    <Mail size={14} className="text-gold/60" />
                    {property.agent.email}
                  </a>
                </div>

                <button
                  onClick={() => setShowInquiry(!showInquiry)}
                  className="group w-full relative py-4 rounded-full border border-gold/50 text-pearl font-medium tracking-[0.2em] text-[11px] uppercase overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Inquire About Property</span>
                </button>
              </motion.div>

              {/* Inquiry Form (expandable) */}
              <AnimatePresence>
                {showInquiry && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                      <h4 className="text-lg font-serif text-pearl mb-6">
                        Private Inquiry
                      </h4>
                      <form className="space-y-5">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-pearl focus:outline-none focus:border-gold transition-colors placeholder:text-white/25"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-pearl focus:outline-none focus:border-gold transition-colors placeholder:text-white/25"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-pearl focus:outline-none focus:border-gold transition-colors placeholder:text-white/25"
                        />
                        <textarea
                          placeholder="Your message..."
                          rows={3}
                          defaultValue={`I'm interested in ${property.title} (${property.price}). Please contact me to arrange a viewing.`}
                          className="w-full bg-transparent border-b border-white/15 pb-3 text-sm text-pearl focus:outline-none focus:border-gold transition-colors placeholder:text-white/25 resize-none"
                        />
                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-full bg-gold text-obsidian font-medium tracking-[0.15em] text-[11px] uppercase hover:bg-gold-light transition-colors duration-300"
                        >
                          Send Inquiry
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Info */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8">
                <p className="text-gold tracking-[0.3em] text-[10px] uppercase font-semibold mb-5">
                  Property Details
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Property Type", value: property.type },
                    { label: "Year Built", value: String(property.yearBuilt) },
                    { label: "Lot Size", value: property.lotSize },
                    { label: "Parking", value: property.parking },
                    { label: "Status", value: property.status },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-white/[0.04]"
                    >
                      <span className="text-pearl/40 font-sans text-sm">
                        {item.label}
                      </span>
                      <span className="text-pearl font-sans text-sm">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PreFooterCTA />
      <Footer />
    </div>
  );
}
