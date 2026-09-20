import type { ScaleInfo, ScaleApplicability } from "./types";

export const scales: ScaleInfo[] = [
  {
    id: "foundation",
    name: "Level 1 — Foundation",
    audience: "~10 colleagues",
    structure: "One cross-functional team",
    focus: [
      "Clear purpose and customer outcome",
      "Basic roles and a single backlog",
      "Team ceremonies and working agreement",
      "Definition of Ready / Done",
      "Basic Jira setup and metrics",
      "Weekly stakeholder communication",
      "Initial coaching and fast feedback",
      "Minimal governance",
    ],
    add: [
      "Start here. Prove the model works before adding coordination layers.",
    ],
    principle:
      "Minimum viable operating model. One team, one backlog, one shared Definition of Done.",
  },
  {
    id: "multi-team",
    name: "Level 2 — Multi-team",
    audience: "~30–60 colleagues",
    structure: "Three to six teams",
    focus: [
      "Shared outcomes and cross-team planning",
      "Dependency visibility",
      "Common Jira and engineering standards",
      "Product and delivery coordination",
      "Communities of practice",
      "Escalation paths",
      "Shared maturity reviews",
      "Coordinated coaching",
    ],
    add: [
      "Introduce coordination only where dependencies or shared outcomes require it.",
    ],
    principle:
      "Coordinate for flow. Do not clone foundation ceremonies for every new team boundary.",
  },
  {
    id: "value-stream",
    name: "Level 3 — Product / Value stream",
    audience: "~100–200 colleagues",
    structure: "Product or value-stream leadership across teams",
    focus: [
      "Outcome-based roadmaps",
      "Quarterly and rolling 90-day planning",
      "Capacity allocation and investment visibility",
      "Architecture coordination",
      "Risk, security, compliance, and finance integration",
      "Product operating reviews",
      "Benefits and outcome tracking",
      "Formal capability pathways",
    ],
    add: [
      "Connect strategy to team capacity through product leadership and planning horizons.",
    ],
    principle:
      "Optimise the value stream, not individual team utilisation.",
  },
  {
    id: "portfolio",
    name: "Level 4 — Portfolio",
    audience: "~300–450 colleagues",
    structure: "Multiple products under portfolio prioritisation",
    focus: [
      "Portfolio prioritisation and investment guardrails",
      "Demand and capacity management",
      "Cross-product dependency governance",
      "Portfolio metrics and strategic alignment",
      "Quarterly business and portfolio reviews",
      "Portfolio PMO as an enabling function",
      "Executive visibility and assurance expectations",
      "Leadership coaching",
    ],
    add: [
      "Fund outcomes and capacity envelopes; avoid funding every initiative as a siloed project by default.",
    ],
    principle:
      "Portfolio leadership sets direction and guardrails; products decide how to deliver within them.",
  },
  {
    id: "enterprise",
    name: "Level 5 — Enterprise scale",
    audience: "~600–700 colleagues",
    structure: "Federated operating model across business units",
    focus: [
      "Enterprise principles and minimum standards",
      "Local flexibility within guardrails",
      "Common taxonomy and planning cadence",
      "Integrated investment cycle",
      "Transformation governance",
      "Capability academy and coaching community",
      "Leadership capability framework",
      "Enterprise maturity dashboard and model versioning",
    ],
    add: [
      "Federate ownership. Centralise only what must be common.",
    ],
    principle:
      "Scale through reusable standards and capability—not through more approvals.",
  },
];

export const scaleLabels: Record<ScaleApplicability, string> = {
  "all-scales": "Required at all scales",
  "multi-team": "Introduced at multi-team scale",
  "value-stream": "Introduced at value-stream scale",
  portfolio: "Introduced at portfolio scale",
  enterprise: "Introduced at enterprise scale",
  optional: "Optional based on context",
  regulated: "Required only for regulated or high-risk work",
};

export const progressivePrinciples = [
  "Do not apply enterprise governance to a 10-person team.",
  "Scaling is not more meetings, approvals, documents, or management layers.",
  "Prefer minimum viable governance and clear decision rights.",
  "Use guardrails rather than unnecessary approvals.",
  "Keep local flexibility within enterprise standards.",
  "Measure outcomes and learning, not ceremony compliance alone.",
];
