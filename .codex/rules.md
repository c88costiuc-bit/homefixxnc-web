# web0host-platform — repo rules (pnpm + turborepo + Next/Turbopack)

## Package manager
- Use **pnpm** only. Do not use npm/yarn.
- Workspace root is the repo root. Install from root:
  - `pnpm -r install`

## Monorepo structure
- Apps live in `apps/*`
- Workspace packages live in `packages/*`
- Local packages are consumed via `workspace:`/pnpm linking.

## Next.js + Turbopack monorepo notes
- The web app is `apps/web`.
- Workspace packages used by Next must be transpiled:
  - See `apps/web/next.config.ts` → `transpilePackages`
- If Turbopack fails to resolve workspace imports, use:
  - `experimental.turbo.resolveAlias` in `apps/web/next.config.ts`

## Dev commands
- Web dev: `pnpm -C apps/web dev`
- Root dev (all via turbo): `pnpm dev`

## DeployMark
- Deploy mark lives in `packages/deploy-mark`
- Env helper lives in `packages/env`
- The marker is rendered as a hidden node with `data-deploy-mark` and text `DEPLOY_MARK: ...`
