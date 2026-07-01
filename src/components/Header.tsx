import React, { useState } from "react";
import { companyData } from "../data";
import { Factory, Menu, X, Mail, Phone, MapPin } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-brand-600 shadow-sm transition-all duration-300">
      {/* Top Banner with Quick Info */}
      <div className="bg-industrial-coal text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-brand-500" />
            <span className="font-medium text-gray-300">Survey No. 79/A, Road No - 4, Jigani, Bangalore • ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${companyData.phone}`} className="flex items-center gap-1.5 hover:text-brand-100 transition-colors">
              <Phone className="h-3.5 w-3.5 text-brand-500" />
              <span>{companyData.phone}</span>
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a href={`mailto:${companyData.email}`} className="flex items-center gap-1.5 hover:text-brand-100 transition-colors">
              <Mail className="h-3.5 w-3.5 text-brand-500" />
              <span>{companyData.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Exact vector replica of the golden-blue Singhania Industries logo from the letterhead */}
            <svg viewBox="0 0 100 100" className="h-12 w-12 shrink-0 transition-transform duration-300 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Deep Blue/Teal Swoop with Vertical Stem */}
              <path
                d="M88,31 C80,18 61,16 43,21 C25,27 23,45 30,59 C36,70 52,70 54,66 L60,32 L51,32 L51,52 C47,48 41,41 39,33 C38,25 48,22 62,25 C71,27 81,30 88,31 Z"
                fill="#004F6E"
              />
              {/* Gold Swoop */}
              <path
                d="M26,62 C34,75 53,81 72,74 C85,69 88,52 82,38 C76,28 67,28 62,32 C69,45 74,56 65,65 C58,72 44,70 26,62 Z"
                fill="#D1A153"
              />
              {/* Floating Gold Dot representing 'i' above the central stem */}
              <circle cx="55.5" cy="22" r="5.5" fill="#D1A153" />
            </svg>
            <div>
              <span className="block text-xl font-black font-display tracking-wider text-[#004F6E] group-hover:text-brand-600 transition-colors leading-none uppercase">
                Singhania
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] font-bold font-sans text-stone-500 leading-normal">
                Industries
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-brand-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-600 after:transition-all">
              About
            </a>
            <a href="#products-services" className="hover:text-brand-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-600 after:transition-all">
              Product & Services
            </a>
            <a href="#clients" className="hover:text-brand-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-600 after:transition-all">
              OEM Brands
            </a>
            <a href="#leadership" className="hover:text-brand-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-600 after:transition-all">
              Our Leadership
            </a>
            <a href="#contact" className="hover:text-brand-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-600 after:transition-all">
              Contact
            </a>
          </nav>

          {/* Nav Right Action - Primary Keyword Highlight */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:block text-right">
              <span className="text-[10px] font-mono block uppercase text-brand-600 font-bold">
                Primary segment
              </span>
              <span className="text-xs text-gray-500 font-medium font-sans">
                LPG Parts & Powder Coating
              </span>
            </div>
            <a
              href="#contact"
              className="bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-600 transition-colors py-2 border-b border-gray-50"
            >
              About Company
            </a>
            <a
              href="#products-services"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-600 transition-colors py-2 border-b border-gray-50"
            >
              Product & Services
            </a>
            <a
              href="#clients"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-600 transition-colors py-2 border-b border-gray-50"
            >
              OEM Brands
            </a>
            <a
              href="#leadership"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-600 transition-colors py-2 border-b border-gray-50"
            >
              Our Leadership
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-brand-600 transition-colors py-2"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 rounded-lg block shadow-sm"
            >
              Inquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
