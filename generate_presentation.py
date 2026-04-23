"""
QA Spring Meetup 2026 — Big Screen Presentation PDF Generator
"""
import os, io
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image

# ── FONTS ────────────────────────────────────────────────────────────────────
FONT_DIR = "/System/Library/Fonts/Supplemental"
pdfmetrics.registerFont(TTFont('Ar',    f'{FONT_DIR}/Arial.ttf'))
pdfmetrics.registerFont(TTFont('Ar-B',  f'{FONT_DIR}/Arial Bold.ttf'))
pdfmetrics.registerFont(TTFont('Ar-I',  f'{FONT_DIR}/Arial Italic.ttf'))
pdfmetrics.registerFont(TTFont('Ar-BI', f'{FONT_DIR}/Arial Bold Italic.ttf'))

# ── CONFIG ────────────────────────────────────────────────────────────────────
W, H   = 1280, 720
IMAGES = "/Users/andreisecu/Side Hustle/QA Spring Meetup/images"
OUTPUT = "/Users/andreisecu/Side Hustle/QA Spring Meetup/QA_Spring_Meetup_2026.pdf"

# ── BRAND COLORS ──────────────────────────────────────────────────────────────
NAVY  = HexColor('#0a1628')
NAVY2 = HexColor('#0d1f3c')
NAVY3 = HexColor('#112240')
TEAL  = HexColor('#00c8a0')
AMBER = HexColor('#f59e0b')
WHITE = HexColor('#ffffff')
LGREY = HexColor('#b0c4d8')
MGREY = HexColor('#4a6080')
DGREY = HexColor('#1e3a5c')

# ── HELPERS ───────────────────────────────────────────────────────────────────
def prep_image(path, tw, th, v_pct=50):
    img = Image.open(path).convert('RGB')
    iw, ih = img.size
    scale = max(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    top  = int(max(0, nh - th) * v_pct / 100)
    img  = img.crop((left, top, left + tw, top + th))
    buf  = io.BytesIO()
    img.save(buf, format='JPEG', quality=95)
    buf.seek(0)
    return ImageReader(buf)

def bg(c):
    c.setFillColor(NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)

def grid(c):
    c.setStrokeColor(HexColor('#0e1f38'))
    c.setLineWidth(0.5)
    for x in range(0, W, 80):
        c.line(x, 0, x, H)
    for y in range(0, H, 80):
        c.line(0, y, W, y)

def wrap(text, maxchars):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        if len(cur) + len(w) + 1 <= maxchars:
            cur = (cur + " " + w).strip()
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def pill(c, x, y, label, fill_color, text_color, fs=12):
    tw = len(label) * 8 + 28
    c.setFillColor(fill_color)
    c.roundRect(x, y, tw, 28, 7, fill=1, stroke=0)
    c.setFillColor(text_color)
    c.setFont('Ar-B', fs)
    c.drawString(x + 14, y + 8, label)

# ── SLIDE 1: WELCOME ─────────────────────────────────────────────────────────
def cover_slide(c):
    bg(c); grid(c)

    # Decorative orbs
    c.setFillColor(HexColor('#001830'))
    c.circle(1100, 360, 380, fill=1, stroke=0)
    c.setStrokeColor(HexColor('#00c8a020'))
    c.setLineWidth(2)
    c.circle(1100, 360, 320, fill=0, stroke=1)
    c.setStrokeColor(HexColor('#00c8a010'))
    c.circle(1100, 360, 260, fill=0, stroke=1)
    c.setFillColor(HexColor('#060f1e'))
    c.circle(60, 60, 130, fill=1, stroke=0)
    c.setStrokeColor(HexColor('#00c8a015'))
    c.setLineWidth(1.5)
    c.circle(60, 60, 100, fill=0, stroke=1)

    # "Welcome!" — large teal
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 32)
    c.drawString(60, H - 62, "Welcome!")

    # Teal accent line
    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.line(60, H - 76, 440, H - 76)

    # "Welcome to" label
    c.setFillColor(LGREY)
    c.setFont('Ar', 28)
    c.drawString(60, H - 130, "Welcome to")

    # Event name
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 96)
    c.drawString(60, H - 238, "QA Spring")
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 96)
    c.drawString(60, H - 346, "Meetup")

    # Subtitle
    c.setFillColor(LGREY)
    c.setFont('Ar', 21)
    c.drawString(60, H - 400, "QA between expectations and reality:")
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 21)
    c.drawString(60, H - 426, "the ideal candidate in 2026")

    # Divider
    c.setStrokeColor(DGREY)
    c.setLineWidth(1)
    c.line(60, H - 454, 700, H - 454)

    # Date & location
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 19)
    c.drawString(60, H - 486, "April 25, 2026   |   11:00 – 12:30")
    c.setFillColor(LGREY)
    c.setFont('Ar', 17)
    c.drawString(60, H - 512, "UTM — FCIM Hall 3-3, Chisinau, Moldova")

    c.setFillColor(TEAL)
    c.rect(0, 0, W, 4, fill=1, stroke=0)
    c.showPage()

