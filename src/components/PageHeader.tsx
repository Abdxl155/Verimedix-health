import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-mist-200 pt-[72px]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-mist-50 to-white" />
        <div className="absolute inset-0 bg-grid-mist bg-[size:46px_46px] opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -right-24 -top-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      </div>
      <div className="container-x py-16 sm:py-20">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-5 max-w-3xl text-4xl sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-900/65">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
