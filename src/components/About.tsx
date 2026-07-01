import React from "react";
import { companyData } from "../data";
import { Target, Compass, Award, Calendar, Lightbulb, Users, Milestone, Globe } from "lucide-react";

export default function About() {
  const { founder } = companyData;

  const corePillars = [
    {
      icon: Target,
      title: "Our Mission",
      desc: companyData.mission,
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Compass,
      title: "Our Vision",
      desc: companyData.vision,
      color: "from-sky-500 to-brand-600"
    }
  ];

  const milestones = [
    { year: "2021", event: "Establishment of Singhania Industries in Jigani, Bangalore, focusing on high-gauge LPG spare parts." },
    { year: "2022", event: "Addition of state-of-the-art Industrial Powder Coating Unit with complete chemical multi-treatment lines." },
    { year: "2023", event: "Acquisition of primary OEM Supplier status with prestigious major brands including V-Guard and Butterfly." },
    { year: "2024+", event: "Advanced machinery diversification and setting strict green manufacturing compliance filters." }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full">
            ABOUT SINGHANIA INDUSTRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-industrial-coal">
            Rigid Quality, Relentless Customer Co-Innovation
          </h2>
          <div className="h-1 w-20 bg-brand-600 mx-auto rounded-full" />
          <p className="text-base text-gray-500 font-sans">
            Founded in {companyData.established} at Jigani, Bangalore's premier manufacturing epicenter, Singhania Industries is built to bridge technical compliance with industrial supply agility.
          </p>
        </div>

        {/* Core Pillars Segment */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative group p-8 rounded-lg bg-slate-50 border-y border-r border-gray-100 border-l-4 border-brand-600 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-industrial-coal">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
