import React from "react";
import { companyData } from "../data";
import { Factory, ShieldCheck, Milestone, FileText, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-industrial-coal text-white border-t border-slate-800">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 text-left">
                    {/* Column 1: Brand & Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Deep Blue/Teal Swoop with Vertical Stem */}
                <path
                  d="M88,31 C80,18 61,16 43,21 C25,27 23,45 30,59 C36,70 52,70 54,66 L60,32 L51,32 L51,52 C47,48 41,41 39,33 C38,25 48,22 62,25 C71,27 81,30 88,31 Z"
                  fill="#38BDF8" // Vibrant light sky blue for dark backdrop contrast
                />
                {/* Gold Swoop */}
                <path
                  d="M26,62 C34,75 53,81 72,74 C85,69 88,52 82,38 C76,28 67,28 62,32 C69,45 74,56 65,65 C58,72 44,70 26,62 Z"
                  fill="#FBBF24" // Vibrant gold for dark backdrop contrast
                />
                {/* Floating Gold Dot representing 'i' above the central stem */}
                <circle cx="55.5" cy="22" r="5.5" fill="#FBBF24" />
              </svg>
              <div>
                <span className="block text-lg font-black font-display tracking-wider text-white leading-none uppercase">
                  Singhania
                </span>
                <span className="block text-[8px] uppercase tracking-[0.2em] font-bold font-sans text-stone-400">
                  Industries
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Established in 2021, Singhania Industries operates high-precision manufacturing plants in Bangalore, Karnataka. Under the direct leadership of founder Vasudev Singhania, we power major national household and utility brands.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-1 text-[10px] uppercase font-mono text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Zero Leakage Quality Verified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Jump Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-350 text-slate-300">
              Navigation Map
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Singhania
                </a>
              </li>
              <li>
                <a href="#founder" className="text-slate-400 hover:text-white transition-colors">
                  Vasudev Singhania's Biography
                </a>
              </li>
              <li>
                <a href="#products-services" className="text-slate-400 hover:text-white transition-colors">
                  Products & Services Catalog
                </a>
              </li>
              <li>
                <a href="#clients" className="text-slate-400 hover:text-white transition-colors">
                  OEM Brands Showcase
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Disclosures */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Applet Information
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              <strong>Informational-Only</strong>: This portal provides certified technical company profiles and process parameters for partners, prospective procurement buyers, and visitors. No transactional checkouts or public ordering matrices are supported.
            </p>
            <div className="p-3.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-brand-400 font-mono leading-snug">
              Singhania Industries <br /> {companyData.address}
            </div>
          </div>

        </div>
      </div>

      {/* Lower Copyright section */}
      <div className="bg-slate-950 text-slate-500 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div className="text-slate-400 text-center sm:text-left">
            <span>© {currentYear} <strong>Singhania Industries</strong>. All rights reserved.</span>
            <span className="block mt-1 sm:mt-0 sm:inline text-slate-600 sm:before:content-['|'] sm:before:mx-2">
              {companyData.address}
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-400 px-3.5 py-2 rounded-lg border border-slate-800 transition-colors text-xs font-semibold"
          >
            <ArrowUp className="h-4 w-4" />
            <span>To Top</span>
          </button>
        </div>
      </div>

    </footer>
  );
}
