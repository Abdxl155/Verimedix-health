import Link from "next/link";
import Reveal from "./Reveal";
import { Icon, type IconName } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="h-display text-3xl sm:text-4xl">{title}</h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-brand-900/65">{intro}</p>
      )}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  body,
  delay = 0,
}: {
  icon: IconName;
  title: string;
  body: string;
  delay?: number;
}) {
  const Glyph = Icon[icon];
  return (
    <Reveal delay={delay} className="group h-full">
      <div className="card h-full hover:-translate-y-1 hover:border-teal-200 hover:shadow-card-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-teal-50 group-hover:text-teal-600">
          <Glyph className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-brand-900">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-brand-900/65">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

export function CTABand() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-8 py-16 sm:px-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="h-display text-3xl text-white sm:text-4xl">
            Bring dependable glucose monitoring to your service.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Whether you are an NHS trust, pharmacy group, care provider or
            distributor, our team can support evaluation, sampling and scaled
            supply.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-light px-6 py-3">
              Request Information
            </Link>
            <Link
              href="/contact#procurement"
              className="btn-teal px-6 py-3"
            >
              Procurement enquiry
              <Icon.arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
