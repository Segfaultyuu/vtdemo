# VT Markets App — Design Guidelines

Source: [Beta] VT App Design System (Figma)

---

## Typography

**Font Family:** Roboto (Google Fonts)  
**Weights used:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

| Role | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Heading / Page Title | 20px | 600 | 28px | Navigation bar title |
| Section Heading | 18px | 600 | 26px | Card headings, section labels |
| Body Large | 16px | 600 | 24px | Primary button label |
| Body | 14px | 400–600 | 20px | List items, form labels, card body |
| Caption | 12px | 400–500 | 18px | Helper text, hints, sub-labels |
| Micro | 11px | 400–500 | 16px | Tags, badge labels |
| Navigation / Tab | 13–14px | 400 (inactive) / 600 (active) | — | Tab selectors, bottom nav labels |

---

## Color Tokens

All tokens live in the **Colour Token** collection of the [Beta] VT App Design System library.

### Brand — Primary

| Token | Hex (observed) | Usage |
|-------|---------------|-------|
| `Brand/Primary/Blue` | `#0A36C7` | CTAs, active tabs, links, primary buttons |
| `Brand/Primary/Blue 12%` | `rgba(10,54,199,0.12)` | Button tint backgrounds, pill backgrounds |
| `Brand/Primary/Dark Blue` | `#0033AD` | Pressed / hover state for primary blue |
| `Brand/Primary/Dark Blue 12%` | `rgba(0,51,173,0.12)` | Dark blue tint |
| `Brand/Primary/Cyan` | `#00A3E0` | Accent / secondary highlight |
| `Brand/Primary/Cyan 12%` | `rgba(0,163,224,0.12)` | Cyan tint background |
| `Brand/Primary/Blue-Cyan Switch` | — | Adaptive primary that switches blue↔cyan per mode |
| `Brand/Primary/Blue-Cyan Switch 12%` | — | 12% tint of above |

### Brand — Secondary

| Token | Hex (observed) | Usage |
|-------|---------------|-------|
| `Brand/Secondary/Blue` | `#2775CA` | Secondary actions, chart highlights |
| `Brand/Secondary/Blue 12%` | — | Blue secondary tint |
| `Brand/Secondary/Cyan` | `#41BCE7` | Telegram button, social icon fill |
| `Brand/Secondary/Cyan 12%` | — | Cyan secondary tint |
| `Brand/Secondary/Green` | `#00B565` / `#31CA8D` | Profit, positive PnL, up indicators, verified badge |
| `Brand/Secondary/Green 6%` | `rgba(0,181,101,0.06)` | Subtle green tint (e.g. positive row bg) |
| `Brand/Secondary/Red` | `#E44B4B` | Loss, negative PnL, down indicators, rejected badge |
| `Brand/Secondary/Red 12%` | `rgba(228,75,75,0.12)` | Red tint background |
| `Brand/Secondary/Yellow` | `#D9BF91` | Warning states, loyalty Gold highlights |

### Text & Icons

| Token | Hex (observed) | Usage |
|-------|---------------|-------|
| `Text/Text Icon/Primary` | `#282D34` | Main body text, headings, dark labels |
| `Text/Text Icon/Secondary` | `#7A8699` | Sub-labels, placeholder context, muted text |
| `Text/Text Icon/Tertiary` | `#B6B6B6` | Disabled labels, chart axis text |
| `Text/Text Icon/Quaternary` | `#D4D6DB` | Very subtle text |
| `Text/Text Icon/Text - reverse` | `#FFFFFF` | Text on dark / colored backgrounds |
| `Text/Text Icon/Text - disable` | `#C2C7D0` | Input placeholders, disabled field text |
| `Text/Text Icon/Text - opacity button` | `rgba(40,45,52,0.40)` | Disabled button text |

### Dividers & Borders

