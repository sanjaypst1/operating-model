import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <p className="display text-2xl">COMPASS</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            A practical operating system connecting how we organise, the standards that
            enable consistency, and the coaching that makes adoption sustainable—from
            pilot teams to enterprise scale.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass-soft)]">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/loop">Transformation loop</Link>
            </li>
            <li>
              <Link href="/scale">Scaling architecture</Link>
            </li>
            <li>
              <Link href="/tools/front-door">Front-door process</Link>
            </li>
            <li>
              <Link href="/guides">Role guides</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass-soft)]">
            Evidence
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/research">Research library</Link>
            </li>
            <li>
              <a href="https://github.com/sanjaypst1/operating-model" target="_blank" rel="noreferrer">
                GitHub repository
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50 md:px-6">
        COMPASS is an original synthesis. Cited sources remain the property of their publishers.
        Fictional examples are labelled as such.
      </div>
    </footer>
  );
}
