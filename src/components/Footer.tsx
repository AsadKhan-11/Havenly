"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-obsidian pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
        
        <div className="md:w-1/3">
          <Link href="/" className="text-3xl font-serif text-white tracking-widest inline-block mb-6">
            HAVENLY
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8 font-sans">
            Curating the finest homes for those who expect the extraordinary. 
            A new standard in international luxury real estate.
          </p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Join our private list" 
              className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors w-full sm:w-auto"
            />
            <button className="text-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">Subscribe</button>
          </div>
        </div>

        <div className="flex gap-16 md:gap-24 flex-wrap">
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50 font-sans">
              <li><Link href="#" className="hover:text-gold transition-colors">Properties</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Team</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Journal</Link></li>
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
              <li><Link href="#" className="hover:text-gold transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Twitter X</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Email Us</Link></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-sans">
        <p>&copy; {new Date().getFullYear()} Havenly Real Estate. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white/60">Privacy Policy</Link>
          <Link href="#" className="hover:text-white/60">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
