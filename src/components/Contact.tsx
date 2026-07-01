import React, { useState } from "react";
import { companyData } from "../data";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessCategory: "LPG-Spares",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate a secure industrial API proxy call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessCategory: "LPG-Spares",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-industrial-coal">
            Partner with Singhania Industries
          </h2>
          <div className="h-1 w-20 bg-brand-600 mx-auto rounded-full" />
          <p className="text-base text-gray-500 font-sans">
            Have a custom requirement, drawing specification, or volume powder-coating contract? Reach out directly. Our technical division will respond within 24 working hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info cards + Google Maps embedded wrapper */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-industrial-coal">
                Contact Information
              </h3>
              <p className="text-sm text-gray-500">
                You can reach us through any of our channels or visit our corporate manufacturing facility directly.
              </p>
            </div>

            {/* Quick Contact Info Item List */}
            <div className="space-y-4">
              {/* Phone item */}
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-brand-500/20 hover:shadow-sm transition-all group"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">Call Representative</span>
                  <span className="block text-base font-bold text-industrial-slate font-sans">{companyData.phone}</span>
                </div>
              </a>

              {/* Email item */}
              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-brand-500/20 hover:shadow-sm transition-all group"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">Business Email</span>
                  <span className="block text-base font-bold text-industrial-slate font-sans">{companyData.email}</span>
                </div>
              </a>

              {/* Map/Location item */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 shrink-0">
                <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">Plant Headquarters</span>
                  <span className="block text-sm font-bold text-industrial-slate font-sans">
                    {companyData.address}
                  </span>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 shrink-0">
                <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">Operating Schedule</span>
                  <span className="block text-xs font-bold text-industrial-slate font-sans">
                    Monday to Saturday: 9:00 AM — 6:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps Embed with Link to open map directions */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-gray-400 font-bold uppercase">Plant Map Location</span>
                <a
                  href={companyData.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  View Route Directions
                </a>
              </div>
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-gray-200 bg-slate-100 shadow-inner">
                {/* Embedded Map iframe */}
                <iframe
                  title="Singhania Industries Jigani Location"
                  src={companyData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity contact form */}
          <div className="lg:col-span-7 bg-slate-50 border-y border-r border-gray-200 border-l-4 border-brand-600 rounded-r-lg p-6 sm:p-8 shadow-md space-y-6">
            <div className="space-y-2 border-b border-gray-200/50 pb-4">
              <h3 className="text-xl font-bold font-display text-industrial-coal">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-500">
                Ensure drawing specifications, standard requirements, or query segments are clearly detailed below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form Feedback Banner */}
              {submitStatus === "success" && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm">Message Transmitted Successfully!</h5>
                    <p className="text-xs text-emerald-700">Thank you for contacting singhania industries. Vasudev Singhania's desk has received your request and an engineer will reply to you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                  <ShieldAlert className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm">Missing Required Fields</h5>
                    <p className="text-xs text-rose-700">Please provide a valid Name, Email, and message inquiry details before sending.</p>
                  </div>
                </div>
              )}

              {/* Form Body Inputs */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase text-gray-500 mb-1.5 focus:text-brand-600">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., Suresh Kumar"
                    className="w-full bg-white border border-gray-250 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all min-h-[44px]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase text-gray-500 mb-1.5">
                    Your Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E.g., mail@company.com"
                    className="w-full bg-white border border-gray-250 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase text-gray-500 mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="E.g., +91 90000 00000"
                    className="w-full bg-white border border-gray-250 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all min-h-[44px]"
                  />
                </div>
                <div>
                  <label htmlFor="businessCategory" className="block text-xs font-mono font-bold uppercase text-gray-500 mb-1.5">
                    Core Business Unit Inquiry
                  </label>
                  <select
                    id="businessCategory"
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-250 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all min-h-[44px]"
                  >
                    <option value="LPG-Spares">LPG Spare Parts Mfg</option>
                    <option value="Powder-Coating">Powder Coating Services</option>
                    <option value="General-OEM">General OEM Contract Partnership</option>
                    <option value="Career">Career & Internships</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase text-gray-500 mb-1.5">
                  Message / Specifications Detail <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your component size, thermal resistance requirements, estimated annual volume, or any custom details..."
                  className="w-full bg-white border border-gray-250 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex justify-between items-center flex-wrap gap-3 pt-2">
                <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-brand-500" />
                  Your data is protected. No sales spam guaranteed.
                </span>
                
                <button
                  id="submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-400 text-white font-semibold text-sm px-7 py-3 rounded-lg shadow-md hover:shadow transition-all min-h-[44px] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      Transmission...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
