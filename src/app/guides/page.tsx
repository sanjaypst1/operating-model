import Link from "next/link";
import { PageHero, Section } from "@/components/ui/Page";

const guides = [
  {
    title: "New team member",
    body: "Start with purpose, working agreement, backlog, DoD, and daily coordination. Learn the front-door only when you raise demand.",
    links: [
      { href: "/operating-model#purpose", label: "Purpose" },
      { href: "/operating-model#events", label: "Team events" },
      { href: "/standards", label: "DoR / DoD standards" },
    ],
  },
  {
    title: "Product Owner",
    body: "Own backlog order, outcomes, refinement quality, and stakeholder engagement. Combine with PM accountabilities at small scale if needed.",
    links: [
      { href: "/roles#product-owner", label: "PO role card" },
      { href: "/standards", label: "Backlog & requirements" },
      { href: "/tools/front-door", label: "Demand intake" },
    ],
  },
  {
    title: "Scrum Master",
    body: "Improve team effectiveness, facilitate empiricism, and escalate systemic impediments—not become a status secretary.",
    links: [
      { href: "/roles#scrum-master", label: "SM role card" },
      { href: "/coaching", label: "Team coaching" },
      { href: "/tools/maturity", label: "Maturity tool" },
    ],
  },
  {
    title: "Line manager",
    body: "Develop people and protect focus. Align personal goals with product outcomes; partner with coaches.",
    links: [
      { href: "/roles#line-manager", label: "Line manager card" },
      { href: "/coaching", label: "Manager coaching" },
    ],
  },
  {
    title: "Delivery / Initiative / Program",
    body: "Make dependencies and confidence visible. Use progressive governance—don't invent a program layer without outcome ownership.",
    links: [
      { href: "/roles#delivery-manager", label: "Delivery manager" },
      { href: "/operating-model#planning", label: "Planning model" },
      { href: "/tools/decision", label: "Decision router" },
    ],
  },
  {
    title: "Portfolio / PMO / Transformation",
    body: "Set guardrails, enable insight, and steward adoption. PMO enables; it does not own product delivery.",
    links: [
      { href: "/scale", label: "Scale levels" },
      { href: "/operating-model#pmo", label: "PMO stance" },
      { href: "/operating-model#investment", label: "Investment cycle" },
    ],
  },
  {
    title: "Risk / Security / Finance / Compliance",
    body: "Engage early with clear service expectations. Prefer embedded advice over late gates.",
    links: [
      { href: "/operating-model#engagement", label: "Engagement model" },
      { href: "/roles#security-partner", label: "Partner roles" },
    ],
  },
  {
    title: "Coach / senior leader",
    body: "Coach the system. Use maturity evidence to change operating model and standards—not only team rituals.",
    links: [
      { href: "/coaching", label: "Capability pillar" },
      { href: "/loop", label: "Transformation loop" },
      { href: "/research", label: "Research library" },
    ],
  },
];

export const metadata = {
  title: "Role guides",
  description: "Entry paths into COMPASS for each audience.",
};

export default function GuidesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Audience paths"
        title="How to use COMPASS in your role"
        description="Start where you are. Each guide points to the minimum set of pages and tools for practical adoption."
      />
      <Section title="Guides">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <article key={guide.title} className="panel p-5">
              <h3 className="display text-2xl">{guide.title}</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]/80">{guide.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.links.map((link) => (
                  <Link key={link.href} href={link.href} className="chip hover:bg-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
