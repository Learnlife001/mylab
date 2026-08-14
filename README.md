# GregLabs

[GregLabs](https://greglabs.nl) is a living project hub for the applications, systems, APIs, experiments, and digital experiences I build.

It is deliberately a single scrolling home rather than a traditional multi-page portfolio. Every project gets its own full-screen chapter with a concise story, a visual treatment, the stack behind it, and direct links to the live product and source code.

## Featured work

- **Cowrie Honeypot SOC Platform** â€” a security-operations dashboard for observing honeypot activity and hostile SSH traffic. [Live dashboard](https://35-208-243-179.sslip.io/) Â· [Source](https://github.com/Learnlife001/Honeypot)
- **SecureTask Cloud API** â€” a task-management API built with production-minded authentication, validation, migrations, and interactive documentation. [Live docs](https://securetask-api-stys.onrender.com/docs) Â· [Source](https://github.com/Learnlife001/SecureTaskAPI)
- **Ryomen Sukuna Archive** â€” an immersive, story-led anime archive experience. [Live site](https://ryomen-sukuna-archive.vercel.app) Â· [Source](https://github.com/Learnlife001/ryomen-sukuna-archive)
- **CyberRecon Platform** â€” a defensive reconnaissance workspace for inspecting domains, ports, DNS, WHOIS, subdomains, and technology findings. [Live site](https://cgreglab.space/) Â· [Source](https://github.com/Learnlife001/cyberrecon)
- **AI Builder Capstone** â€” a final AI-builder portfolio covering full-stack products, automation, AI content, cybersecurity systems, and the POD 7 community. [Live site](https://cj.greglabs.nl/) Â· [Source](https://github.com/Learnlife001/ai-bootcamp)

## Experience

The hub combines Next.js, TypeScript, responsive CSS, custom project visuals, and muted looping video backgrounds where they add atmosphere. The opening section also includes direct social and email links for contacting me at [info@greglabs.nl](mailto:info@greglabs.nl).

## Separate experiment

`/intelligence` is a standalone, full-viewport AI landing-page experiment. It is intentionally kept separate from the main GregLabs homepage so the project hub stays focused on the work.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The separate experiment is available at [http://localhost:3000/intelligence](http://localhost:3000/intelligence).

## Add a new project

1. Add a project object to the `projects` list in `app/page.tsx`.
2. Add its live and source links, short description, stack, and visual style.
3. Put any background video in `public/videos/` and reference it from that project.
4. Add the project-specific visual and section styles.

The new chapter will automatically become part of the scrolling GregLabs archive.

## Deployment

The repository is connected to Vercel. Pushes to `main` deploy the latest version, which is served at [greglabs.nl](https://greglabs.nl).

