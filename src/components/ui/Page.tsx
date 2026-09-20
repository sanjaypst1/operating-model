import type { ReactNode } from "react";
import { scaleLabels } from "@/data/scales";
import type { ScaleApplicability } from "@/data/types";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        {eyebrow && (
          <p className="chip mb-4 text-[var(--teal-deep)]">{eyebrow}</p>
        )}
        <h1 className="display max-w-4xl text-4xl leading-[1.05] text-[var(--ink)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]/80 md:text-lg">
          {description}
        </p>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}

export function Section({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 md:px-6">
      <div className="mb-8 max-w-3xl">
        <h2 className="display text-3xl text-[var(--ink)] md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-[var(--ink-soft)]/80 leading-relaxed">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

export function ScaleBadge({ scale }: { scale: ScaleApplicability }) {
  return (
    <span className="chip bg-white/80 text-[11px] text-[var(--ink-soft)]">
      {scaleLabels[scale]}
    </span>
  );
}

export function Callout({
  title,
  children,
  tone = "teal",
}: {
  title: string;
  children: ReactNode;
  tone?: "teal" | "brass" | "coral";
}) {
  const border =
    tone === "brass"
      ? "border-[var(--brass)]"
      : tone === "coral"
        ? "border-[var(--coral)]"
        : "border-[var(--teal)]";
  return (
    <aside className={`panel border-l-4 ${border} p-5`}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]/70">
        {title}
      </p>
      <div className="prose-tight mt-2 text-sm">{children}</div>
    </aside>
  );
}
