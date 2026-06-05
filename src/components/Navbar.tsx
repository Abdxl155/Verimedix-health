"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";
import { Icon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-mist-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <nav
        className="container-x flex h-[72px] items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${SITE.name} home`}
        >
          <Image
            src="/images/verimedix-logo.png"
            alt={`${SITE.name} logo`}
            width={170}
            height={52}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-brand-700"
                      : "text-brand-900/70 hover:text-brand-700"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-ghost px-5 py-2.5 text-sm">
            Request Information
          </Link>
          <Link href="/contact#sales" className="btn-primary px-5 py-2.5 text-sm">
            Contact Sales
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-800 hover:bg-brand-50 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <Icon.close /> : <Icon.menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-mist-200 bg-white lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-brand-900 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-1 pb-2">
              <Link href="/contact" className="btn-ghost flex-1 py-3">
                Request Info
              </Link>
              <Link href="/contact#sales" className="btn-primary flex-1 py-3">
                Contact Sales
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
