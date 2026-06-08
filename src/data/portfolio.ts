// ============================================================
//  src/data/portfolio.ts
//  Single source of truth for all portfolio content.
//  Generated from CV — fill in TODOs before deploying.
// ============================================================

// ─── Types ───────────────────────────────────────────────────

export interface Experience {
  company:     string;
  role:        string;
  period:      string;
  location:    string;
  type:        'work' | 'project';       // 'project' for FYP / side-projects
  description: string;
  bullets:     string[];
  tech:        string[];
}

export interface SkillGroup {
  category: string;
  icon:     string;                      // emoji or inline SVG string — used in skill card header
  items:    string[];
}

export interface Certification {
  name:      string;
  issuer:    string;
  date?:     string;                     // leave undefined if unknown
  category:  'embedded' | 'software' | 'professional';
  credUrl?:  string;                     // TODO: add Coursera/verify URLs
  badgeUrl?: string;                     // TODO: add badge images to /public/assets/badges/
}

export interface Education {
  institution: string;
  degree:      string;
  field:       string;
  grade:       string;
  period:      string;
  location:    string;
}

export interface Stat {
  value: string;
  label: string;
}

// ─── Meta / Personal ─────────────────────────────────────────

export const meta = {
  name:        "Muhammad Ammar Sadiq",
  initials:    "MAS",                    // used for favicon monogram
  title:       "Embedded & Control Systems Developer",
  tagline:     "Building real-time, safety-critical embedded systems — from power-constrained aerial robots to high-power EV infrastructure.",
  email:       "mammarsadiq2000@gmail.com",
  phone:       "+92 332 7633258",
  location:    "Lahore, Pakistan",
  linkedin:    "https://www.linkedin.com/in/muhammad-ammar-sadiq/",
  github:      "https://github.com/TODO_YOUR_GITHUB_USERNAME",   // TODO: add your GitHub URL
  resumeUrl:   "/assets/resume.pdf",                             // TODO: place your PDF at /public/assets/resume.pdf
  avatarUrl:   "/assets/profile.jpg",                            // TODO: place your photo at /public/assets/profile.jpg
};

// ─── About ───────────────────────────────────────────────────
// Shown in the About section as prose. Keep to 3–5 sentences.
// Written in first-person for a portfolio feel.

export const about = `
I'm an Embedded and Control Systems Developer with a background in Electrical Engineering
and over 3 years of hands-on firmware experience. My work spans the full embedded stack —
from writing bare-metal C on Cortex-M microcontrollers and designing FPGA IP cores in VHDL,
to architecting safety-critical firmware for 200kW EV charging infrastructure.
I thrive at the intersection of hardware and software, bringing both rigour and creativity
to real-time systems where reliability is non-negotiable.
`;

// ─── Hero Stats ──────────────────────────────────────────────
// Displayed as accent-coloured stat cards in the About section.

export const stats: Stat[] = [
  { value: "3+",   label: "Years of Experience" },
  { value: "13+",  label: "Certifications" },
  { value: "3.59", label: "CGPA — BS Electrical Engineering" },
  { value: "200kW", label: "EV Charger Firmware Architected" },
];

// ─── Experience ──────────────────────────────────────────────
// Listed in reverse chronological order (newest first).

