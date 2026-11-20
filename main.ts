// Entry program for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01).
//
// The entry itself is the X post: the meme image and its caption live on X,
// and this repository only points the grader at that post. So this program
// has one job: take POST.json from the repository root and place an exact
// copy at /output/POST.json, where the gate looks for it. Before copying,
// it checks the file is there and parses as JSON, so a missing or broken
// POST.json fails loudly instead of shipping a bad copy.
//
// Standard library only, no network, no clock, no files outside the repo,
// so running it twice writes the same bytes both times.
//
// Outside the grader's container the two directories can be overridden:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally they come from the
// environment so the same command can be tried by hand.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

// Validate first: the post address must be present and valid JSON, so a
// missing or broken POST.json fails here with a clear message instead of
// silently shipping a bad copy to the gate.
const postPath = join(repoDir, 'POST.json');
try {
  JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json at ${postPath} is missing or not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

try {
  copyFileSync(postPath, join(outDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json out of ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
