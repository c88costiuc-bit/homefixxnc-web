# Repo Truth Map (quick orientation)

- Root workspace: `pnpm-workspace.yaml`
- Root lockfile: `pnpm-lock.yaml`
- Web app: `apps/web`
  - Next config: `apps/web/next.config.ts`
  - Env helper: `apps/web/src/env.ts`
  - Predev stamp: `apps/web/scripts/set-deploy-ts.mjs`
- Shared packages:
  - Env schema: `packages/env`
  - Deploy mark component: `packages/deploy-mark`
  - Site config: `packages/site-config`

Commands:
- Install: `pnpm install`
- Dev web: `pnpm -C apps/web dev`
- Sanity check: `curl -s http://localhost:3000 | grep -n "DEPLOY_MARK" | tail -n 3`
