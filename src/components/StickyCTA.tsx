"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="container-x pb-4">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-white/95 px-5 py-3.5 shadow-card-lg backdrop-blur-md sm:flex-row">
          <p className="text-sm font-medium text-brand-900">
            Evaluating glucose monitoring for your service?{" "}
            <span className="text-brand-900/60">
              Talk to our healthcare team.
            </span>
          </p>
          <div className="flex w-full gap-2.5 sm:w-auto">
            <Link
              href="/contact"
              className="btn-ghost flex-1 px-5 py-2.5 text-sm sm:flex-none"
            >
              Request Information
            </Link>
            <Link
              href="/contact#sales"
              className="btn-primary flex-1 px-5 py-2.5 text-sm sm:flex-none"
            >
              Contact Sales
              <Icon.arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
