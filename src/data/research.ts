import type { ResearchSource } from "./types";

/** Access date for this COMPASS research library build. */
const ACCESS = "2026-09-20";

export const researchSources: ResearchSource[] = [
  {
    id: "gds-service-standard",
    title: "Service Standard",
    publisher: "GOV.UK / Government Digital Service",
    publicationDate: "2019-05-08 (updated 2022-05-30)",
    accessDate: ACCESS,
    url: "https://www.gov.uk/service-manual/service-standard",
    category: "operating-model",
    supports:
      "User-centred multidisciplinary teams, iterative delivery, published performance data, and proportionate service governance.",
    limitations:
      "UK public-sector context; principles translate but controls may differ in commercial enterprises.",
    evidenceType: "evidence",
  },
  {
    id: "gds-agile-governance",
    title: "Governance principles for agile service delivery",
    publisher: "GOV.UK / Government Digital Service",
    publicationDate: "n.d. (accessed 2026)",
    accessDate: ACCESS,
    url: "https://www.gov.uk/service-manual/agile-delivery/governance-principles-for-agile-service-delivery",
    category: "governance",
    supports:
      "Minimum viable governance: decisions at the right level, do not slow delivery, trust and verify, add controls only if they add value.",
    limitations: "Guidance, not a statutory control framework.",
    evidenceType: "evidence",
  },
  {
    id: "gds-agile-principles",
    title: "Core principles of agile",
    publisher: "GOV.UK / Government Digital Service",
    publicationDate: "n.d.",
    accessDate: ACCESS,
    url: "https://www.gov.uk/service-manual/agile-delivery/core-principles-agile",
    category: "ways-of-working",
    supports:
      "User needs first, iterative delivery, continuous planning, improve team ways of working, learn quickly.",
    limitations: "High-level principles; organisations still need local operating design.",
    evidenceType: "evidence",
  },
  {
    id: "team-topologies-key-concepts",
    title: "Key concepts — Team Topologies",
    publisher: "Team Topologies",
    publicationDate: "n.d.",
    accessDate: ACCESS,
    url: "https://teamtopologies.com/key-concepts",
    category: "scaling",
    supports:
      "Stream-aligned, enabling, complicated-subsystem, and platform team types; cognitive load; thinnest viable platform; interaction modes.",
    limitations:
      "Public summaries; full practice depth is in the Team Topologies book and training. COMPASS translates principles, does not copy proprietary diagrams.",
    evidenceType: "evidence",
  },
  {
    id: "dora-metrics",
    title: "DORA’s software delivery performance metrics",
    publisher: "DORA / Google Cloud",
    publicationDate: "n.d. (research programme ongoing)",
    accessDate: ACCESS,
    url: "https://dora.dev/guides/dora-metrics/",
    category: "engineering-standards",
    supports:
      "Throughput and stability metrics (deployment frequency, change lead time, change fail rate, failed-deployment recovery) as outcome signals for engineering standards and improvement.",
    limitations:
      "Metrics are diagnostic, not targets for gaming; context and well-being matter.",
    evidenceType: "evidence",
  },
  {
    id: "dora-2024-report",
    title: "DORA Accelerate State of DevOps 2024 Report",
    publisher: "DORA, Google",
    publicationDate: "2024",
    accessDate: ACCESS,
    url: "https://research.google/pubs/dora-accelerate-state-of-devops-2024-report/",
    category: "maturity",
    supports:
      "Large-sample research linking software delivery capabilities, platform practices, and organisational performance signals.",
    limitations:
      "Industry aggregates; not organisation-specific benchmarks. Do not invent success rates from this source.",
    evidenceType: "evidence",
  },
  {
    id: "mckinsey-product-om",
    title: "The bottom-line benefit of the product operating model",
    publisher: "McKinsey & Company",
    publicationDate: "n.d. (public article)",
    accessDate: ACCESS,
    url: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-bottom-line-benefit-of-the-product-operating-model",
    category: "product-model",
    supports:
      "Product and platform operating models; pilot-then-scale pattern; operating model maturity dimensions (structure, strategy/governance, ways of working, culture/talent, tooling).",
    limitations:
      "Consulting research; reported client impacts are illustrative and not transferable as guarantees.",
    evidenceType: "evidence",
  },
  {
    id: "safe-lpm",
    title: "Lean Portfolio Management Discipline",
    publisher: "Scaled Agile Framework",
    publicationDate: "n.d. (framework site)",
    accessDate: ACCESS,
    url: "https://framework.scaledagile.com/lean-portfolio-management-discipline",
    category: "portfolio-management",
    supports:
      "Align strategy and execution via investment funding, agile portfolio operations, and lean governance; fund value streams; use strategic themes and OKRs.",
    limitations:
      "SAFe-specific vocabulary. COMPASS remains method-neutral and does not require SAFe adoption.",
    evidenceType: "evidence",
  },
  {
    id: "atlassian-lpm",
    title: "What is Lean Portfolio Management?",
    publisher: "Atlassian",
    publicationDate: "n.d.",
    accessDate: ACCESS,
    url: "https://www.atlassian.com/agile/agile-at-scale/lean-portfolio-management",
    category: "portfolio-management",
    supports:
      "Connect strategy to execution through cadence-based portfolio decisions and funding teams-of-teams rather than only projects.",
    limitations: "Vendor perspective; tooling-agnostic principles extracted for COMPASS.",
    evidenceType: "evidence",
  },
  {
    id: "planview-lpm",
    title: "Lean Portfolio Management: Strategies, Insights, and Best Practices",
    publisher: "Planview",
    publicationDate: "n.d.",
    accessDate: ACCESS,
    url: "https://www.planview.com/resources/articles/lean-portfolio-management/",
    category: "portfolio-management",
    supports:
      "Investment guardrails, value-stream funding, delegated delivery decisions, lean governance collaboration.",
    limitations: "Vendor content; COMPASS uses principles without endorsing a product stack.",
    evidenceType: "evidence",
  },
  {
    id: "flight-levels-intro",
    title: "Flight Levels — A Short Introduction",
    publisher: "Flight Levels / Klaus Leopold (via public PDF summaries)",
    publicationDate: "c. 2011 onwards (model evolution)",
    accessDate: ACCESS,
    url: "https://www.flowsphere.ch/wp-content/uploads/2024/02/Flight-Levels-A-Short-Introduction.pdf",
    category: "scaling",
    supports:
      "Coordinate across operational, coordination, and strategic altitudes; organisational agility depends on interactions between systems, not only agile teams.",
    limitations:
      "Flight Levels is a proprietary thinking model; COMPASS adopts the altitude idea originally, without copying branded canvases.",
    evidenceType: "interpretation",
  },
  {
    id: "scrum-guide-2020",
    title: "The Scrum Guide (2020)",
    publisher: "Ken Schwaber & Jeff Sutherland / Scrum.org & Scrum Guides",
    publicationDate: "2020-11",
    accessDate: ACCESS,
    url: "https://scrumguides.org/scrum-guide.html",
    category: "ways-of-working",
    supports:
      "Accountabilities (Product Owner, Scrum Master, Developers), empiricism, Definition of Done, events as opportunities to inspect and adapt.",
    limitations:
      "Team framework only; enterprise operating model requires additional portfolio and organisational design.",
    evidenceType: "evidence",
  },
  {
    id: "scrum-org-accountabilities",
    title: "Scrum Guide 2020 Update — Role to Accountabilities",
    publisher: "Scrum.org",
    publicationDate: "2020",
    accessDate: ACCESS,
    url: "https://www.scrum.org/resources/blog/scrum-guide-2020-update-role-accountabilities",
    category: "leadership",
    supports:
      "Accountabilities are not job titles; one person may hold multiple accountabilities carefully; organisations map titles to outcomes.",
    limitations: "Does not define portfolio or enterprise roles.",
    evidenceType: "evidence",
  },
  {
    id: "atlassian-health-monitor",
    title: "Team Health Monitors for Building High-Performing Teams",
    publisher: "Atlassian Team Playbook",
    publicationDate: "n.d.",
    accessDate: ACCESS,
    url: "https://www.atlassian.com/team-playbook/health-monitor",
    category: "team-effectiveness",
    supports:
      "Structured team self-assessment, focus on few improvement themes, regular health checkpoints.",
    limitations:
      "Attributes are Atlassian’s; COMPASS maturity model is original and broader (team + leadership + system).",
    evidenceType: "evidence",
  },
  {
    id: "govs-005-digital",
    title: "Government Functional Standard GovS 005: Digital",
    publisher: "UK Government",
    publicationDate: "2023 (v2.1)",
    accessDate: ACCESS,
    url: "https://assets.publishing.service.gov.uk/media/661653b13fe61a4f683ea709/GovS005_Digital_v2.1_2023.pdf",
    category: "governance",
    supports:
      "Default agile/product-centric delivery for digital unless predictive delivery is necessary; assigned ownership for services.",
    limitations: "UK government functional standard; adapt carefully outside that context.",
    evidenceType: "evidence",
  },
];

