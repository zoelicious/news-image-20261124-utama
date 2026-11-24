// news-image-20261124 — Akun Utama (@zoelicious4843), entry 1/3.
// Classic newspaper front page for 24 November 2026: the Banten candy
// factory fire (lead), COP31 collapsing in Antalya, the World Chess
// Championship Game 1 beginning in Geneva, and the new India-Nepal
// Ayodhya-Janakpur train. The image is the entry.png beside this file
// (JPEG bytes under the entry.png name, as the rules allow);
// the program copies it to the output directory (Node 22, stdlib only).
// No network, no writes inside the repository.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // The output directory may already exist; copying below will fail loudly if it does not.
}
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
