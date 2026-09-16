<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Agent skills

## CSS formatting

Keep authored CSS and CSS Modules in readable, formatted form. Do not minify stylesheet source files unless the user explicitly asks to re-enable minification.

### Issue tracker

Issues live as local markdown files under `.scratch/<feature-slug>/` — spec per feature, one file per issue, `Status:` line for triage state. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary used as-is (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root, created lazily. See `docs/agents/domain.md`.
