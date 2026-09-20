export const frontDoorStages = [
  { id: 1, name: "Submit request", description: "Capture the ask with minimum required fields." },
  { id: 2, name: "Verify completeness", description: "Confirm enough information to triage." },
  { id: 3, name: "Classify demand", description: "Idea, defect, operational, regulatory, strategic, mandatory." },
  { id: 4, name: "Initial triage", description: "Quick scan for duplicates, urgency, and routing." },
  { id: 5, name: "Identify problem", description: "Customer and business problem, not solution." },
  { id: 6, name: "Strategic alignment", description: "Map to themes and outcomes." },
  { id: 7, name: "Assess value & risk", description: "Urgency, value, risk, complexity." },
  { id: 8, name: "Identify owner", description: "Potential product/team owner." },
  { id: 9, name: "Decide path", description: "Reject, defer, investigate, or progress." },
  { id: 10, name: "Route", description: "Send to discovery or planning." },
  { id: 11, name: "Record decision", description: "Rationale and decision log entry." },
  { id: 12, name: "Communicate", description: "Close the loop with the requestor." },
];

export const demandClasses = [
  { id: "idea", label: "New idea / opportunity" },
  { id: "enhancement", label: "Product enhancement" },
  { id: "defect", label: "Defect" },
  { id: "operational", label: "Operational issue" },
  { id: "regulatory", label: "Regulatory / mandatory" },
  { id: "strategic", label: "Strategic initiative" },
  { id: "tech", label: "Technical enabler / debt" },
];

export const frontDoorFields = [
  "Requestor name and team",
  "Customer or user affected",
  "Problem statement",
  "Desired outcome",
  "Urgency and time sensitivity",
  "Known constraints (regulatory, security, date)",
  "Evidence or examples",
  "Suggested owner (optional)",
  "Related existing work (if known)",
];

export const engagementPartners = [
  {
    partner: "Architecture",
    when: "New boundaries, significant design, cross-product impact",
    leadTime: "3–10 working days depending on complexity",
    need: "Context, options considered, constraints",
    expect: "Advice / architecture decision record",
  },
  {
    partner: "Security",
    when: "Auth changes, data exposure, new integrations, elevated risk",
    leadTime: "2–10 working days; urgent path for incidents",
    need: "Data flows, trust boundaries, proposed controls",
    expect: "Risk view and control recommendations",
  },
  {
    partner: "Risk",
    when: "Material operational, financial, or reputational risk",
    leadTime: "Aligned to decision cadence",
    need: "Risk description, impact, mitigations",
    expect: "Appetite alignment / escalation advice",
  },
  {
    partner: "Compliance / Legal",
    when: "Regulatory change, customer communications with legal impact, waivers",
    leadTime: "Depends on obligation; plan early",
    need: "Obligation source, proposed approach, evidence plan",
    expect: "Interpretation and evidence expectations",
  },
  {
    partner: "Finance",
    when: "Funding decisions, tolerance breaches, benefits tracking",
    leadTime: "Before investment forums",
    need: "Cost profile, benefits hypothesis, run vs change",
    expect: "Funding advice within guardrails",
  },
  {
    partner: "Change management",
    when: "Colleague or customer behaviour change required for benefits",
    leadTime: "From discovery onward for significant change",
    need: "Impacted groups, readiness risks",
    expect: "Adoption plan partnership",
  },
  {
    partner: "PMO",
    when: "Cross-team initiatives, portfolio visibility, assurance needs",
    leadTime: "Ongoing partnership",
    need: "Plan, RAID, outcomes",
    expect: "Decision support and insight, not ownership of delivery",
  },
];

export const investmentCycle = [
  "Strategic direction",
  "Demand identification",
  "Problem validation",
  "Initial assessment",
  "Discovery funding",
  "Option analysis",
  "Prioritisation",
  "Investment decision",
  "Capacity allocation",
  "Delivery funding",
  "Outcome tracking",
  "Benefits review",
  "Continue, pivot, pause, or stop",
  "Investment reallocation",
];

export const planningHorizons = [
  { id: "strategic", name: "Strategic horizon", focus: "Purpose, themes, multi-year direction" },
  { id: "annual", name: "Annual investment horizon", focus: "Funding envelopes and capacity shape" },
  { id: "quarterly", name: "Quarterly horizon", focus: "Outcomes, priorities, commitment confidence" },
  { id: "90day", name: "Rolling 90-day horizon", focus: "Near-term outcomes, risks, validation" },
  { id: "monthly", name: "Monthly horizon", focus: "Operating reviews and adjustments" },
  { id: "sprint", name: "Sprint / flow horizon", focus: "Team goals and increments" },
  { id: "daily", name: "Daily execution horizon", focus: "Coordination and impediment removal" },
];

export const escalationFactors = [
  "Customer impact",
  "Financial impact",
  "Regulatory impact",
  "Security impact",
  "Delivery impact",
  "Dependency impact",
  "Reputational impact",
  "Time sensitivity",
  "Decision authority",
];

export const orgStructures = [
  {
    id: "one-team",
    name: "One-team model",
    scale: "Foundation",
    description: "Single cross-functional team with one backlog and light partner engagement.",
  },
  {
    id: "multi-team",
    name: "Multi-team model",
    scale: "Multi-team",
    description: "Several teams with shared outcomes, dependency coordination, and CoPs.",
  },
  {
    id: "value-stream",
    name: "Product / value-stream model",
    scale: "Value stream",
    description: "Product leadership spans teams; quarterly and 90-day planning connect strategy to capacity.",
  },
  {
    id: "portfolio",
    name: "Portfolio model",
    scale: "Portfolio",
    description: "Portfolio prioritisation, investment guardrails, and enabling PMO across products.",
  },
  {
    id: "federated",
    name: "Federated enterprise model",
    scale: "Enterprise",
    description: "Common principles and minimum standards with local flexibility inside business units.",
  },
];

export const operatingModelAreas = [
  { id: "purpose", title: "Purpose & outcomes", href: "/operating-model#purpose" },
  { id: "structure", title: "Organisational structure", href: "/operating-model#structure" },
  { id: "roles", title: "Roles & responsibilities", href: "/roles" },
  { id: "events", title: "Events & cadences", href: "/operating-model#events" },
  { id: "artifacts", title: "Artifacts", href: "/operating-model#artifacts" },
  { id: "front-door", title: "Front-door & demand", href: "/tools/front-door" },
  { id: "engagement", title: "Engagement model", href: "/operating-model#engagement" },
  { id: "escalation", title: "Escalation & decisions", href: "/tools/decision" },
  { id: "change", title: "Change process", href: "/operating-model#change" },
  { id: "planning", title: "Planning model", href: "/operating-model#planning" },
  { id: "investment", title: "Investment cycle", href: "/operating-model#investment" },
  { id: "pmo", title: "PMO & governance", href: "/operating-model#pmo" },
  { id: "model-gov", title: "Operating-model governance", href: "/operating-model#model-gov" },
];
