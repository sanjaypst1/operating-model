"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageHero, Section, Callout } from "@/components/ui/Page";
import { maturityDimensions } from "@/data/coaching";

export default function MaturityPage() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(maturityDimensions.map((d) => [d.id, 2])),
  );

  const summary = useMemo(() => {
    const values = Object.values(scores);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const focus = maturityDimensions
      .map((d) => ({ id: d.id, name: d.name, score: scores[d.id] }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 2);
    let band = "Emerging";
    if (avg >= 4.2) band = "Systemic";
    else if (avg >= 3.4) band = "Performing";
    else if (avg >= 2.6) band = "Establishing";
    else if (avg >= 1.8) band = "Forming";
    return { avg, band, focus };
  }, [scores]);

  return (
    <div>
      <PageHero
        eyebrow="Interactive tool"
        title="Maturity assessment"
        description="Self-assess six COMPASS dimensions. This is a coaching aid—not a league table. Scores are local judgments; no industry percentiles are fabricated."
        actions={
          <Link href="/coaching" className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold">
            Coaching catalogue
          </Link>
        }
      />

      <Section title="Score each dimension" description="1 = earliest pattern · 5 = systemic pattern">
        <div className="space-y-4">
          {maturityDimensions.map((dim) => (
            <div key={dim.id} className="panel p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-semibold">{dim.name}</h3>
                <span className="chip">L{scores[dim.id]}</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                value={scores[dim.id]}
                onChange={(e) =>
                  setScores((prev) => ({ ...prev, [dim.id]: Number(e.target.value) }))
                }
                className="mt-4 w-full accent-[var(--teal)]"
              />
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">
                {dim.levels[scores[dim.id] - 1]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sense-making">
        <div className="panel border-l-4 border-[var(--teal)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass)]">
            Indicative band
          </p>
          <h3 className="display mt-2 text-3xl">{summary.band}</h3>
          <p className="mt-2 text-sm text-[var(--ink-soft)]/80">
            Average level {summary.avg.toFixed(1)} / 5. Focus coaching on the lowest dimensions
            first—and check whether the constraint is team practice or system conditions
            (funding, governance, leadership).
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {summary.focus.map((f) => (
              <div key={f.id} className="rounded-xl bg-white/70 p-4 text-sm">
                <p className="font-semibold">{f.name}</p>
                <p className="mt-1 text-[var(--ink-soft)]/75">Priority focus · currently L{f.score}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Callout title="Limitation" tone="brass">
            <p>
              This tool does not claim industry benchmarks or transformation success rates. Use
              evidence from delivery, outcomes, and observation to validate scores.
            </p>
          </Callout>
        </div>
      </Section>
    </div>
  );
}
