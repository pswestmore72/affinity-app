# A5 PDF Design Guide for Affinity Quick Start Guides
## Complete Design Specifications for Playtesting Release

*Updated: February 2026*

---

## Document Setup (Affinity Publisher)

### Page Size & Orientation
```
Format: A5 Portrait (148 × 210 mm / 5.83 × 8.27 inches)
Orientation: Portrait (vertical single pages, NOT landscape booklet)
Facing Pages: YES (enabled for proper book layout)
Page Spreads: View as two-page spreads during design
```

**Why A5 Portrait:**
- Industry standard for indie RPGs
- Cost-effective printing
- Portable and table-friendly
- Perfect for Print-on-Demand (DriveThruRPG, Lulu, etc.)
- Professional appearance (used by Blades in the Dark, Mörk Borg, etc.)

### Margins

```
Top:    18mm (0.71 inches)
Bottom: 20mm (0.79 inches)
Inner:  20mm (0.79 inches) — binding edge
Outer:  15mm (0.59 inches) — thumb edge
```

**Margin Philosophy:**
- Inner margin larger (20mm) accounts for binding
- Bottom slightly larger than top creates visual balance
- Outer margin smaller maximizes usable space
- Margins auto-flip for left/right pages when facing pages enabled

### Bleed & Safety

```
Bleed: 3mm (0.12 inches) on all sides
Safety Zone: Keep critical text/elements 5mm inside margins
```

**For initial playtesting PDFs:** Bleed optional (add later when going to print)

---

## Typography

### Font Pairings (All Free Fonts)

**Recommended Primary Pairing:**
```
Body Text: PT Serif (10.5pt)
Headers: Bebas Neue (Bold, sizes 24-36pt)
Monospace: Fira Code (9-10pt for stat blocks)
```

**Alternative Pairings:**
- **Classic:** EB Garamond (body) + Cinzel (headers) — elegant fantasy feel
- **Modern:** Crimson Text (body) + Oswald (headers) — clean contemporary
- **Readable:** Libre Baskerville (body) + Raleway Bold (headers) — maximum clarity

### Typography Settings

```
Body Text:
  Font: PT Serif
  Size: 10.5pt (at A5, never go below 9pt)
  Line Height: 1.4 (14.7pt leading)
  Paragraph Spacing: 8pt after
  Alignment: Left-aligned (not justified — easier to read)
  Color: #000000 (pure black)

Headers:
  Level 1 (Chapter): Bebas Neue 36pt
  Level 2 (Section): Bebas Neue 24pt
  Level 3 (Subsection): Bebas Neue 18pt
  Color: #1a1a2e (near-black with blue tint) OR accent color

Italics: Use sparingly for emphasis and flavor text
Bold: Use for game terms, emphasis, stat names

Monospace (Stat Blocks/Examples):
  Font: Fira Code
  Size: 9.5pt
  Background: 5-10% gray tint box
```

### Column Layout

**Single Column for A5**
- A5 is too narrow for comfortable two-column reading
- Single column = 110-115mm wide (after margins)
- Optimal line length: 60-70 characters
- Use tables and boxes to break up text, not columns

---

## Color Palette

### Background Colors

**Page Backgrounds:**
```
Option 1: Pure White (#FFFFFF) — clean, professional, print-friendly
Option 2: Cream/Off-White (#FDFDF6 or #FBF8F3) — gentler, vintage feel
Option 3: Very Light Gray (#F8F8F8) — modern, reduces eye strain
```

