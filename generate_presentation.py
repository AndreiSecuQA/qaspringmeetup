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
pdfmetrics.registerFont(TTFont('Ar',     f'{FONT_DIR}/Arial.ttf'))
pdfmetrics.registerFont(TTFont('Ar-B',   f'{FONT_DIR}/Arial Bold.ttf'))
pdfmetrics.registerFont(TTFont('Ar-I',   f'{FONT_DIR}/Arial Italic.ttf'))
pdfmetrics.registerFont(TTFont('Ar-BI',  f'{FONT_DIR}/Arial Bold Italic.ttf'))

# ── CONFIG ────────────────────────────────────────────────────────────────────
W, H   = 1280, 720
IMAGES = "/Users/andreisecu/Side Hustle/QA Spring Meetup/images"
OUTPUT = "/Users/andreisecu/Side Hustle/QA Spring Meetup/QA_Spring_Meetup_2026.pdf"

# ── BRAND COLORS ──────────────────────────────────────────────────────────────
NAVY    = HexColor('#0a1628')
NAVY2   = HexColor('#0d1f3c')
NAVY3   = HexColor('#112240')
TEAL    = HexColor('#00c8a0')
TEAL2   = HexColor('#00a882')
AMBER   = HexColor('#f59e0b')
WHITE   = HexColor('#ffffff')
LGREY   = HexColor('#b0c4d8')
MGREY   = HexColor('#4a6080')
DGREY   = HexColor('#1e3a5c')

# ── HELPERS ───────────────────────────────────────────────────────────────────
def prep_image(path, tw, th, v_pct=50):
    """Resize+crop image to exactly tw x th; v_pct shifts vertical crop (0=top,100=bottom)."""
    img = Image.open(path).convert('RGB')
    iw, ih = img.size
    scale = max(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - tw) // 2
    max_top = nh - th
    top = int(max_top * v_pct / 100)
    img = img.crop((left, top, left + tw, top + th))
    buf = io.BytesIO()
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

def badge(c, x, y, label, color=None, text_color=None):
    color = color or TEAL
    text_color = text_color or NAVY
    tw = len(label) * 9 + 30
    c.setFillColor(color)
    c.roundRect(x, y, tw, 30, 7, fill=1, stroke=0)
    c.setFillColor(text_color)
    c.setFont('Ar-B', 12)
    c.drawString(x + 14, y + 9, label)

# ── SLIDE 1: COVER ───────────────────────────────────────────────────────────
def cover_slide(c):
    bg(c); grid(c)

    # Right orb
    c.setFillColor(HexColor('#001830'))
    c.circle(1080, 420, 340, fill=1, stroke=0)
    c.setStrokeColor(HexColor('#00c8a018'))
    c.setLineWidth(2)
    c.circle(1080, 420, 290, fill=0, stroke=1)
    c.setStrokeColor(HexColor('#00c8a010'))
    c.circle(1080, 420, 240, fill=0, stroke=1)

    # Left accent line
    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.line(60, H - 50, 360, H - 50)

    # Badge
    badge(c, 60, H - 96, "SPRING MEETUP 2026")

    # Title
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 90)
    c.drawString(60, H - 210, "QA Spring")
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 90)
    c.drawString(60, H - 312, "Meetup")

    # Subtitle
    c.setFillColor(LGREY)
    c.setFont('Ar', 22)
    c.drawString(60, H - 370, "QA between expectations and reality:")
    c.drawString(60, H - 398, "the ideal candidate in 2026")

    # Divider
    c.setStrokeColor(DGREY)
    c.setLineWidth(1)
    c.line(60, H - 428, 680, H - 428)

    # Date & location
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 20)
    c.drawString(60, H - 462, "25 Aprilie 2026   |   11:00 – 12:30")
    c.setFillColor(LGREY)
    c.setFont('Ar', 18)
    c.drawString(60, H - 490, "UTM — FCIM Aula 3-3, Chisinau, Moldova")

    # Bottom bar
    c.setFillColor(TEAL)
    c.rect(0, 0, W, 4, fill=1, stroke=0)

    c.showPage()

