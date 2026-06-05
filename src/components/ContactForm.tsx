"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icons";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  full?: boolean;
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export default function ContactForm({
  formName,
  fields,
  submitLabel = "Send enquiry",
}: {
  formName: string;
  fields: Field[];
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = { "form-name": formName };
    formData.forEach((v, k) => (data[k] = v.toString()));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
          <Icon.check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-brand-900">
          Thank you — your enquiry has been received.
        </h3>
        <p className="mt-2 text-sm text-brand-900/65">
          A member of our team will be in touch as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
    >
      {/* Netlify hidden inputs */}
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      {fields.map((f) => (
        <div
          key={f.name}
          className={f.full || f.type === "textarea" ? "sm:col-span-2" : ""}
        >
          <label
            htmlFor={`${formName}-${f.name}`}
            className="mb-1.5 block text-sm font-medium text-brand-900"
          >
            {f.label}
            {f.required && <span className="text-teal-600"> *</span>}
          </label>

          {f.type === "textarea" ? (
            <textarea
              id={`${formName}-${f.name}`}
              name={f.name}
              required={f.required}
              rows={4}
              className="w-full rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm text-brand-900 transition-colors placeholder:text-brand-900/35 focus:border-teal-400"
            />
          ) : f.type === "select" ? (
            <select
              id={`${formName}-${f.name}`}
              name={f.name}
              required={f.required}
              defaultValue=""
              className="w-full rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm text-brand-900 transition-colors focus:border-teal-400"
            >
              <option value="" disabled>
                Please select…
              </option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`${formName}-${f.name}`}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              className="w-full rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm text-brand-900 transition-colors placeholder:text-brand-900/35 focus:border-teal-400"
            />
          )}
        </div>
      ))}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full px-6 py-3.5 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : submitLabel}
          {status !== "sending" && <Icon.arrow className="h-4 w-4" />}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
