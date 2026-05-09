"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    lastScrollY.current = latest;

    setScrolled(latest > 50);

    // Hide when scrolling down past 150px, show when scrolling up
    if (direction === "down" && latest > 150) {
      setHidden(true);
    } else if (direction === "up") {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500",
        scrolled ? "bg-obsidian/90 backdrop-blur-md border-b border-pearl/10 py-4" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-2xl font-serif text-pearl tracking-widest">
        HAVENLY
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-pearl/80">
        <Link href="/about" className="hover:text-gold transition-colors">About</Link>
        <Link href="/properties" className="hover:text-gold transition-colors">Properties</Link>
        <Link href="/process" className="hover:text-gold transition-colors">Process</Link>
        <Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full border border-gold/60 text-gold text-xs font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-gold hover:text-obsidian hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
        >
          Inquire
        </Link>
        <button className="md:hidden text-pearl hover:text-gold transition-colors">
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>
    </motion.header>
  );
}
