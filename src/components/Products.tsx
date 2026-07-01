import React, { useState } from "react";
import { companyData, BusinessUnit, ProductOrService } from "../data";
import { CheckCircle2, ChevronRight, Settings, Sliders, Layers, Users, Zap, Award } from "lucide-react";

// Import images with standard ts-ignore for file types
// @ts-ignore
import lpgSparePartsImg from "../assets/images/lpg_stove_spares_3burner_1781946735932.jpg";
// @ts-ignore
import powderCoatingImg from "../assets/images/lpg_frame_coating_1781947699425.jpg";

export default function Products() {
  const { businessUnits } = companyData;
  
  // Track selected product item in an inspector modal or side pocket
  const [activeTab, setActiveTab] = useState<string>("lpg-mfg");
  const [selectedProduct, setSelectedProduct] = useState<ProductOrService | null>(
    businessUnits[0].items[0]
  );

  // Map image assets to divisions
  const getDivisionImage = (id: string) => {
    switch (id) {
      case "lpg-mfg":
        return lpgSparePartsImg;
      case "powder-coating":
        return powderCoatingImg;
      default:
        return lpgSparePartsImg;
    }
  };

  return (
    <section id="products-services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full">
            OUR BUSINESS DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-industrial-coal">
            LPG Fabrication & Surface Engineering
          </h2>
          <div className="h-1 w-20 bg-brand-600 mx-auto rounded-full" />
          <p className="text-base text-gray-500 font-sans">
            We operate two highly integrated, certified divisions under one roof in Jigani, Bangalore. Select a division below to explore our core products and contracting partnerships.
          </p>
        </div>

        {/* Divisions Selector Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white border-2 border-brand-600 rounded-lg shadow-sm">
            {businessUnits.map((division) => (
              <button
                key={division.id}
                onClick={() => {
                  setActiveTab(division.id);
                  setSelectedProduct(division.items[0]);
                }}
                className={`px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wider font-display transition-all ${
                  activeTab === division.id
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-650 text-slate-700 hover:text-brand-600 hover:bg-zinc-50"
                }`}
              >
                {division.title}
              </button>
            ))}
          </div>
        </div>

        {/* Division Detail Segment */}
        {businessUnits.map((division) => {
          if (division.id !== activeTab) return null;

          return (
            <div key={division.id} className="grid lg:grid-cols-12 gap-12 items-start animate-fade-in">
              
              {/* Left Column: Division Overview + Showcase Images */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-industrial-coal">
                    {division.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-600 uppercase tracking-widest font-bold">
                    {division.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {division.description}
                  </p>
                </div>

                {/* Division High-res Generated Image */}
                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white aspect-[4/3] shadow-md group">
                  <img
                    src={getDivisionImage(division.id)}
                    alt={division.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-500" />
                    <span>Jigani Plant Division</span>
                  </div>
                </div>

                {/* Trusted Partnership Card */}
                <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-400 block mb-2 font-bold">
                    {division.partnersHeader}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {division.partners.map((brand, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 text-slate-100 font-medium text-xs px-3.5 py-2 rounded-lg border border-slate-700/60 flex items-center gap-1.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {brand}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-4 leading-normal">
                    * Brand compliance checks are strict. All components manufactured adhere to absolute dimensional tolerances as authorized by representative OEMs.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Products Grid & Technical Inspector */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {division.items.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`text-left p-5 rounded-lg border transition-all flex flex-col gap-2 cursor-pointer ${
                        selectedProduct?.id === product.id
                          ? "bg-white border-brand-600 shadow-md ring-1 ring-brand-600/50"
                          : "bg-white border-gray-100 hover:border-gray-200 hover:shadow shadow-sm"
                      }`}
                    >
                      <div className="space-y-2">
                        <span className="inline-flex p-1 px-2 text-[10px] font-mono text-indigo-700 bg-indigo-50 border border-indigo-100 rounded">
                          CODE: S-{product.id.substring(0, 3).toUpperCase()}
                        </span>
                        <h4 className="text-base font-bold font-display text-industrial-coal line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Technical Inspector Block */}
                {selectedProduct && (
                  <div className="bg-white rounded-lg border-y border-r border-gray-200 border-l-4 border-brand-600 p-6 shadow-md space-y-6">
                    <div className="flex justify-between items-start flex-wrap gap-2 border-b border-gray-100 pb-4">
                      <div>
                        <span className="text-[10px] font-mono text-brand-600 font-bold uppercase block tracking-wider">
                          SPECIFICATION REPORT
                        </span>
                        <h4 className="text-lg font-bold font-display text-industrial-coal">
                          {selectedProduct.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full font-semibold">
                        Active OEM Spec
                      </span>
                    </div>

                    {/* Features Bullet List */}
                    <div className="space-y-3">
                      <h5 className="text-xs uppercase tracking-wider font-mono text-gray-400 font-bold">
                        Core Quality Milestones:
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedProduct.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Parameter Table */}
                    {selectedProduct.specs && (
                      <div className="space-y-3 pt-4 border-t border-gray-150">
                        <h5 className="text-xs uppercase tracking-wider font-mono text-gray-400 font-bold">
                          Technical Parameters Checklist:
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {selectedProduct.specs.map((spec, i) => (
                            <div key={i} className="bg-slate-50 border border-gray-150 rounded-lg p-3">
                              <span className="block text-[10px] font-mono text-gray-400">
                                {spec.label}
                              </span>
                              <span className="block text-xs font-semibold text-industrial-slate">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
