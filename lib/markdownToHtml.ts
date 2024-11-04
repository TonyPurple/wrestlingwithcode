import { remark } from "remark";
import html from "remark-html";
import strip from "strip-markdown";

// Convert markdown to HTML (for display)
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Convert markdown to plain text (for search)
export async function markdownToPlainText(markdown: string): Promise<string> {
  const result = await remark().use(strip).process(markdown);
  return result.toString();
}
