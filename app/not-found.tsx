import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-warm-dim mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold text-accent mb-2">Page not found</h1>
        <p className="text-accent-dim mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="link-hover text-warm font-medium"
        >
          Back to home &larr;
        </Link>
      </div>
    </main>
  );
}
