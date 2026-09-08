# Mohamed Minhaj — AI/ML Engineer Portfolio

A responsive, dark, premium portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Where to edit

Most portfolio content is intentionally centralized in:

`components/Portfolio.tsx`

Look for these arrays/sections:

- `projects` — add/edit projects
- `skills` — add/edit technical skills
- `certifications` — add/edit certifications
- Hero text — edit the first section
- About — edit the About section
- Experience — replace the placeholder with formal experience
- Education — edit education details
- Contact — edit email/social links

## Project links

Each project currently uses `link: "#"` because project URLs were not supplied.
Replace `"#"` with the real GitHub/demo URL when available.

## Images

The current hero uses a CSS-generated AI visual, so there are no required image assets.
You can add project images later under `public/images/` and use Next.js Image.

## Main dependencies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
