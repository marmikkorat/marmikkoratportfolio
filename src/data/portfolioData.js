// Images
import profileImage from "../assets/images/Marmik Photo.webp";
import dashboardImage from "../assets/images/MIS Dashboard.webp";
import rGradeImage1 from "../assets/images/R Grade Dashboard.webp";
import rGradeImage2 from "../assets/images/R Grade Dashboard 2.webp";
import ctmImage1 from "../assets/images/CTM Dashboard.webp";
import ctmImage2 from "../assets/images/CTM Dashboard 2.webp";

import certIMS from "../assets/certificates/ims-9001-lead-auditor.webp";
import certSixSigma from "../assets/certificates/six-sigma-green-belt.webp";
import certInternalAuditor from "../assets/certificates/internal-ims-auditor.webp";

import achGreenUrja from "../assets/achievements/green-urja-award-2025.webp";
import achGoldenAward from "../assets/achievements/nqcfi-golden-award-2019.webp";

// ----------------------------
// PROFILE
// ----------------------------

export const profile = {
  name: "Marmik Korat",

  designation: "Manufacturing Operations Leader",

  headline:
    "Driving Operational Excellence, Lean Manufacturing and Gigawatt-Scale Solar Manufacturing Operations.",

  summary: [
    "A competent manufacturing professional with 10 years of experience specializing in strategic planning, operational excellence and manufacturing leadership.",

    "Comprehensive knowledge of solar module manufacturing processes including greenfield projects, commissioning, production ramp up, Lean Manufacturing, Quality Systems and Data Analytics.",

    "Experienced in leading large manufacturing teams, improving productivity, optimizing cost and implementing sustainable operational improvements."
  ],

  about:
    "I am a manufacturing operations leader with 10 years of experience in the solar module manufacturing industry, currently overseeing a 1.2 GW production line at ACME Solar while contributing to a 3 GW expansion project. My career has been built across every level, from a Graduate Engineer Trainee commissioning a 1.2 GW line, to a Manager driving strategy for gigawatt scale operations.",

  image: profileImage,

  email: "marmikkorat@gmail.com",

  phone: "+91 96244 62184",

  location: "India",

  linkedin: "https://www.linkedin.com/in/marmik-korat",

  resume: `${import.meta.env.BASE_URL}marmik-korat-resume.pdf`
};

// ----------------------------
// HERO STATISTICS
// ----------------------------

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "2.5 GW", label: "Manufacturing Capacity Led" },
  { value: "550+", label: "Team Members Led" }
];

// ----------------------------
// EXPERIENCE
// ----------------------------

export const experience = [
  {
    role: "Manager",
    company: "ACME Solar",
    period: "Sep 2025 – Present",
    points: [
      "Overseeing operations of a 1.2 GW solar module manufacturing line, ensuring optimal performance and production targets.",
      "Dedicatedly contributing from an operations standpoint to the 3 GW module line expansion project.",
      "Working on the automation, digitization and capacity expansion projects to enhance output and operational efficiency."
    ]
  },
  {
    role: "Associate Manager",
    company: "Adani Solar",
    period: "Apr 2024 – Sep 2025",
    points: [
      "Responsible for the operation of the 1 GW solar module manufacturing line.",
      "Managed a team of 10 Assistant Managers and 430 Diploma Trainees & Associates for the operations.",
      "Focused on coordination, planning & execution of the production plan to meet targets.",
      "Developed and analysed operational performance metrics — efficiency, equipment utilization and daily OEE monitoring.",
      "Led a Lean Six Sigma project for cost reduction, engaging cross-functional teams for execution.",
      "Coordinated with procurement, logistics and warehouse teams for smooth material flow.",
      "Drove automation initiatives to enhance operational efficiency."
    ]
  },
  {
    role: "Deputy Manager",
    company: "Adani Solar",
    period: "Apr 2021 – Mar 2024",
    points: [
      "Collaborated with the project team on installation and commissioning of an advanced 2 GW PERC module manufacturing line.",
      "Led scaling-up of operations and stabilization of processes thereafter.",
      "Developed ISO-compliant documentation including standardized procedures, work instructions and check sheets.",
      "Implemented KAIZEN and Poka-Yoke for continuous improvement.",
      "Performed data analysis to identify root causes and cost-effective solutions.",
      "Facilitated Quality Circle projects and 5S initiatives."
    ]
  },
  {
    role: "Assistant Manager",
    company: "Adani Solar",
    period: "Apr 2020 – Mar 2021",
    points: [
      "Led a 300 MW module manufacturing line.",
      "Managed production of Multi, Mono, Mono PERC and Bi-facial modules per the production plan.",
      "Ensured smooth production flow by minimizing performance bottlenecks.",
      "Successfully completed Throughput & Yield improvement projects, BOM consumption optimization and wastage reduction to achieve cost-of-manufacturing targets."
    ]
  },
  {
    role: "Senior Engineer",
    company: "Adani Solar",
    period: "Mar 2017 – Mar 2020",
    points: [
      "Closely worked with the project team on installation and commissioning of a 1.2 GW solar module manufacturing line.",
      "Focused on process stabilization and scale-up of production.",
      "Deployed corrective and preventive measures based on stakeholder feedback.",
      "Mentored junior engineers and associates on best practices and professional growth."
    ]
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Adani Solar",
    period: "Aug 2016 – Feb 2017",
    points: [
      "Completed a 26 week extensive training program on Solar Manufacturing Processes during induction.",
      "Worked with the Project and OEM teams on installation of india's first ever gigawatt scale module manufacturing plant."
    ]
  }
];

