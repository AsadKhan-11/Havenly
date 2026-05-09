"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const top = visible.reduce((a, b) =>
            (a.boundingClientRect.top < b.boundingClientRect.top ? a : b)
          );
          setActiveId(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    elements.forEach((el) => observerRef.current?.observe(el!));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-obsidian min-h-screen" style={{ overflowX: "clip" }}>
      <Navbar />

      {/* ── Header ── */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-pearl mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-pearl/40 font-sans text-base md:text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-pearl/25 font-sans text-xs mt-6 uppercase tracking-[0.15em]"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* ── Body: TOC + Content ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Sticky TOC */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:scrollbar-none">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
                <p className="text-pearl/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-5">
                  On This Page
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-sans transition-all duration-300 ${
                        activeId === s.id
                          ? "bg-gold/10 text-gold border-l-2 border-gold"
                          : "text-pearl/40 hover:text-pearl/70 hover:bg-white/[0.03] border-l-2 border-transparent"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-16">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                >
                  <h2 className="text-2xl md:text-3xl font-serif text-pearl mb-6 pb-4 border-b border-white/[0.06]">
                    <span className="text-gold/40 mr-3 font-sans text-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-pearl/50 font-sans text-sm md:text-base leading-[1.8]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
}
