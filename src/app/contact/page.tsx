import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm, { type Field } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Verimedix Health for product information, sales, NHS procurement and distributor enquiries about our blood glucose monitoring solutions.",
  alternates: { canonical: "/contact" },
};

const generalFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "organisation", label: "Organisation" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "message", label: "How can we help?", type: "textarea", required: true },
];

const salesFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "organisation", label: "Organisation", required: true },
  {
    name: "sector",
    label: "Sector",
    type: "select",
    required: true,
    options: [
      "NHS Trust",
      "GP surgery",
      "Community pharmacy",
      "Pharmacy chain",
      "Care home",
      "Private clinic",
      "Other",
    ],
  },
  {
    name: "message",
    label: "Tell us about your requirements",
    type: "textarea",
    required: true,
  },
];

const procurementFields: Field[] = [
  { name: "name", label: "Contact name", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "organisation", label: "Trust / organisation", required: true },
  { name: "role", label: "Role / department" },
  {
    name: "volume",
    label: "Estimated volume",
    type: "select",
    options: [
      "Single site",
      "Multiple sites",
      "Trust-wide",
      "Framework / tender",
      "Not sure yet",
    ],
  },
  {
    name: "message",
    label: "Procurement requirements",
    type: "textarea",
    required: true,
  },
];

const distributorFields: Field[] = [
  { name: "company", label: "Company name", required: true },
  { name: "name", label: "Contact name", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "country", label: "Country / region", required: true },
  { name: "website", label: "Company website" },
  {
    name: "message",
    label: "Tell us about your distribution capabilities",
    type: "textarea",
    required: true,
  },
];

const contactCards = [
  { icon: "mail" as const, label: "General enquiries", value: SITE.email },
  {
    icon: "doc" as const,
    label: "Procurement",
    value: SITE.procurementEmail,
  },
  { icon: "phone" as const, label: "Phone", value: SITE.phone },
  { icon: "pin" as const, label: "Location", value: SITE.addressLine2 },
];

function FormBlock({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-mist-200 bg-white p-8 shadow-card sm:p-10"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-display mt-4 text-2xl sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-brand-900/65">{intro}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our healthcare team"
        intro="Whether you need product information, a sales conversation, procurement support or a distribution partnership, we’re ready to help."
      />

      {/* contact details */}
      <section className="border-b border-mist-200 bg-mist-50">
        <div className="container-x grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c, i) => {
            const Glyph = Icon[c.icon];
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-mist-200 bg-white p-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Glyph className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-brand-900/50">
                      {c.label}
                    </p>
                    <p className="mt-0.5 break-words text-sm font-semibold text-brand-800">
                      {c.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="container-x space-y-8 py-16">
        <FormBlock
          id="information"
          eyebrow="Request information"
          title="General enquiry"
          intro="Have a question about Verimedix or our blood glucose meter? Send us a message and we’ll get back to you."
        >
          <ContactForm
            formName="general-enquiry"
            fields={generalFields}
            submitLabel="Send enquiry"
          />
        </FormBlock>

        <FormBlock
          id="sales"
          eyebrow="Contact sales"
          title="Sales enquiry"
          intro="Tell us about your service and requirements, and our team will help you find the right solution."
        >
          <ContactForm
            formName="sales-enquiry"
            fields={salesFields}
            submitLabel="Contact sales"
          />
        </FormBlock>

        <FormBlock
          id="procurement"
          eyebrow="NHS & healthcare procurement"
          title="Procurement enquiry"
          intro="For trusts, frameworks and multi-site organisations — we can support evaluation, sampling and scaled supply."
        >
          <ContactForm
            formName="procurement-enquiry"
            fields={procurementFields}
            submitLabel="Submit procurement enquiry"
          />
        </FormBlock>

        <FormBlock
          id="distributor"
          eyebrow="Partnerships"
          title="Distributor enquiry"
          intro="Interested in distributing Verimedix products across the UK or Europe? We’d like to hear from you."
        >
          <ContactForm
            formName="distributor-enquiry"
            fields={distributorFields}
            submitLabel="Submit distributor enquiry"
          />
        </FormBlock>
      </div>
    </>
  );
}
