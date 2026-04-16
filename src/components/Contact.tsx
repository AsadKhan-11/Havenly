"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-pearl px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Contact Info */}
        <div className="lg:w-1/2">
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            Connect With Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-obsidian mb-12"
          >
            Start Your <br/> Journey.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8 font-sans"
          >
            <div>
              <p className="text-obsidian/50 text-xs uppercase tracking-widest mb-2 font-semibold">Global Headquarters</p>
              <p className="text-obsidian text-lg">One Vanderbilt Avenue<br/>New York, NY 10017</p>
            </div>
            <div>
              <p className="text-obsidian/50 text-xs uppercase tracking-widest mb-2 font-semibold">Direct Inquiries</p>
              <p className="text-obsidian text-lg">+1 (212) 555-0198<br/>inquiries@havenly.com</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-obsidian p-10 md:p-16 text-white"
        >
          <h3 className="text-2xl font-serif mb-10">Private Consultation</h3>
          <form className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/30" />
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/30" />
              </div>
            </div>
            <div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/30" />
            </div>
            <div>
              <input type="tel" placeholder="Phone Number (Optional)" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/30" />
            </div>
            <div>
              <textarea placeholder="How may we assist you?" rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-white/30 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-gold text-obsidian font-bold tracking-[0.2em] text-xs uppercase hover:bg-white transition-colors duration-300">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
