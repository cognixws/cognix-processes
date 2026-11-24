import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const manifest = JSON.parse(fs.readFileSync(new URL("./picode-extension.json", import.meta.url), "utf8"));

// The id changed from taskboard in 0.2.0. `formerly` is what lets COGNIX[WS]
// update the taskboard install in place (settings, workspace switches) instead
// of adding a second copy beside it.
test("the id is processes and it names taskboard as its former id", () => {
  assert.equal(manifest.id, "processes");
  assert.deepEqual(manifest.formerly, ["taskboard"]);
});
