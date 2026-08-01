# KinStrategi & Leiré Studio - Development Log
*Last Updated: July 27, 2026*

## What We Achieved Today
We performed a massive debugging and architectural cleanup of the site's CSS and Tailwind implementation to fix text visibility issues (text turning pitch black or becoming invisible against dark backgrounds).

### 1. Fixed the "Color-Mix" Bug
**The Problem:** The site was using a modern CSS function `color-mix(in srgb, var(--text-color) 70%, transparent)` inside `text-gray-300` classes to make text semi-transparent. On many browsers (especially iOS/Safari), `transparent` evaluates to `rgba(0,0,0,0)` (pitch black). This dragged the text color down to a dark grey/black, making it completely invisible against the Charcoal Noir backgrounds.
**The Solution:** We completely removed the custom `text-gray-*` classes and replaced them across the entire codebase (`Home.jsx`, `Leire.jsx`, `Manifesto.jsx`, `OurWork.jsx`, `KinFeed.jsx`, `SignalStation.jsx`, `SignStation.jsx`) with Tailwind's native `opacity-70` utility. This allows the text to natively inherit its proper color and simply reduces its opacity, which works flawlessly on every browser.

### 2. Fixed the "Black Logo & Dark Text" Bug
**The Problem:** During a previous attempt to build the "Luminous Descent" scroll effect (where the background turns white and text turns black), an aggressive global override was added to `index.css`: `body .text-white { color: var(--text-color) !important; }`. This meant that as the user scrolled, *everything* with `text-white` was forced to turn black. This accidentally caused the "Leiré Studio" logo in the Navbar and specific headings/paragraphs to turn black and sink into the dark backgrounds.
**The Solution:** We completely deleted the `Luminous Descent Dynamic Overrides` block from `index.css`. Now, Tailwind's `text-white` behaves exactly as intended (it stays bright white). 

## Current State of the Codebase
- **Dynamic Scroll Transitions:** The "Luminous Descent" effect still works perfectly. Text without specific color classes will smoothly transition from White to Black on scroll (via `var(--text-color)`), and backgrounds will transition from Charcoal to White (via `var(--color-base)`).
- **Fixed Elements:** Elements that explicitly need to stay white (like the Navbar logo or specific headings) now use `text-white` and will permanently stay white regardless of scroll position.
- **Opacity:** For semi-transparent text, we now exclusively use Tailwind's native `opacity-*` classes (e.g., `opacity-70`, `opacity-60`) instead of custom gray text classes.

## Next Steps / Where to Pick Up
When you return to continue building:
1. **Share this file:** You can point the AI or yourself to this file (`kinstrategi-dev-log.md`) to instantly catch up on the architectural decisions we made regarding CSS and Tailwind.
2. **Continue Building:** You can safely build new components knowing that the CSS variable inheritance and Tailwind utility classes are now stable and bug-free. 
3. **Use Opacity:** Remember to use `opacity-70` instead of `text-gray-300` when you want semi-transparent text!

## UI Remodeling & Global Avatar Integration (August 2026)
- **Home Page Structure:** Split "Why We Started" and "About the Founder" into distinct full-width and side-by-side components. Recreated the testimonial strip and newsletter block to match the original design layout.
- **Cyber-Luxury Aesthetic:** Enhanced blocks across the Home page with glassmorphism, subtle glowing grid lines, and gradient effects to maintain the premium, tech-forward aesthetic.
- **"Read More" Component:** Implemented an `ExpandableText` component across "About the Founder", "Field Notes", and Testimonials to keep the UI clean while supporting deep, long-form content.
- **Global Avatars & Native Background Removal:** Placed the Ademaris avatars across the site. Because the source images had solid dark backgrounds, we utilized the CSS `mix-blend-screen` technique on the `<img />` tags themselves. This smartly knocked out the black backgrounds so the avatars stand alone seamlessly against our dark layouts and glowing auroras without needing destructive file edits.
  - `Ademaris - Greeting` on Home.
  - `Ademaris - Excited` on Our Work.
  - `Ademaris - Guiding` on The Playbook.
  - `Ademaris - Smile` on Manifesto.
  - `Ademaris - Curious` on Sign Station (Contact).

## Founder Card Refactoring & Polish (August 2026)
- **Balanced "Read More" Interaction:** Implemented a clean, proportional collapsible state. In default mode, a rich excerpt of Adeshewa's story fills the right column naturally alongside the photo without leaving dead space.
- **Smooth `AnimatePresence` Motion:** Clicking `"Read More ↓"` smoothly unfolds the remainder of her story ("Why KinStrategi Exists", her dogs Neo-Wolf & Jojo, and closing note), with `"Read Less ↑"` returning it smoothly.
- **Clean Bottom Bar:** Features balanced action buttons on both sides (`Read More` on the left, `Connect with Adeshewa →` on the right) anchored directly to the bottom border.
