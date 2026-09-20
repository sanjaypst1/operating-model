"use client";

import { useMemo, useState } from "react";
import { PageHero, Section, ScaleBadge, Callout } from "@/components/ui/Page";
import { standards, cicdMaturityStages } from "@/data/standards";

export default function StandardsPage() {
  const categories = useMemo(
    () => Array.from(new Set(standards.map((s) => s.category))),
    [],
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [favourites, setFavourites] = useState<string[]>([]);

  const filtered = standards.filter((s) => {
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.purpose.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q);
    const matchesCategory = category === "all" || s.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <PageHero
        eyebrow="Pillar 2"
        title="Working Standards"
        description="The enablement and productivity engine—practical standards, templates, quality expectations, and tooling guidance that make the operating model executable without administration theatre."
      />

      <Section
        title="Standards library"
        description="Search, filter, favourite, and expand any standard. Each includes minimum, recommended, and advanced practice plus scale applicability."
      >
        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search standards..."
            className="w-full rounded-full border border-[var(--line)] bg-white/80 px-4 py-3 text-sm outline-none ring-[var(--teal)] focus:ring-2 md:max-w-md"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-full border border-[var(--line)] bg-white/80 px-4 py-3 text-sm"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {favourites.length > 0 && (
          <p className="mb-4 text-sm text-[var(--ink-soft)]/75">
            Favourites: {favourites.map((id) => standards.find((s) => s.id === id)?.name).join(", ")}
          </p>
        )}

        <div className="space-y-3">
          {filtered.map((s) => (
            <details key={s.id} className="panel p-0">
              <summary className="cursor-pointer list-none px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brass)]">
                      {s.category}
                    </p>
                    <p className="font-semibold">{s.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ScaleBadge scale={s.scale} />
                    <button
                      type="button"
                      className="chip"
                      onClick={(e) => {
                        e.preventDefault();
                        setFavourites((prev) =>
                          prev.includes(s.id) ? prev.filter((x) => x !== s.id) : [...prev, s.id],
                        );
                      }}
                    >
                      {favourites.includes(s.id) ? "★ Saved" : "☆ Save"}
                    </button>
                  </div>
                </div>
              </summary>
              <div className="space-y-4 border-t border-[var(--line)] px-5 py-4 text-sm">
                <p className="text-[var(--ink-soft)]/80">{s.purpose}</p>
                <p>
                  <strong>Why it matters:</strong> {s.whyItMatters}
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="font-semibold">Minimum</p>
                    <ul className="mt-2 list-disc pl-4 text-[var(--ink-soft)]/80">
                      {s.minimum.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Recommended</p>
                    <ul className="mt-2 list-disc pl-4 text-[var(--ink-soft)]/80">
                      {s.recommended.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Advanced</p>
                    <ul className="mt-2 list-disc pl-4 text-[var(--ink-soft)]/80">
                      {s.advanced.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl bg-[var(--sea)]/10 p-3">
                    <p className="font-semibold text-[var(--teal-deep)]">Good example</p>
                    <p className="mt-1 text-[var(--ink-soft)]/80">{s.examples.good}</p>
                  </div>
                  <div className="rounded-xl bg-[var(--coral)]/10 p-3">
                    <p className="font-semibold text-[var(--coral)]">Poor example</p>
                    <p className="mt-1 text-[var(--ink-soft)]/80">{s.examples.poor}</p>
                  </div>
                </div>
                <p>
                  <strong>Anti-patterns:</strong> {s.antiPatterns.join("; ")}
                </p>
                <p>
                  <strong>Owner:</strong> {s.owner} · <strong>Version:</strong> {s.version} ·{" "}
                  <strong>Last reviewed:</strong> {s.lastReviewed}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="chip">
                    Apply this standard
                  </button>
                  <button type="button" className="chip">
                    Request an exception
                  </button>
                  <button type="button" className="chip">
                    Suggest an improvement
                  </button>
                  <a
                    className="chip"
                    href={`data:text/plain,${encodeURIComponent(
                      `${s.name}\n\nMinimum:\n- ${s.minimum.join("\n- ")}`,
                    )}`}
                    download={`${s.id}-checklist.txt`}
                  >
                    Download checklist
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        title="CI/CD maturity stages"
        description="Engineering standards progress from manual heroics to continuous improvement. Informed by DORA software delivery performance research (evidence), applied as COMPASS stages (interpretation)."
      >
        <div className="grid gap-3 md:grid-cols-5">
          {cicdMaturityStages.map((stage, i) => (
            <div key={stage.id} className="panel p-4">
              <p className="text-[11px] font-bold text-[var(--brass)]">Stage {i + 1}</p>
              <p className="display mt-1 text-xl">{stage.name}</p>
              <p className="mt-2 text-xs text-[var(--ink-soft)]/75">{stage.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout title="Evidence note">
            <p>
              DORA research associates software delivery throughput and stability metrics with
              organisational performance signals. COMPASS uses these as improvement compasses—not
              as league-table targets. See Research library for citations.
            </p>
          </Callout>
        </div>
      </Section>
    </div>
  );
}