| Token | Hex (observed) | Usage |
|-------|---------------|-------|
| `Text/Divider Line/Div line 1 - divider` | `#F4F5F6` | Section dividers, rule lines |
| `Text/Divider Line/Div line 2 - border` | `#E8E9EA` | Input borders, card borders |

### Backgrounds

| Token | Hex (observed) | Usage |
|-------|---------------|-------|
| `Background/Background/bg level 1` | `#FFFFFF` | Page / screen background |
| `Background/Background/bg level 2` | `#F7F7F8` | App shell, subtle page sections |
| `Background/Background/bg level 3` | `#F4F5F6` | Grouped list backgrounds |
| `Background/Background/bg level 4` | `#FCFCFD` | Elevated surface, popovers |
| `Background/Background/bg level 5` | `#1A1A1E` | Dark mode surface (when applicable) |
| `Background/Background/bg Blue` | `#627EEA` | Gradient/hero panel accent |
| `Background/Card/bg card primary` | `#FFFFFF` | Primary card surface |
| `Background/Card/bg card secondary` | `#F4F5F6` | Secondary card / list item surface |
| `Background/Mask/Mask` | `rgba(0,0,0,0.50)` | Modal overlay scrim |

### Status Labels (Container)

| Token | Background | Text | Usage |
|-------|-----------|------|-------|
| `Container/Label/Verified` | green tint | `#00B565` | KYC verified badge |
| `Container/Label/Rejected` | red tint | `#E44B4B` | KYC rejected badge |
| `Container/Label/Unverified` | grey tint | `#7A8699` | KYC unverified badge |
| `Container/Label/Under Review` | yellow tint | `#D9BF91` | KYC under review badge |

### Loyalty Tier Labels

| Token | Background | Text | Usage |
|-------|-----------|------|-------|
| `Container/Label Loyalty/Default` | — | — | Default tier |
| `Container/Label Loyalty/Bronze bg/Text` | bronze tint | bronze | Bronze tier badge |
| `Container/Label Loyalty/Silver bg/Text` | `#CFCFCE` tint | silver | Silver tier badge |
| `Container/Label Loyalty/Gold bg/Text` | `#D9BF91` tint | gold | Gold tier badge |

---

## Spacing

The design uses an **8px base grid**. Common multiples:

| Value | Common Usage |
|-------|-------------|
| 4px | Icon gaps, tight inline spacing |
| 8px | Small component padding, gap between related items |
| 12px | Input internal padding (vertical), helper text gap |
| 16px | Standard section padding, field gap, card padding |
| 20px | Horizontal screen edge margin |
| 24px | Section vertical gap, top margin for tab selectors |
| 32px | Large section separation |
| 40px | Bottom of fixed footer clearance |

---

## Border Radius

| Value | Usage |
|-------|-------|
| 4px | Input fields, small tags |
| 8px | Buttons (primary), cards, dropdowns |
| 12px | Bottom sheets, modals |
| 20px | Pills (loyalty/status badges), social icon buttons |
| 100px | Circular avatars, fully-rounded pills |

---

## Elevation / Shadow

| Level | Usage |
|-------|-------|
| None | Flat cards on bg level 2/3 |
| `0 2px 8px rgba(0,0,0,0.08)` | Floating cards, dropdowns |
| `0 4px 20px rgba(0,0,0,0.12)` | Modals, bottom sheets |

---

## Components

### Button — Primary
- Height: **48px**, border-radius: **8px**, full-width on mobile
- Background: `Brand/Primary/Blue` (`#0A36C7`)
- Text: 16px / 600 / `Text/Text Icon/Text - reverse` (`#FFFFFF`)
- Disabled: `opacity: 0.4`, `cursor: not-allowed`
- Enabled: `opacity: 1.0`

### Button — Ghost / Text
- No fill; uses `Brand/Primary/Blue` text color
- Used for secondary actions (e.g. "Sign Up", "Forgot Password?")

