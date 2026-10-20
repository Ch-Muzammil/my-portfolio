const PLACEHOLDER_PREFIX = "TODO";

export function isPublishableHref(href: string): boolean {
  const value = href.trim();
  return value.length > 0 && !value.startsWith(PLACEHOLDER_PREFIX);
}
