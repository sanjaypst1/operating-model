"use client";

import { useMemo, useState } from "react";
import { PageHero, Section, Callout } from "@/components/ui/Page";
import { researchCategories, researchNotes, researchSources } from "@/data/research";

export default function ResearchPage() {
  const [category, setCategory] = useState("all");
  const filtered = useMemo(
    () =>
      researchSources.filter((s) => category === "all" || s.category === category),
    [category],
  );

  return (
    <div>
      <PageHero
        eyebrow="Evidence base"
        title="Research library"
        description="Publicly accessible sources that informed COMPASS. Evidence, interpretation, and recommendation are distinguished. No paywalls were bypassed; no proprietary diagrams were copied."
      />

      <Section title="Method">
        <Callout title="Research rules">
          <p>{researchNotes.method}</p>
          <p className="mt-2">{researchNotes.distinction}</p>
        </Callout>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {researchNotes.gaps.map((gap) => (
            <div key={gap.topic} className="rounded-2xl border border-dashed border-[var(--brass)]/50 bg-white/50 p-4 text-sm">
              <p className="font-semibold">{gap.topic}</p>
              <p className="mt-1 text-[var(--ink-soft)]/75">{gap.status}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sources by category">
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`chip ${category === "all" ? "bg-[var(--ink)] text-white" : ""}`}
          >
            All
          </button>
          {researchCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`chip ${category === c.id ? "bg-[var(--ink)] text-white" : ""}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((source) => (
            <article key={source.id} className="panel p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">{source.category}</span>
                <span className="chip">{source.evidenceType}</span>
              </div>
              <h3 className="mt-3 font-semibold">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--teal-deep)]"
                >
                  {source.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]/75">
                {source.publisher} · Published: {source.publicationDate} · Accessed:{" "}
                {source.accessDate}
              </p>
              <p className="mt-3 text-sm">
                <strong>Supports:</strong> {source.supports}
              </p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">
                <strong>Limitations:</strong> {source.limitations}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-[var(--teal-deep)]"
              >
                Open source →
              </a>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