export const experiences: Experience[] = [
  {
    company:     "Powersoft19",
    role:        "Embedded Software Developer",
    period:      "Nov 2023 – Present",
    location:    "Lahore, Pakistan",
    type:        "work",
    description: "Architecting firmware for high-power EV charging infrastructure and isolated multi-port power converters.",
    bullets: [
      "Architected safety-critical firmware for the Liquid Cooling System of a 200kW Level 3 EV charger, ensuring thermal stability under peak loads.",
      "Engineered a custom synchronization architecture for bare-metal dual-core applications on the Zynq-7000 SoC, offloading blocking routines to a secondary core to avoid control loop disruption.",
      "Designed and implemented high-performance FPGA IP cores in VHDL, including a configurable-frequency PWM driver and a real-time ADC processing engine with averaging and min-max detection.",
      "Co-led firmware evolution from a single-port architecture to a centralized-distributed multi-port system, integrating replicated ports and designing a custom serial link protocol for hub-port synchronization.",
      "Implemented fixed-point weighted average and sliding window filtering algorithms within FPGA fabric for low-latency signal conditioning in power control loops.",
      "Co-leading the R&D cycle for a High Power Density Isolated Multi-port Converter, overseeing inverter control algorithm implementation, debugging, and maturity.",
    ],
    tech: ["C", "VHDL", "Zynq-7000 SoC", "FreeRTOS", "Vivado", "AXI4", "CAN", "UART", "SPI", "ADC/DMA"],
  },
  {
    company:     "FARIS",
    role:        "Assistant Manager Electronics Design",
    period:      "Apr 2023 – Oct 2023",
    location:    "Rawalpindi, Pakistan",
    type:        "work",
    description: "Led electronics design and firmware engineering for avionics test and instrumentation systems.",
    bullets: [
      "Led development of a BLDC Thrust Stand to characterize motor profiles; designed custom Fault Data Recorder (FDR) tester tools to validate hardware integrity.",
      "Decoded and implemented the S-BUS protocol on STM32 platforms for high-speed radio signal capture; developed PC-side parsing utilities for MR-72 nano-Radar telemetry.",
      "Designed two-layer PCBs in Altium and complex wiring harnesses in Visio for custom FDR tester hardware; developed HMI interfaces using Nextion Studio.",
      "Developed robust firmware for STM32-based devices using STM32Cube and GNU Arm Toolchain, focusing on real-time sensor fusion and data logging.",
    ],
    tech: ["C", "STM32", "STM32Cube", "Altium Designer", "S-BUS", "UART", "I2C", "Nextion HMI", "MS Visio"],
  },
  {
    company:     "PTPRI",
    role:        "Intern Electrical Engineer",
    period:      "Jun 2022 – Aug 2022",
    location:    "Islamabad, Pakistan",
    type:        "work",
    description: "Worked on control systems and high-fidelity simulation for precision instrumentation.",
    bullets: [
      "Developed a closed-loop control system for precision magnetic field regulation.",
      "Identified super-capacitor parameters and performed high-fidelity simulations for capacitor-based voltage sensing circuits.",
    ],
    tech: ["MATLAB", "Simulink", "LTspice", "Control Systems"],
  },
  {
    company:     "PIEAS — Final Year Project",
    role:        "FYP Lead",
    period:      "2022 – 2023",
    location:    "Islamabad, Pakistan",
    type:        "project",
    // TODO: Replace the description and bullets below with your actual FYP details.
    //       The CV had a Lorem ipsum placeholder here. The technologies are listed below.
    description: "TODO: Add your Final Year Project title and one-sentence description here.",
    bullets: [
      "TODO: Add your FYP bullet points here — what problem did you solve, what did you build, what was the outcome?",
    ],
    tech: ["Ardupilot", "Pixhawk", "Raspberry Pi", "nRF24 Radio", "GPS"],
  },
];

// ─── Education ───────────────────────────────────────────────

export const education: Education[] = [
  {
    institution: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
    degree:      "Bachelor of Science",
    field:       "Electrical Engineering",
    grade:       "CGPA: 3.59",
    period:      "2019 – 2023",
    location:    "Islamabad, Pakistan",
  },
];

