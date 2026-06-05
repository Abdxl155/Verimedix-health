import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { SectionHeading, FeatureCard, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import { PRODUCT, SPECS, FEATURES } from "@/lib/product";

export const metadata: Metadata = {
  title: "Blood Glucose Meter",
  description:
    "The Verimedix Blood Glucose Meter — a compact, coding-free self-testing system with a large display, 500-result memory and fast results for healthcare settings.",
  alternates: { canonical: "/product" },
};

const scenarios = [
  {
    icon: "hospital" as const,
    title: "Clinical settings",
    body: "Quick, clear testing that fits into busy GP and clinic routines without added complexity.",
  },
  {
    icon: "pharmacy" as const,
    title: "Pharmacy support",
    body: "An easy device to demonstrate and recommend when supporting patients with monitoring.",
  },
  {
    icon: "home" as const,
    title: "Care home use",
    body: "Robust, simple operation for carers managing routine resident monitoring.",
  },
  {
    icon: "hand" as const,
    title: "Home self-testing",
    body: "A straightforward, reassuring experience for patients testing independently.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Model ${PRODUCT.model}`}
        title="The Verimedix Blood Glucose Meter"
        intro={PRODUCT.shortPitch}
      />

      {/* Overview + image */}
      <section className="container-x py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-mist-200 bg-gradient-to-br from-mist-50 via-white to-teal-50/40 p-12">
              <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-teal-100/60 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-brand-100/60 blur-2xl" />
              <Image
                src="/images/meter.png"
                alt="Verimedix Blood Glucose Meter displaying 5.8 mmol/L"
                width={580}
                height={780}
                priority
                className="relative mx-auto w-[68%] animate-floaty drop-shadow-[0_36px_56px_rgba(3,17,43,0.18)]"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Product overview"
              title="Clarity, speed and dependable everyday performance"
            />
            <p className="mt-5 leading-relaxed text-brand-900/70">
              {PRODUCT.longIntro}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "Result time", v: "~5 seconds" },
                { k: "Sample size", v: "0.5 µL" },
                { k: "Memory", v: "500 results" },
                { k: "Coding", v: "Not required" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-mist-200 bg-white p-4"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-900/50">
                    {s.k}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-brand-700">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#sales" className="btn-primary px-6 py-3">
                Contact Sales
              </Link>
              <Link href="#brochure" className="btn-ghost px-6 py-3">
                <Icon.doc className="h-4 w-4" />
                Download brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / features */}
      <section className="border-y border-mist-200 bg-mist-50">
        <div className="container-x py-24">
          <SectionHeading
            eyebrow="Product benefits"
            title="Designed around the people who use it"
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
        </div>
      </section>

      {/* Technical specifications */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Technical specifications"
          title="Specifications at a glance"
          intro="Key technical details of the Verimedix Blood Glucose Meter."
        />
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-mist-200">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Verimedix Blood Glucose Meter technical specifications
              </caption>
              <tbody>
                {SPECS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-mist-50"}
                  >
                    <th
                      scope="row"
                      className="w-1/2 border-b border-mist-200 px-6 py-4 font-medium text-brand-900"
                    >
                      {row.label}
                    </th>
                    <td className="border-b border-mist-200 px-6 py-4 text-brand-900/70">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-900/50">
            Specifications are provided for general information and may vary by
            configuration and market.
          </p>
        </Reveal>
      </section>

      {/* Usage scenarios */}
      <section className="bg-gradient-to-b from-white to-mist-50">
        <div className="container-x py-24">
          <SectionHeading
            eyebrow="Healthcare usage scenarios"
            title="Built for the way care is delivered"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((s, i) => (
              <FeatureCard key={s.title} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* Brochure download */}
      <section id="brochure" className="container-x py-24 scroll-mt-24">
        <div className="grid items-center gap-10 rounded-3xl border border-mist-200 bg-mist-50 p-10 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">Product brochure</span>
            <h2 className="h-display mt-4 text-3xl">
              Download the Verimedix product brochure
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-brand-900/65">
              A concise overview of the Verimedix Blood Glucose Meter, its key
              features and specifications — ready to share with colleagues and
              procurement teams.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/brochure/verimedix-blood-glucose-meter.pdf"
                className="btn-primary px-6 py-3"
                download
              >
                <Icon.doc className="h-4 w-4" />
                Download brochure (PDF)
              </a>
              <Link href="/contact" className="btn-ghost px-6 py-3">
                Request more information
              </Link>
            </div>
            <p className="mt-3 text-xs text-brand-900/45">
              Place your brochure file at{" "}
              <code className="rounded bg-white px-1.5 py-0.5">
                public/brochure/verimedix-blood-glucose-meter.pdf
              </code>
              .
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-mist-200 bg-white p-8 shadow-card">
              <Image
                src="/images/meter.png"
                alt="Verimedix Blood Glucose Meter"
                width={580}
                height={780}
                className="mx-auto w-[55%]"
              />
              <p className="mt-4 text-center text-sm font-semibold text-brand-800">
                Verimedix Blood Glucose Meter
              </p>
              <p className="text-center text-xs text-brand-900/50">
                Model {PRODUCT.model}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
