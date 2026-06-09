// Central site configuration. Update the contact details and domain here once.

export const SITE = {
  name: "Verimedix Health",
  shortName: "Verimedix",
  // ⚠️ Replace with your live Netlify/custom domain before deploy.
  url: "https://verimedix-health.netlify.app",
  tagline: "Reliable Blood Glucose Monitoring for Modern Healthcare",
  description:
    "Verimedix Health supplies dependable blood glucose monitoring solutions for NHS trusts, GP surgeries, pharmacies, care homes and clinical teams across the UK and Europe.",
  email: "Info@Verimedix.co.uk",
  procurementEmail: "Info@Verimedix.co.uk",
  phone: "+44 (0)20 0000 0000",
  addressLine1: "Verimedix Health UK Ltd",
  addressLine2: "London, United Kingdom",
  productModel: "G-425-2",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Healthcare Solutions", href: "/healthcare-solutions" },
  { label: "Compliance & Quality", href: "/compliance-quality" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const KEYWORDS = [
  "Blood Glucose Meter UK",
  "Diabetes Monitoring Devices",
  "NHS Blood Glucose Monitoring",
  "Healthcare Diagnostics UK",
  "Diabetes Care Solutions",
  "Blood Sugar Monitoring Systems",
];
