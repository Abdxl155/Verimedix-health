"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "./Icons";

const trustPoints = [
  "Coding-free testing",
  "~5 second results",
  "500-result memory",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-mist-50 via-white to-white" />
        <div className="absolute inset-0 bg-grid-mist bg-[size:46px_46px] opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_30%,black,transparent)]" />
        <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Icon.shield className="h-3.5 w-3.5" />
            Diabetes monitoring for healthcare
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="h-display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]"
          >
            Reliable Blood Glucose Monitoring for Modern Healthcare
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-lg leading-relaxed text-brand-900/70"
          >
            Supporting healthcare providers, pharmacies, care homes and clinical
            teams with dependable diabetes monitoring solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/contact" className="btn-primary px-7 py-3.5 text-base">
              Request Information
            </Link>
            <Link
              href="/contact#sales"
              className="btn-ghost px-7 py-3.5 text-base"
            >
              Contact Sales
              <Icon.arrow className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustPoints.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-sm font-medium text-brand-900/70"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <Icon.check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Product visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* halo */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-br from-teal-100/70 via-white to-brand-100/60" />

            {/* pulse rings — subtle healthcare motion */}
            <span className="absolute right-10 top-12 -z-10 h-24 w-24 rounded-full border border-teal-300/50 animate-pulseRing" />
            <span
              className="absolute right-10 top-12 -z-10 h-24 w-24 rounded-full border border-teal-300/40 animate-pulseRing"
              style={{ animationDelay: "1.2s" }}
            />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-[78%] drop-shadow-[0_40px_60px_rgba(3,17,43,0.18)]"
            >
              <Image
                src="/images/meter.png"
                alt="Verimedix Blood Glucose Meter showing a reading of 5.8 mmol/L"
                width={580}
                height={780}
                priority
                className="h-auto w-full"
              />
            </motion.div>

            {/* floating data chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute left-0 top-16 rounded-2xl border border-mist-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur"
            >
              <p className="text-xs font-medium text-brand-900/55">Result time</p>
              <p className="text-lg font-semibold text-brand-700">~5 seconds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="absolute bottom-12 right-0 rounded-2xl border border-mist-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur"
            >
              <p className="text-xs font-medium text-brand-900/55">Sample size</p>
              <p className="text-lg font-semibold text-teal-600">0.5 µL</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* logo strip / trust line */}
      <div className="border-y border-mist-200 bg-white/60">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center text-xs font-medium uppercase tracking-[0.16em] text-brand-900/45">
          <span>Trusted across UK healthcare settings</span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-900/20 sm:block" />
          <span>NHS Trusts</span>
          <span>Pharmacies</span>
          <span>Care Homes</span>
          <span>Private Clinics</span>
          <span>Distributors</span>
        </div>
      </div>
    </section>
  );
}
