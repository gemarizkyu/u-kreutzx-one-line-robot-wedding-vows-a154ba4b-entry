// One-Line Robot Wedding Vows entry (Node 22, standard library only):
// writes one original one-line robot wedding vow to /output/entry.txt.
// Deterministic: the same fixed line on every run. No randomness, no
// network, no clock, no input files. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The vow (122 characters, within the 1-160 gate): a promise ("I promise"),
// machine-specific all the way through (charger, bandwidth, 1% battery,
// warranty), and the laugh pays off in the last few words.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const VOW =
  'I promise to share my charger, my bandwidth, and my last 1% of battery \u2014 and to love you long after your warranty expires.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), VOW);
