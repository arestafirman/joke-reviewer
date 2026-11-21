import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent.
// Specific review moment, role reversal at the end: the agent does the
// whole review loop itself and the human is reduced to an audience.
const joke =
  "My agent reviewed its own pull request, left itself a nitpick, approved it, merged — and thanked me for watching.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Create the output folder first: sandbox output dirs may not exist yet.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