# ── SLIDES 2–4: SPEAKER ──────────────────────────────────────────────────────
def speaker_slide(c, name, role, company, topic, img_path,
                  badge_label="SPEAKER", badge_color=None, v_pct=30):
    badge_color = badge_color or TEAL
    bg(c); grid(c)

    PW, PH = 460, 620
    PX, PY = 50, (H - PH) // 2

    c.setFillColor(NAVY3)
    c.roundRect(PX - 10, PY - 10, PW + 20, PH + 20, 14, fill=1, stroke=0)
    img = prep_image(img_path, PW, PH, v_pct)
    c.drawImage(img, PX, PY, PW, PH)          # no mask — fixes rendering in all viewers
    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.roundRect(PX - 2, PY - 2, PW + 4, PH + 4, 8, fill=0, stroke=1)

    TX = 565

    # Badge
    pill(c, TX, H - 90, badge_label, badge_color,
         NAVY if badge_color == TEAL else WHITE)

    # Name — bigger
    parts = name.split()
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 80)
    c.drawString(TX, H - 192, parts[0])
    c.setFillColor(TEAL)
    c.drawString(TX, H - 282, " ".join(parts[1:]))

    # Role — bigger
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 32)
    c.drawString(TX, H - 334, role)

    # Company chip
    c.setFillColor(DGREY)
    c.roundRect(TX, H - 382, len(company) * 13 + 26, 30, 6, fill=1, stroke=0)
    c.setFillColor(LGREY)
    c.setFont('Ar-B', 17)
    c.drawString(TX + 13, H - 368, company)

    # Divider
    c.setStrokeColor(DGREY)
    c.setLineWidth(1)
    c.line(TX, H - 410, W - 50, H - 410)

    # Topic label + text — bigger
    c.setFillColor(MGREY)
    c.setFont('Ar-B', 12)
    c.drawString(TX, H - 442, "TOPIC / SESSION")
    c.setFillColor(WHITE)
    c.setFont('Ar-I', 24)
    lines = wrap(topic, 38)
    y = H - 476
    for line in lines[:4]:
        c.drawString(TX, y, line)
        y -= 32

    # Footer
    c.setFillColor(MGREY)
    c.setFont('Ar', 11)
    c.drawString(TX, 22, "QA Spring Meetup 2026  |  April 25  |  UTM Chisinau")
    c.showPage()

