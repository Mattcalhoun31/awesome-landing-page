# SYMMETRI BRAND GUIDE

## BRAND OVERVIEW

**SYMMETRI EMBODIES MAVERICK ENERGY.** BOLD, UNAPOLOGETIC, AND STRIKING LIKE A WHIRLWIND. IT'S NOT JUST ABOUT PLAYING THE GAME - IT'S ABOUT CHANGING IT. IT ARRIVES, DEMANDS ATTENTION, AND OWNS ITS SPACE. WHILE ITS AESTHETIC IS BOLD, ORGANIZED CHAOS, MAKE NO MISTAKE - THIS IS PRECISION IN MOTION. IT'S NOT JUST ABOUT BEING LOUD AND IN YOUR FACE - IT'S ABOUT HAVING THE CONTROL TO DO SO WITH IMPACT. SYMMETRI IS BUILT FOR THOSE WHO DON'T WAIT FOR THINGS TO HAPPEN - IT'S FOR THOSE WHO MAKE THEM HAPPEN. DISRUPTION MEETS DISCIPLINE, AND THIS BRAND IS HERE TO CHALLENGE CONVENTION WITH CONFIDENCE AND CHANGE THE WAY THE GAME IS PLAYED.

---

## FONTS

The Symmetri brand uses a carefully curated font system to maintain visual hierarchy and brand consistency:

| Font Family | Weights | Usage Examples |
|------------|---------|----------------|
| **GABRIEL SANS** | BOLD / NORMAL | Looks as Follows - symmetri / **symmetri** - SYMMETRI |
| **NEUE MONTREAL** | BOLD | Looks as Follows - symmetri / **SYMMETRI** |
| **NOURD** | BOLD / NORMAL / THIN | Looks as Follows - symmetri / **symmetri** - SYMMETRI |
| **GORDITA** | BOLD | Looks as Follows - symmetri / **symmetri** - **SYMMETRI** |
| **RALEWAY** | THIN | Looks as Follows - symmetri / symmetri - SYMMETRI |

---

## COLOR PALETTE

### Main & Content Colors

These are the primary brand colors used throughout Symmetri's visual identity:

| Color Name | Hex Code | RGB | Usage |
|-----------|----------|-----|-------|
| **Red (Primary)** | `#E1331A` | rgb(225, 51, 26) | Primary brand color, high-impact elements |
| **Magenta** | `#E4002A` | rgb(228, 0, 42) | Accent and emphasis |
| **Orange** | `#F37920` | rgb(243, 121, 32) | Energetic highlights |
| **Yellow (Warm)** | `#FFB200` | rgb(255, 178, 0) | Bright accents |
| **Yellow (Primary)** | `#FFB400` | rgb(255, 180, 0) | Primary yellow brand color |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|-----------|----------|-----|-------|
| **Black** | `#000000` | rgb(0, 0, 0) | Primary text, backgrounds |
| **Dark Gray** | `#6B6A6C` | rgb(107, 106, 108) | Secondary text |
| **Medium Gray** | `#979797` | rgb(151, 151, 151) | UI elements |
| **Light Gray** | `#D8D9D7` | rgb(216, 217, 215) | Backgrounds, borders |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds |

### Typography Colors

Primary colors used for text and typographic elements:

- **Yellow (`#FFB400`)** - Primary typography highlight
- **Magenta (`#E4002A`)** - Emphasis and call-to-action
- **Gray (`#5D5E60`)** - Body text
- **White (`#FFFFFF`)** - Text on dark backgrounds
- **Black (`#000000`)** - Primary text

---

## LOGOS

### Main Logo

The Symmetri wordmark features:
- Custom "Y" design with distinctive angular styling
- Available in two variants:
  - **Light background version**: Black text with colored Y accent
  - **Dark background version**: White text with colored Y accent

