import React from "react";
import { companyData } from "../data";
import { Award, Users, Milestone, ShieldCheck } from "lucide-react";

export default function Leadership() {
  const { founder } = companyData;

  const milestones = [
    { year: "2021", event: "Establishment of Singhania Industries in Jigani, Bangalore, focusing on high-gauge LPG spare parts." },
    { year: "2022", event: "Addition of state-of-the-art Industrial Powder Coating Unit with complete chemical multi-treatment lines." },
    { year: "2023", event: "Acquisition of primary OEM Supplier status with prestigious major brands including V-Guard and Butterfly." },
    { year: "2024+", event: "Advanced machinery diversification and setting strict green manufacturing compliance filters." }
  ];

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#fafafa] overflow-hidden border-t border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#004F6E] bg-sky-50 px-3.5 py-1.5 rounded-full">
            OUR LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
            Guided by Manufacturing Integrity
          </h2>
          <div className="h-1 w-20 bg-[#004F6E] mx-auto rounded-full" />
          <p className="text-base text-gray-500 font-sans">
            Our governance and industrial standards are set directly by our founder's focus on technical compliance, ISO compliance, and quality audits.
          </p>
        </div>

        {/* Founder Story Segment - Highlight Vasudev Singhania */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait Card / Infographic for the founder */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-sm">
              {/* Decorative Pattern behind */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-100/50 rounded-2xl -z-10 blur-xl pointer-events-none" />
              
              {/* Clean Typographic Bio Box */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white p-8 shadow-xl">
                {/* Watermark Logo */}
                <div className="absolute -right-8 -bottom-8 opacity-5 text-white">
                  <Award className="w-48 h-48" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {/* Monogram Initials */}
                    <div className="h-16 w-16 rounded-full bg-[#004F6E] flex items-center justify-center text-white text-2xl font-bold font-display border-2 border-white/20 shadow-md">
                      VS
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold font-display tracking-tight text-white">
                        {founder.name}
                      </h4>
                      <p className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-slate-400">Born / Raised</span>
                      <span className="font-medium text-slate-200">{founder.birthPlace}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-slate-400 font-bold">Established Venture</span>
                      <span className="font-medium text-slate-200">2021</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-slate-400">Headquarters</span>
                      <span className="font-medium text-slate-200">Jigani, Bangalore</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 border-l-4 border-sky-500 rounded-r-lg">
                    <p className="text-xs italic text-slate-300 leading-relaxed">
                      "Erode's vibrant entrepreneurial ethics instilled in me the discipline that now fuels Singhania Industries' quest for manufacturing compliance."
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Core Management Pillars:</span>
                    <ul className="space-y-1.5">
                      {founder.keySuccessFactors.slice(0, 3).map((factor, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Written Biography Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#004F6E] block">
              MEET THE FOUNDER
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
              The Visionary Behind Singhania Industries
            </h3>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-sans">
              {founder.storyParagraphs.map((para, index) => (
                <p key={index}>
                  {para}
                </p>
              ))}
            </div>

            {/* Milestones / Small Timeline */}
            <div className="bg-white border border-gray-150 rounded-xl p-6 mt-4 shadow-sm">
              <h4 className="text-sm font-bold font-display uppercase tracking-wider text-gray-800 mb-4 flex items-center gap-2">
                <Milestone className="h-4 w-4 text-[#004F6E]" />
                Evolution Timeline
              </h4>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {milestones.map((item, id) => (
                  <div key={id} className="relative pl-4 border-l-2 border-sky-500/30 hover:border-sky-500 transition-colors">
                    <span className="block text-sm font-semibold font-mono text-[#004F6E]">{item.year}</span>
                    <p className="text-[11px] text-gray-500 mt-1 leading-normal">{item.event}</p>
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