### Input Field — Rounded
- Height: **48px**, border-radius: **4px**
- Border: 1px solid `Text/Divider Line/Div line 2 - border` (`#E8E9EA`)
- Padding: 12px 16px
- Placeholder color: `Text/Text Icon/Text - disable` (`#C2C7D0`)
- Active text color: `Text/Text Icon/Primary` (`#282D34`)
- Font: 14px / 500

### Tab Selector (Horizontal)
- Bottom border: 1px solid `Text/Divider Line/Div line 1 - divider`
- Inactive tab: 14px / 400 / `Text/Text Icon/Secondary` (`#7A8699`)
- Active tab: 14px / 600 / `Brand/Primary/Blue` (`#0A36C7`), 2px solid blue bottom indicator
- Padding bottom: 12px; gap between tabs: 20px
- Margin top: 24px; margin bottom: 16px

### Bottom Navigation Bar
- Fixed to bottom, height: **56–64px**, background: `#FFFFFF`
- 5 tabs: Home, Chart, Trending, Stars, Stack
- Active icon: `Brand/Primary/Blue`, inactive: `Text/Text Icon/Secondary`
- Active item uses pill background (`Brand/Primary/Blue 12%`) behind icon

### Search Bar
- Height: **40px**, border-radius: **20px** (pill)
- Background: `Background/Card/bg card secondary`
- Icon + placeholder color: `Text/Text Icon/Secondary`

### Card
- Background: `Background/Card/bg card primary`
- Border-radius: **8px**
- Padding: **16px**
- Dividers inside card: `Text/Divider Line/Div line 1 - divider`

### Status & Navigation Bar (H5)
- Status bar height: **48px**, nav bar height: **44px**
- Back chevron + notification icons: `Text/Text Icon/Primary`

### Bottom Sheet
- Border-radius: **12px 12px 0 0** (top corners only)
- Background: `Background/Card/bg card primary`
- Overlaid on Mask: `rgba(0,0,0,0.50)`
- Handle bar: 4px × 32px, `Text/Text Icon/Tertiary`, centered top

### Modal
- Max-width: 353px, border-radius: **12px**
- Contains modal-specific button variations

---

## Iconography

- Style: **Outlined stroke icons**, 1.3–1.8px stroke, `stroke-linecap: round`, `stroke-linejoin: round`
- Default size: **20×20px** (nav/action icons), **16×16px** (inline/field icons), **24×24px** (feature icons)
- Color: inherits from context — primary text on light bg, reverse on colored bg

---

## Page Layout

- **Canvas width:** 393px (iPhone 14 Pro viewport)
- **Min height:** 852px
- **Horizontal gutters:** 20px each side → 353px content width
- **Scrollable body** + **fixed bottom bar** (tab nav + home indicator)
- **Home indicator:** 139×5px pill, `rgba(30,30,30,0.30)`, 8px from bottom

---

## Semantic Color Usage

| Context | Color Token | Hex |
|---------|------------|-----|
| Profit / Positive PnL / Buy | `Brand/Secondary/Green` | `#00B565` |
| Loss / Negative PnL / Sell | `Brand/Secondary/Red` | `#E44B4B` |
| Warning / Pending | `Brand/Secondary/Yellow` | `#D9BF91` |
| Interactive / CTA | `Brand/Primary/Blue` | `#0A36C7` |
| Neutral info | `Text/Text Icon/Secondary` | `#7A8699` |
| Bitcoin | — | `#F7931A` |
| Ethereum / Crypto accent | — | `#627EEA` |

---

## Design System Reference

- **Figma file:** [Beta] VT App Design System  
  `https://www.figma.com/design/KMUv6q3vnxHrF5GgjYyq5F/-Beta--VT-App-Design-System`
- **Token collection:** Colour Token (variable set key: `99213efb...`)
- **Library key:** `lk-7aeecbeddafcf942ecd90b3d475795b730d264ac8fab8b2338dda4bbc74ad51708e8dc617e38c4dbf15b38c294febdf0da59093e19e89425f575bbd828cc849c`
