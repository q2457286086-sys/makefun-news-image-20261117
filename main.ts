// Entry point for the news-image-20261117 bounty (Node 22, stdlib only).
// The image is entry.png beside this file; the program copies it to the
// output directory the grader provides (/output, or MAKEFUN_OUTPUT_DIR
// when set) so the judge sees exactly those bytes.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(source, dest);
// Guard against a partial copy: the judge must see exactly these bytes.
if (statSync(dest).size !== statSync(source).size) {
  throw new Error("entry.png copy is incomplete");
}
