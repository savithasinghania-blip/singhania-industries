/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { companyData } from "./data";
import { ShieldCheck, Flame, Layers } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Dynamic Header with Quick Contact Details */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section with main industrial image, keywords and volume indicators */}
        <Hero />

        {/* Informational Announcement Bar */}
        <div className="bg-emerald-50 border-y border-emerald-100 py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs text-emerald-800 font-medium">
            <div className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>OFFICIAL CORPORATE PORTAL</span>
            </div>
            <span className="hidden sm:inline text-emerald-200">|</span>
            <p className="text-center">
              Singhania Industries serves prestige appliance manufacturers on contract basis. This is an informational inquiry desk.
            </p>
          </div>
        </div>

        {/* About segment (History, Mission, Vision, Founders Bio Card with photo placeholders) */}
        <About />

        {/* Highlights Division Banner - LPG gas & Powder coating custom showcase */}
        <section className="bg-slate-100 border-y border-slate-200/60 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-red-55 w-11 h-11 bg-red-50 text-red-600 flex items-center justify-center rounded-lg border border-red-100 shrink-0 shadow-sm">
                  <Flame className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-industrial-coal font-display">LPG Parts Specialist</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Supplying heavy frames, robust burner bases, batti stands, pan supports, and seamless manifold pipe connections.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-brand-55 w-11 h-11 bg-brand-50 text-brand-600 flex items-center justify-center rounded-lg border border-brand-100 shrink-0 shadow-sm">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-industrial-coal font-display">Toughened Powder Coatings</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Applying industrial grade, anti-rust layers delivering exceptional defense logs for premium longevity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="bg-indigo-55 w-11 h-11 bg-indigo-50 text-indigo-700 flex items-center justify-center rounded-lg border border-indigo-100 shrink-0 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-industrial-coal font-display">Contract Security</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    100% compliant with drawings and tolerances under Directorship guidelines of Vasudev Singhania.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Division tabs & detailed interactive specifications inspector */}
        <Products />

        {/* Contract client branding grid panel */}
        <Clients />

        {/* Our Leadership biography and timeline */}
        <Leadership />

        {/* Contact panel with embedded maps, directions and client-side message processor */}
        <Contact />
      </main>

      {/* Structured informational footer */}
      <Footer />
    </div>
  );
}
