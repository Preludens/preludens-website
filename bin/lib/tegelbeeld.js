// Maakt van een screenshot een tegelversie in een gevraagde beeldverhouding.
// Het beeld wordt niet bijgesneden maar opgevuld: de randrij of -kolom wordt
// doorgetrokken en loopt zacht uit naar de gemiddelde randkleur. Zo valt er
// geen UI weg en blijft er geen zwart gat over.
// node tegelbeeld.js <in.rgba> <W> <H> <out.rgba> <outW> <outH>
const fs = require('fs');
const [, , inPath, Ws, Hs, outPath, OWs, OHs] = process.argv;
const W = +Ws, H = +Hs, OW = +OWs, OH = +OHs;
// Niet bijsnijden tenzij het echt moet: wegsnijden kost UI, opvullen niet.
// MAXPAD staat ruim genoeg om voor alle bestaande beelden en alle vier de
// kaders bij opvullen te blijven; pas als de band breder zou worden wordt er
// zoveel bijgesneden als nodig is om eronder te blijven.
const MAXPAD = Number(process.env.MAXPAD || 0.46);
const src = fs.readFileSync(inPath);
const AR = OW / OH;

const at = (x, y) => (y * W + x) * 4;

// --- hoeveel mag/moet er bij of af ---
const srcAR = W / H;
let cw = W, ch = H, cx = 0, cy = 0;
if (srcAR > AR) {
  // te breed: boven en onder bijvullen; alleen snijden als die band te hoog wordt
  const maxAR = AR / (1 - MAXPAD);
  if (srcAR > maxAR) cw = Math.round(H * maxAR);
} else if (srcAR < AR) {
  // te smal: links en rechts bijvullen; alleen snijden als die band te breed wordt
  const minAR = AR * (1 - MAXPAD);
  if (srcAR < minAR) ch = Math.round(W / minAR);
}

// --- waar snijden we? daar waar de meeste randenergie zit ---
function energyColumns() {
  const e = new Float64Array(W);
  for (let y = 1; y < H - 1; y += 2) for (let x = 1; x < W - 1; x++) {
    const a = at(x, y), b = at(x + 1, y), c = at(x, y + 1);
    e[x] += Math.abs(src[a] - src[b]) + Math.abs(src[a + 1] - src[b + 1]) + Math.abs(src[a + 2] - src[b + 2])
          + Math.abs(src[a] - src[c]) + Math.abs(src[a + 1] - src[c + 1]) + Math.abs(src[a + 2] - src[c + 2]);
  }
  return e;
}
function energyRows() {
  const e = new Float64Array(H);
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x += 2) {
    const a = at(x, y), b = at(x + 1, y), c = at(x, y + 1);
    e[y] += Math.abs(src[a] - src[b]) + Math.abs(src[a + 1] - src[b + 1]) + Math.abs(src[a + 2] - src[b + 2])
          + Math.abs(src[a] - src[c]) + Math.abs(src[a + 1] - src[c + 1]) + Math.abs(src[a + 2] - src[c + 2]);
  }
  return e;
}
function bestWindow(e, n, win) {
  let sum = 0;
  for (let i = 0; i < win; i++) sum += e[i];
  let best = sum, bestAt = 0;
  for (let i = win; i < n; i++) { sum += e[i] - e[i - win]; if (sum > best) { best = sum; bestAt = i - win + 1; } }
  return bestAt;
}
if (cw < W) cx = bestWindow(energyColumns(), W, cw);
if (ch < H) cy = bestWindow(energyRows(), H, ch);

// --- het bijgesneden beeld middenin het doelvlak, rest opvullen ---
const scale = Math.min(OW / cw, OH / ch);
const dw = Math.round(cw * scale), dh = Math.round(ch * scale);
const dx = Math.round((OW - dw) / 2), dy = Math.round((OH - dh) / 2);
const out = Buffer.alloc(OW * OH * 4, 255);

