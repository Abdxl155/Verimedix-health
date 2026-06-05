# Verimedix Health — Website

Production-ready marketing website for **Verimedix Health**, built with
**Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and
**Framer Motion**. Configured for **static export** and deployment to
**Netlify**, with **Netlify Forms** for all contact / procurement / distributor
enquiries.

---

## 1. Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export → ./out
```

`npm run build` produces a fully static site in the `out/` directory.

---

## 2. Project structure

```
verimedix/
├── netlify.toml                # Netlify build + headers config
├── next.config.js              # output: "export", unoptimized images
├── tailwind.config.ts          # brand palette (sampled from the logo)
├── tsconfig.json
├── postcss.config.js
├── package.json
├── public/
│   ├── __forms.html            # hidden Netlify Forms registration (do not delete)
│   ├── favicon.ico / favicon-*.png / apple-touch-icon.png
│   ├── brochure/
│   │   └── verimedix-blood-glucose-meter.pdf   # ← add your brochure here
│   └── images/
│       ├── verimedix-logo.png            # transparent logo (navbar/footer)
│       ├── verimedix-logo-white-bg.png   # logo on white (spare)
│       ├── meter.png                     # product shot (white bg)
│       ├── meter-transparent.png         # product shot (transparent, spare)
│       └── og-image.png                  # social share image
└── src/
    ├── app/
    │   ├── layout.tsx          # fonts, SEO metadata, JSON-LD, nav/footer
    │   ├── globals.css         # design tokens + component classes
    │   ├── page.tsx            # Home
    │   ├── about/page.tsx
    │   ├── product/page.tsx
    │   ├── healthcare-solutions/page.tsx
    │   ├── compliance-quality/page.tsx
    │   ├── contact/page.tsx
    │   ├── not-found.tsx
    │   ├── sitemap.ts          # /sitemap.xml
    │   ├── robots.ts           # /robots.txt
    │   └── manifest.ts         # /manifest.webmanifest
    ├── components/             # Navbar, Footer, Hero, ContactForm, etc.
    └── lib/                    # site.ts (config) + product.ts (content)
```

---

## 3. Where the supplied assets live

Assets extracted from your uploads are already placed:

| Asset                | Path                                   | Used in                          |
| -------------------- | -------------------------------------- | -------------------------------- |
| Logo (transparent)   | `public/images/verimedix-logo.png`     | Navbar, footer, OG, favicons     |
| Product meter (white)| `public/images/meter.png`              | Hero, product page, showcases    |
| Favicons             | `public/favicon*.png`, `favicon.ico`   | Browser tab / home-screen icon   |

> **Note:** Only the *product image* was extracted from the packaging. No
> packaging text, compliance marks, manufacturer/importer details, barcodes or
> regulatory references were copied.

To replace any asset, drop a new file at the same path (keep the filenames).

---

## 4. Brand palette (from the logo)

| Token        | Hex        | Use                          |
| ------------ | ---------- | ---------------------------- |
| `brand-600`  | `#013BA0`  | Primary blue (wordmark)      |
| `teal-500`   | `#0AB89F`  | Accent teal (molecule mark)  |
| `mist-50`    | `#f8fafc`  | Light medical section bg     |

Defined in `tailwind.config.ts`. Change once there to re-skin the whole site.

---

## 5. Deploying to Netlify

### Option A — Git (recommended)
1. Push this folder to a GitHub/GitLab repo.
2. In Netlify: **Add new site → Import an existing project**.
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Deploy. Forms are detected from `public/__forms.html` at build time.

### Option B — Drag & drop
1. Run `npm run build` locally.
2. Drag the generated `out/` folder into the Netlify dashboard.

### Forms & notifications
- Submissions appear under **Site → Forms** in Netlify.
- Set up email notifications: **Site configuration → Forms → Form notifications →
  Add notification → Email notification**.
- Four forms are registered: `general-enquiry`, `sales-enquiry`,
  `procurement-enquiry`, `distributor-enquiry`.

---

## 6. Things to update before launch

In `src/lib/site.ts`:
- `url` — set to your live domain (used by canonical URLs, sitemap, JSON-LD, OG).
- `email`, `procurementEmail`, `phone`, `addressLine1/2` — real contact details.

Then add:
- `public/brochure/verimedix-blood-glucose-meter.pdf` — your product brochure.

---

## 7. Image optimisation recommendations

Static export disables Next.js on-the-fly image optimisation, so optimise once
up front:

- Convert `meter.png` and `og-image.png` to **WebP** (or compress PNGs with
  `pngquant` / `squoosh`) — typically 60–80% smaller.
- Keep the logo as PNG (transparency) but run it through `pngquant`.
- Target hero/product images around **1000px** on the long edge; the device is
  displayed well below full size.
- `netlify.toml` already sets long-cache headers for `/images/*` and
  `/_next/static/*`.

---

## 8. Environment variables

**None required.** The site is fully static and Netlify Forms needs no keys.
If you later add an analytics or CRM integration, store keys as Netlify
environment variables (**Site configuration → Environment variables**) and read
them via `process.env.NEXT_PUBLIC_*` for client-side use.

---

## 9. Accessibility & SEO

- Semantic landmarks, skip-link, focus-visible rings, `aria-current` nav state,
  labelled form fields, `prefers-reduced-motion` support.
- Per-page `<title>`/description, Open Graph + Twitter cards, canonical URLs,
  Organization + Product JSON-LD, generated `sitemap.xml` and `robots.txt`.

---

## 10. Compliance note

Compliance copy is intentionally conservative: it references ISO-aligned
manufacturing and CE marking for Europe only. It makes no UK market-authorisation
or endorsement claims. **Have all regulatory wording reviewed by a qualified
person before going live.**
```
