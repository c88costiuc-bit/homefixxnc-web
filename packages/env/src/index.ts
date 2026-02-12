import { z } from "zod";

/**
 * Public (browser-safe) env vars used by Next.js.
 * Must be prefixed with NEXT_PUBLIC_ to be exposed to the client bundle.
 */
export const PublicEnvSchema = z.object({
  NEXT_PUBLIC_DEPLOY_ID: z.string().default("missing"),
  NEXT_PUBLIC_STAGE: z.string().default("unknown"),
  NEXT_PUBLIC_SITE: z.string().default("unknown"),
  NEXT_PUBLIC_DEPLOY_TS: z.string().optional().default("n/a"),
  NEXT_PUBLIC_DEPLOY_TS_LOCAL: z.string().optional().default("n/a"),
});

export type PublicEnv = z.infer<typeof PublicEnvSchema>;

export function getPublicEnv(env: NodeJS.ProcessEnv = process.env): PublicEnv {
  return PublicEnvSchema.parse(env);
}

/**
 * Server-only env vars (never prefixed NEXT_PUBLIC_).
 * Add more here as your backend grows (DB_URL, S3, SMTP, etc).
 */
export const ServerEnvSchema = z.object({
  // DATABASE_URL: z.string().url(),
});

export type ServerEnv = z.infer<typeof ServerEnvSchema>;

export function getServerEnv(env: NodeJS.ProcessEnv = process.env): ServerEnv {
  return ServerEnvSchema.parse(env);
}