// ----------------------------
// EDUCATION
// ----------------------------

export const education = [
  {
    degree: "Bachelor of Engineering : Electrical Engineering",
    institute: "Gujarat Technological University",
    period: "Jun 2012 - May 2016"
  },
  {
    degree: "Young Leader's Program : Executive Education by Adani Group",
    institute: "Indian Institute of Management - Udaipur",
    period: "Jul 2024"
  },
  {
    degree: "Solar PV Manufacturing Processes",
    institute: "Adani Power Training & Research Institute (APTRI)",
    period: "Aug 2016 - Feb 2017"
  }
];

// ----------------------------
// SKILLS
// ----------------------------

export const skillCategories = [
  { icon: "gear", title: "Operations Management" },
  { icon: "leaf", title: "Lean Manufacturing" },
  { icon: "target", title: "Project Management" },
  { icon: "shield", title: "Quality Management" },
  { icon: "trend", title: "Process Improvement" },
  { icon: "layers", title: "Resource Optimization" }
];

export const software = ["MS Office (Advanced)", "SAP", "Minitab", "MES", "Power BI"];

export const languages = ["English", "Hindi", "Gujarati"];

// ----------------------------
// PROJECTS
// ----------------------------
// `image`: leave null to show an icon placeholder until a screenshot is added.
// `liveUrl`: leave null to hide the "Live Demo" button until it's hosted somewhere.

export const projects = [
  {
    title: "Executive Manufacturing MIS Dashboard",

    description:
      "A premium manufacturing dashboard developed for executive decision-making, enabling real-time monitoring of Production, Yield, Quality, Rejections and Operational KPIs across gigawatt-scale solar module manufacturing lines.",

    features: [
      "Real-time throughput tracking",
      "Yield and rejection analytics",
      "Shift wise production monitoring",
      "Executive level KPI summaries"
    ],

    tech: ["Power BI", "SAP", "MES"],

    images: [dashboardImage],
    liveUrl: null
  },
  {
    title: "R Grade MIS Dashboard",

    description:
      "An executive-grade Dashboard for real time monitoring of R-Grade (rejection) performance across a solar module manufacturing line, with live theming, drill-down Pareto and station-wise reject analysis against a defined target rate.",

    features: [
      "MTD & daily R-Grade % vs target tracking",
      "Pareto & nested donut reject breakdowns",
      "Station and stage-wise rejection analysis",
      "4-month trend and weekly split views",
      "Light / dark theme toggle with PDF export"
    ],

    tech: ["Python", "Dash", "Plotly", "Pandas"],

    images: [rGradeImage1, rGradeImage2],
    liveUrl: null
  },
  {
    title: "CTM / Pmax monitoring / Analysis Dashboard",

    description:
      "An interactive cell to module (CTM) performance and power loss analysis tool, filtering live by date, line, cell efficiency and cell make to surface binning loss, power distribution and hourly process trends.",

    features: [
      "Cumulative CTM % and binning loss % KPIs",
      "Bin-class distribution table (Actual % by bin)",
      "Hourly CTM trend with Tdut / Rs / Pmax / Voc / Isc overlays",
      "Pmax & CTM scatter plot comparison - Fresh vs Rework vs String Rework modules",
      "585W / 590W / 595W binning loss histograms"
    ],

    tech: ["Python", "Dash", "Plotly", "NumPy", "SciPy"],

    images: [ctmImage1, ctmImage2],
    liveUrl: null
  }
];

// ----------------------------
// CERTIFICATIONS
// ----------------------------

export const certifications = [
  { title: "IMS 9001:2015 Lead Auditor", date: "August 2025", image: certIMS },
  { title: "Six Sigma Green Belt", date: "March 2024", image: certSixSigma },
  { title: "Certified Internal IMS Auditor", date: "January 2024", image: certInternalAuditor }
];

// ----------------------------
// ACHIEVEMENTS
// ----------------------------

export const achievements = [
  {
    title: "Green Urja & Energy Efficiency Award 2025",
    description:
      "Received the prestigious 5th Green Urja & Energy Efficiency Award, presented by the Indian Chamber of Commerce, for the Throughput Improvement Project.",
    image: achGreenUrja
  },
  {
    title: "Golden Award — NQCFI 2019",
    description:
      "Awarded the Golden Award for Best Record Book & Kaizen for outstanding continuous improvement initiatives.",
    image: achGoldenAward
  }
];
