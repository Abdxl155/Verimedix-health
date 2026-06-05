import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { SectionHeading, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Verimedix Health is a blood glucose monitoring company supporting UK and European healthcare providers with dependable diabetes care solutions.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "shield" as const,
    title: "Quality first",
    body: "We manufacture to recognised international quality management standards and hold CE marking for the European market.",
  },
  {
    icon: "target" as const,
    title: "Patient outcomes",
    body: "Clear, dependable monitoring helps patients and clinicians make confident day-to-day decisions.",
  },
  {
    icon: "globe" as const,
    title: "Healthcare focus",
    body: "Everything we build is shaped by the realities of clinical, pharmacy and community care settings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Verimedix"
        title="A healthcare company built around dependable diabetes monitoring"
        intro="Verimedix Health is entering the UK healthcare market with a clear focus: reliable, accessible blood glucose monitoring for the teams that care for people living with diabetes."
      />

      {/* Overview */}
      <section className="container-x py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title="Healthcare-grade monitoring, made approachable"
            />
            <div className="mt-6 space-y-4 text-brand-900/70">
              <p>
                Verimedix Health develops and supplies blood glucose monitoring
                solutions designed for everyday use across the care pathway. Our
                work centres on a single, dependable goal: making routine glucose
                testing clear, fast and reliable for both patients and the
                professionals who support them.
              </p>
              <p>
                We combine quality-focused manufacturing with a practical
                understanding of how healthcare teams actually work — from acute
                trusts and GP surgeries to community pharmacies and care homes.
                The result is a product range that is straightforward to adopt
                and built to perform consistently.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <Reveal>
              <div className="rounded-2xl border border-mist-200 bg-mist-50 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                  Our mission
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-brand-900/80">
                  To support better diabetes care by providing dependable,
                  accessible glucose monitoring to healthcare providers across
                  the UK and Europe.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-mist-200 bg-brand-700 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-200">
                  Our vision
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-white/85">
                  A healthcare landscape where reliable monitoring is simple to
                  access, easy to use and trusted at every point of care.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-mist-200 bg-mist-50">
        <div className="container-x py-24">
          <SectionHeading
            eyebrow="What guides us"
            title="A commitment to healthcare quality"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => {
              const Glyph = Icon[v.icon];
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="card h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                      <Glyph className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-brand-900">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-brand-900/65">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* UK strategy */}
      <section className="container-x py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="UK market strategy"
              title="Entering the UK with a procurement-ready approach"
              intro="Our UK strategy is built around the needs of healthcare procurement: dependable supply, clear documentation and a product designed for real clinical environments."
            />
          </div>
          <div className="space-y-4">
            {[
              "Reliable supply planning for single and multi-site organisations",
              "Support for evaluation, sampling and tender processes",
              "A product designed for clarity and ease of adoption",
              "A focus on long-term partnership with healthcare providers",
            ].map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-xl border border-mist-200 bg-white p-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <Icon.check className="h-4 w-4" />
                  </span>
                  <p className="text-brand-900/80">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
