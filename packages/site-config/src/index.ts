export type SiteKey = "web";

export function getSiteConfig(site: SiteKey) {
  if (site === "web") return { name: "Web0Host Platform (web)" };
  return { name: "Unknown" };
}
