"use client";

import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/ui/Page";
import { decisionRightsMatrix, roles } from "@/data/roles";

export default function RolesPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return roles.filter(
      (r) =>
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      <PageHero
        eyebrow="Accountabilities"
        title="Roles & decision rights"
        description="Role cards, interactions, anti-patterns, and scale guidance. Not every role is a separate headcount at foundation scale—accountabilities may combine."
      />

      <Section title="Role cards">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search roles..."
          className="mb-6 w-full max-w-md rounded-full border border-[var(--line)] bg-white/80 px-4 py-3 text-sm outline-none ring-[var(--teal)] focus:ring-2"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((role) => (
            <article key={role.id} id={role.id} className="panel scroll-mt-24 p-5">
              <h3 className="display text-2xl">{role.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">{role.summary}</p>
              <div className="mt-4 grid gap-3 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brass)]">
                    Responsibilities
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-[var(--ink-soft)]/80">
                    {role.responsibilities.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brass)]">
                    Decision rights
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-[var(--ink-soft)]/80">
                    {role.decisionRights.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brass)]">
                    Anti-patterns
                  </p>
                  <p className="mt-1 text-[var(--coral)]">{role.antiPatterns.join("; ")}</p>
                </div>
                {role.mayCombineWith && (
                  <p className="text-xs text-[var(--ink-soft)]/70">
                    May combine with: {role.mayCombineWith.join(", ")}
                  </p>
                )}
                <div className="rounded-xl bg-white/60 p-3 text-xs">
                  <p className="font-semibold">Scale guidance</p>
                  <ul className="mt-1 space-y-1 text-[var(--ink-soft)]/75">
                    {Object.entries(role.scaleGuidance).map(([k, v]) => (
                      <li key={k}>
                        <strong>{k}:</strong> {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Decision-rights matrix"
        description="RAPID-style view of who decides at team, product, portfolio, and enterprise altitudes."
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] text-xs uppercase tracking-wide text-[var(--ink-soft)]/70">
                <th className="py-3 pr-3">Decision</th>
                <th className="py-3 pr-3">Team</th>
                <th className="py-3 pr-3">Product</th>
                <th className="py-3 pr-3">Portfolio</th>
                <th className="py-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {decisionRightsMatrix.map((row) => (
                <tr key={row.decision} className="border-b border-[var(--line)] align-top">
                  <td className="py-3 pr-3 font-medium">{row.decision}</td>
                  <td className="py-3 pr-3 text-[var(--ink-soft)]/80">{row.team}</td>
                  <td className="py-3 pr-3 text-[var(--ink-soft)]/80">{row.product}</td>
                  <td className="py-3 pr-3 text-[var(--ink-soft)]/80">{row.portfolio}</td>
                  <td className="py-3 text-[var(--ink-soft)]/80">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
