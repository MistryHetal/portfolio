# Hetal Mistry — Developer Portfolio

A responsive personal portfolio built with React and TypeScript. It presents Hetal's skills, work experience, education, selected projects, resume, and contact form.

## Features

- Responsive layout with dark and light themes
- Header navigation with active section links
- Custom cursor and animated page/project transitions, with reduced-motion support
- Six project case-study pages with original, project-themed SVG illustrations
- Resume download from the site
- Contact form with optional EmailJS delivery; falls back to a prefilled email-app message when EmailJS is not configured

> Project illustrations are custom artwork, not screenshots of the deployed products. Replace them with approved project screenshots when available.

## Tech stack

- React 18, TypeScript, and Vite
- React Router
- Framer Motion
- Lucide React
- EmailJS Browser SDK (optional contact-form delivery)

## Requirements

- Node.js 18.18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

## Build and preview

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Configure the contact form (optional)

Without EmailJS settings, submitting the form opens the visitor's default email app with a prefilled message addressed to the email in `src/data/portfolio.ts`.

To send messages through EmailJS:

1. Create an EmailJS account and connect an email service.
2. Create an EmailJS template with the form variables `{{name}}`, `{{email}}`, and `{{message}}`. Set the recipient address in the template; `{{email}}` can be used as the reply-to address.
3. Copy `.env.example` to `.env.local` in the project root.
4. In `.env.local`, set the values from your EmailJS dashboard:

   ```env
   VITE_EMAILJS_SERVICE_ID=service_your_id
   VITE_EMAILJS_TEMPLATE_ID=template_your_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Restart the Vite development server.

The `VITE_` values are included in browser code. Use only the EmailJS **public** key here—never put passwords, private API keys, or AWS credentials in frontend environment variables. `.env.local` is ignored by Git; `.env.example` contains placeholders and is safe to share.

For deployment, add the same three variables in your hosting provider's environment-variable settings and rebuild/redeploy the site.

## Personalize before publishing

- Update profile details, social links, skills, education, experience, and project information in `src/data/portfolio.ts`.
- Replace `public/Hetal-Mistry-Resume.pdf` with the current resume.
- Replace project illustrations under `public/projects/` with approved screenshots if available, and update the corresponding `image` and `imageAlt` values in `src/data/portfolio.ts`.
- Verify that all dates, responsibilities, skills, and project descriptions are accurate.

## Deployment

The site can be deployed to any static host that supports Vite builds:

- Build command: `npm run build`
- Output directory: `dist`

Because the app uses React Router, configure the host to serve `index.html` for application routes (for example, `/projects/...`) so direct links and refreshes work.
