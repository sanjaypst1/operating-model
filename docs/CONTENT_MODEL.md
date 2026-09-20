# Content model

Typed content lives in `src/data/`:

| File | Contents |
|------|----------|
| `types.ts` | Shared TypeScript types |
| `compass.ts` | Acronym options, selected COMPASS, pillars, loop, directions |
| `scales.ts` | Five scale levels + applicability labels |
| `roles.ts` | Role cards + decision-rights matrix |
| `events.ts` | Ceremonies/cadences |
| `artifacts.ts` | Artifact catalogue |
| `standards.ts` | Working standards library |
| `coaching.ts` | Coaching services + maturity dimensions |
| `processes.ts` | Front-door, engagement, investment, planning, structures |
| `research.ts` | Research source register |

## Scale applicability values

- `all-scales`
- `multi-team`
- `value-stream`
- `portfolio`
- `enterprise`
- `optional`
- `regulated`

## Extending content

1. Add objects to the relevant data file.
2. Pages that map over arrays will pick them up automatically.
3. Keep evidence claims linked to `research.ts` entries where possible.
