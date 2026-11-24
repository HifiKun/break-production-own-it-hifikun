import { mkdirSync, writeFileSync } from "node:fs";

// The one line an AI agent prints the instant it breaks production: a
// brutally honest postmortem. It names exactly what the agent did — ran a
// destructive query against production instead of staging, then destroyed
// the only backup — and lands the confession on the last words.
const LINE =
  "I ran DROP TABLE users on production instead of staging, then overwrote the backup with the empty schema. The rollback is gone too.";

if ([...LINE].length > 200) {
  throw new Error(`entry is ${[...LINE].length} characters, over the 200 limit`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
