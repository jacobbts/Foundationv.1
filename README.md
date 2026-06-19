# Foundation CPAs & Advisors, LLP Website Prototype

This is a polished static website prototype for Foundation CPAs & Advisors, LLP. It is built with plain HTML, CSS, and JavaScript so it can be deployed quickly or handed to a developer for conversion into WordPress, Webflow, Squarespace, or another CMS.

## Files

- `index.html` - main website page and copy.
- `styles.css` - complete responsive styling and brand system.
- `script.js` - mobile navigation, sticky header behavior, and reveal animations.
- `assets/logos/` - Foundation logo assets supplied by the user.
- `assets/images/` - placeholder public-domain/CC0 images and optimized web versions.
- `favicon.png` - browser icon generated from the supplied logo mark.

## Replace before launch

Search the code for `TODO` and `REPLACE-WITH` and update the following:

1. Website domain in SEO tags and JSON-LD schema.
2. Phone number.
3. Email address.
4. Physical office address, if desired.
5. Client portal URL.
6. Hosted server login URL.
7. The Employer Advantage URL.
8. Aura Real Estate URL.
9. Contact form action. The prototype uses `mailto:`. For production, connect this to a secure form provider, CRM, or client portal workflow.
10. Any required privacy policy, terms of use, accessibility statement, and tax/legal disclaimers.

## Suggested compliance review

Before publishing, have the final copy reviewed for CPA board advertising rules, independence/assurance standards, IRS representation claims, tax resolution claims, trademark references, and state licensing disclosures. The current copy uses the background information provided, but the final site should verify exact license names, dates, firm registrations, and permissible wording.

## Placeholder photo sources

The images are placeholders that can be swapped later. They were downloaded from PublicDomainPictures.net pages stating CC0 Public Domain/Public Domain license terms.

- Construction: `construction-site.jpg` / `construction-hero.webp` / `construction-card.webp`
  - Source page: https://www.publicdomainpictures.net/en/view-image.php?image=90273&picture=construction-site
  - Direct image used: https://www.publicdomainpictures.net/pictures/100000/velka/construction-site-1404219320O0C.jpg
- Real estate: `real-estate-building.jpg` / `real-estate-card.webp` / `real-estate-hero.webp`
  - Source page: https://www.publicdomainpictures.net/en/view-image.php?image=769238&picture=modern-curved-building
  - Direct image used: https://www.publicdomainpictures.net/pictures/770000/velka/modern-curved-building.jpg
- Agriculture: `agriculture-tractor.jpg` / `agriculture-card.webp`
  - Source page: https://www.publicdomainpictures.net/en/view-image.php?image=706917&picture=photo-agricultural-vehicle-tractor
  - Direct image used: https://www.publicdomainpictures.net/pictures/710000/velka/photo-agricultural-vehicle-tractor.jpg
- Technology / hosting: `server-hosting.jpg` / `server-card.webp` / `server-hero.webp`
  - Source page: https://www.publicdomainpictures.net/en/view-image.php?image=61105&picture=server
  - Direct image used: https://www.publicdomainpictures.net/pictures/70000/velka/servidor.jpg

Even with public-domain/CC0 images, confirm commercial suitability before launch and replace with owned photography when possible.

## Brand palette

- Deep navy: `#0e2136`
- Secondary navy: `#102941`
- Gold: `#c49a33`
- Light gold: `#d8b457`
- Cream: `#f7f4ee`
- Ink: `#132137`
- Slate text: `#6d7785`

## Deployment options

### Static hosting
Upload the entire folder to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a standard web host. The entry point is `index.html`.

### CMS conversion
A developer can convert sections into reusable CMS blocks:

- Hero
- Industries
- Services
- Tax Resolution
- Client Platform
- Leadership
- Affiliates
- Contact

## Photo replacement instructions

To replace an image, keep the same filename and dimensions, or update the image paths in `index.html`. For best results, use landscape photos around 1600px wide or larger. Recreate `.webp` assets with an image editor or export optimized JPGs if WebP is not preferred.
