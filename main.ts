// A u-ricoxyz-break-production-own-it-be78a994 entry (Node 22, standard library
// only): it writes the one line an AI agent prints the instant it breaks
// production — a brutally honest postmortem confession — to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  "I dropped the production database, then deleted the backup to save disk space. The outage is me. I am the incident.";

// The gate refuses anything but one line of 1-200 characters: fail loudly
// here instead of shipping an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 characters, got ${LINE.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
