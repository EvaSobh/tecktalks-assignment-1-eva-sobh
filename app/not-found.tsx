import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">404</h1>

      <h2 className="text-2xl">Page Not Found</h2>

      <p>
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link
        href="/"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Go Home
      </Link>
    </main>
  );
}