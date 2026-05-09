"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-obsidian pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/10 overflow-hidden">
      {/* ── Giant Watermark ── */}
      <div className="absolute inset-x-6 md:inset-x-12 lg:inset-x-24 inset-y-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-white/[0.03] leading-none text-[11vw] tracking-[0.1em]">
          HAVENLY
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
        {/* Left Column */}
        <div className="md:w-1/3">
          <Link href="/" className="text-3xl font-serif text-white tracking-widest inline-block mb-6">
            HAVENLY
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8 font-sans">
            Curating the finest homes for those who expect the extraordinary.
            A new standard in international luxury real estate.
          </p>
          <div className="flex gap-3 items-end">
            <input
              type="email"
              placeholder="Join our private list"
              className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors w-full sm:w-auto text-sm"
            />
            <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-pearl hover:border-gold hover:bg-gold hover:text-obsidian transition-all duration-300 flex-shrink-0">
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex gap-16 md:gap-24 flex-wrap">
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50 font-sans">
              <li><Link href="/properties" className="hover:text-gold transition-colors">Properties</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/process" className="hover:text-gold transition-colors">Process</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold mb-6">Offices</h4>
            <ul className="space-y-4 text-sm text-white/50 font-sans">
              <li>New York</li>
              <li>Los Angeles</li>
              <li>London</li>
              <li>Dubai</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/50 font-sans">
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Twitter X</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-sans">
        <p>&copy; {new Date().getFullYear()} Havenly Real Estate. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
