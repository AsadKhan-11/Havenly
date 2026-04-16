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
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-pearl border-t border-obsidian/5 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-obsidian"
          >
            Inquiries
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-obsidian/10"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex justify-between items-center text-left hover:text-gold transition-colors focus:outline-none"
              >
                <span className="text-lg md:text-xl font-serif text-obsidian pr-8">{faq.q}</span>
                <span className="text-obsidian/40">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
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
                    <p className="pb-8 text-obsidian/60 font-sans leading-relaxed">
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
