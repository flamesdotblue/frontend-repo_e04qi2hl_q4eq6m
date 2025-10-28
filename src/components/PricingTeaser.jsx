import React from 'react';
import { motion } from 'framer-motion';

export default function PricingTeaser() {
  return (
    <section id="pricing" className="relative w-full bg-[#0A0A0B] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_60%)] blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold md:text-3xl"
            >
              Lifetime Deal launching soon
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-white/70"
            >
              Secure early access to QRA and lock in premium features for a one‑time price. Limited seats, premium support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-white/25"
              />
              <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Join waitlist
              </button>
            </motion.div>

            <div className="mt-6 text-xs text-white/50">No spam. Unsubscribe anytime.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
