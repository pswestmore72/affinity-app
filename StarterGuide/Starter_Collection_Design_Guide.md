# Affinity Starter Collection — Final Design Guide
## Affinity Publisher Specifications

*Consolidated from A5 PDF Design Guide and Visual Style Guide. April 2026.*

---

## Document Setup

Format: A5 Portrait (148 x 210 mm / 5.83 x 8.27 inches)
Orientation: Portrait
Facing Pages: Yes (left/right page templates)

Margins:
- Top: 18mm
- Bottom: 20mm
- Inner: 20mm (binding edge — larger to account for spine)
- Outer: 15mm (thumb edge)

Bleed: 3mm all sides (add for print. Skip for digital-only playtest exports)
Safety Zone: Keep all critical text 5mm inside margins

---

## Typography

Body Text: Crimson Text, 10.5pt
- Line height: 1.4 (14.7pt leading)
- Paragraph spacing: 8pt after
- Alignment: Left (never justified — A5 is too narrow, justified creates rivers)
- Color: #000000

Headers:
- H1 (Chapter/Guide title): Oswald Bold, 36pt
- H2 (Major section): Oswald Bold, 24pt
- H3 (Subsection): Oswald Bold, 18pt
- Header color: #1a1a2e (near-black with blue tint) or Antique Gold #C4A77D

Stat Blocks and Mechanical Text: Fira Code, 9.5pt
- Use only inside styled containers (see Styled Sections below)

Italic: Flavor text, read-aloud passages, Chandle quotes
Bold: Game terms on first use, stat names, emphasis

Do not use more than these three fonts. Ever.

---

## Color Palette

Page background: Pure white #FFFFFF
Body text: Black #000000

Primary accent (headers, section banners, dividers): Antique Gold #C4A77D
Secondary accent (highlights, Chandle's Asides): Arcane Purple #9B8BB8
Tertiary (use sparingly — important warnings, divine content): Divine Gold #E5C158
Border/structural: Muted Purple #5D5878

Background tints (for styled containers only):
- Light wash: 5% gray #F2F2F2
- Stat blocks: 10% gray #E6E6E6
- Chandle's Asides: 5% Arcane Purple wash

Rule: Everything must be fully readable in pure black and white. Color is accent, not information.

---

## Layout Principles

Single column only. A5 is too narrow for two columns.

Usable text width after margins: ~113mm. This naturally produces 60-70 characters per line at 10.5pt Crimson Text — ideal reading length.

White space is structure. Do not fill pages to fill them. Aim for:
- 60% text and white space
- 25% headers, styled sections, mechanical content
- 15% illustration and decoration

Paragraph length: 3-5 sentences maximum. If a paragraph runs longer, break it into bullets or split it.

Use bullet lists aggressively. Dense paragraphs lose readers. Chunked information keeps them.

Page breaks: Never orphan a header at the bottom of a page. If a section header lands in the last 30mm, push it to the next page.

Widows and orphans: Never allow a single line stranded at the top or bottom of a page. Affinity Publisher has widow/orphan controls — set minimum 2 lines.

---

## Styled Sections (Minimal)

You have four types of styled content. Each gets ONE treatment. Keep these consistent across all four documents.


SECTION BANNERS (for major headers like "COMBAT BASICS" or "THE GLOAM")

- Full-width horizontal bar, 2pt, in Antique Gold #C4A77D
- Header text sits below the bar with 8pt space
- Second bar below the header text, thinner (1pt), same color
- That's it. Two lines and a header. Clean.

Example in Publisher:
- Draw rectangle: full text width x 2pt, fill #C4A77D, no stroke
- Place header text below (Oswald Bold, 24pt)
- Draw rectangle: full text width x 1pt, fill #C4A77D, no stroke
- Group these three elements. Save as a snippet for reuse.


STAT BLOCKS (for enemy stat blocks, NPC cards)

- Left accent bar only: 3pt solid Antique Gold #C4A77D, full height of the block
- Background: 10% gray #E6E6E6
- Padding: 10pt all sides
- Font: Fira Code 9.5pt for stats. Crimson Text 10pt for descriptive text within the block.
- No other borders. The left bar and gray fill are enough.

In Publisher: Create a text frame with 10pt inset. Apply 10% gray fill. Draw a 3pt rectangle on the left edge in #C4A77D. Group. Save as asset.


CHANDLE'S ASIDES / CALLOUT QUOTES (for Chandle's voice sections)