**Recommendation for Starter Guides:**
- **Use pure white (#FFFFFF) for main pages**
- **Use light colored tint only for special boxes/callouts**

**Why not full-color backgrounds:**
- Increases file size dramatically
- More expensive to print
- Can reduce text readability
- Save full backgrounds for special pages (cover, chapter starts)

### Accent Color Strategy

**Pick ONE brand color as your primary accent:**
```
Navy Blue: #1a1a2e (serious, professional)
Deep Red: #8b1e1e (intense, dramatic)
Dark Teal: #0f4c5c (mystical, cosmic)
Charcoal Purple: #3d2645 (magical, mysterious)
```

**Where to use accent color:**
- Main headers (H1, H2)
- Divider lines
- Table headers
- Important callout boxes
- Page numbers (optional)

**DO NOT use accent color for:**
- Body text (always black)
- Critical game information
- Tables with lots of data (keep neutral)

### Background Tints for Boxes

```
Examples/Callouts: 5% gray (#F2F2F2)
Stat Blocks: 10% gray (#E6E6E6)
Tables: Alternating rows 5% gray
Important Warnings: 10% of accent color
```

---

## Layout & Visual Elements

### Page Structure

```
Cover Page:
  - Title (large, centered)
  - Subtitle/tagline
  - "Read in X minutes" hook
  - Simple graphic element
  - Version number (bottom)

Interior Pages:
  - Running header (chapter title, inner edge)
  - Page number (outer edge, bottom or header)
  - Body content
  - Generous white space

Back Cover/Last Page:
  - Quick Reference tables
  - Contact/credit info
  - Version/date
```

### Headers & Footers

```
Left Page (Even):
  Header Left: Page Number | Chapter Title
  Header Right: [empty]
  
Right Page (Odd):
  Header Left: [empty]
  Header Right: Section Title | Page Number
  
Alternative (simpler):
  Just page numbers on outer corners
```

### Visual Hierarchy

**Use these elements to break up text:**

1. **Section Headers** — Large, bold, plenty of space above/below
2. **Tables** — Medium gray borders, light backgrounds on alternating rows
3. **Boxed Examples** — 5% gray background, 10pt padding, thin border
4. **Bullet Lists** — Use liberally to chunk information
5. **Horizontal Rules** — Thin lines (0.5-1pt) to separate major sections
6. **Icons/Symbols** — Simple Unicode symbols (✅❌⬡◆)
7. **White Space** — Don't fear empty space; it guides the eye

### Table Design

```
Border: 1pt solid #cccccc (medium gray)
Header Row: 
  - Background: 15% gray or 20% accent color
  - Text: Bold, 10.5pt
  - Padding: 6pt vertical, 8pt horizontal
Data Rows:
  - Alternating: White / 5% gray
  - Text: Regular, 10pt
  - Padding: 5pt vertical, 6pt horizontal
  - Alignment: Left for text, center for numbers
```

### Boxed Content

```
Example Boxes:
  Background: #F8F8F8 (5% gray)
  Border: None or 1pt #dddddd
  Padding: 12pt all sides
  Margin: 8pt top/bottom
  Font: Slightly smaller (9.5pt) or italics

Stat Blocks:
  Background: #EBEBEB (10% gray)
  Border: 2pt left side in accent color
  Padding: 10pt
  Font: Fira Code 9.5pt
  
Important Callouts:
  Background: 10% of accent color
  Border: 2pt solid accent color
  Icon: Warning symbol or dice icon
```

---

## Connecting to Your Website Brand

### Extract Brand Elements

**From your website, identify:**
1. **Primary colors** — Use as accent color in PDF
2. **Logo/symbol** — Place on cover, footer, or chapter dividers
3. **Typography** — Match or complement your web fonts
4. **Graphic style** — Geometric? Organic? Minimal? match that
5. **Tone** — Professional? Mystical? Modern? Maintain it

### Brand Consistency Checklist

```
☐ Use same accent color from website
☐ Include website logo on cover page
☐ Match header font style (or use compatible font)
☐ Use same icon/symbol set if website has custom icons
☐ Include website URL in footer or credits page
☐ Match graphic element style (lines, shapes, borders)
☐ Maintain same voice/tone in text
☐ Use same tagline or mission statement
```

### Specific Brand Integration Points

**Cover Page:**
- Website logo (small, top or bottom corner)
- Same color scheme as site header
- Tagline from website

**Interior Design:**
- Accent color matches website primary color
- Header style echoes website navigation style
- Divider lines match website's visual language

**Footer/Credits:**
- "Visit [websiteurl] for more"
- Logo watermark (10% opacity) in margin
- QR code to website (optional, modern touch)

**Graphic Elements:**
- If website uses geometric patterns → use in chapter headers
- If website uses specific icon style → replicate in PDF
- If website has a "brand shape" (circle, hexagon) → use as bullet points or decorative element

### Color Bridge Example

```
If your website uses:
  Primary: #1a1a2e (dark blue)
  Secondary: #e94560 (pink/red)
  Background: #f8f8f8 (light gray)

Your PDF should use:
  Headers: #1a1a2e
  Important highlights: #e94560
  Background boxes: #f8f8f8
  Body text: #000000
```

---

## PDF Export Settings

### For Digital Playtesting (Recommended First)

```
Format: PDF/A or PDF/X-1a (universal compatibility)
Preset: High Quality Print (modified)

Image Quality:
  Resolution: 150 DPI (good for screen, smaller file)
  Compression: JPEG, Medium quality
  Downsample: Yes, to 150 DPI

Fonts:
  Embed All Fonts: YES (CRITICAL!)
  Subset Fonts: Yes (reduces file size)
  
Color:
  Color Space: RGB (for digital viewing)
  Profile: sRGB IEC61966-2.1
  
Marks & Bleeds:
  Crop Marks: No (for digital)
  Bleed: No (for digital)
  
Compatibility: Acrobat 5 (PDF 1.4) or higher

Advanced:
  Include Hyperlinks: YES (enables clickable ToC)
  Include Bookmarks: YES (navigation panel)
  Compress PDF: Yes
  Optimize for Fast Web View: Yes
  
Target File Size: Under 5MB per guide
```

### For Print-Ready (Future Release)

```
Format: PDF/X-1a:2001

Image Quality:
  Resolution: 300 DPI
  Compression: Minimal or none
  Color Mode: CMYK (not RGB)
  
Fonts:
  Embed All: YES
  Outline Fonts: Optional
  
Marks & Bleeds:
  Bleed: 3mm all sides
  Crop Marks: Optional
  Registration Marks: Optional
  
Compatibility: PDF/X-1a:2001 standard
```

---

## Layout Best Practices for Quick Start Guides

### Page Flow

```
Page 1: Title + Hook
  - Large title
  - "Read in 5 minutes, play for hours"
  - Minimal text
  - Start strong

Pages 2-3: Core Concept
  - "The One Rule You Must Understand"
  - Biggest hook or unique mechanic
  - Visual example
  
Pages 4-10: Essential Mechanics
  - One concept per page or spread
  - Generous examples
  - Clear headers
  
Last Page: Quick Reference
  - Tables
  - At-a-glance stats
  - "You're ready to play"
```

### White Space Strategy

**Rules of white space:**
- Minimum 18mm top margin (already set)
- 20pt space before major headers
- 12pt space after major headers
- Never fill a page just to fill it
- Empty space guides the eye and reduces overwhelm

**Where to be generous:**
- Around examples and callout boxes
- Before/after tables
- Chapter transitions
- Around important warnings

### Readability Maximization

```
Line Length: 60-70 characters (naturally achieved with A5 margins)
Paragraph Length: 3-5 sentences max
Lists: Use liberally instead of dense paragraphs
Tables: Clear headers, alternating row colors
Headers: Create clear visual hierarchy (size + weight)
Examples: Box them, tint them, make them stand out
```

### First Page Impact

**Your first page must:**
1. Tell them what this is (game system name)
2. Hook them (unique mechanic or promise)
3. Set expectations ("read in 5 minutes")
4. Look professional (not cluttered)

**Template:**
```
[Logo/Title - Large]

[Subtitle - explains what this is]

[Hook line - italicized, centered]

[Maybe one graphic element]

[Version number - small, bottom right]
```

---

## Design Workflow

### Step-by-Step Process

**1. Set Up Master Pages (30 min)**
```
Create Document → A5, Facing Pages
Set Margins (18/20/20/15mm)
Create Master Page A (Left page template)
Create Master Page B (Right page template)
Add page numbers, headers to masters
```

**2. Define Styles (30 min)**
```
Paragraph Styles:
  - Body Text (PT Serif 10.5pt, 1.4 leading)
  - Header 1 (Bebas Neue 36pt)
  - Header 2 (Bebas Neue 24pt)
  - Header 3 (Bebas Neue 18pt)
  - Example Text (PT Serif 9.5pt, gray box)
  - Stat Block (Fira Code 9.5pt)

Character Styles:
  - Bold Term
  - Italic Emphasis
  - Inline Code

Table Styles:
  - Standard Table
  - Quick Reference Table
```

**3. Import Content (1 hour)**
```
Copy markdown text
Apply appropriate paragraph styles
Don't worry about layout yet
```

**4. Layout & Refine (2-3 hours)**
```
Add tables
Create example boxes
Insert divider lines
Add page breaks for flow
Ensure no orphaned headers
Check widow/orphan lines
```

**5. Visual Polish (1 hour)**
```
Add subtle graphic elements
Check alignment consistency
Verify color usage
Review white space
Test print one page
```

**6. Export & Test (30 min)**
```
Export as PDF (150 DPI, RGB, embedded fonts)
Open in Acrobat/Preview
Check all pages render correctly
Verify file size under 5MB
Test on mobile device
```

---

## Common A5 Layout Mistakes to Avoid

### DON'T:
- ❌ Use two-column layout (too narrow)
- ❌ Go below 9pt font size (too small at A5)
- ❌ Use justified text (creates rivers of white space)
- ❌ Cram content to save pages (ruins readability)
- ❌ Use colored backgrounds on every page (expensive, tiring)
- ❌ Mix more than 2-3 fonts (looks amateur)
- ❌ Forget to embed fonts (PDF will break)
- ❌ Export at 72 DPI (too low even for screen)
- ❌ Use landscape orientation for full book (wrong format)
- ❌ Ignore margins for binding (text disappears in spine)

### DO:
- ✅ Single column with clear hierarchy
- ✅ Generous white space
- ✅ Left-aligned text
- ✅ Test print early and often
- ✅ Use tints/backgrounds sparingly
- ✅ Maintain consistent spacing
- ✅ Embed all fonts
- ✅ Export at 150+ DPI
- ✅ Use portrait for standard book format
- ✅ Respect inner margin for binding

---

## Quick Start Specific Considerations

### Page Count Targets

```
Starter's Guide: 6-10 pages
Player's Quick Start: 10-16 pages
GM Quick Start: 12-18 pages
```

**Why short:**
- Playtesting feedback should be targeted
- Easy to iterate and update
- Low barrier to entry
- Print-friendly for home printing

### Content Density

**Quick Starts should be:**
- 50% white space and visual breathing room
- 30% essential text
- 20% examples, tables, quick references

**Not:**
- 90% dense text
- Walls of rules
- Everything about the system

### Visual Simplicity

**For playtesting PDFs:**
- Simple > Complex
- Clear > Artistic
- Functional > Beautiful

**You can add:**
- More artwork later
- Fancy borders in final version
- Complex layouts after feedback
- Color illustrations in final release

**For now, prioritize:**
- Readability
- Clear hierarchy
- Professional appearance
- Easy updates

---

## Brand Integration Examples

### Example 1: Cosmic/Geometric Website

**Website has:**
- Sacred geometry patterns
- Dark navy (#1a1a2e) and gold (#d4af37)
- Hexagonal logo
- Clean modern sans-serif

**PDF should use:**
- Headers in navy
- Gold accent for important callouts
- Hexagon bullets instead of circles
- Thin hexagonal border frames for stat blocks
- Sacred geometry pattern watermark on chapter pages (10% opacity)

### Example 2: Mystical/Organic Website

**Website has:**
- Forest green (#2d5016) and cream (#f4f1de)
- Flowing script font for title
- Vine/nature motifs
- Warm earthy feeling

**PDF should use:**
- Headers in forest green
- Cream background tint for example boxes
- Simple leaf or vine graphic as divider
- Complementary serif font (not script for body)
- Nature-inspired bullet icon

### Example 3: Modern/Technical Website

**Website has:**
- Black (#000), red (#e63946), white
- Geometric sans-serif
- Sharp angles, precise alignment
- Minimalist aesthetic

**PDF should use:**
- Black headers with red underline accent
- Red for warnings and important notes
- Clean sans-serif headers (Bebas Neue fits)
- Sharp geometric dividing lines
- Grid-based precise alignment

---

## File Management

### Naming Convention

```
Affinity_Starters_Guide_v1.0_Playtest.pdf
Affinity_Players_Quick_Start_v1.0_Playtest.pdf
Affinity_GM_Quick_Start_v1.0_Playtest.pdf
```

### Version Control

**In PDF:**
- Include version number on cover or footer
- Include date (Month Year)
- Include "Playtest" or "Alpha" label

**Track versions:**
```
v0.1 - Initial draft
v0.2 - First layout pass
v0.3 - Feedback integration
v1.0 - Playtest release
v1.1 - Playtest revision 1
v2.0 - Public release
```

---

## Final Checklist Before Export

**Content:**
- [ ] All text proofread
- [ ] All examples verified for accuracy
- [ ] All tables complete and formatted
- [ ] Page numbers correct
- [ ] Table of contents (if applicable) accurate

**Design:**
- [ ] All styles applied consistently
- [ ] No orphaned headers (header at bottom of page)
- [ ] No widows (single line at top of page)
- [ ] Margins consistent across all pages
- [ ] White space balanced
- [ ] Brand colors used correctly
- [ ] All fonts available and embedded

**Technical:**
- [ ] Master pages applied correctly
- [ ] Bleed set if including bleed
- [ ] Links/bookmarks functional
- [ ] File name follows convention
- [ ] Version number included
- [ ] Export settings configured

**Test:**
- [ ] Export PDF
- [ ] Open in PDF reader
- [ ] Check all pages render
- [ ] Verify fonts display correctly
- [ ] File size under 5MB
- [ ] Test on phone/tablet
- [ ] Print test page

---

## Resources & Free Assets

### Free Fonts
- [Google Fonts](https://fonts.google.com) — PT Serif, Crimson Text, EB Garamond
- [FontSquirrel](https://fontsquirrel.com) — High-quality free fonts
- [DaFont](https://dafont.com) — Decorative fonts (check licenses)

### Free Design Elements
- [Unsplash](https://unsplash.com) — Free photos (for covers)
- [Flaticon](https://flaticon.com) — Free icons (attribution required)
- [Noun Project](https://thenounproject.com) — Simple icons
- [Public Domain Review](https://publicdomainreview.org) — Historical art

### Tools
- Affinity Publisher (page layout)
- Affinity Designer (graphics, logos)
- Adobe Acrobat Reader (testing PDFs)
- Smallpdf (compress PDF if needed)

---

## Summary: Your Minimum Viable Design

**If you only do these things, you'll have a professional PDF:**

1. **A5 portrait, facing pages, proper margins (18/20/20/15mm)**
2. **PT Serif 10.5pt body, Bebas Neue headers**
3. **Single column, left-aligned, 1.4 line height**
4. **White background, one accent color from your website**
5. **150 DPI RGB PDF with embedded fonts**
6. **Tables with light gray backgrounds, clear examples in boxes**
7. **Generous white space, clear hierarchy**
8. **Website logo on cover, URL in credits**

**That's it. Everything else is polish.**

---

*Good luck with your Affinity Quick Start Guides. Focus on clarity and playability. You can always make it prettier later.*
