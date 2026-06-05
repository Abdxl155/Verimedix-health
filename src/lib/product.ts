// Product content for the Verimedix blood glucose meter.
// Written independently for the website. No compliance text, manufacturer
// details, addresses, barcodes or regulatory references are reproduced here.

export const PRODUCT = {
  name: "Verimedix Blood Glucose Meter",
  model: "G-425-2",
  shortPitch:
    "A compact, self-testing blood glucose monitoring system designed for clarity, speed and everyday reliability across clinical and home-care settings.",
  longIntro:
    "The Verimedix Blood Glucose Meter delivers a straightforward testing experience built around a large, high-contrast display and a coding-free workflow. It is engineered for dependable day-to-day use by patients, carers and clinical staff, with a small sample requirement and a fast result that supports efficient monitoring routines.",
};

// Specifications described in original wording — comparable to a modern
// self-testing meter. These are presentational product specs, not regulatory claims.
export const SPECS: { label: string; value: string }[] = [
  { label: "Sample size", value: "0.5 µL capillary blood" },
  { label: "Result time", value: "Approximately 5 seconds" },
  { label: "Coding", value: "No coding required" },
  { label: "Measurement units", value: "mmol/L and mg/dL (switchable)" },
  { label: "Measurement range", value: "1.1 – 33.3 mmol/L (20 – 600 mg/dL)" },
  { label: "Memory capacity", value: "Up to 500 results with date & time" },
  { label: "Result averaging", value: "7 / 14 / 21 / 30 / 60 / 90-day averages" },
  { label: "Strip handling", value: "Automatic strip ejection" },
  { label: "Reminders", value: "Configurable test-time alarms" },
  { label: "Power", value: "2 × AAA batteries" },
  { label: "Dimensions", value: "83 × 56 × 22 mm" },
  { label: "Weight", value: "55 g (excluding batteries)" },
];

export type Feature = {
  title: string;
  body: string;
  icon: "bolt" | "drop" | "target" | "hospital" | "hand" | "database";
};

export const FEATURES: Feature[] = [
  {
    title: "Fast Results",
    body: "A result in around five seconds keeps testing quick and unobtrusive, helping busy clinical teams and patients stay on routine.",
    icon: "bolt",
  },
  {
    title: "Easy Testing Process",
    body: "A coding-free workflow and a small 0.5 µL sample reduce steps and minimise the chance of user error during everyday testing.",
    icon: "drop",
  },
  {
    title: "Reliable Accuracy",
    body: "Consistent, repeatable readings across the supported measurement range support confident day-to-day monitoring decisions.",
    icon: "target",
  },
  {
    title: "Healthcare Ready",
    body: "A robust, easy-to-clean design suits GP surgeries, pharmacies, care homes and clinic environments alongside home use.",
    icon: "hospital",
  },
  {
    title: "User-Friendly Design",
    body: "A large, high-contrast display and a simple button layout make the meter approachable for patients of all ages and abilities.",
    icon: "hand",
  },
  {
    title: "Data Memory Storage",
    body: "Storage for up to 500 time-stamped results with multi-day averaging gives a clear view of monitoring trends over time.",
    icon: "database",
  },
];
