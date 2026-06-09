import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { SectionHeading, FeatureCard, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import { FEATURES } from "@/lib/product";

const trustStats = [
  { value: "500", label: "Result memory with date & time" },
  { value: "~5s", label: "Typical time to a reading" },
  { value: "0.5 µL", label: "Small blood sample required" },
  { value: "2", label: "Measurement units, switchable" },
];

const whyPoints = [
  {
    icon: "shield" as const,
    title: "Built on quality standards",
    body: "Manufactured to recognised international quality management standards with CE marking for the European market.",
  },
  {
    icon: "target" as const,
    title: "Designed for accuracy",
    body: "Consistent, repeatable readings across the supported range support confident monitoring in clinical and home settings.",
  },
  {
    icon: "truck" as const,
    title: "Supply you can plan around",
    body: "Scalable fulfilment and procurement support help services maintain continuity of stock across multiple sites.",
  },
];

const sectors = [
  {
    icon: "hospital" as const,
    title: "NHS & GP surgeries",
    body: "Dependable monitoring that fits clinical routines, with procurement support for trusts and primary care.",
  },
  {
    icon: "pharmacy" as const,
    title: "Pharmacies",
    body: "A clear, easy-to-demonstrate device for community pharmacies and pharmacy chains supporting patients.",
  },
  {
    icon: "home" as const,
    title: "Care homes",
    body: "Simple, robust testing for carers managing residents' routine glucose monitoring needs.",
  },
  {
    icon: "clinic" as const,
    title: "Private clinics",
    body: "A professional, reliable option for independent healthcare providers and specialist diabetes services.",
  },
];

const procurementPoints = [
  {
    icon: "truck" as const,
    title: "Supply reliability",
    body: "Planned fulfilment and stock continuity across single sites or multi-site organisations.",
  },
  {
    icon: "shield" as const,
    title: "Quality standards",
    body: "Manufacturing aligned to recognised international quality management systems.",
  },
  {
    icon: "doc" as const,
    title: "Procurement support",
    body: "Documentation, sampling and evaluation assistance for tender and framework processes.",
  },
  {
    icon: "check" as const,
    title: "Clinical suitability",
    body: "A monitoring device designed for everyday use across diverse care settings.",
  },
  {
    icon: "scale" as const,
    title: "Scalability",
    body: "Capacity to support growing volumes for large healthcare providers and distributors.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* PRODUCT SHOWCASE */}
      <section className="container-x py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-mist-200 bg-gradient-to-br from-mist-50 to-white p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-100/60 blur-2xl" />
              <Image
                src="/images/meter-transparent.png"
                alt="Verimedix Blood Glucose Meter, front view"
                width={580}
                height={780}
                className="relative mx-auto w-[62%] animate-floaty drop-shadow-[0_30px_50px_rgba(3,17,43,0.16)]"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Verimedix Meter"
              title="A monitoring system designed for everyday clinical confidence"
              intro="The Verimedix Blood Glucose Meter pairs a large, high-contrast display with a coding-free workflow and a small sample requirement — built for clarity, speed and dependable results."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Large, high-contrast display for easy reading",
                "No coding required before testing",
                "Stores up to 500 time-stamped results",
                "mmol/L and mg/dL units, switchable",
              ].map((point, i) => (
                <Reveal as="li" key={point} delay={i * 0.05}>
                  <span className="flex items-start gap-3 text-brand-900/80">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Icon.check className="h-4 w-4" />
                    </span>
                    {point}
                  </span>
                </Reveal>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/product" className="btn-primary px-6 py-3">
                View full product details
                <Icon.arrow className="h-4 w-4" />
              </Link>
              <Link href="/product#brochure" className="btn-ghost px-6 py-3">
                <Icon.doc className="h-4 w-4" />
                Download brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="border-y border-mist-200 bg-mist-50">
        <div className="container-x py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="text-center sm:text-left">
                  <p className="h-display text-4xl text-brand-700 sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VERIMEDIX */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Why Verimedix"
          title="A partner built for healthcare procurement"
          intro="We focus on the things that matter to clinical teams and procurement leads: quality, reliability and supply you can plan around."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whyPoints.map((p, i) => (
            <FeatureCard key={p.title} {...p} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* NHS & HEALTHCARE SOLUTIONS */}
      <section className="bg-gradient-to-b from-white to-mist-50">
        <div className="container-x py-24">
          <SectionHeading
            eyebrow="NHS & Healthcare Solutions"
            title="Supporting every part of the care pathway"
            intro="From acute trusts to community pharmacies and care homes, Verimedix supports the teams responsible for diabetes monitoring."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <FeatureCard key={s.title} {...s} delay={i * 0.07} />
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/healthcare-solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-teal-600"
            >
              Explore healthcare solutions
              <Icon.arrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Key Features"
          title="Engineered for clarity and reliability"
          intro="Every feature is designed to make routine glucose testing faster, simpler and more dependable."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              body={f.body}
              delay={i * 0.06}
            />
          ))}
        </div>
      </section>

      {/* NHS PROCUREMENT SECTION */}
      <section className="border-y border-mist-200 bg-brand-900">
        <div className="container-x py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow border-teal-400/30 bg-teal-400/10 text-teal-200">
                For NHS decision makers
              </span>
              <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl">
                Procurement-ready glucose monitoring
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                We understand the demands of NHS procurement. Verimedix is built
                to support evaluation, framework participation and scaled supply
                across healthcare organisations.
              </p>
              <Link
                href="/contact#procurement"
                className="btn-teal mt-8 px-6 py-3"
              >
                Start a procurement enquiry
                <Icon.arrow className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {procurementPoints.map((p, i) => {
                  const Glyph = Icon[p.icon];
                  return (
                    <Reveal key={p.title} delay={i * 0.06}>
                      <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <Glyph className="h-6 w-6 text-teal-300" />
                        <h3 className="mt-4 font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">
                          {p.body}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Industry Applications"
          title="One reliable device, many care settings"
          align="center"
        />
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {[
            "NHS procurement teams",
            "NHS Trusts",
            "GP surgeries",
            "Community pharmacies",
            "Pharmacy chains",
            "Care homes",
            "Private clinics",
            "Healthcare distributors",
            "Diabetes specialists",
            "Independent providers",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-mist-200 bg-white px-4 py-2 text-sm font-medium text-brand-900/75 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
