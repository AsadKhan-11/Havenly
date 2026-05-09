"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you offer off-market property access?",
    a: "Yes. Due to the high-profile nature of our clientele, approximately 40% of our transactions occur off-market. We provide curated, discreet access to these exclusive listings."
  },
  {
    q: "In which global markets do you operate?",
    a: "We have dedicated teams in New York, Los Angeles, London, Monaco, and Dubai, with an extended network covering key luxury destinations worldwide."
  },
  {
    q: "How does the private viewing process work?",
    a: "We arrange entirely bespoke viewings. For our international clients, we coordinate seamless travel, discreet chauffeur services, and private after-hours access when requested."
  },
  {
    q: "Do you handle property management post-acquisition?",
    a: "Our concierge division offers comprehensive estate management services, ensuring your investment is perfectly maintained whether you are in residence or abroad."
  },
  {
    q: "How long does the entire acquisition process take?",
    a: "From initial consultation to closing, the typical timeline is 10–20 weeks. However, we've closed transactions in as little as 3 weeks for motivated buyers with clear criteria. We move at your pace."
  },
  {
    q: "Do you charge buyers a fee?",
    a: "In most markets, our commission is paid by the seller. For certain off-market transactions or buyer-representation-only engagements, we discuss fee structures transparently during the consultation phase."
  },
  {
    q: "Can you help with properties in markets you don't list?",
    a: "Absolutely. Our global network of partner brokerages extends far beyond our 12 primary markets. We can source and represent you in virtually any luxury market worldwide."
  },
  {
    q: "What makes your off-market access unique?",
    a: "Over 18 years, we've cultivated deep relationships with developers, estate attorneys, family offices, and private sellers. Many of our most significant transactions originate from referrals within this network — long before a property is ever publicly listed."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-obsidian px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold tracking-[0.4em] text-[10px] uppercase font-semibold mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-pearl"
          >
            Frequently Asked
          </motion.h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-white/[0.06] overflow-hidden bg-white/[0.02]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 px-6 md:px-8 flex justify-between items-center text-left transition-colors focus:outline-none group"
              >
                <span className="text-base md:text-lg font-serif text-pearl pr-8 group-hover:text-gold transition-colors">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === idx ? "bg-gold border-gold text-obsidian" : "border-white/15 text-pearl/40 group-hover:border-gold/40"}`}>
                  {openIndex === idx ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 md:px-8 pb-6 text-pearl/50 font-sans text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
