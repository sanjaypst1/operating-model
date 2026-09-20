import { PageHero, Section, Callout } from "@/components/ui/Page";
import { progressivePrinciples, scales } from "@/data/scales";

export const metadata = {
  title: "Scaling Architecture",
  description: "Progressive elaboration from a 10-person foundation to 600–700 enterprise colleagues.",
};

export default function ScalePage() {
  return (
    <div>
      <PageHero
        eyebrow="Scaling architecture"
        title="From 10 to 700 without bureaucracy"
        description="Five levels of progressive elaboration. Introduce coordination only when shared outcomes, dependencies, or investment decisions require it."
      />

      <Section title="Five levels">
        <div className="space-y-4">
          {scales.map((scale, index) => (
            <article key={scale.id} className="panel overflow-hidden md:grid md:grid-cols-[200px_1fr]">
              <div className="bg-[var(--ink)] px-5 py-6 text-[var(--paper)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brass-soft)]">
                  Level {index + 1}
                </p>
                <h3 className="display mt-2 text-2xl">{scale.name.replace(/^Level \d+ — /, "")}</h3>
                <p className="mt-3 text-sm text-white/70">{scale.audience}</p>
                <p className="mt-1 text-xs text-white/50">{scale.structure}</p>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm font-semibold text-[var(--teal-deep)]">{scale.principle}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-soft)]/60">
                      Focus
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--ink-soft)]/80">
                      {scale.focus.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-soft)]/60">
                      Scaling note
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--ink-soft)]/80">
                      {scale.add.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Progressive elaboration principles">
        <div className="grid gap-3 md:grid-cols-2">
          {progressivePrinciples.map((p) => (
            <div key={p} className="rounded-2xl border border-[var(--line)] bg-white/60 px-4 py-3 text-sm">
              {p}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout title="Interpretation">
            <p>
              Flight Levels thinking (operational, coordination, strategic altitudes) and Lean
              Portfolio Management ideas (strategy alignment, investment funding, lean governance)
              inform COMPASS scale design. COMPASS remains method-neutral and does not require SAFe
              or Flight Levels certification.
            </p>
          </Callout>
        </div>
      </Section>
    </div>
  );
}
