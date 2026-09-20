"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/operating-model", label: "Operating Model" },
  { href: "/standards", label: "Standards" },
  { href: "/coaching", label: "Coaching" },
  { href: "/scale", label: "Scale" },
  { href: "/roles", label: "Roles" },
  { href: "/tools/decision", label: "Tools" },
  { href: "/research", label: "Research" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_82%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--brass)]/40 bg-[var(--ink)] text-[var(--brass-soft)]">
            <span className="display text-sm font-semibold">C</span>
            <span className="absolute inset-1 rounded-full border border-dashed border-[var(--brass)]/30" />
          </span>
          <span>
            <span className="display block text-lg leading-none text-[var(--ink)] group-hover:text-[var(--teal-deep)]">
              COMPASS
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]/70">
              Operating Model
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-[var(--ink)] text-[var(--paper)]"
                    : "text-[var(--ink-soft)] hover:bg-white/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/tools/maturity"
            className="hidden rounded-full bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--teal-deep)] sm:inline-flex"
          >
            Assess maturity
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-[var(--line)] bg-white/70 px-3 py-2 text-sm font-semibold lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--paper-elevated)] px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tools/maturity"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[var(--teal)] px-3 py-2 text-sm font-semibold text-white"
            >
              Assess maturity
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
