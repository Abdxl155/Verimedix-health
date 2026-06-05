import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CTABand } from "@/components/Sections";
import { Icon, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Healthcare Solutions",
  description:
    "How Verimedix Health supports NHS trusts, pharmacies, care homes and private clinics with reliable blood glucose monitoring.",
  alternates: { canonical: "/healthcare-solutions" },
};

type Solution = {
  id: string;
  icon: IconName;
  sector: string;
  title: string;
  intro: string;
  points: string[];
};

const solutions: Solution[] = [
  {
    id: "nhs",
    icon: "hospital",
    sector: "NHS",
    title: "Supporting NHS trusts and primary care",
    intro:
      "Verimedix is designed to meet the practical demands of NHS settings — from acute trusts to GP surgeries — with dependable performance and procurement-ready supply.",
    points: [
      "Reliable supply planning across single and multi-site organisations",
      "Support for evaluation, sampling and framework participation",
      "A device designed for clarity and quick adoption by clinical staff",
      "Manufacturing aligned to recognised quality management standards",
    ],
  },
  {
    id: "pharmacies",
    icon: "pharmacy",
    sector: "Pharmacies",
    title: "Helping pharmacies support their patients",
    intro:
      "For community pharmacies and pharmacy chains, Verimedix offers an approachable, easy-to-demonstrate device that supports patients managing their diabetes.",
    points: [
      "Simple to demonstrate and explain at the counter",
      "Consistent supply for single sites and larger chains",
      "Clear display and coding-free testing for confident use",
      "Support materials to assist patient conversations",
    ],
  },
  {
    id: "care-homes",
    icon: "home",
    sector: "Care Homes",
    title: "Practical monitoring for care environments",
    intro:
      "Care teams need monitoring that is robust, simple and dependable. Verimedix is built for everyday use by carers supporting residents.",
    points: [
      "Straightforward operation that reduces the chance of user error",
      "Durable design suited to repeated daily use",
      "Time-stamped memory to help track resident readings",
      "Reliable resupply to maintain continuity of care",
    ],
  },
  {
    id: "private-clinics",
    icon: "clinic",
    sector: "Private Clinics",
    title: "A professional option for independent providers",
    intro:
      "Private and specialist clinics can rely on Verimedix for a professional, consistent monitoring experience that supports quality patient care.",
    points: [
      "Dependable, repeatable readings for clinical confidence",
      "A clean, professional device that fits clinic environments",
      "Flexible ordering to match clinic volumes",
      "Documentation support for procurement and evaluation",
    ],
  },
];

export default function HealthcareSolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Healthcare Solutions"
        title="Reliable glucose monitoring for every care setting"
        intro="Verimedix supports the full breadth of UK healthcare — from NHS trusts and GP surgeries to pharmacies, care homes and private clinics."
      />

      {/* sector quick-nav */}
      <section className="border-b border-mist-200 bg-mist-50">
        <div className="container-x flex flex-wrap gap-3 py-6">
          {solutions.map((s) => {
            const Glyph = Icon[s.icon];
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-mist-200 bg-white px-4 py-2 text-sm font-medium text-brand-900/75 transition-colors hover:border-teal-300 hover:text-teal-700"
              >
                <Glyph className="h-4 w-4 text-teal-600" />
                {s.sector}
              </a>
            );
          })}
        </div>
      </section>

      <div className="container-x">
        {solutions.map((s, idx) => {
          const Glyph = Icon[s.icon];
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border-b border-mist-200 py-20 last:border-0"
            >
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Glyph className="h-7 w-7" />
                    </div>
                    <span className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                      {s.sector}
                    </span>
                    <h2 className="h-display mt-2 text-3xl">{s.title}</h2>
                    <p className="mt-4 leading-relaxed text-brand-900/65">
                      {s.intro}
                    </p>
                  </Reveal>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {s.points.map((p, i) => (
                      <Reveal key={p} delay={i * 0.05}>
                        <div className="flex h-full items-start gap-3 rounded-2xl border border-mist-200 bg-white p-5">
                          <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-600">
                            <Icon.check className="h-4 w-4" />
                          </span>
                          <p className="text-sm leading-relaxed text-brand-900/80">
                            {p}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  {idx === 0 && (
                    <Reveal className="mt-6">
                      <Link
                        href="/contact#procurement"
                        className="btn-primary px-6 py-3"
                      >
                        NHS procurement enquiry
                        <Icon.arrow className="h-4 w-4" />
                      </Link>
                    </Reveal>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABand />
    </>
  );
}