export const researchCategories = [
  { id: "operating-model", label: "Operating model" },
  { id: "product-model", label: "Product model" },
  { id: "portfolio-management", label: "Portfolio management" },
  { id: "ways-of-working", label: "Ways of working" },
  { id: "engineering-standards", label: "Engineering standards" },
  { id: "coaching", label: "Coaching" },
  { id: "leadership", label: "Leadership" },
  { id: "organisational-change", label: "Organisational change" },
  { id: "maturity", label: "Maturity" },
  { id: "governance", label: "Governance" },
  { id: "team-effectiveness", label: "Team effectiveness" },
  { id: "scaling", label: "Scaling" },
] as const;

export const researchNotes = {
  method:
    "Sources were reviewed from publicly accessible pages only. No paywalls were bypassed. Proprietary frameworks were not copied; principles were translated into an original COMPASS model.",
  distinction:
    "Evidence = claim grounded in a cited public source. Interpretation = COMPASS synthesis. Recommendation = suggested practice for this model.",
  gaps: [
    {
      topic: "Proscribed maturity benchmark percentages",
      status: "Source validation required — no fabricated success rates.",
    },
    {
      topic: "Organisation-specific case studies",
      status: "Any narrative examples in the UI are labelled fictional unless cited.",
    },
  ],
};
