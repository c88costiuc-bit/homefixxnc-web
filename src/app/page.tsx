export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">HomeFixx NC</div>
          <div className="flex items-center gap-3">
            <a
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
              href="tel:+1-000-000-0000"
            >
              Call
            </a>
            <a
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              href="#quote"
            >
              Get a quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Reliable handyman & home repair in Pittsboro, Siler City, and the Triangle
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              Small fixes, punch lists, light carpentry, drywall, trim, doors, and more.
              Fast scheduling, clear communication, and quality work you can trust.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                href="#quote"
              >
                Request a quote
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                href="#services"
              >
                View services
              </a>
            </div>

            <div className="mt-6 text-sm text-zinc-600">
              Serving: Pittsboro • Siler City • Chapel Hill • Cary • Apex (and nearby)
            </div>
          </div>

          {/* Simple “proof” card */}
          <div className="rounded-2xl border bg-zinc-50 p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">What you get</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>• Clear scope + straightforward pricing</li>
              <li>• On-time arrival and clean work area</li>
              <li>• Quality materials and finish-minded details</li>
              <li>• Photos + updates so you always know what’s happening</li>
            </ul>
            <div className="mt-6 rounded-xl bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Typical jobs
              </div>
              <div className="mt-2 text-sm text-zinc-800">
                Door hardware • Drywall patches • Trim/caulk • TV mounting • Shelving • Deck
                fixes • Fence repairs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-zinc-700">
            Common work requests—if you don’t see it, ask.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Drywall repair & patching",
              "Trim, caulk, and paint prep",
              "Doors, locks, and hardware",
              "Light carpentry & framing fixes",
              "Shelving, mounting, and installs",
              "Deck and fence repairs",
            ].map((item) => (
              <div key={item} className="rounded-xl border p-5">
                <div className="font-semibold">{item}</div>
                <div className="mt-2 text-sm text-zinc-700">
                  Quality-first work with clean finishes and practical solutions.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form (simple placeholder) */}
      <section id="quote" className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Request a quote</h2>
          <p className="mt-2 text-zinc-700">
            For now this is a simple placeholder. Next we’ll wire this to email/CRM and add AI
            drafting.
          </p>

          <div className="mt-8 grid gap-4 rounded-2xl border bg-white p-6 shadow-sm md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Name</span>
              <input className="rounded-md border px-3 py-2" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Phone or email</span>
              <input className="rounded-md border px-3 py-2" placeholder="Best contact" />
            </label>
            <label className="grid gap-2 md:col-span-2">
              <span className="text-sm font-semibold">What do you need done?</span>
              <textarea
                className="min-h-[110px] rounded-md border px-3 py-2"
                placeholder="Describe the job, location, timing, and any photos you have."
              />
            </label>

            <button className="rounded-md bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 md:col-span-2">
              Submit (coming next)
            </button>

            <div className="text-xs text-zinc-500 md:col-span-2">
              Next steps: we’ll add a real form handler + email, then an AI helper to turn your
              notes into a clean scope/estimate.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600">
          <div className="font-semibold text-zinc-900">HomeFixx NC</div>
          <div className="mt-2">
            Pittsboro • Siler City • Triangle, NC
          </div>
          <div className="mt-2">
            © {new Date().getFullYear()} HomeFixx NC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}