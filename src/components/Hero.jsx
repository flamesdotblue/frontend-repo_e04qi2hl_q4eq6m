import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0A0B] text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-20 md:grid-cols-2 md:gap-16 md:pt-28">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            AI-powered scheduling
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
            style={{ fontFamily: 'Geist, Inter, system-ui, sans-serif' }}
          >
            Book smarter with <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">QUVRA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-xl text-base text-white/70 md:text-lg"
          >
            QRA is a modern scheduling and meeting automation platform that optimizes time across teams using real‑time availability, preferences, and AI. Less back‑and‑forth. More deep work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Get early access
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            >
              Explore features
            </a>
          </motion.div>

          {/* Trusted logos under hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-8 opacity-80"
          >
            <span className="text-xs text-white/50">Trusted by teams at</span>
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium tracking-wider text-white/70">Linear</span>
              <span className="text-sm font-medium tracking-wider text-white/70">Vercel</span>
              <span className="text-sm font-medium tracking-wider text-white/70">Notion</span>
              <span className="text-sm font-medium tracking-wider text-white/70">Superhuman</span>
            </div>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative aspect-[4/3] w-full md:aspect-[5/4]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_120px_-30px_rgba(79,70,229,0.5)] backdrop-blur">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
