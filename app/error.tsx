"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Something went wrong!
      </h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Try Again
      </button>
    </main>
  );
}