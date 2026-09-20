export const compassAcronymOptions = [
  {
    id: "A",
    label: "Option A — Outcome-led operations",
    letters: [
      { letter: "C", meaning: "Customer and colleague outcomes" },
      { letter: "O", meaning: "Operating clarity" },
      { letter: "M", meaning: "Measurable value" },
      { letter: "P", meaning: "Productive ways of working" },
      { letter: "A", meaning: "Accountable leadership" },
      { letter: "S", meaning: "Scalable standards" },
      { letter: "S", meaning: "Sustainable capability" },
    ],
    strength:
      "Closest to the preferred enterprise brief; balanced across outcomes, clarity, and capability.",
  },
  {
    id: "B",
    label: "Option B — Flow and guardrails",
    letters: [
      { letter: "C", meaning: "Clear strategic intent" },
      { letter: "O", meaning: "Owned outcomes" },
      { letter: "M", meaning: "Minimum viable governance" },
      { letter: "P", meaning: "Prioritised investment" },
      { letter: "A", meaning: "Aligned delivery" },
      { letter: "S", meaning: "Shared standards" },
      { letter: "S", meaning: "Systemic improvement" },
    ],
    strength:
      "Strong on governance lightness and investment, weaker on coaching and colleague experience.",
  },
  {
    id: "C",
    label: "Option C — Capability system",
    letters: [
      { letter: "C", meaning: "Connected value streams" },
      { letter: "O", meaning: "Organised decision rights" },
      { letter: "M", meaning: "Managed dependencies" },
      { letter: "P", meaning: "Practical enablement" },
      { letter: "A", meaning: "Assured quality" },
      { letter: "S", meaning: "Skilled people" },
      { letter: "S", meaning: "Sustained learning" },
    ],
    strength:
      "Excellent for capability and assurance language; less explicit on customer outcomes.",
  },
] as const;

/** Selected COMPASS interpretation — Option A refined for enterprise credibility. */
export const compassSelected = {
  id: "A-refined",
  name: "COMPASS",
  fullName: "Customer Outcomes, Operating Clarity & Scalable Standards",
  tagline:
    "A practical operating system that helps teams deliver value today and scale without bureaucracy.",
  letters: [
    {
      letter: "C",
      meaning: "Customer and colleague outcomes",
      detail:
        "Every initiative starts from the customer problem and the colleague experience needed to solve it.",
    },
    {
      letter: "O",
      meaning: "Operating clarity",
      detail:
        "Roles, decision rights, cadences, and escalation paths are explicit and proportionate to scale.",
    },
    {
      letter: "M",
      meaning: "Measurable value",
      detail:
        "Investment and delivery are judged by outcomes, benefits evidence, and learning—not activity alone.",
    },
    {
      letter: "P",
      meaning: "Productive ways of working",
      detail:
        "Flow, collaboration, and feedback loops keep work moving with minimum viable process.",
    },
    {
      letter: "A",
      meaning: "Accountable leadership",
      detail:
        "Leaders set direction, remove constraints, and own decisions at the right altitude.",
    },
    {
      letter: "S",
      meaning: "Scalable standards",
      detail:
        "Reusable standards and templates create consistency without forcing one-size-fits-all controls.",
    },
    {
      letter: "S",
      meaning: "Sustainable capability",
      detail:
        "Coaching, communities, and leadership development keep the model alive after the pilot.",
    },
  ],
  selectionRationale:
    "Option A was selected because it balances customer outcomes, operating clarity, measurable value, and sustainable capability—the four dimensions most often missing when Agile practices scale without an operating model. Wording was refined for enterprise credibility while preserving the preferred letter intent.",
} as const;

export const compassDirections = [
  {
    id: "north",
    label: "North",
    title: "Strategic direction & outcomes",
    description:
      "Purpose, OKRs, investment intent, and the outcomes that justify the work.",
  },
  {
    id: "east",
    label: "East",
    title: "Delivery flow & working standards",
    description:
      "How work moves from demand to release with shared quality and tooling standards.",
  },
  {
    id: "south",
    label: "South",
    title: "Learning, coaching & capability",
    description:
      "How individuals, teams, and leaders build the behaviours that make the model durable.",
  },
  {
    id: "west",
    label: "West",
    title: "Governance, assurance & improvement",
    description:
      "Proportionate oversight, risk partnering, evidence, and continuous improvement.",
  },
  {
    id: "centre",
    label: "Centre",
    title: "Customer & colleague value",
    description:
      "The fixed reference point: value created for customers and the people who deliver it.",
  },
] as const;

export const transformationLoop = [
  {
    id: "direction",
    title: "Direction",
    pillar: "operating-model" as const,
    description: "Strategy, outcomes, decision rights, and operating intent.",
  },
  {
    id: "enablement",
    title: "Enablement",
    pillar: "standards" as const,
    description: "Standards, tools, templates, and platforms that make intent executable.",
  },
  {
    id: "capability",
    title: "Capability",
    pillar: "coaching" as const,
    description: "Skills, behaviours, coaching, and leadership support.",
  },
  {
    id: "application",
    title: "Application",
    pillar: "operating-model" as const,
    description: "Teams apply the model in real planning, delivery, and engagement.",
  },
  {
    id: "evidence",
    title: "Evidence",
    pillar: "standards" as const,
    description: "Delivery, outcome, quality, and maturity evidence informs judgment.",
  },
  {
    id: "improvement",
    title: "Improvement",
    pillar: "coaching" as const,
    description: "Insights improve the operating model, standards, and coaching system.",
  },
] as const;

export const pillars = [
  {
    id: "operating-model" as const,
    number: "01",
    name: "Operating Model",
    short: "How we organise, decide, plan, fund, govern, engage, deliver, escalate, and improve.",
    href: "/operating-model",
    color: "north",
  },
  {
    id: "standards" as const,
    number: "02",
    name: "Working Standards",
    short:
      "The practical standards, tools, templates, controls, and quality expectations that make the model productive.",
    href: "/standards",
    color: "east",
  },
  {
    id: "coaching" as const,
    number: "03",
    name: "Coaching & Capability",
    short:
      "How people, teams, managers, leaders, and enterprise functions build the capability to sustain the model.",
    href: "/coaching",
    color: "south",
  },
] as const;
