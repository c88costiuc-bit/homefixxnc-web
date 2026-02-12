# Codex Guardrails (DO NOT TOUCH without asking)

## Package managers
- Use **pnpm** only.
- Do NOT add `package-lock.json` or run `npm install`.

## Lockfiles
- Keep **one** lockfile: `/pnpm-lock.yaml` (repo root).
- Do NOT create lockfiles inside apps/ or packages/.

## Next config
- Web app config is **apps/web/next.config.ts**.
- Do NOT re-add `apps/web/next.config.mjs`.

## Workspace wiring
- Workspace definition lives at repo root: `pnpm-workspace.yaml`
- Packages are in:
  - `apps/*`
  - `packages/*`

## Turbopack/monorepo
- Keep `transpilePackages` for workspace packages.
- If module resolution breaks, prefer fixing `transpilePackages` or `experimental.turbo.resolveAlias`
  (do NOT hack imports or copy code into apps).
