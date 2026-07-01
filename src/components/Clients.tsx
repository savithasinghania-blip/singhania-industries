import React from "react";
import { companyData } from "../data";
import { ShieldCheck, ArrowUpRight, Award, Flame, Zap, ShieldAlert } from "lucide-react";

export default function Clients() {
  const lpgBrands = ["Prestige", "V-Guard", "Butterfly", "Local Stove OEMs"];
  const coatingBrands = ["TVS Motors", "Harley Davidson (Sub-tier)", "Karnataka Industrial OEMs", "Heavy Equipment Fabricators"];

  return (
    <section id="clients" className="py-16 bg-industrial-coal text-white relative overflow-hidden text-left">
      {/* Visual Accents */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Metrics & Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded inline-block">
              INDUSTRIAL COMPLIANCE
            </span>
            <h3 className="text-3xl font-extrabold font-display leading-tight">
              Trusted Partner to Leading National Brands
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Singhania Industries complies with all major original equipment manufacturer (OEM) standards we support. Under Vasudev Singhania's direction, we deploy strict process controls to ensure zero-defect shipment logs.
            </p>

            {/* Certifications and Specs Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <ShieldCheck className="h-5 w-5 text-emerald-450 text-emerald-550 mb-2" />
                <h4 className="font-semibold text-xs text-white">ISO Compliant</h4>
                <p className="text-[10px] text-slate-400">Strict structural checks on gas components</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <Award className="h-5 w-5 text-brand-450 text-brand-400 mb-2" />
                <h4 className="font-semibold text-xs text-white">Tier-1 Pretreatment</h4>
                <p className="text-[10px] text-slate-400">Multi-stage pickling for maximum paint bond</p>
              </div>
            </div>
          </div>

          {/* Right Column: Beautifully Styled Brands Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* LPG Spare Parts OEM Partners */}
            <div className="bg-slate-850/80 p-6 rounded-2xl border border-slate-750/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="text-xs uppercase tracking-wider font-mono text-slate-300 font-bold">LPG Component OEM Brands</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-450 text-emerald-400">Authorized Supplier</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {lpgBrands.map((brand, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 hover:border-brand-500/40 p-4 rounded-lg text-center transition-all duration-300 group">
                    <span className="block text-xs font-bold font-display text-gray-300 group-hover:text-brand-400">
                      {brand}
                    </span>
                    <span className="block text-[9px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">LPG Spare parts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Powder Coating contracting list */}
            <div className="bg-slate-850/80 p-6 rounded-2xl border border-slate-750/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-500" />
                  <span className="text-xs uppercase tracking-wider font-mono text-slate-300 font-bold">Powder Coating Contracting Partners</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-400">Qualified Vendor</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {coatingBrands.map((brand, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 hover:border-brand-500/40 p-4 rounded-lg text-center transition-all duration-300 group">
                    <span className="block text-xs font-bold font-display text-gray-300 group-hover:text-brand-400">
                      {brand}
                    </span>
                    <span className="block text-[9px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">Powder Coated</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
