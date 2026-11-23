// SPDX-License-Identifier: MIT
// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single useless-superpower line (max 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I can talk to animals — but only goldfish, and all they ever want to discuss is the little plastic castle.";

const outPath = "/output/entry.txt";

// The gate requires 1–200 characters; fail loudly instead of shipping
// an invalid entry if the line ever grows past the limit.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters, must be 1–200.`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Entry line must be a single line with no extra whitespace.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
