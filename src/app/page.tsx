import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Light Sky Blue Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
       radial-gradient(circle at center, #93c5fd, transparent)
     `,
        }}
      />

      {/* Your Content Here */}
      <div className="relative isolate z-10 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 text-center">
          <h1 className="text-balance font-semibold text-5xl text-gray-900 tracking-tight sm:text-7xl">
            Your dream job is already looking for you
          </h1>

          <p className="mt-8 text-pretty font-medium text-gray-500 text-lg sm:text-xl/8">
            Discover jobs from top companies, apply with ease, and take the next
            step in your career journey.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-sm text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-blue-600"
              href="/jobs"
            >
              Explore Jobs
            </Link>
            <p className="cursor-pointer font-semibold text-gray-900 text-sm/6">
              Learn More <span>→</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
