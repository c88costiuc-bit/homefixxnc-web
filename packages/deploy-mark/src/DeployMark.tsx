import { getPublicEnv } from "@web0host/env";

export function DeployMark() {
  const e = getPublicEnv();

  return (
    <p className="hidden" data-deploy-mark="">
      DEPLOY_MARK: {e.NEXT_PUBLIC_DEPLOY_ID} — STAGE: {e.NEXT_PUBLIC_STAGE} — SITE:{" "}
      {e.NEXT_PUBLIC_SITE} — NODE_ENV: {process.env.NODE_ENV ?? "unknown"} — VERCEL_ENV:{" "}
      {process.env.VERCEL_ENV ?? "n/a"} — TS: {e.NEXT_PUBLIC_DEPLOY_TS}
    </p>
  );
}
