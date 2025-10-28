import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import PricingTeaser from './components/PricingTeaser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0B]">
      {/* Navbar (minimal) */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-[#0A0A0B]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow" />
            <span className="text-sm font-semibold tracking-wide text-white">QRA</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
          </nav>
          <a
            href="#pricing"
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-neutral-200"
          >
            Get early access
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <PricingTeaser />
      </main>

      <Footer />
    </div>
  );
}

export default App;
