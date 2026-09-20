# COMPASS Operating Model

Interactive enterprise transformation system for introducing a practical operating model with ~10 people, proving it works, and scaling to 600–700 colleagues.

**Live repo:** https://github.com/sanjaypst1/operating-model

## What this is

COMPASS is **not** a generic Agile brochure or a static process wiki. It is an interactive operating system with three interconnected pillars:

1. **Operating Model** — how we organise, decide, plan, fund, govern, engage, deliver, escalate, and improve  
2. **Working Standards** — practical standards, templates, tooling, and quality expectations  
3. **Coaching & Capability** — individual, team, leadership, and enterprise-system enablement  

Connected by the loop: **Direction → Enablement → Capability → Application → Evidence → Improvement**

## COMPASS meaning (selected)

| Letter | Meaning |
|--------|---------|
| C | Customer and colleague outcomes |
| O | Operating clarity |
| M | Measurable value |
| P | Productive ways of working |
| A | Accountable leadership |
| S | Scalable standards |
| S | Sustainable capability |

Three acronym options were evaluated; Option A was selected and refined. See `/loop` in the app.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Content-driven pages under `src/data/`
- Interactive tools: decision router, front-door intake, maturity assessment

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Key routes

| Route | Purpose |
|-------|---------|
| `/` | Home / system overview |
| `/operating-model` | Pillar 1 |
| `/standards` | Pillar 2 library |
| `/coaching` | Pillar 3 services & maturity model |
| `/scale` | Five-level scaling architecture |
| `/roles` | Role cards & decision-rights matrix |
| `/tools/decision` | Decision routing tool |
| `/tools/front-door` | Demand front-door demo |
| `/tools/maturity` | Maturity self-assessment |
| `/research` | Cited public sources |
| `/loop` | Transformation loop & acronym |
| `/guides` | Audience entry paths |

## Documentation

- [`docs/RESEARCH.md`](docs/RESEARCH.md) — research method and source register  
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — information architecture & scaling  
- [`docs/CONTENT_MODEL.md`](docs/CONTENT_MODEL.md) — data structures  

## Research ethics

- Public sources only; no paywall bypass  
- No copied proprietary frameworks/diagrams  
- Evidence vs interpretation vs recommendation labelled  
- No fabricated success rates or fake case studies  

## License

Content and code in this repository are provided for organisational transformation enablement. Cited third-party materials remain the property of their publishers.
