import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0A0B] pb-12 pt-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)] blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              QRA
            </div>
            <h4 className="mt-4 text-lg font-medium text-white/90">
              Modern scheduling and meeting automation
            </h4>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Built for operators, founders, and teams who value deep work and momentum.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:hello@qra.app"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} QRA — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