// ─── Skills ──────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    category: "Languages & HDL",
    icon: "⌨️",
    items: ["C", "C++", "Python", "JavaScript", "VHDL", "Verilog"],
  },
  {
    category: "Microcontrollers & SoCs",
    icon: "🔌",
    items: ["Zynq-7000 SoC", "STM32 (Cortex-M)", "ESP32", "Raspberry Pi", "Arduino"],
  },
  {
    category: "RTOS & SDKs",
    icon: "⚙️",
    items: ["FreeRTOS", "Ardupilot", "STM32Cube", "ESP-IDF", "Xilinx IDE", "PlatformIO"],
  },
  {
    category: "Protocols & Interfacing",
    icon: "📡",
    items: ["CAN", "Ethernet", "AXI4 Bus", "I2C", "UART", "SPI", "LVDS", "DMA", "ADC", "JTAG/SWD"],
  },
  {
    category: "FPGA & EDA Tools",
    icon: "🧩",
    items: ["Vivado Design Suite", "Altium Designer", "KiCad", "LTspice", "Proteus"],
  },
  {
    category: "Safety & Standards",
    icon: "🛡️",
    items: ["MISRA C/C++", "UL-1998 Functional Safety", "MATLAB Polyspace"],
  },
  {
    category: "Power Electronics & Controls",
    icon: "⚡",
    items: ["3-Phase Inverter Control", "DAB Matrix Converters", "SVPWM", "PLL", "PI Controllers", "6/12-sector Commutation"],
  },
  {
    category: "Simulation & Modelling",
    icon: "📊",
    items: ["Simulink", "CoppeliaSim", "LTspice", "Proteus"],
  },
  {
    category: "Full-Stack & Backend",
    icon: "🌐",
    items: ["FastAPI", "REST APIs", "React", "Node.js", "SQLite", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tooling & Workflow",
    icon: "🛠️",
    items: ["Git", "VS Code", "GNU Arm Toolchain", "LaTeX", "Draw.io", "MS Visio"],
  },
];

// ─── Certifications ──────────────────────────────────────────
// TODO: Add credUrl for each cert (Coursera / issuer verify links)
// TODO: Add badgeUrl if you have badge images (place in /public/assets/badges/)

export const certifications: Certification[] = [
  // ── Embedded Systems & Architecture ──
  {
    name:     "Arm Cortex-M Architecture and Software Development Specialization",
    issuer:   "ARM",
    category: "embedded",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Embedded Software and Hardware Architecture",
    issuer:   "University of Colorado Boulder",
    category: "embedded",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Introduction to the Internet of Things and Embedded Systems",
    issuer:   "UC Irvine",
    category: "embedded",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Raspberry Pi Projects Specialization",
    issuer:   "Johns Hopkins University",
    category: "embedded",
    credUrl:  undefined, // TODO
  },

  // ── Software Engineering & Data Science ──
  {
    name:     "C Programming with Linux Specialization",
    issuer:   "Dartmouth College & Institut Mines-Télécom",
    category: "software",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Supervised Machine Learning: Regression and Classification",
    issuer:   "DeepLearning.AI",
    category: "software",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Python for Everybody Specialization",
    issuer:   "University of Michigan",
    category: "software",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Introduction to Git and GitHub",
    issuer:   "Google",
    category: "software",
    credUrl:  undefined, // TODO
  },
  {
    name:     "PEC Generative AI Training (Cohort-2)",
    issuer:   "Pakistan Engineering Council",
    category: "software",
    credUrl:  undefined, // TODO
  },

  // ── Professional Development ──
  {
    name:     "AI For Everyone",
    issuer:   "DeepLearning.AI",
    category: "professional",
    credUrl:  undefined, // TODO
  },
  {
    name:     "What is Data Science?",
    issuer:   "IBM",
    category: "professional",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Foundations: Data, Data, Everywhere",
    issuer:   "Google",
    category: "professional",
    credUrl:  undefined, // TODO
  },
  {
    name:     "Get Started with Presentation Applications: PowerPoint",
    issuer:   "SkillUp",
    category: "professional",
    credUrl:  undefined, // TODO
  },
];

// ─── Certification category labels (for filter tabs in UI) ───

export const certCategories: Record<Certification['category'], string> = {
  embedded:     "Embedded & Architecture",
  software:     "Software & Data Science",
  professional: "Professional Development",
};
