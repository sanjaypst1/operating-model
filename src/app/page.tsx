import Link from "next/link";
import {
  compassDirections,
  compassSelected,
  pillars,
  transformationLoop,
} from "@/data/compass";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:py-24">
          <div className="animate-rise">
            <p className="chip mb-5 border-[var(--brass)]/40 text-[var(--brass)]">
              Enterprise transformation system
            </p>
            <h1 className="display text-5xl leading-[0.95] text-[var(--ink)] md:text-7xl">
              COMPASS
            </h1>
            <p className="mt-3 text-lg font-semibold text-[var(--teal-deep)] md:text-xl">
              {compassSelected.fullName}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]/80 md:text-lg">
              {compassSelected.tagline} Start with ~10 people. Prove it works. Scale to
              600–700 with guardrails—not bureaucracy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/operating-model"
                className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--teal-deep)]"
              >
                Explore the operating model
              </Link>
              <Link
                href="/loop"
                className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold transition hover:bg-white"
              >
                See the transformation loop
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md animate-rise">
            <div className="compass-ring absolute inset-0 rounded-full opacity-40 blur-2xl" />
            <div className="panel relative grid h-full place-items-center overflow-hidden rounded-full p-8">
              <div className="absolute inset-6 rounded-full border border-dashed border-[var(--brass)]/40 animate-spin-slow" />
              <div className="absolute inset-14 rounded-full border border-[var(--line)]" />
              {compassDirections.map((dir, index) => {
                const positions = [
                  "top-6 left-1/2 -translate-x-1/2",
                  "right-6 top-1/2 -translate-y-1/2",
                  "bottom-6 left-1/2 -translate-x-1/2",
                  "left-6 top-1/2 -translate-y-1/2",
                  "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                ];
                const isCentre = dir.id === "centre";
                return (
                  <div
                    key={dir.id}
                    className={`absolute ${positions[index]} ${isCentre ? "z-10 w-36 text-center" : "w-28 text-center"}`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brass)]">
                      {dir.label}
                    </p>
                    <p className={`display ${isCentre ? "text-base" : "text-sm"} text-[var(--ink)]`}>
                      {dir.title.split("&")[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">
              Three interconnected pillars
            </p>
            <h2 className="display mt-2 text-3xl md:text-4xl">Not three separate libraries</h2>
          </div>
          <Link href="/loop" className="hidden text-sm font-semibold text-[var(--teal-deep)] md:inline">
            How they connect →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="panel group p-6 transition hover:-translate-y-1 hover:border-[var(--teal)]/40"
            >
              <p className="text-xs font-bold tracking-[0.18em] text-[var(--brass)]">
                PILLAR {pillar.number}
              </p>
              <h3 className="display mt-3 text-2xl group-hover:text-[var(--teal-deep)]">
                {pillar.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]/75">
                {pillar.short}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)]/75">
          Pillar 1 defines how the organisation intends to operate. Pillar 2 provides the
          standards that make operation consistent. Pillar 3 builds the capability to embed
          the model. Evidence from delivery feeds coaching, standards, and operating-model
          improvement.
        </p>
      </section>

      <section className="border-y border-[var(--line)] bg-white/40 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="display text-3xl md:text-4xl">Direction → Improvement loop</h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-soft)]/80">
            COMPASS runs as a continuous transformation loop—not a one-time rollout.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {transformationLoop.map((step, i) => (
              <div key={step.id} className="panel relative p-4">
                <p className="text-[11px] font-bold text-[var(--brass)]">0{i + 1}</p>
                <p className="display mt-1 text-xl">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="panel p-7">
            <h2 className="display text-3xl">Built for every altitude</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]/80">
              Practical enough for a new joiner learning flow—and for portfolio leaders
              setting investment guardrails. Progressive elaboration means foundation teams
              are not asked to run enterprise ceremonies.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--ink-soft)]">
              {[
                "Product Owner & Scrum Master",
                "Delivery, Initiative & Program managers",
                "Portfolio, PMO & Transformation leads",
                "Risk, security, finance & compliance partners",
                "Coaches and senior leaders",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--teal)]">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/guides"
              className="mt-6 inline-flex text-sm font-semibold text-[var(--teal-deep)]"
            >
              Open role guides →
            </Link>
          </div>
          <div className="panel overflow-hidden p-0">
            <div className="border-b border-[var(--line)] bg-[var(--ink)] px-7 py-5 text-[var(--paper)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass-soft)]">
                Interactive tools
              </p>
              <p className="display mt-1 text-2xl">Decide, intake, assess</p>
            </div>
            <div className="grid gap-0 divide-y divide-[var(--line)]">
              {[
                {
                  href: "/tools/decision",
                  title: "Where should this decision go?",
                  body: "Route decisions by impact and authority.",
                },
                {
                  href: "/tools/front-door",
                  title: "Front-door demand process",
                  body: "Transparent intake from idea to route.",
                },
                {
                  href: "/tools/maturity",
                  title: "Maturity assessment",
                  body: "Self-assess team, leadership, and system dimensions.",
                },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="block px-7 py-5 hover:bg-white/70">
                  <p className="font-semibold">{tool.title}</p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]/75">{tool.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="panel flex flex-col gap-4 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display text-2xl md:text-3xl">What COMPASS stands for</h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)]/80">
              Three acronym options were evaluated. Option A was selected and refined for
              enterprise credibility.
            </p>
          </div>
          <Link
            href="/loop#acronym"
            className="rounded-full bg-[var(--teal)] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            View acronym options
          </Link>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {compassSelected.letters.map((item) => (
            <div key={item.meaning} className="rounded-2xl border border-[var(--line)] bg-white/50 p-4">
              <span className="display text-2xl text-[var(--brass)]">{item.letter}</span>
              <p className="mt-1 text-sm font-semibold">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
