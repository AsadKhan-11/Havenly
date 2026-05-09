"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, Globe, Shield, Heart, Users, Sparkles, Star, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";

/* ── Animated Counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      start = start || ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const team = [
  { name: "Alexander Mercer", title: "Founder & CEO", bio: "Former Goldman Sachs VP with 20+ years in luxury real estate advisory across three continents." },
  { name: "Victoria Ashworth", title: "Senior Director", bio: "Specialized in Beverly Hills and Los Angeles ultra-premium transactions exceeding $20M." },
  { name: "James Pemberton", title: "Managing Director, NY", bio: "Manhattan's foremost authority on Billionaire's Row and trophy penthouse acquisitions." },
  { name: "Elena Konstantinou", title: "European Division Director", bio: "Fluent in five languages, representing clients across Monaco, Lake Como, and the Greek islands." },
  { name: "Rashid Al-Mansouri", title: "Middle East Director", bio: "Dubai and Abu Dhabi specialist with deep connections to the region's most exclusive developments." },
  { name: "Sophie Beaumont", title: "European Estates Director", bio: "Heritage property expert with a background in architectural conservation and restoration." },
];

const values = [
  { icon: Shield, title: "Absolute Discretion", desc: "Every transaction is handled with the highest level of confidentiality and privacy." },
  { icon: Award, title: "Uncompromised Excellence", desc: "We accept only properties that meet our rigorous standards of quality and distinction." },
  { icon: Globe, title: "Global Perspective", desc: "A worldwide network spanning 12 exclusive markets across four continents." },
  { icon: Heart, title: "Client-First Philosophy", desc: "Your aspirations guide every decision we make — before, during, and after the transaction." },
  { icon: Users, title: "Trusted Relationships", desc: "Built on decades of integrity, our client relationships span generations." },
  { icon: Sparkles, title: "Curated Experience", desc: "Every touchpoint is designed to be seamless, elegant, and effortlessly refined." },
];

const timeline = [
  { year: "2008", title: "Founded in New York", desc: "Havenly was established with a singular vision: to redefine luxury real estate." },
  { year: "2012", title: "European Expansion", desc: "Opened offices in London and Monaco, extending our reach across the Atlantic." },
  { year: "2016", title: "$1B Milestone", desc: "Surpassed one billion dollars in cumulative global sales volume." },
  { year: "2019", title: "Middle East & Asia", desc: "Launched Dubai and Sydney divisions, completing our four-continent presence." },
  { year: "2023", title: "$2B+ Sales Volume", desc: "Crossed the two billion mark with 450+ estates sold worldwide." },
  { year: "2026", title: "A New Chapter", desc: "Expanding into curated lifestyle services and private aviation partnerships." },
];

export function AboutPage() {
  return (
    <div className="bg-obsidian min-h-screen overflow-x-hidden">
      <Navbar />

      {/* 1 ── Hero ── */}
      <section className="relative h-screen overflow-hidden">
        <Image src="/office.png" alt="Havenly Headquarters" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-24 pb-16 md:pb-20 max-w-7xl mx-auto">
          <motion.p {...fadeUp} transition={{ duration: 0.6 }} className="text-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-4">Our Story</motion.p>
          <motion.h1 {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-serif text-pearl leading-[1.1] mb-5">About Havenly</motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.8, delay: 0.25 }} className="text-pearl/50 font-sans text-lg md:text-xl max-w-2xl leading-relaxed">A global authority in luxury real estate, curating the world's most extraordinary residences since 2008.</motion.p>
        </div>
      </section>

      {/* 2 ── Mission ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-5">Our Mission</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl mb-8 leading-[1.15]">Elevating the Art of <span className="italic text-gold/90">Modern Living</span></h2>
            <div className="space-y-5">
              <p className="text-pearl/50 font-sans text-base md:text-lg leading-relaxed">Havenly was founded on the belief that finding an extraordinary home should itself be an extraordinary experience. We don't simply list properties — we curate a collection of the world's most architecturally significant residences.</p>
              <p className="text-pearl/50 font-sans text-base md:text-lg leading-relaxed">Our team of seasoned advisors brings decades of expertise across global markets, combining deep local knowledge with an international perspective that opens doors others cannot.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <Image src="/team.png" alt="Havenly Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* 3 ── Stats ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">
          {[{ n: 2, s: "B+", l: "Global Sales Volume" }, { n: 450, s: "+", l: "Estates Sold" }, { n: 12, s: "", l: "Exclusive Markets" }, { n: 18, s: "", l: "Years of Excellence" }].map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <p className="text-4xl md:text-5xl font-serif text-pearl mb-2">$<Counter target={s.n} suffix={s.s} /></p>
              <p className="text-pearl/40 text-xs uppercase tracking-[0.2em] font-sans">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4 ── Values ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4">What Defines Us</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-gold/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors"><v.icon size={22} className="text-gold" /></div>
                <h3 className="text-xl font-serif text-pearl mb-3">{v.title}</h3>
                <p className="text-pearl/40 font-sans text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── Heritage Timeline ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl">Heritage & Milestones</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] md:-translate-x-px" />
            {timeline.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className={`relative flex items-start gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <p className="text-gold font-serif text-2xl mb-2">{t.year}</p>
                  <h3 className="text-xl font-serif text-pearl mb-2">{t.title}</h3>
                  <p className="text-pearl/40 font-sans text-sm leading-relaxed">{t.desc}</p>
                </div>
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1.5 mt-2 z-10 shadow-[0_0_12px_rgba(212,175,55,0.3)]" />
                <div className="md:flex-1" />
                <div className="md:hidden pl-12">
                  <p className="text-gold font-serif text-xl mb-1">{t.year}</p>
                  <h3 className="text-lg font-serif text-pearl mb-1">{t.title}</h3>
                  <p className="text-pearl/40 font-sans text-sm">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── Team ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl">Meet the Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-gold/20 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 text-gold font-serif text-xl">{m.name.split(" ").map(n => n[0]).join("")}</div>
                <h3 className="text-xl font-serif text-pearl mb-1">{m.name}</h3>
                <p className="text-gold/70 text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.title}</p>
                <p className="text-pearl/40 font-sans text-sm leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 ── Global Presence ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-5">Worldwide Network</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl mb-8">Global <span className="italic text-gold/90">Presence</span></h2>
            <p className="text-pearl/50 font-sans text-base md:text-lg leading-relaxed mb-10">Our offices span four continents, giving our clients unrivalled access to off-market opportunities and local expertise in every major luxury market.</p>
            <div className="grid grid-cols-2 gap-4">
              {["New York", "Los Angeles", "London", "Monaco", "Dubai", "Sydney", "Lake Como", "Mykonos"].map((city, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-2 py-2">
                  <MapPin size={12} className="text-gold/60" /><span className="text-pearl/60 font-sans text-sm">{city}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image src="/hero.png" alt="Global Presence" fill className="object-cover" />
            <div className="absolute inset-0 bg-obsidian/40" />
          </motion.div>
        </div>
      </section>

      {/* 8 ── Philosophy ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-5">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif text-pearl mb-8 leading-[1.15]">&ldquo;We don&apos;t sell homes. We <span className="italic text-gold/90">match souls</span> with spaces.&rdquo;</h2>
            <p className="text-pearl/50 font-sans text-lg leading-relaxed mb-6">Every property in our collection has been personally vetted by our team. We walk every room, study every view, and understand the story of every space — because we believe the right home isn&apos;t found, it&apos;s felt.</p>
            <p className="text-pearl/50 font-sans text-lg leading-relaxed">This philosophy extends beyond the transaction. Our clients become part of the Havenly family, with access to our lifestyle concierge, private events, and a global network of like-minded individuals who share a passion for extraordinary living.</p>
          </motion.div>
        </div>
      </section>

      {/* 9 ── Awards ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4">Recognition</p>
            <h2 className="text-3xl md:text-4xl font-serif text-pearl">Awards & Accolades</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ t: "Best Luxury Brokerage", s: "Luxury Real Estate Awards 2025" }, { t: "Top 1% Global Agent", s: "Christie's International" }, { t: "Excellence in Service", s: "Robb Report 2024" }, { t: "Innovation Award", s: "PropTech Global 2023" }].map((a, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <Star size={24} className="text-gold mx-auto mb-4" />
                <h3 className="text-sm font-serif text-pearl mb-2">{a.t}</h3>
                <p className="text-pearl/30 text-[10px] uppercase tracking-[0.15em] font-sans">{a.s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 ── Testimonials (shared component) ── */}
      <Testimonials />

      {/* 11 ── Contact Form (shared component) ── */}
      <Contact />

      {/* 12 ── Pre-Footer CTA ── */}
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
