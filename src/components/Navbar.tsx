"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500",
        scrolled ? "bg-obsidian/90 backdrop-blur-md border-b border-pearl/10 py-4" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-2xl font-serif text-pearl tracking-widest">
        HAVENLY
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-pearl/80">
        <Link href="#properties" className="hover:text-gold transition-colors">Properties</Link>
        <Link href="#about" className="hover:text-gold transition-colors">About</Link>
        <Link href="#process" className="hover:text-gold transition-colors">Process</Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link href="#contact" className="hidden md:block text-xs font-semibold tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors">
          Inquire
        </Link>
        <button className="text-pearl hover:text-gold transition-colors">
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>
    </motion.header>
  );
}
