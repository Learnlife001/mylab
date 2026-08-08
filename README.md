# mylab

`mylab` is the project hub for GregLabs: one evolving, single-page home for the things I build for the web.

It is designed as a living collection rather than a traditional portfolio. Each project has its own full-screen section, a concise description, the technologies behind it, links to the live project and source code, and a muted looping background video that gives the work its own atmosphere.

## Featured projects

- **Cowrie Honeypot SOC Platform** — a security-monitoring dashboard for observing honeypot activity and hostile traffic.
- **SecureTask Cloud API** — a task-management API built with production-minded authentication, validation, migrations, and interactive documentation.
- **Ryomen Sukuna Archive** — an immersive, story-led anime archive experience.

## Built with

- Next.js and React
- TypeScript
- Responsive CSS
- Project-specific MP4 background loops

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Adding a project

Add a new project object to the `projects` list in `app/page.tsx`, place its background video in `public/videos/`, and give it its own visual treatment in the page styles. The new section will become part of the scrolling archive.

## Planned home

The site is intended to be deployed on Vercel and connected to `greglabs.nl`.