const sample = (u, v) => {   // nearest neighbour op het bijgesneden beeld
  const sx = Math.min(cw - 1, Math.max(0, Math.round(u / scale)));
  const sy = Math.min(ch - 1, Math.max(0, Math.round(v / scale)));
  return at(cx + sx, cy + sy);
};
for (let y = 0; y < dh; y++) for (let x = 0; x < dw; x++) {
  const s = sample(x, y), d = ((y + dy) * OW + (x + dx)) * 4;
  out[d] = src[s]; out[d + 1] = src[s + 1]; out[d + 2] = src[s + 2]; out[d + 3] = 255;
}

// gemiddelde kleur van een randstrook van het bijgesneden beeld
function edgeMean(side) {
  let r = 0, g = 0, b = 0, n = 0;
  const band = Math.max(2, Math.round((side === 'top' || side === 'bottom' ? ch : cw) * 0.03));
  if (side === 'top' || side === 'bottom') {
    for (let k = 0; k < band; k++) { const y = side === 'top' ? cy + k : cy + ch - 1 - k;
      for (let x = cx; x < cx + cw; x += 3) { const s = at(x, y); r += src[s]; g += src[s + 1]; b += src[s + 2]; n++; } }
  } else {
    for (let k = 0; k < band; k++) { const x = side === 'left' ? cx + k : cx + cw - 1 - k;
      for (let y = cy; y < cy + ch; y += 3) { const s = at(x, y); r += src[s]; g += src[s + 1]; b += src[s + 2]; n++; } }
  }
  return [r / n, g / n, b / n];
}

// randrij/-kolom doortrekken en laten uitlopen naar die gemiddelde kleur
function fillBand(fromX, fromY, toX, toY, edge, depthMax) {
  const mean = edgeMean(edge);
  for (let y = fromY; y < toY; y++) for (let x = fromX; x < toX; x++) {
    const ex = Math.min(dx + dw - 1, Math.max(dx, x));
    const ey = Math.min(dy + dh - 1, Math.max(dy, y));
    const e = (ey * OW + ex) * 4;
    const depth = edge === 'top' ? dy - y : edge === 'bottom' ? y - (dy + dh - 1)
                : edge === 'left' ? dx - x : x - (dx + dw - 1);
    const t = Math.min(1, Math.max(0, depth / Math.max(1, depthMax)));
    // Vlak bij de rand telt de doorgetrokken rij zwaar, verderop wint de
    // gemiddelde randkleur het helemaal. Zonder dat laatste gaat een drukke
    // rand strepen over een brede band.
    const k = Math.pow(t, 1.2);
    const d = (y * OW + x) * 4;
    out[d] = Math.round(out[e] * (1 - k) + mean[0] * k);
    out[d + 1] = Math.round(out[e + 1] * (1 - k) + mean[1] * k);
    out[d + 2] = Math.round(out[e + 2] * (1 - k) + mean[2] * k);
    out[d + 3] = 255;
  }
}
if (dy > 0) { fillBand(0, 0, OW, dy, 'top', dy); fillBand(0, dy + dh, OW, OH, 'bottom', OH - dy - dh); }
if (dx > 0) { fillBand(0, 0, dx, OH, 'left', dx); fillBand(dx + dw, 0, OW, OH, 'right', OW - dx - dw); }

fs.writeFileSync(outPath, out);
console.log(JSON.stringify({
  bron: W + 'x' + H + ' (' + srcAR.toFixed(2) + ')',
  bijgesneden: cw + 'x' + ch + ' vanaf ' + cx + ',' + cy,
  wegVanBreedte: +(((W - cw) / W) * 100).toFixed(1),
  wegVanHoogte: +(((H - ch) / H) * 100).toFixed(1),
  opgevuldBovenOnder: +((2 * dy / OH) * 100).toFixed(1),
  opgevuldLinksRechts: +((2 * dx / OW) * 100).toFixed(1)
}));
