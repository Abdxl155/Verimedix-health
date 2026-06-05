import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Page not found</span>
      <h1 className="h-display mt-5 text-5xl text-brand-900">404</h1>
      <p className="mt-4 max-w-md text-lg text-brand-900/65">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary mt-8 px-6 py-3">
        Back to home
        <Icon.arrow className="h-4 w-4" />
      </Link>
    </section>
  );
}