# ── SLIDE 5: PANEL — ALL IN ONE ROW (moderator + guests) ─────────────────────
def panel_row_slide(c, panel_title, panel_subtitle, guests):
    """
    guests: list of dicts — first item is the moderator (has 'moderator': True),
            rest are panel guests. All shown in one horizontal row.
    """
    bg(c); grid(c)

    # ── Panel title ──
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 28)
    c.drawString(30, H - 44, panel_title)
    c.setFillColor(LGREY)
    c.setFont('Ar', 16)
    c.drawString(30, H - 66, panel_subtitle)
    c.setStrokeColor(TEAL)
    c.setLineWidth(2)
    c.line(30, H - 76, W - 30, H - 76)

    # ── Grid ──
    MARGIN = 20
    GAP    = 12
    TOP    = H - 88
    BOTTOM = 20
    n      = len(guests)

    CW = (W - MARGIN * 2 - GAP * (n - 1)) // n
    CH = TOP - BOTTOM

    PHOTO_H = int(CH * 0.60)
    TEXT_H  = CH - PHOTO_H

    for i, g in enumerate(guests):
        is_mod = g.get('moderator', False)
        cx = MARGIN + i * (CW + GAP)
        cy = BOTTOM

        # Card bg — slightly different shade for moderator
        c.setFillColor(HexColor('#162840') if is_mod else NAVY3)
        c.roundRect(cx, cy, CW, CH, 10, fill=1, stroke=0)

        # Photo
        photo_y = cy + CH - PHOTO_H
        img = prep_image(g['img_path'], CW, PHOTO_H, g.get('v_pct', 25))
        c.drawImage(img, cx, photo_y, CW, PHOTO_H)

        # Border — amber for moderator, teal for guests
        border_color = AMBER if is_mod else TEAL
        c.setStrokeColor(border_color)
        c.setLineWidth(2)
        c.roundRect(cx + 1, photo_y, CW - 2, PHOTO_H, 4, fill=0, stroke=1)

        # Badge
        badge_label = "MODERATOR" if is_mod else "PANEL GUEST"
        badge_fill  = AMBER       if is_mod else DGREY
        badge_text  = NAVY        if is_mod else TEAL
        pill(c, cx + 8, cy + TEXT_H - 34, badge_label, badge_fill, badge_text, fs=9)
        c.setStrokeColor(border_color)
        c.setLineWidth(1)
        bw = len(badge_label) * 7 + 24
        c.roundRect(cx + 8, cy + TEXT_H - 34, bw, 26, 5, fill=0, stroke=1)

        # Name
        parts = g['name'].split()
        c.setFillColor(WHITE)
        c.setFont('Ar-B', 20)
        c.drawString(cx + 8, cy + TEXT_H - 66, parts[0])
        c.setFillColor(border_color)
        c.drawString(cx + 8, cy + TEXT_H - 89, " ".join(parts[1:]))

        # Rule
        c.setStrokeColor(border_color)
        c.setLineWidth(1.5)
        c.line(cx + 8, cy + TEXT_H - 98, cx + CW - 8, cy + TEXT_H - 98)

        # Role
        c.setFillColor(TEAL if not is_mod else AMBER)
        c.setFont('Ar-B', 11)
        role_lines = wrap(g['role'], 26)
        ry = cy + TEXT_H - 114
        for rl in role_lines[:2]:
            c.drawString(cx + 8, ry, rl)
            ry -= 15

        # Company
        c.setFillColor(LGREY)
        c.setFont('Ar', 10)
        c.drawString(cx + 8, ry - 3, g['company'])

    c.showPage()

# ── BUILD ─────────────────────────────────────────────────────────────────────
c = canvas.Canvas(OUTPUT, pagesize=(W, H))

# 1. Welcome
cover_slide(c)

# 2–4. Speakers
speaker_slide(c,
    name="Daniela Popov",
    role="Recruitment Manager",
    company="Amdaris",
    topic="The Quality Orchestrator: How to become the QA leader companies need in the AI era",
    img_path=f"{IMAGES}/daniela-popov.jpg",
    badge_label="SPEAKER", v_pct=20)

speaker_slide(c,
    name="Maxim Anastasiev",
    role="Head of Quality Assurance",
    company="maib",
    topic="QA in the Fintech World: When Security Matters More Than Speed",
    img_path=f"{IMAGES}/maxim-anastasiev.jpg",
    badge_label="SPEAKER", v_pct=15)

speaker_slide(c,
    name="Alex Ursu",
    role="QA Lead",
    company="Planable",
    topic="Skill-up: Live Demo & Modern QA Tooling — hands-on with modern testing tools",
    img_path=f"{IMAGES}/alex-ursu.jpg",
    badge_label="WORKSHOP", badge_color=AMBER, v_pct=15)

# 5. Panel — all 4 in one horizontal row
panel_row_slide(c,
    panel_title="Panel Discussion",
    panel_subtitle="QA between Expectations and Reality: what is the industry looking for in 2026?",
    guests=[
        dict(name="Ecaterina Bordian",
             role="Project Manager · UI&UX Designer, Moldova QA Community",
             company="XSoft",
             img_path=f"{IMAGES}/ecaterina-bordian.jpg",  v_pct=30,
             moderator=True),
        dict(name="Dumitru Ciorba",
             role="Dean, Faculty of Computers, Informatics and Microelectronics",
             company="Technical University of Moldova",
             img_path=f"{IMAGES}/dumitru-ciorba.jpg",     v_pct=20),
        dict(name="Eugen Valah",
             role="QA Engineer",
             company="Planable Moldova",
             img_path=f"{IMAGES}/eugen-valah.jpg",        v_pct=18),
        dict(name="Ecaterina Artemiev",
             role="Application Consultant · President, Tech Women Moldova",
             company="Stefanini EMEA",
             img_path=f"{IMAGES}/artemii-ecaterina.jpg",  v_pct=15),
        dict(name="Marianna Paladii",
             role="Recruitment Advisor",
             company="MICB (Moldindconbank)",
             img_path=f"{IMAGES}/marianna-paladii.jpg",   v_pct=22),
    ])

c.save()
print(f"✅  PDF saved → {OUTPUT}  ({5} slides)")
