import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-mist-200 bg-mist-50">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src="/images/verimedix-logo.png"
            alt={`${SITE.name} logo`}
            width={180}
            height={54}
            className="h-11 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-900/65">
            Dependable blood glucose monitoring solutions for healthcare
            providers, pharmacies, care homes and clinical teams across the UK
            and Europe.
          </p>
          <div className="mt-6 space-y-2 text-sm text-brand-900/70">
            <p className="flex items-center gap-2">
              <Icon.mail className="h-4 w-4 text-teal-600" /> {SITE.email}
            </p>
            <p className="flex items-center gap-2">
              <Icon.phone className="h-4 w-4 text-teal-600" /> {SITE.phone}
            </p>
            <p className="flex items-center gap-2">
              <Icon.pin className="h-4 w-4 text-teal-600" /> {SITE.addressLine2}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-900">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-brand-900/65 transition-colors hover:text-teal-600"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-900">
            Sectors
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-900/65">
            <li>NHS Trusts &amp; GP surgeries</li>
            <li>Community pharmacies &amp; chains</li>
            <li>Care homes</li>
            <li>Private &amp; independent clinics</li>
            <li>Healthcare distributors</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-900">
            Procurement
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-900/65">
            For supply, tender and distribution enquiries, our team can support
            evaluation, sampling and scaled fulfilment.
          </p>
          <Link
            href="/contact#procurement"
            className="btn-teal mt-5 px-5 py-2.5 text-sm"
          >
            Procurement enquiry
            <Icon.arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-mist-200">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-brand-900/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-xl leading-relaxed">
            Verimedix Health manufactures to recognised international quality
            standards. Product availability and configurations may vary by
            market.
          </p>
        </div>
      </div>
    </footer>
  );
}
