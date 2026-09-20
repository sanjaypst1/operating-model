"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero, Section, Callout } from "@/components/ui/Page";
import { demandClasses, frontDoorFields, frontDoorStages } from "@/data/processes";

type FormState = {
  requestor: string;
  problem: string;
  outcome: string;
  urgency: string;
  classification: string;
  evidence: string;
};

export default function FrontDoorPage() {
  const [form, setForm] = useState<FormState>({
    requestor: "",
    problem: "",
    outcome: "",
    urgency: "normal",
    classification: "idea",
    evidence: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function triage() {
    if (form.urgency === "critical" || form.classification === "regulatory") {
      return {
        path: "Fast-track",
        action: "Progress immediately to investigate / remediate with named owner and compliance/security engagement as needed.",
        sla: "Acknowledge < 4 business hours; route < 1 business day",
      };
    }
    if (!form.problem || !form.outcome) {
      return {
        path: "Verify completeness",
        action: "Return to requestor for problem statement and desired outcome.",
        sla: "Request clarification < 2 business days",
      };
    }
    if (form.classification === "defect" || form.classification === "operational") {
      return {
        path: "Route to owning product team",
        action: "Triage against existing defects/incidents; avoid duplicates.",
        sla: "Initial triage < 1 business day",
      };
    }
    return {
      path: "Investigate / discovery",
      action: "Classify, assess alignment and value/risk, identify owner, then reject, defer, or progress.",
      sla: "Decision communicated < 10 business days",
    };
  }

  const result = triage();

  return (
    <div>
      <PageHero
        eyebrow="Demand management"
        title="Front-door process"
        description="Transparent intake for ideas, defects, operational issues, regulatory demand, and strategic initiatives—with fast-track for urgent production or regulatory need."
        actions={
          <Link href="/tools/decision" className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold">
            Decision router
          </Link>
        }
      />

      <Section title="12 stages">
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {frontDoorStages.map((stage) => (
            <li key={stage.id} className="panel p-4 text-sm">
              <span className="text-[11px] font-bold text-[var(--brass)]">{stage.id}</span>
              <p className="mt-1 font-semibold">{stage.name}</p>
              <p className="mt-1 text-xs text-[var(--ink-soft)]/75">{stage.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Interactive intake (demo)" description="Client-side demo only — does not persist data.">
        <form
          className="panel grid gap-4 p-6 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="text-sm md:col-span-2">
            <span className="font-semibold">Requestor</span>
            <input
              className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2"
              value={form.requestor}
              onChange={(e) => setForm({ ...form, requestor: e.target.value })}
              placeholder="Name and team"
            />
          </label>
          <label className="text-sm md:col-span-2">
            <span className="font-semibold">Problem statement</span>
            <textarea
              className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2"
              rows={3}
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              placeholder="Who is affected and what problem are they facing?"
            />
          </label>
          <label className="text-sm md:col-span-2">
            <span className="font-semibold">Desired outcome</span>
            <textarea
              className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2"
              rows={2}
              value={form.outcome}
              onChange={(e) => setForm({ ...form, outcome: e.target.value })}
            />
          </label>
          <label className="text-sm">
            <span className="font-semibold">Classification</span>
            <select
              className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2"
              value={form.classification}
              onChange={(e) => setForm({ ...form, classification: e.target.value })}
            >
              {demandClasses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="font-semibold">Urgency</span>
            <select
              className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2"
              value={form.urgency}
              onChange={(e) => setForm({ ...form, urgency: e.target.value })}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="critical">Critical (production / regulatory)</option>
            </select>
          </label>
          <label className="text-sm md:col-span-2">
            <span className="font-semibold">Evidence / examples</span>
            <input
              className="mt-1 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2"
              value={form.evidence}
              onChange={(e) => setForm({ ...form, evidence: e.target.value })}
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-[var(--teal)] px-5 py-3 text-sm font-semibold text-white md:col-span-2"
          >
            Run triage recommendation
          </button>
        </form>

        {submitted && (
          <div className="mt-4 panel border-l-4 border-[var(--brass)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass)]">
              Recommended path
            </p>
            <h3 className="display mt-2 text-2xl">{result.path}</h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)]/80">{result.action}</p>
            <p className="mt-2 text-sm">
              <strong>Service level:</strong> {result.sla}
            </p>
          </div>
        )}

        <div className="mt-6">
          <Callout title="Minimum form fields">
            <p>{frontDoorFields.join(" · ")}</p>
          </Callout>
        </div>
      </Section>
    </div>
  );
}