# ── SLIDE 2: SECTION DIVIDER ─────────────────────────────────────────────────
def section_slide(c, number, title_line1, title_line2, subtitle="", color=TEAL):
    bg(c); grid(c)

    # Left dark panel
    c.setFillColor(HexColor('#060f1e'))
    c.rect(0, 0, 480, H, fill=1, stroke=0)

    # Circle
    c.setFillColor(NAVY3)
    c.circle(240, H // 2, 200, fill=1, stroke=0)
    c.setStrokeColor(color)
    c.setLineWidth(5)
    c.circle(240, H // 2, 180, fill=0, stroke=1)

    # Number in circle
    c.setFillColor(color)
    c.setFont('Ar-B', 110)
    c.drawCentredString(240, H // 2 - 42, number)

    # Right side
    c.setFillColor(MGREY)
    c.setFont('Ar-B', 13)
    c.drawString(540, H // 2 + 120, "PROGRAM")

    c.setFillColor(WHITE)
    c.setFont('Ar-B', 58)
    c.drawString(540, H // 2 + 55, title_line1)
    c.setFillColor(color)
    c.setFont('Ar-B', 58)
    c.drawString(540, H // 2 - 10, title_line2)

    c.setStrokeColor(color)
    c.setLineWidth(3)
    c.line(540, H // 2 - 36, W - 50, H // 2 - 36)

    if subtitle:
        c.setFillColor(LGREY)
        c.setFont('Ar', 19)
        lines = wrap(subtitle, 38)
        y = H // 2 - 68
        for line in lines[:3]:
            c.drawString(540, y, line)
            y -= 28

    c.setFillColor(color)
    c.rect(0, 0, W, 4, fill=1, stroke=0)
    c.showPage()

# ── SLIDE 3-5: SPEAKER ───────────────────────────────────────────────────────
def speaker_slide(c, name, role, company, topic, img_path,
                  badge_label="SPEAKER", badge_color=None, v_pct=30):
    badge_color = badge_color or TEAL
    bg(c); grid(c)

    # Photo area
    PW, PH = 460, 620
    PX, PY = 50, (H - PH) // 2   # PY = 50

    # Card behind photo
    c.setFillColor(NAVY3)
    c.roundRect(PX - 10, PY - 10, PW + 20, PH + 20, 14, fill=1, stroke=0)

    img = prep_image(img_path, PW, PH, v_pct)
    c.drawImage(img, PX, PY, PW, PH, mask='auto')

    # Teal border
    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.roundRect(PX - 2, PY - 2, PW + 4, PH + 4, 8, fill=0, stroke=1)

    # Gradient overlay at bottom of photo (text area)
    c.setFillColor(HexColor('#0a1628CC'))
    c.rect(PX, PY, PW, 60, fill=1, stroke=0)

    # Right side text — starts at x=560
    TX = 565

    # Badge
    badge(c, TX, H - 88, badge_label, badge_color,
          NAVY if badge_color == TEAL else WHITE)

    # Name (split at space boundary)
    parts = name.split()
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 62)
    if len(parts) >= 2:
        c.drawString(TX, H - 172, parts[0])
        c.setFillColor(TEAL)
        c.drawString(TX, H - 242, " ".join(parts[1:]))
    else:
        c.drawString(TX, H - 172, name)

    # Teal rule
    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.line(TX, H - 268, W - 50, H - 268)

    # Role
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 24)
    c.drawString(TX, H - 308, role)

    # Company chip
    c.setFillColor(DGREY)
    c.roundRect(TX, H - 352, len(company) * 12 + 24, 28, 6, fill=1, stroke=0)
    c.setFillColor(LGREY)
    c.setFont('Ar-B', 15)
    c.drawString(TX + 12, H - 340, company)

    # Divider
    c.setStrokeColor(DGREY)
    c.setLineWidth(1)
    c.line(TX, H - 378, W - 50, H - 378)

    # Topic label
    c.setFillColor(MGREY)
    c.setFont('Ar-B', 11)
    c.drawString(TX, H - 410, "TOPIC / SESSION")

    # Topic text
    c.setFillColor(WHITE)
    c.setFont('Ar-I', 20)
    lines = wrap(topic, 42)
    y = H - 440
    for line in lines[:4]:
        c.drawString(TX, y, line)
        y -= 28

    # Footer
    c.setFillColor(MGREY)
    c.setFont('Ar', 11)
    c.drawString(TX, 22, "QA Spring Meetup 2026  |  25 Aprilie  |  UTM Chisinau")
    c.setFillColor(TEAL)
    c.rect(0, 0, W, 4, fill=1, stroke=0)

    c.showPage()

# ── SLIDES 7-10: PANEL GUEST ─────────────────────────────────────────────────
def panel_slide(c, name, role, company, img_path, v_pct=25):
    bg(c); grid(c)

    PW, PH = 430, 580
    PX, PY = 60, (H - PH) // 2

    c.setFillColor(NAVY3)
    c.roundRect(PX - 10, PY - 10, PW + 20, PH + 20, 14, fill=1, stroke=0)

    img = prep_image(img_path, PW, PH, v_pct)
    c.drawImage(img, PX, PY, PW, PH, mask='auto')

    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.roundRect(PX - 2, PY - 2, PW + 4, PH + 4, 8, fill=0, stroke=1)

    TX = 550

    badge(c, TX, H - 88, "PANEL GUEST", DGREY, TEAL)
    # Teal border on badge
    c.setStrokeColor(TEAL)
    c.setLineWidth(1)
    c.roundRect(TX, H - 88, len("PANEL GUEST") * 9 + 30, 30, 7, fill=0, stroke=1)

    # Name
    parts = name.split()
    c.setFillColor(WHITE)
    c.setFont('Ar-B', 58)
    if len(parts) >= 2:
        c.drawString(TX, H - 168, parts[0])
        c.setFillColor(TEAL)
        c.drawString(TX, H - 234, " ".join(parts[1:]))
    else:
        c.drawString(TX, H - 168, name)

    c.setStrokeColor(TEAL)
    c.setLineWidth(3)
    c.line(TX, H - 260, W - 50, H - 260)

    # Role (may be long — wrap it)
    role_lines = wrap(role, 38)
    c.setFillColor(TEAL)
    c.setFont('Ar-B', 22)
    ry = H - 300
    for rl in role_lines[:2]:
        c.drawString(TX, ry, rl)
        ry -= 30

    # Company
    c.setFillColor(DGREY)
    cw = len(company) * 11 + 24
    c.roundRect(TX, ry - 6, cw, 28, 6, fill=1, stroke=0)
    c.setFillColor(LGREY)
    c.setFont('Ar-B', 14)
    c.drawString(TX + 12, ry + 6, company)

    # Footer
    c.setFillColor(MGREY)
    c.setFont('Ar', 11)
    c.drawString(TX, 22, "QA Spring Meetup 2026  |  Panel Discussion")
    c.setFillColor(TEAL)
    c.rect(0, 0, W, 4, fill=1, stroke=0)

    c.showPage()

# ── BUILD ─────────────────────────────────────────────────────────────────────
c = canvas.Canvas(OUTPUT, pagesize=(W, H))

cover_slide(c)

section_slide(c, "3", "Speakeri", "Confirmati",
              "Profesionisti din industrie gata sa imparta din experienta lor reala")

speaker_slide(c,
    name="Daniela Popov",
    role="Recruitment Manager",
    company="Amdaris",
    topic="The Quality Orchestrator: Cum sa devii liderul QA de care companiile au nevoie in era AI",
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
    topic="Skill-up: Demo Practic & Tooling Modern in QA — demonstratii live cu tooling modern",
    img_path=f"{IMAGES}/alex-ursu.jpg",
    badge_label="WORKSHOP", badge_color=AMBER, v_pct=15)

section_slide(c, "4", "Panel", "Discussion",
              "QA between Expectations and Reality: ce cauta industria in 2026?",
              color=TEAL)

panel_slide(c,
    name="Dumitru Ciorba",
    role="Decan, FCIM",
    company="Universitatea Tehnica a Moldovei",
    img_path=f"{IMAGES}/dumitru-ciorba.jpg",
    v_pct=20)

panel_slide(c,
    name="Eugen Valah",
    role="QA Engineer",
    company="Planable Moldova",
    img_path=f"{IMAGES}/eugen-valah.jpg",
    v_pct=18)

panel_slide(c,
    name="Ecaterina Artemiev",
    role="Application Consultant · Presedinte, Tech Women Moldova",
    company="Stefanini EMEA",
    img_path=f"{IMAGES}/artemii-ecaterina.jpg",
    v_pct=15)

panel_slide(c,
    name="Marianna Paladii",
    role="Consilier Recrutare",
    company="MICB (Moldindconbank)",
    img_path=f"{IMAGES}/marianna-paladii.jpg",
    v_pct=22)

c.save()
print(f"✅  PDF saved → {OUTPUT}")
