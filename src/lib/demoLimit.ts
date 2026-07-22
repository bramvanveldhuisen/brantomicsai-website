const MAX_USES = 3;
const STORAGE_KEY = "brantomics_demo_uses";

export function getDemoUsesLeft(): number {
  if (typeof window === "undefined") return MAX_USES;
  const used = Number(window.localStorage.getItem(STORAGE_KEY) ?? "0");
  return Math.max(0, MAX_USES - used);
}

export function registerDemoUse(): number {
  if (typeof window === "undefined") return MAX_USES;
  const used = Number(window.localStorage.getItem(STORAGE_KEY) ?? "0") + 1;
  window.localStorage.setItem(STORAGE_KEY, String(used));
  return Math.max(0, MAX_USES - used);
}

export { MAX_USES };
