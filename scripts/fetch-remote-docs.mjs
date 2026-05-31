/**
 * Fetches remote markdown files from the main budget-board repo and writes
 * them into the docs directory so they only need to be maintained in one place.
 */

import { writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = join(__dirname, "..", "docs");

const REMOTE_DOCS = [
  {
    url: "https://raw.githubusercontent.com/teelur/budget-board/main/AI-DISCLOSURE.md",
    dest: "ai-disclosure.md",
    frontmatter: "---\nsidebar_label: AI Disclosure\n---\n\n",
  },
];

for (const { url, dest, frontmatter } of REMOTE_DOCS) {
  console.log(`Fetching ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
    );
  }
  const content = await response.text();
  await writeFile(join(docsDir, dest), frontmatter + content, "utf-8");
  console.log(`  -> docs/${dest}`);
}
