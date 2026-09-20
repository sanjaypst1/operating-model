import Link from "next/link";
import { PageHero, Section, ScaleBadge, Callout } from "@/components/ui/Page";
import { capabilityLevels, coachingServices, maturityDimensions } from "@/data/coaching";

export const metadata = {
  title: "Coaching & Capability",
  description: "Pillar 3 — build capability at individual, team, leadership, and enterprise system levels.",
};

export default function CoachingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pillar 3"
        title="Coaching & Capability"
        description="Transformation fails when coaching only 'fixes teams' while funding, governance, and leadership behaviours stay unchanged. COMPASS coaches the system at four connected levels."
        actions={
          <Link
            href="/tools/maturity"
            className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white"
          >
            Run maturity assessment
          </Link>
        }
      />

      <Section title="Four connected levels">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilityLevels.map((level) => (
            <div key={level.id} className="panel p-5">
              <h3 className="display text-2xl">{level.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">{level.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-[var(--ink-soft)]/70">
                {level.examples.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Callout title="Design principle" tone="coral">
            <p>
              Do not position coaching as fixing teams while leaving management behaviours,
              funding models, governance, and organisational constraints untouched. Insights from
              Pillar 3 must influence Pillars 1 and 2.
            </p>
          </Callout>
        </div>
      </Section>

      <Section
        title="Coaching services catalogue"
        description="Services span team, product, delivery, leadership, portfolio, CoPs, clinics, and transformation health."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {coachingServices.map((service) => (
            <article key={service.id} className="panel p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{service.name}</h3>
                <span className="chip">{service.level}</span>
                <ScaleBadge scale={service.scale} />
              </div>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">{service.purpose}</p>
              <p className="mt-3 text-xs">
                <strong>When:</strong> {service.whenToUse}
              </p>
              <p className="mt-1 text-xs">
                <strong>Format:</strong> {service.format} · <strong>Duration:</strong>{" "}
                {service.duration}
              </p>
              <ul className="mt-3 list-disc pl-4 text-sm text-[var(--ink-soft)]/80">
                {service.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Maturity dimensions"
        description="Original COMPASS maturity model. Levels describe patterns—not fabricated industry percentiles."
      >
        <div className="space-y-4">
          {maturityDimensions.map((dim) => (
            <div key={dim.id} className="panel p-5">
              <h3 className="font-semibold">{dim.name}</h3>
              <ol className="mt-3 grid gap-2 md:grid-cols-5">
                {dim.levels.map((level, i) => (
                  <li key={level} className="rounded-xl bg-white/60 p-3 text-xs">
                    <span className="font-bold text-[var(--brass)]">L{i + 1}</span>
                    <p className="mt-1 text-[var(--ink-soft)]/80">{level}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