- No border
- Background: 5% Arcane Purple wash (very subtle — mix #9B8BB8 at 5-8% opacity over white)
- Padding: 12pt all sides
- Text in Crimson Text italic, 10pt
- Attribution ("— Chandle") in Crimson Text regular, 9pt, right-aligned
- Generous margin above and below (16pt) to let these breathe on the page

These should feel like a quiet aside — the page equivalent of someone leaning in to say something. If they're visually loud, they're wrong.


EXAMPLE BOXES (for combat examples, "How This Plays" sections)

- Background: 5% gray #F2F2F2
- Thin top border: 1pt Muted Purple #5D5878
- No other borders
- Padding: 12pt all sides
- Font: Crimson Text 10pt (same as body, so it reads as narrative, not reference)

These are teaching moments. They should feel like part of the text flow, just visually offset enough that a reader scanning the page can find them.


SECTION DIVIDERS (between major content blocks within a page)

- Single horizontal line, 0.5pt, #5D5878
- Centered, with 12pt space above and below
- Use these between logical breaks — not between every paragraph. If you're placing more than 2-3 per page, you're overusing them.

---

## What NOT to Use

No tables. Anywhere. For any reason.

If you need to present structured data (encounter difficulty, defense success rates, character stats), use one of these instead:

Inline list format:
- Easy: 8-12 HD total — 3-4 Trivial (1-2 HD)
- Medium: 12-18 HD total — 2-3 Basic (3-5 HD)

Stat line format:
HD: 5d10s | Proficiency: 1 | Resolve Threshold: 2 | Defense Capacity: 1

Stacked format:
Proficiency: 1
Resolve Threshold: 2
Defense Capacity: 1
Actions: 2 per turn (1 at 0 HD)

All of these communicate the same information a table would, without the visual weight or the formatting headache in Publisher.

No box-drawing characters (the ASCII art borders from the plaintext files — those were for text editing, not layout).

No decorative corner frames. No ornamental borders. No watermarks. These are starter guides, not illuminated manuscripts. Let the text and the illustrations carry the page.

---

## Illustrations

Each document in the bundle gets:
- 1 cover illustration (full cover or prominent placement on page 1)
- 2-4 simple interior illustrations (spot art)


COVER ILLUSTRATIONS (one per document)

Size: At minimum 80mm wide. Can bleed to edges if the art supports it.
Style: Your hand-drawn art. Ink line work, minimal shading, strong silhouettes.
Placement: Page 1 of each document, integrated with the title.

Suggested subjects:
- Lore Primer: The Mortal Weave — a fractured world, cosmic tension, the Veil
- Player Guide: A character mid-action — dice shattering around them, weapon drawn
- GM Guide: The GM's view — a hand placing a figure on a map, or a screen with dice behind it
- Wintermarch Vigil: The Pale Forest — frost-covered trees, blue light between trunks, silhouette of a frozen figure standing at the tree line

The adventure cover is your strongest sales image. That frozen figure watching from the tree line IS the hook. Make it eerie.


INTERIOR SPOT ILLUSTRATIONS (2-4 per document)

Size: 30-60mm wide. Small enough to sit beside text or between sections.
Style: Same ink line art as covers. Keep the hand consistent.
Placement: At the start of major sections, or where the text needs breathing room.

High-value spots (where illustration adds the most):
- Player Guide: The dice depletion visual (full pool > damaged > empty). This is the single most important illustration in the entire bundle. It teaches the core mechanic visually.
- Player Guide: One class silhouette per class section (Combatant with shield, Ranger with bow, Weaver with arcane gesture). Simple. Iconic.
- GM Guide: An encounter layout sketch — show positioning, cover, engagement range. Even a rough diagram teaches more than a paragraph.
- Wintermarch Vigil: The Burial Cairn — stacked stones, blue crystal on top, frozen corpses around the base. This sets the tone for the climactic Session 1 encounter.

You mentioned a map for the adventure. Place it after the Briefing scene (where Captain Frostfeld "spreads a crude map"). It should show:
- Coldmarch (south)
- Scout's Last Position (3 miles NW)
- Old Burial Cairn (7 miles NE)
- The Pale Heart (12 miles N of cairn)
- The Pale Forest filling the space between

Keep the map style consistent with your illustrations — hand-drawn ink, not digital polish. A map that looks like Frostfeld actually sketched it on parchment fits the fiction perfectly.


ILLUSTRATION PRODUCTION TIPS

Draw at 2x your target print size, then scale down. This sharpens line work and hides small imperfections.

Scan or photograph at 300 DPI minimum. 600 DPI if your scanner supports it — you can always downsample, you can't upsample.

In Affinity Publisher: Place illustrations as linked files (File > Place), not embedded. This keeps your Publisher file size manageable and lets you update art without re-importing.

Export final art as PNG with transparency if the illustration has irregular edges. Use TIFF for full-bleed rectangular art.

---

## Page Templates

Set up four master pages in Publisher. Apply them once, reuse everywhere.


COVER PAGE (Master A)

- No header, no footer, no page number
- Title area: upper third
- Illustration area: middle to lower
- Subtitle/tagline: below title
- "Affinity: Fracture" branding and version number: bottom


LEFT INTERIOR PAGE (Master B — even pages)

- Running header (left-aligned): Page number, thin separator, Chapter/Guide title
- Header font: Crimson Text, 8pt, #999999
- Body content area within margins
- Nothing in footer


RIGHT INTERIOR PAGE (Master C — odd pages)

- Running header (right-aligned): Section title, thin separator, Page number
- Header font: Crimson Text, 8pt, #999999
- Body content area within margins
- Nothing in footer


BACK PAGE (Master D)

- No running header
- Quick reference content (formatted as stacked lists and stat lines, not tables)
- Chandle closing quote
- Credits, version, website URL

---

## Affinity Publisher Tips

Paragraph Styles: Set up every text treatment as a named Paragraph Style before you start laying out. Body Text, H1, H2, H3, Stat Block, Chandle Aside, Example Text, Running Header. Apply styles, never manually format. When you need to change the font size across 40 pages, you change the style once.

Character Styles: Create styles for Bold Term (bold + black), Italic Flavor (italic), and Inline Stat (Fira Code 9.5pt). Apply these within paragraph styles for mixed formatting.

Assets Panel: Save your styled containers (stat block frame, Chandle aside frame, example box, section banner) as Assets. Drag and drop them onto pages. This is the single biggest time-saver in Publisher.

Text Flow: For long documents, use linked text frames. Place one frame per page, link them (the blue arrow at the bottom of a frame). Text flows automatically across pages. Resize a section and everything downstream reflows.

Preflight: Before exporting, run Preflight (File > Preflight). It catches missing fonts, overset text, and images below target resolution. Fix every warning.

Baseline Grid: Turn on a baseline grid matching your body text leading (14.7pt). Snap body text to grid. This aligns text across facing pages — left and right pages will have identical line positions, which looks professional and costs you nothing.

Image Placement: Always use File > Place (not copy-paste). Link images, don't embed. Set images to "Scale to fit" or "Scale to fill" depending on the frame, then adjust manually. Lock the image frame once positioned (right-click > Lock).

---

## PDF Export

DIGITAL (DriveThruRPG, screen viewing):
- Format: PDF (for print) preset, modified
- DPI: 150 (good screen quality, small file)
- Color: RGB, sRGB profile
- Fonts: Embed all (critical — check the box)
- Subset fonts: Yes
- Include hyperlinks: Yes
- Include bookmarks: Yes (one per major section)
- Bleed: No (digital doesn't need it)
- Target: Under 5MB per document

PRINT-READY (future POD release):
- Format: PDF/X-1a:2001
- DPI: 300
- Color: CMYK
- Fonts: Embed all
- Bleed: 3mm all sides
- Crop marks: Yes
- Target: Whatever it needs to be — quality over size

Export digital first. Get the content right. Convert to print-ready when you're ready for POD.

---

## File Naming

Affinity_Lore_Primer_v1.0.pdf
Affinity_Players_Guide_v1.0.pdf
Affinity_GM_Guide_v1.0.pdf
Affinity_Wintermarch_Vigil_v1.0.pdf

Version on cover page or credits. Include "Starter Collection" on each cover so standalone downloads still reference the bundle.

---

## Pre-Export Checklist

Content:
- All text proofread against the clean plaintext source files
- All mechanical values verified (cross-referenced against source rules)
- Chandle quotes present in all four documents
- Page flow logical — no orphaned headers, no widows

Design:
- Paragraph styles applied consistently (no manual overrides)
- Styled sections use correct containers (stat blocks, asides, examples)
- White space balanced — no cramped pages, no wastefully empty pages
- Illustrations placed and linked (not embedded)
- Map placed in adventure after the Briefing scene

Technical:
- Preflight clean (no warnings)
- All fonts embedded
- Bookmarks set for major sections
- File under 5MB
- Tested on phone/tablet (DTRPG buyers read on everything)
- Print one page to check margins and font readability at A5 scale
