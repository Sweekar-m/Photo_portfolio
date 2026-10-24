# Sweekar M. — Travel Photography Portfolio

A responsive React + Vite portfolio for travel, landscape, road and adventure photography.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Before publishing

**The photographs in this starter are sample Unsplash images, not Sweekar's own work.** Replace them with your photographs before presenting the site as a professional portfolio.

1. Add your exported photographs under `public/photos/`.
2. In `src/main.jsx`, update the `photographs` array to use local paths, for example `/photos/western-ghats-road.jpg`.
3. Replace the large hero image and the About image with your own work.
4. Change `YOUR_EMAIL@example.com` to your real professional email address.
5. Update the Instagram link to your profile.
6. Edit the place names and captions so they match where each image was taken.
7. Run `npm run build` to verify the production build.

## Features

- Responsive, mobile-first layout
- Gallery filters for landscapes, roads and details
- Photo lightbox with next/previous controls and keyboard navigation
- Dark editorial design with serif display typography
- Accessible button labels, reduced-motion support and lazy-loaded gallery images

## Deploy

Import this repository into Vercel or Netlify. Both can detect Vite automatically. Build command: `npm run build`; output directory: `dist`.

The site is intentionally frontend-only, with no backend or secret keys needed.
