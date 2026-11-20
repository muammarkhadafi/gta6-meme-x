// Entry program for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01).
//
// The entry itself is the X post: the meme image and its caption live on X,
// and this repository only points the grader at that post. So this program
// has one job: take POST.json from the repository root and place an exact
// copy at /output/POST.json, where the gate looks for it.
//
// Standard library only, no network, no clock, no files outside the repo,
// so running it twice writes the same bytes both times.
//
// Outside the grader's container the two directories can be overridden:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally they come from the
// environment so the same command can be tried by hand.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(repoDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json out of ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
