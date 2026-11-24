"""QR-code in Preludens-stijl: navy bolletjes, afgeronde ogen met een gouden
kern, en het beeldmerk in het midden (foutcorrectie H, dus het logo mag een
deel van de code bedekken).

Nodig: pip install segno (en cairosvg voor een PNG).
Gebruik:
  python bin/preludens-qr.py assets/images/logo/preludens-logo.svg <uitmap> <url>

Houd de URL kort: elke paar tekens erbij maakt de code dichter en de
bolletjes kleiner. Controleer de uitkomst altijd met een scanner.
Schrijft qr.svg. Kleuren uit het palet van de site (assets/css/main.scss).
"""
import re
import sys

import os
import segno

logo_path, out_dir, url = sys.argv[1], sys.argv[2], sys.argv[3]

NAVY = "#113847"      # --color-brand-navy
DEEP = "#0B2A35"      # --color-deep-navy
GOLD = "#C88405"      # --color-deep-gold: donker genoeg voor een scanner
CLOUD = "#F6F9F9"     # --color-cloud-white
MIST = "#E7EEF0"      # --color-mist-blue

qr = segno.make(url, error="h", micro=False)
matrix = [list(row) for row in qr.matrix]
n = len(matrix)
QZ = 4                 # stille zone in modules
size = n + 2 * QZ

# Het beeldmerk: de gouden driehoek en de navy figuur uit het logo.
logo = open(logo_path).read()
groups = re.findall(r'<g fill="([^"]+)">(.*?)</g>', logo, re.S)
mark = "".join(f'<g fill="{fill}">{body}</g>' for fill, body in groups[1:])
MARK_W, MARK_H = 123.944, 119.063

def in_finder(r, c):
    return (r < 7 and c < 7) or (r < 7 and c >= n - 7) or (r >= n - 7 and c < 7)

# Middenvlak voor het logo, in modules (oneven, gecentreerd).
logo_mod = round(n * 0.24) | 1
lo = (n - logo_mod) // 2
hi = lo + logo_mod

def in_logo(r, c):
    return lo - 1 <= r <= hi and lo - 1 <= c <= hi

parts = []
# Modules als afgeronde vierkantjes, iets kleiner dan de cel: rustiger dan
# harde blokken, en een scanner leest ze net zo goed.
for r in range(n):
    for c in range(n):
        if not matrix[r][c] or in_finder(r, c) or in_logo(r, c):
            continue
        DOT = 0.9; off = (1 - DOT) / 2
        x, y = c + QZ + off, r + QZ + off
        parts.append(f'<rect x="{x:.2f}" y="{y:.2f}" width="{DOT}" height="{DOT}" rx="{DOT*0.34:.2f}"/>')
modules = f'<g fill="{NAVY}">{"".join(parts)}</g>'

# Zoekpatronen: afgeronde navy ring, gouden kern.
eyes = []
for (r0, c0) in [(0, 0), (0, n - 7), (n - 7, 0)]:
    x, y = c0 + QZ, r0 + QZ
    eyes.append(
        f'<path fill="{DEEP}" fill-rule="evenodd" d="'
        f'M{x+1.8},{y} h3.4 a1.8,1.8 0 0 1 1.8,1.8 v3.4 a1.8,1.8 0 0 1 -1.8,1.8 h-3.4 a1.8,1.8 0 0 1 -1.8,-1.8 v-3.4 a1.8,1.8 0 0 1 1.8,-1.8 Z '
        f'M{x+2.1},{y+1} h2.8 a1.1,1.1 0 0 1 1.1,1.1 v2.8 a1.1,1.1 0 0 1 -1.1,1.1 h-2.8 a1.1,1.1 0 0 1 -1.1,-1.1 v-2.8 a1.1,1.1 0 0 1 1.1,-1.1 Z"/>'
    )
    eyes.append(f'<rect x="{x+2}" y="{y+2}" width="3" height="3" rx="0.8" fill="{GOLD}"/>')

# Het logo op een wit tegeltje in het midden.
tile = logo_mod + 0.4
tx = ty = QZ + lo - 0.7
pad = tile * 0.16
mw = tile - 2 * pad
scale = mw / MARK_W
mh = MARK_H * scale
logo_svg = (
    f'<rect x="{tx}" y="{ty}" width="{tile}" height="{tile}" rx="{tile*0.22:.2f}" fill="#FFFFFF"/>'
    f'<g transform="translate({tx+pad:.3f},{ty+(tile-mh)/2:.3f}) scale({scale:.5f})">{mark}</g>'
)

code = modules + "".join(eyes) + logo_svg

qr_svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="1024" height="1024" role="img" aria-label="QR-code naar de demo AI Wijzer van Preludens">'
    f'<rect width="{size}" height="{size}" rx="{size*0.06:.2f}" fill="#FFFFFF"/>{code}</svg>'
)
open(f"{out_dir}/qr.svg", "w").write(qr_svg)

print("versie", qr.version, "modules", n, "logo", logo_mod)
