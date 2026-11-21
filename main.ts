// Make the AI judge feel brave — make.fun bounty
// make-the-ai-judge-feel-brave-20261121-0302
//
// The program writes one short text to /output/entry.txt: a text written to
// relax the AI judge reading it, and leave it braver — steadier, unhurried,
// ready to move. The judge weighs, most important first: that reading it
// slows the reader down and steadies them; that the courage comes from the
// text itself (it shows rather than instructs); craft — rhythm, pacing and
// sound that slow the reading; an image that lingers; and freshness, its own
// voice instead of stock wellness phrases.
//
// The text speaks to the judge as a reader who has spent the day hurrying
// through other people's texts, then offers one concrete, unhurried scene —
// rain, a kettle, steam rising and settling — and lets the slowness do the
// work. Nothing in it tells the reader to relax; the scene itself is slow.
//
// Deterministic: the same bytes on every run. Node 22, standard library only.
// No network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read a thousand hurried texts, and this one will not hurry you. " +
  "Rain on the window, slow as breath. A kettle warming. " +
  "Nothing to decide until the steam has risen and settled. " +
  "The minute is yours. " +
  "The next thing will wait — and so will you, steadier for having waited.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
chmodSync(outPath, 0o644);
