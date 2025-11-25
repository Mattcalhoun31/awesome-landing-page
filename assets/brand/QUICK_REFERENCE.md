# Symmetri Brand Quick Reference

Quick cheatsheet for developers implementing the Symmetri brand.

## Colors

### Primary Colors (Hex)
```css
#E1331A  /* Red (Primary) */
#E4002A  /* Magenta */
#F37920  /* Orange */
#FFB200  /* Yellow (Warm) */
#FFB400  /* Yellow (Primary) */
```

### Neutrals
```css
#000000  /* Black */
#6B6A6C  /* Dark Gray */
#979797  /* Medium Gray */
#D8D9D7  /* Light Gray */
#FFFFFF  /* White */
```

### CSS Variables
```css
var(--symmetri-red)
var(--symmetri-magenta)
var(--symmetri-orange)
var(--symmetri-yellow)
var(--symmetri-yellow-warm)
```

## Typography

| Font | Weights | Use For |
|------|---------|---------|
| Gabriel Sans | BOLD, NORMAL | Primary headings |
| Neue Montreal | BOLD | Secondary headings |
| Nourd | BOLD, NORMAL, THIN | Body text |
| Gordita | BOLD | Call-to-actions |
| Raleway | THIN | Captions, subtle text |

## Quick CSS

### Include Brand Styles
```html
<link rel="stylesheet" href="assets/brand/colors/symmetri-colors.css">
```

### Utility Classes
```html
<!-- Backgrounds -->
<div class="bg-symmetri-red"></div>
<div class="bg-symmetri-yellow"></div>

<!-- Text -->
<p class="text-symmetri-red"></p>
<p class="text-symmetri-yellow"></p>

<!-- Gradients -->
<div class="bg-gradient-symmetri-primary"></div>
```

### Buttons
```html
<button class="btn-symmetri-primary">Click Me</button>
<button class="btn-symmetri-secondary">Gradient</button>
<button class="btn-symmetri-outline">Outline</button>
```

### Cards
```html
<div class="card-symmetri">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

## Gradients

```css
/* Primary Gradient */
background: linear-gradient(135deg, #FFB400 0%, #F37920 50%, #E4002A 100%);

/* Warm Gradient */
background: linear-gradient(135deg, #FFB400 0%, #FFB200 50%, #F37920 100%);

/* Bold Gradient */
background: linear-gradient(135deg, #E1331A 0%, #E4002A 100%);
```

## Spacing

Use consistent spacing based on 8px grid:
- 8px, 16px, 24px, 32px, 40px, 48px, 64px

## Border Radius

```css
border-radius: 4px;  /* Standard */
border-radius: 8px;  /* Cards, large elements */
```

## Shadows

```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);   /* Small */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);  /* Medium */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Large */
box-shadow: 0 4px 12px rgba(228, 0, 42, 0.25); /* Colored */
```

## Logo Usage

### Light Background
- Use black logo with colored Y accent
- Minimum size: 24px height

### Dark Background
- Use white logo with colored Y accent
- Maintain clear space around logo

### Logo Mark
- Full color for primary usage
- Monochrome for simplified applications
- Icon/favicon: 32px, 64px, 128px

## Accessibility

### Contrast Ratios (WCAG AA)
- Regular text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Safe Combinations
✅ White text on Red (#E1331A)
✅ Black text on Yellow (#FFB400)
✅ White text on Black (#000000)
❌ Yellow text on White
❌ Light Gray on White

## Brand Voice

**Bold** • **Direct** • **Disruptive** • **Energetic** • **Precise**

"It's not about playing the game - it's about changing it."

## File Structure

```
assets/brand/
├── README.md
├── QUICK_REFERENCE.md (this file)
├── brand-reference.html
├── colors/
│   └── symmetri-colors.css
├── logos/
├── fonts/
└── images/
```

## Resources

- **Full Guide**: `/BRAND_GUIDE.md`
- **Interactive Demo**: `assets/brand/brand-reference.html`
- **CSS File**: `assets/brand/colors/symmetri-colors.css`

---

**Need help?** See the full brand guide or contact the brand team.
