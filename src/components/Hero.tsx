import React from "react";
import { companyData } from "../data";
import { Shield, Sparkles, Award, ArrowRight, ClipboardCheck } from "lucide-react";

// Import images with ts-ignore to prevent static asset compilation type-checks from complaining
// @ts-ignore
import industrialHero from "../assets/images/industrial_hero_1781674312873.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Established 2021 • ISO 9001:2015 Certified • Jigani, Bangalore</span>
            </div>

            {/* Main Catchy Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
                Singhania <span className="text-brand-500">Industries</span>
              </h1>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-bold text-brand-100 font-sans">
                  {companyData.primaryKeyword}
                </p>
                <p className="text-md sm:text-lg font-semibold text-brand-400 font-sans tracking-wide">
                  {companyData.secondaryKeyword}
                </p>
              </div>
              <p className="text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                {companyData.tagline} We manufacture premium gas components and advanced surface treatments, partnering seamlessly with absolute industry titans.
              </p>
            </div>

            {/* Info Highlights */}
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-brand-500/20 text-brand-400 mt-1">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-200">Zero Leakage</h4>
                  <p className="text-xs text-slate-400">100% hydraulically leak-tested pipes</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-brand-500/20 text-brand-400 mt-1">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-200">Premium Finish</h4>
                  <p className="text-xs text-slate-400">Superior durability coating finish endurance</p>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#products-services"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3.5 rounded-lg shadow-lg hover:shadow-brand-500/10 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Explore Offerings
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/60 font-medium px-6 py-3.5 rounded-lg transition-all duration-200 text-sm"
              >
                <ClipboardCheck className="h-4 w-4 text-brand-500" />
                Request Technical Specs
              </a>
            </div>

            {/* Quick Stats Panel */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 max-w-md">
              <div>
                <span className="block text-3xl font-bold font-display text-brand-400">5+</span>
                <span className="block text-xs uppercase tracking-wider font-mono text-slate-400">OEM Clients Supported</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-display text-brand-400">100K+</span>
                <span className="block text-xs uppercase tracking-wider font-mono text-slate-400">LPG Parts Daily</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-display text-brand-400">2021</span>
                <span className="block text-xs uppercase tracking-wider font-mono text-slate-400">Manufacturing Base</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Imagery & Badges */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative group max-w-md lg:max-w-none w-full">
              {/* Outer Decorative Glow backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-2xl">
                <img
                  src={industrialHero}
                  alt="Singhania Industries Jigani Factory Floor"
                  className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                {/* floating asset badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-brand-400 uppercase tracking-widest font-bold">Manufacturing hub</span>
                    <span className="block text-sm font-semibold text-white">Jigani Industrial Area phase III</span>
                  </div>
                  <span className="text-xs bg-slate-800 text-zinc-300 font-mono px-2.5 py-1 rounded border border-slate-700">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
