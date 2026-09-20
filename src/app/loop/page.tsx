import Link from "next/link";
import { PageHero, Section, Callout } from "@/components/ui/Page";
import {
  compassAcronymOptions,
  compassDirections,
  compassSelected,
  pillars,
  transformationLoop,
} from "@/data/compass";

export const metadata = {
  title: "Transformation Loop & COMPASS Meaning",
  description: "How the three pillars connect, compass directions, and acronym selection.",
};

export default function LoopPage() {
  return (
    <div>
      <PageHero
        eyebrow="System view"
        title="The COMPASS transformation loop"
        description="Direction → Enablement → Capability → Application → Evidence → Improvement. The pillars are not independent libraries."
      />

      <Section title="Continuous loop">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {transformationLoop.map((step, i) => (
            <div key={step.id} className="panel p-4">
              <p className="text-[11px] font-bold text-[var(--brass)]">0{i + 1}</p>
              <p className="display mt-1 text-xl">{step.title}</p>
              <p className="mt-2 text-xs text-[var(--ink-soft)]/75">{step.description}</p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-[var(--teal)]">
                {step.pillar}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.id} href={p.href} className="panel p-5 hover:border-[var(--teal)]/40">
              <p className="text-xs font-bold text-[var(--brass)]">PILLAR {p.number}</p>
              <p className="display mt-2 text-2xl">{p.name}</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/75">{p.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Compass directions" description="Metaphor used sparingly as orientation—not decoration.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {compassDirections.map((d) => (
            <div key={d.id} className="panel p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brass)]">
                {d.label}
              </p>
              <h3 className="display mt-2 text-xl">{d.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/75">{d.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="acronym" title="COMPASS acronym options">
        <Callout title="Selected interpretation" tone="brass">
          <p>
            <strong>{compassSelected.name}</strong> — {compassSelected.selectionRationale}
          </p>
        </Callout>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {compassAcronymOptions.map((opt) => (
            <article
              key={opt.id}
              className={`panel p-5 ${opt.id === "A" ? "border-[var(--teal)] ring-1 ring-[var(--teal)]/30" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brass)]">
                {opt.label}
                {opt.id === "A" ? " · selected base" : ""}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {opt.letters.map((l, idx) => (
                  <li key={`${l.letter}-${idx}`}>
                    <span className="font-bold text-[var(--teal-deep)]">{l.letter}</span> —{" "}
                    {l.meaning}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[var(--ink-soft)]/70">{opt.strength}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 panel p-5">
          <h3 className="font-semibold">Refined selected wording</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {compassSelected.letters.map((l, idx) => (
              <li key={`${l.letter}-${idx}`}>
                <span className="font-bold text-[var(--brass)]">{l.letter}</span> — {l.meaning}:{" "}
                <span className="text-[var(--ink-soft)]/80">{l.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
