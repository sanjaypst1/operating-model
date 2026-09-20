import Link from "next/link";
import { PageHero, Section, Callout, ScaleBadge } from "@/components/ui/Page";
import { events } from "@/data/events";
import { artifacts } from "@/data/artifacts";
import {
  engagementPartners,
  investmentCycle,
  operatingModelAreas,
  orgStructures,
  planningHorizons,
} from "@/data/processes";

export const metadata = {
  title: "Operating Model",
  description: "Pillar 1 — how we organise, decide, plan, fund, govern, engage, deliver, escalate, and improve.",
};

export default function OperatingModelPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pillar 1"
        title="Operating Model"
        description="How we organise, decide, plan, fund, govern, engage, deliver, escalate, and improve—with progressive elaboration from one team to a federated enterprise."
        actions={
          <>
            <Link href="/roles" className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white">
              Role cards
            </Link>
            <Link href="/tools/front-door" className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold">
              Front-door process
            </Link>
          </>
        }
      />

      <Section title="Map of the pillar" description="Jump to any operating-model area.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {operatingModelAreas.map((area) => (
            <a key={area.id} href={area.href} className="panel p-4 text-sm font-semibold hover:border-[var(--teal)]/40">
              {area.title}
            </a>
          ))}
        </div>
      </Section>

      <Section
        id="purpose"
        title="Purpose & outcomes"
        description="Start with organisational and product purpose, then make outcomes owned and measurable."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Organisational purpose", "Why the enterprise exists and what success means for customers and colleagues."],
            ["Product / service purpose", "The problem slice this product owns."],
            ["Strategic themes & OKRs", "Translate strategy into measurable objectives without drowning teams in KPIs."],
            ["Benefits realisation", "Hypothesis → evidence → continue/pivot/stop—owned by a business owner."],
          ].map(([t, d]) => (
            <div key={t} className="panel p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/75">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Callout title="Recommendation">
            <p>
              Outcome ownership sits with a named business or product owner. Activity metrics
              (story points, utilisation) are supporting signals—not success definitions.
            </p>
          </Callout>
        </div>
      </Section>

      <Section
        id="structure"
        title="Organisational structure"
        description="Show relationships among enterprise, portfolio, value stream, product, program, initiative, team, chapters, CoPs, enabling functions, and governance forums—without inventing layers early."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orgStructures.map((s) => (
            <div key={s.id} className="panel p-5">
              <p className="chip mb-3">{s.scale}</p>
              <h3 className="display text-xl">{s.name}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/75">{s.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[var(--ink-soft)]/75">
          Interpretation: Team Topologies principles (stream-aligned teams supported by enabling
          and platform capabilities) inform COMPASS structure choices without requiring a wholesale
          re-org on day one.{" "}
          <Link href="/research" className="font-semibold text-[var(--teal-deep)]">
            See research library
          </Link>
          .
        </p>
      </Section>

      <Section
        id="events"
        title="Core events & cadences"
        description="Ceremonies earn their place by creating decisions, insight, or flow—not by filling calendars."
      >
        <div className="space-y-3">
          {events.map((event) => (
            <details key={event.id} className="panel group p-0 open:shadow-lg">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold marker:content-none">
                <span className="flex flex-wrap items-center gap-2">
                  <span>{event.name}</span>
                  <span className="chip">{event.level}</span>
                  <ScaleBadge scale={event.scale} />
                </span>
              </summary>
              <div className="grid gap-4 border-t border-[var(--line)] px-5 py-4 text-sm md:grid-cols-2">
                <div>
                  <p className="font-semibold">Purpose</p>
                  <p className="mt-1 text-[var(--ink-soft)]/80">{event.purpose}</p>
                  <p className="mt-3 font-semibold">Owner</p>
                  <p className="mt-1 text-[var(--ink-soft)]/80">{event.owner}</p>
                  <p className="mt-3 font-semibold">Cadence</p>
                  <p className="mt-1 text-[var(--ink-soft)]/80">
                    {event.frequency} · {event.duration}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Participants</p>
                  <p className="mt-1 text-[var(--ink-soft)]/80">{event.participants.join(", ")}</p>
                  <p className="mt-3 font-semibold">Outputs / decisions</p>
                  <p className="mt-1 text-[var(--ink-soft)]/80">
                    {event.outputs.join("; ")}. Decisions: {event.decisions.join("; ")}.
                  </p>
                  <p className="mt-3 font-semibold">Anti-patterns</p>
                  <p className="mt-1 text-[var(--ink-soft)]/80">{event.antiPatterns.join("; ")}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        id="artifacts"
        title="Artifacts"
        description="Minimum content, owners, and common mistakes—templates as outlines, not bureaucracy packs."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {artifacts.map((a) => (
            <article key={a.id} className="panel p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{a.name}</h3>
                <ScaleBadge scale={a.scale} />
              </div>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">{a.purpose}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--brass)]">
                Owner · {a.owner}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--ink-soft)]/80">
                {a.minimumContent.slice(0, 5).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[var(--coral)]">
                Common mistakes: {a.commonMistakes.join("; ")}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="engagement"
        title="Engagement model"
        description="Early collaboration with partners beats late-stage approval gates."
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] text-xs uppercase tracking-wide text-[var(--ink-soft)]/70">
                <th className="py-3 pr-4">Partner</th>
                <th className="py-3 pr-4">When</th>
                <th className="py-3 pr-4">Lead time</th>
                <th className="py-3">Expect</th>
              </tr>
            </thead>
            <tbody>
              {engagementPartners.map((p) => (
                <tr key={p.partner} className="border-b border-[var(--line)] align-top">
                  <td className="py-3 pr-4 font-semibold">{p.partner}</td>
                  <td className="py-3 pr-4 text-[var(--ink-soft)]/80">{p.when}</td>
                  <td className="py-3 pr-4 text-[var(--ink-soft)]/80">{p.leadTime}</td>
                  <td className="py-3 text-[var(--ink-soft)]/80">{p.expect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="planning"
        title="Planning model"
        description="Information flows between horizons—strategy does not jump straight into sprint tasks."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {planningHorizons.map((h) => (
            <div key={h.id} className="panel p-4">
              <p className="display text-lg">{h.name}</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/75">{h.focus}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Callout title="90-day planning includes">
            <p>
              Outcomes, priorities, capacity, assumptions, dependencies, risks, milestones,
              customer validation, technical enablers, change activities, measures, confidence,
              and decisions needed.
            </p>
          </Callout>
          <Callout title="Quarterly planning includes" tone="brass">
            <p>
              Strategic context, product outcomes, portfolio priorities, capacity envelope,
              investment guardrails, team objectives, dependencies, risks, architecture needs,
              regulatory commitments, change/adoption needs, leadership decisions, and commitment
              confidence.
            </p>
          </Callout>
        </div>
      </Section>

      <Section
        id="investment"
        title="Investment cycle"
        description="Neutral between project, product, and hybrid funding—clarity of decision rights matters more than dogma."
      >
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-7">
          {investmentCycle.map((step, i) => (
            <li key={step} className="panel p-3 text-sm">
              <span className="text-[11px] font-bold text-[var(--brass)]">{i + 1}</span>
              <p className="mt-1 font-medium leading-snug">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="change"
        title="Change process"
        description="Differentiate product change, organisational change, technology change, operational change, regulatory change, and change to COMPASS itself."
      >
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Change hypothesis",
            "Stakeholder & impact analysis",
            "Readiness",
            "Communications & training",
            "Adoption planning",
            "Operational transition",
            "Reinforcement",
            "Adoption measurement",
            "Benefits tracking & feedback",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/50 px-4 py-3 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="pmo"
        title="PMO & governance"
        description="Position the PMO as enabling insight—not only reporting or compliance."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-5">
            <h3 className="font-semibold">Enabling services</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]/80">
              {[
                "Portfolio visibility & data quality",
                "Decision support & governance calendar",
                "Dependency and risk aggregation",
                "Benefits tracking partnership",
                "Lessons learned & model compliance insights",
              ].map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
          <div className="panel p-5">
            <h3 className="font-semibold">Minimum governance by context</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]/80">
              <li>• Small team improvements — lightweight notes</li>
              <li>• Product enhancements — product operating cadence</li>
              <li>• Cross-team initiatives — canvas + dependency map</li>
              <li>• Programs / regulatory / high-risk — proportionate assurance</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="model-gov"
        title="Operating-model governance"
        description="COMPASS itself is versioned, owned, and improved."
      >
        <Callout title="Model ownership loop" tone="brass">
          <p>
            Owner → pillar owners → standard owners → feedback intake → change proposal →
            impact assessment → pilot → approval → release → communication → training →
            adoption monitoring → retire obsolete content → quarterly/annual review.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
