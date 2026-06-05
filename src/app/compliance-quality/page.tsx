import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { SectionHeading, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Compliance & Quality",
  description:
    "Verimedix Health manufactures to recognised international quality management standards, with CE marking for the European market and a consistent focus on product quality.",
  alternates: { canonical: "/compliance-quality" },
};

const pillars = [
  {
    icon: "cog" as const,
    title: "Quality management systems",
    body: "Our manufacturing operates within structured quality management processes designed to support consistency, traceability and continual improvement.",
  },
  {
    icon: "shield" as const,
    title: "Manufacturing standards",
    body: "Production follows recognised international quality standards, with controls intended to maintain reliable, repeatable product performance.",
  },
  {
    icon: "check" as const,
    title: "ISO-aligned processes",
    body: "Our quality approach is aligned to recognised ISO quality management principles applied throughout manufacturing.",
  },
  {
    icon: "globe" as const,
    title: "CE conformity",
    body: "The Verimedix Blood Glucose Meter carries CE marking for the European market.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance & Quality"
        title="A consistent commitment to quality"
        intro="Quality sits at the centre of how we manufacture and supply our products. Our processes are built around recognised standards and a focus on dependable performance."
      />

      {/* Pillars */}
      <section className="container-x py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => {
            const Glyph = Icon[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="card h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Glyph className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-900">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-brand-900/65">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Quality narrative */}
      <section className="border-y border-mist-200 bg-mist-50">
        <div className="container-x py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our quality approach"
                title="Reliability built in at every stage"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-brand-900/70">
                <p>
                  We believe dependable healthcare products start with
                  disciplined manufacturing. Our quality management approach is
                  designed to support consistency from component sourcing through
                  to finished product, with structured controls intended to
                  maintain reliable performance.
                </p>
                <p>
                  By aligning our processes with recognised international quality
                  standards, we aim to give healthcare providers confidence in
                  the products they choose — and the supply behind them.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Recognised international quality management standards",
                "CE marking for the European market",
                "Structured manufacturing controls and traceability",
                "A continual-improvement approach to product quality",
              ].map((point, i) => (
                <Reveal key={point} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-mist-200 bg-white p-5">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Icon.check className="h-4 w-4" />
                    </span>
                    <p className="text-brand-900/80">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conservative note */}
      <section className="container-x py-20">
        <Reveal>
          <div className="rounded-2xl border border-mist-200 bg-white p-8 text-sm leading-relaxed text-brand-900/60">
            <p>
              Verimedix Health is committed to providing accurate, responsible
              information about our products. Product availability,
              configurations and applicable conformity marks may vary by market.
              For specific documentation to support evaluation or procurement,
              please contact our team.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
