"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageHero, Section, Callout } from "@/components/ui/Page";
import { escalationFactors } from "@/data/processes";

type Answers = {
  customer: number;
  financial: number;
  regulatory: number;
  security: number;
  delivery: number;
  dependency: number;
  reputation: number;
  time: number;
};

const labels: { key: keyof Answers; label: string }[] = [
  { key: "customer", label: "Customer impact" },
  { key: "financial", label: "Financial impact" },
  { key: "regulatory", label: "Regulatory impact" },
  { key: "security", label: "Security impact" },
  { key: "delivery", label: "Delivery impact" },
  { key: "dependency", label: "Dependency impact" },
  { key: "reputation", label: "Reputational impact" },
  { key: "time", label: "Time sensitivity" },
];

function routeDecision(a: Answers) {
  const max = Math.max(...Object.values(a));
  const sum = Object.values(a).reduce((x, y) => x + y, 0);
  if (a.regulatory >= 4 || a.security >= 4 || (a.financial >= 4 && a.reputation >= 3)) {
    return {
      level: "Enterprise / partner forum",
      timeframe: "Same day to 5 working days depending on urgency",
      rationale:
        "Material regulatory, security, or combined financial/reputational impact exceeds local authority.",
      next: [
        "Log decision request",
        "Engage risk/security/compliance as applicable",
        "Prepare options and recommendation",
        "Record decision and follow-up owners",
      ],
    };
  }
  if (max >= 4 || sum >= 22) {
    return {
      level: "Portfolio",
      timeframe: "Within the next portfolio cadence or emergency path < 48h",
      rationale: "Cross-product investment, priority, or risk trade-off.",
      next: [
        "Confirm capacity and investment envelope impact",
        "Surface on portfolio RAID",
        "Seek portfolio sponsor decision",
      ],
    };
  }
  if (max >= 3 || a.dependency >= 3 || sum >= 16) {
    return {
      level: "Product / value stream",
      timeframe: "Within weekly product operating rhythm",
      rationale: "Affects shared outcomes, roadmap themes, or multi-team sequencing.",
      next: [
        "Product leader decides with delivery and architecture input",
        "Update roadmap / 90-day plan",
        "Inform teams and log decision",
      ],
    };
  }
  return {
    level: "Team",
    timeframe: "Same day / within sprint or flow plan",
    rationale: "Local delivery choice within working agreement and standards.",
    next: [
      "Team decides with Product Owner",
      "Update backlog / RAID if material",
      "Escalate only if blocked beyond authority",
    ],
  };
}

export default function DecisionToolPage() {
  const [answers, setAnswers] = useState<Answers>({
    customer: 2,
    financial: 2,
    regulatory: 1,
    security: 1,
    delivery: 2,
    dependency: 2,
    reputation: 1,
    time: 2,
  });

  const result = useMemo(() => routeDecision(answers), [answers]);

  return (
    <div>
      <PageHero
        eyebrow="Interactive tool"
        title="Where should this decision go?"
        description="Proportionate escalation based on impact factors and decision authority. Prefer delegated decisions inside clear guardrails."
        actions={
          <>
            <Link href="/tools/front-door" className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold">
              Front-door tool
            </Link>
            <Link href="/tools/maturity" className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold">
              Maturity tool
            </Link>
          </>
        }
      />

      <Section title="Score the decision factors" description="1 = negligible · 5 = severe / enterprise-material">
        <div className="grid gap-4 md:grid-cols-2">
          {labels.map(({ key, label }) => (
            <label key={key} className="panel block p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold">{label}</span>
                <span className="chip">{answers[key]}</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                value={answers[key]}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [key]: Number(e.target.value) }))
                }
                className="mt-3 w-full accent-[var(--teal)]"
              />
            </label>
          ))}
        </div>
      </Section>

      <Section title="Recommended route">
        <div className="panel border-l-4 border-[var(--teal)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass)]">
            Decision level
          </p>
          <h3 className="display mt-2 text-3xl">{result.level}</h3>
          <p className="mt-3 text-sm text-[var(--ink-soft)]/80">{result.rationale}</p>
          <p className="mt-2 text-sm">
            <strong>Timeframe:</strong> {result.timeframe}
          </p>
          <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-[var(--ink-soft)]/80">
            {result.next.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="mt-6">
          <Callout title="Factors considered">
            <p>{escalationFactors.join(" · ")}</p>
          </Callout>
        </div>
      </Section>
    </div>
  );
}