**Logo specifications:**
- The "Y" features gradient colors from yellow (`#FFB400`) to red (`#E4002A`)
- Minimum clear space: Equal to the height of the letter "s"
- Do not modify, rotate, or distort the logo
- Always maintain proper contrast with background

### Logo Mark

The Symmetri logo mark features a stylized bird/eagle symbol representing:
- Speed and momentum (aerodynamic design)
- Power and precision (sharp angles)
- Freedom and disruption (wings spread)

**Mark specifications:**
- Left wing: Yellow (`#FFB400`) with gradient to orange
- Center body: Red (`#E4002A`) gradient
- Right wing: Gray (`#5D5E60`) with feather details
- Available on light and dark backgrounds

**Color variations:**
1. Full color (primary usage)
2. Monochrome black
3. Monochrome white
4. Gradient version for digital applications

---

## BRAND ASSETS DIRECTORY

```
assets/brand/
├── logos/
│   ├── symmetri-logo-light.svg
│   ├── symmetri-logo-dark.svg
│   ├── symmetri-mark-full-color.svg
│   ├── symmetri-mark-mono-black.svg
│   └── symmetri-mark-mono-white.svg
├── colors/
│   └── color-swatches.ase
├── fonts/
│   └── font-license-info.txt
└── images/
    ├── brand-overview.png
    ├── logo-mark.png
    └── brand-header.png
```

---

## USAGE GUIDELINES

### Do's
- ✓ Use the full color logo on white or very light backgrounds
- ✓ Use the white logo on dark or colored backgrounds
- ✓ Maintain proper color contrast ratios (WCAG AA minimum)
- ✓ Use brand colors to create visual hierarchy
- ✓ Pair bold fonts with thin weights for contrast
- ✓ Use the logo mark as an icon or favicon

### Don'ts
- ✗ Don't change the logo colors
- ✗ Don't rotate or distort the logo
- ✗ Don't use low-contrast color combinations
- ✗ Don't use non-brand fonts
- ✗ Don't place the logo on busy backgrounds
- ✗ Don't use gradients unless specified in brand assets

---

## ACCESSIBILITY

When implementing the Symmetri brand, ensure:
- Text maintains a contrast ratio of at least 4.5:1 against backgrounds
- Interactive elements have sufficient color contrast (3:1 minimum)
- Don't rely solely on color to convey information
- Use semantic HTML with proper heading hierarchy
- Ensure logo SVGs include proper alt text

---

## DIGITAL IMPLEMENTATION

### CSS Color Variables

```css
:root {
  /* Primary Colors */
  --symmetri-red: #E1331A;
  --symmetri-magenta: #E4002A;
  --symmetri-orange: #F37920;
  --symmetri-yellow-warm: #FFB200;
  --symmetri-yellow: #FFB400;

  /* Neutral Colors */
  --symmetri-black: #000000;
  --symmetri-dark-gray: #6B6A6C;
  --symmetri-medium-gray: #979797;
  --symmetri-light-gray: #D8D9D7;
  --symmetri-white: #FFFFFF;

  /* Typography Colors */
  --symmetri-text-primary: #000000;
  --symmetri-text-secondary: #5D5E60;
  --symmetri-text-inverse: #FFFFFF;
}
```

### Font Loading

```css
/* Gabriel Sans */
@import url('path-to-font/GabrieSans-Bold.woff2');
@import url('path-to-font/GabrielSans-Regular.woff2');

/* Neue Montreal */
@import url('path-to-font/NeueMontreal-Bold.woff2');

/* Add other fonts as needed */
```

---

## BRAND VOICE

Symmetri's brand voice is:
- **Bold**: Confident and assertive
- **Direct**: Clear and to-the-point
- **Disruptive**: Challenges the status quo
- **Energetic**: Dynamic and action-oriented
- **Precise**: Controlled and intentional

---

## CONTACT & QUESTIONS

For questions about brand usage or to request additional assets, please contact the brand team.

---

*Last updated: November 2025*
