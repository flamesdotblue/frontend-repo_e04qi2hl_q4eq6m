import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Brain } from 'lucide-react';

const features = [
  {
    title: 'AI Scheduling',
    description:
      'Let QRA find optimal meeting times across time zones, priorities, focus blocks, and preferences — automatically.',
    icon: Brain,
    accent: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    title: 'Calendar Sync',
    description:
      'Two-way sync with Google, Outlook, and Apple Calendar. Conflicts avoided in real-time with smart holds.',
    icon: Calendar,
    accent: 'from-indigo-500/20 to-sky-500/20',
  },
  {
    title: 'Team Bookings',
    description:
      'Round-robin, collective, and priority routing for teams. Automatically route to the best person for each meeting.',
    icon: Users,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0A0A0B] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_60%)] blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Designed for momentum</h2>
          <p className="mt-3 text-white/60">Elegant automation that respects your time and amplifies flow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className={`absolute -top-10 -right-10 h-36 w-36 rounded-full bg-gradient-to-br ${f.accent} blur-2xl`} />
              <div className="relative flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-white shadow-inner">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.description}</p>
                </div>
              </div>
              <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="relative mt-4 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white">
                Learn more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
