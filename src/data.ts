export interface ProductOrService {
  id: string;
  name: string;
  description: string;
  features: string[];
  specs?: { label: string; value: string }[];
}

export interface BusinessUnit {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: ProductOrService[];
  partnersHeader: string;
  partners: string[];
}

export interface FounderBio {
  name: string;
  role: string;
  birthYear: number;
  birthPlace: string;
  background: string;
  storyParagraphs: string[];
  keySuccessFactors: string[];
}

export interface CompanyDetails {
  name: string;
  location: string;
  address: string;
  established: number;
  primaryKeyword: string;
  secondaryKeyword: string;
  tagline: string;
  mission: string;
  vision: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  businessUnits: BusinessUnit[];
  founder: FounderBio;
}

export const companyData: CompanyDetails = {
  name: "Singhania Industries",
  location: "Jigani, Bangalore, Karnataka, India",
  address: "Survey No. 79/A, Road No - 4, KIADB Industrial Area, Jigani, Ahekal Taluk, Bangalore - 560105.",
  established: 2021,
  primaryKeyword: "Trusted Manufacturer of LPG Spare Parts & Components",
  secondaryKeyword: "Quality in Powder Coated components",
  tagline: "Precision Manufacturing. Premium Metal Finishing. Trusted OEM Compliance.",
  mission: "To deliver uncompromising precision and reliability in manufacturing LPG spare parts and powder-coated industrial components, empowering India's leading home appliance and automotive brands.",
  vision: "To be the benchmark for excellence in industrial fabrication and surface finishing, known for environmental compliance, state-of-the-art facilities, and long-term client co-innovation.",
  phone: "+91 90259 04445", // Professional representative number
  email: "singhaniaindustries98@gmail.com", // Professional business email
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.85623062319!2d77.6186981!3d12.7808643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c4dcdb65b1b%3A0xe543fa0092fcd62a!2sJigani%2C%20Karnataka%20560105!5e0!3m2!1sen!2sin!4v1700000000000",
  mapDirectionsUrl: "https://maps.google.com/?q=Jigani+Bangalore+Karnataka+India",
  businessUnits: [
    {
      id: "lpg-mfg",
      title: "LPG Spare Parts Manufacturing",
      tagline: "OEM manufacturing for India's leading home appliances",
      description: "Our state-of-the-art metal press and machining division produces critical, safety-compliant LPG spare parts. Every batch undergoes stringent quality inspection to meet Indian Standard (IS) benchmarks for gas stoves and combustion equipment.",
      items: [
        {
          id: "lpg-frame",
          name: "LPG Gas Stove Frame",
          description: "High-gauge heavy-duty sheet metal frames designed for high structural rigidity and load capacity.",
          features: ["Heavy gauge mild steel (MS)", "Anti-corrosive prep layout", "Robot-welded load joints", "High thermal distortion resistance"],
          specs: [
            { label: "Material", value: "Premium Mild Steel / Stainless Steel" },
            { label: "Compliance", value: "IS 4246 Standard" },
            { label: "Thickness Range", value: "0.5mm to 1mm" }
          ]
        },
        {
          id: "batti-stand",
          name: "Batti Stand (Burner Holder Support)",
          description: "Precision-molded and machined support brackets holding the combustion burner safe and stable.",
          features: ["High thermal resistance", "Rigid mounting brackets", "Zero-displacement slot locking"],
          specs: [
            { label: "Tolerances", value: "±0.05mm precision" },
            { label: "Surface Finish", value: "Rust-resistant primer" }
          ]
        },
        {
          id: "pan-support",
          name: "Heavyduty Pan Support",
          description: "Sturdy non-slip wire-frame and sheet metal supports designed to bear extreme cooking weight safely.",
          features: ["Enamel-ready heat-treated steel", "Optimal cookware stability structure", "Anti-skid radial fingers"],
          specs: [
            { label: "Design Styles", value: "Square, Round, Euro-style radial" },
            { label: "Coating Options", value: "Heat-resistant powder / Vitreous Enamel" }
          ]
        },
        {
          id: "lpg-pipe",
          name: "Gas Connection Pipe",
          description: "Safe gas manifold pipes connecting inlet gas nozzles to burners without any gas leaks.",
          features: ["Hydraulically leak-tested", "Internal scale removal", "Smooth deburred custom flanged ends"],
          specs: [
            { label: "Inlet Pressure Max", value: "15 Bar tested" },
            { label: "Diameter Accuracy", value: "±0.12mm sizing" },
            { label: "Standards", value: "AS PER BIS" }
          ]
        }
      ],
      partnersHeader: "Trusted OEM Manufacturing Partners",
      partners: ["Prestige", "V-Guard", "Butterfly", "Leading Local Brands"]
    },
    {
      id: "powder-coating",
      title: "Industrial Powder Coating Unit",
      tagline: "Precision surface treatment for high-stress automotive & machinery applications",
      description: "Equipped with automated systems and advanced multi-stage cleaning pre-treatment tanks, our powder coating division provides flawless, ultra-durable, weather-resistant protection for high-grade metal components.",
      items: [
        {
          id: "lpg-coating-spares",
          name: "Powder coating of LPG spare parts",
          description: "Specialized heat-resistant protective coating explicitly designed for frames, burners, and pan support parts.",
          features: ["Heat-resistant formulation", "Full rust-blocking shield", "Homogeneous coating thickness"],
          specs: [
            { label: "Curing Temperature", value: "200°C controlled" },
            { label: "Finish Options", value: "Smooth matte, gloss, or satin" }
          ]
        },
        {
          id: "automotive-coating-industry",
          name: "Powder coating for automotive industry",
          description: "Heavy-duty aesthetic and protective finishes for structural subassemblies, chassis details, and exterior components.",
          features: ["High chemical defense coat", "Even pigment thickness distribution", "Impact & chip resistant coating layer"],
          specs: [
            { label: "Film thickness average", value: "65 to 90 Microns" },
            { label: "Adhesion testing", value: "Crosshatch Adhesion & Impact tests" }
          ]
        }
      ],
      partnersHeader: "Powder Coating Contracting Partners",
      partners: ["TVS Motor Company", "Harley Davidson (Sub-tier)", "Local Heavy Industries", "Machinery OEMs"]
    }
  ],
  founder: {
    name: "Vasudev Singhania",
    role: "Founder & Managing Director",
    birthYear: 1998,
    birthPlace: "Erode, Tamil Nadu",
    background: "Coming from a prominent family textile business in Erode, Tamil Nadu, Vasudev inherited a deep appreciation for business operations, industrial work culture, and customer-first values.",
    storyParagraphs: [
      "Vasudev Singhania, the visionary founder of Singhania Industries, was born and raised in Erode, Tamil Nadu, in 1998. Coming from a successful family textile business, he developed a strong entrepreneurial mindset from an early age and gained valuable experience in business operations and customer relationships.",
      "Driven by a passion for manufacturing and innovation, Vasudev seized an opportunity to establish a new venture in Bangalore. In 2021, he founded Singhania Industries in Jigani's thriving industrial belt with a clear vision of delivering high-quality, high-precision LPG spare parts and powder-coated components to leading brands across India.",
      "Through dedication, perseverance, and a commitment to excellence, he transformed the company into a trusted manufacturing partner. Over the years, Singhania Industries has proudly worked with renowned brands such as Prestige, Butterfly, V-Guard, and many others, earning a reputation for quality, reliability, and precision."
    ],
    keySuccessFactors: [
      "State-of-the-art infrastructure & robotics",
      "Rigid ISO9001:2015-compliant testing audits",
      "Erode-inspired hard-working manufacturing ethics",
      "Nurturing direct client trust partnerships"
    ]
  }
};
