"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  Bath,
  Maximize,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";
import { properties } from "@/lib/properties";

const categories = ["All", "Villa", "Penthouse", "Estate"];
const locations = [
  "All Locations",
  ...Array.from(new Set(properties.map((p) => p.location))),
];

export function PropertiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All Locations");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = properties.filter((p) => {
    const catMatch = activeCategory === "All" || p.type === activeCategory;
    const locMatch =
      activeLocation === "All Locations" || p.location === activeLocation;
    return catMatch && locMatch;
  });

  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />

      {/* ─── Hero Banner with Image ─── */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Luxury Properties"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-24 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-4"
            >
              Exclusive Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-pearl leading-[1.1] mb-5"
            >
              Our Properties
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-pearl/50 font-sans text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              A curated collection of the world's most extraordinary residences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Filters ─── */}
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8"
          >
            {/* Category Tabs */}
            <div className="flex items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold text-obsidian"
                      : "text-pearl/50 hover:text-pearl hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Location & Count */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-pearl/60 text-[11px] uppercase tracking-[0.15em] font-medium hover:border-white/20 transition-colors"
                >
                  <MapPin size={13} />
                  <span>{activeLocation}</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${showFilters ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-64 bg-obsidian border border-white/10 rounded-2xl py-2 z-50 shadow-2xl shadow-black/40 backdrop-blur-xl"
                    >
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setActiveLocation(loc);
                            setShowFilters(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-sm font-sans transition-colors ${
                            activeLocation === loc
                              ? "text-gold bg-gold/5"
                              : "text-pearl/60 hover:text-pearl hover:bg-white/5"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-pearl/30 text-sm font-sans">
                {filtered.length}{" "}
                {filtered.length === 1 ? "property" : "properties"}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Property Grid ─── */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeLocation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filtered.map((property, idx) => (
                <motion.article
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-gold/20 transition-all duration-500"
                >
                  <Link href={`/properties/${property.slug}`}>
                    {/* Image */}
                    <div className="relative h-72 md:h-80 overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-1.5 rounded-full bg-obsidian/60 backdrop-blur-md border border-white/10 text-pearl text-[10px] uppercase tracking-[0.2em] font-medium">
                          {property.status}
                        </span>
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-5 right-5">
                        <span className="px-4 py-1.5 rounded-full bg-gold/10 backdrop-blur-md border border-gold/20 text-gold text-[10px] uppercase tracking-[0.2em] font-medium">
                          {property.type}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-5 left-5">
                        <p className="text-2xl md:text-3xl font-serif text-white">
                          {property.price}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7">
                      <div className="flex items-center gap-1.5 mb-3">
                        <MapPin size={12} className="text-gold" strokeWidth={1.5} />
                        <p className="text-gold/80 tracking-[0.2em] text-[10px] uppercase font-medium">
                          {property.location}
                        </p>
                      </div>

                      <h2 className="text-xl md:text-2xl font-serif text-pearl mb-3 group-hover:text-gold-light transition-colors duration-300">
                        {property.title}
                      </h2>

                      <p className="text-pearl/40 text-sm font-sans leading-relaxed mb-6 line-clamp-2">
                        {property.description}
                      </p>

                      <div className="flex items-center gap-5 pb-6 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                          <Bed size={14} className="text-pearl/30" strokeWidth={1.5} />
                          <span className="text-pearl/60 text-xs font-sans">{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath size={14} className="text-pearl/30" strokeWidth={1.5} />
                          <span className="text-pearl/60 text-xs font-sans">{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Maximize size={14} className="text-pearl/30" strokeWidth={1.5} />
                          <span className="text-pearl/60 text-xs font-sans">{property.sqft} sqft</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-5 mb-6">
                        {property.features.slice(0, 4).map((feat) => (
                          <span
                            key={feat}
                            className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-pearl/40 text-[10px] uppercase tracking-[0.1em] font-medium"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      <span className="group/btn inline-flex items-center gap-3 text-pearl uppercase tracking-[0.2em] text-[11px] font-medium transition-colors hover:text-gold">
                        <span>View Property</span>
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 group-hover/btn:border-gold group-hover/btn:bg-gold group-hover/btn:text-obsidian transition-all duration-300">
                          <ArrowRight size={12} />
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <p className="text-pearl/30 font-serif text-2xl mb-4">
                No properties match your criteria
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setActiveLocation("All Locations");
                }}
                className="text-gold text-sm uppercase tracking-[0.2em] font-medium hover:text-gold-light transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <PreFooterCTA />
      <Footer />
    </div>
  );
}
