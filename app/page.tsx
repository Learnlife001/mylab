const projects = [
  {
    number: "01",
    title: "Cowrie Honeypot\nSOC Platform",
    eyebrow: "Security monitoring",
    description:
      "A security operations dashboard for observing honeypot activity, tracking hostile traffic, and turning raw events into a readable monitoring view.",
    stack: ["Python", "Cowrie", "Docker", "SQLite"],
    live: "https://35-208-243-179.sslip.io/",
    github: "https://github.com/Learnlife001/Honeypot",
    style: "honeypot",
    video: "/videos/honeypot.mp4",
  },
  {
    number: "02",
    title: "SecureTask\nCloud API",
    eyebrow: "Backend infrastructure",
    description:
      "A production-minded task-management API with authentication, validation, database migrations, and interactive API documentation.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "Render"],
    live: "https://securetask-api-stys.onrender.com/docs",
    github: "https://github.com/Learnlife001/SecureTaskAPI",
    style: "api",
    video: "/videos/cloud-api.mp4",
  },
  {
    number: "03",
    title: "Ryomen Sukuna\nArchive",
    eyebrow: "Interactive web experience",
    description:
      "A cinematic character archive that turns an anime-inspired world into an immersive, story-led web experience.",
    stack: ["Next.js", "TypeScript", "Vercel", "UI Design"],
    live: "https://ryomen-sukuna-archive.vercel.app",
    github: "https://github.com/Learnlife001/ryomen-sukuna-archive",
    style: "sukuna",
    video: "/videos/sukuna.mp4",
  },
  {
    number: "04",
    title: "CyberRecon\nPlatform",
    eyebrow: "Security intelligence",
    description:
      "A defensive reconnaissance workspace for mapping domains, reviewing ports, DNS, WHOIS, subdomains, and technology findings from one focused dashboard.",
    stack: ["Next.js", "FastAPI", "Supabase", "Nmap"],
    live: "https://cgreglab.space/",
    github: "https://github.com/Learnlife001/cyberrecon",
    style: "cyberrecon",
    video: "/videos/cyberrecon.mp4",
  },
  {
    number: "05",
    title: "AI Builder\nCapstone",
    eyebrow: "AI Accelerator Â· 2026",
    description:
      "A complete AI-builder portfolio bringing together full-stack products, workflow automation, AI content, cybersecurity systems, and the POD 7 community in one focused final project.",
    stack: ["AI Products", "Automation", "Full Stack", "AI Content", "Cybersecurity"],
    live: "https://cj.greglabs.nl/",
    github: "https://github.com/Learnlife001/ai-bootcamp",
    style: "capstone",
    video: "/videos/ai-capstone-final.mp4",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className={diagonal ? "arrow diagonal" : "arrow"}>â†’</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand">GREG<span>LABS</span></a>
      </nav>

      <nav className="social-dock" aria-label="Social profiles">
        <a className="social-link" href="https://www.facebook.com/CJLEARNLIFE" target="_blank" rel="noreferrer" aria-label="Visit Facebook"><img src="https://cdn.simpleicons.org/facebook/f3f0ea" alt="" /></a>
        <a className="social-link" href="https://x.com/cjlearnlife" target="_blank" rel="noreferrer" aria-label="Visit X"><img src="https://cdn.simpleicons.org/x/f3f0ea" alt="" /></a>
        <a className="social-link" href="https://www.tiktok.com/@buildsbygreg?_r=1&_t=ZG-999tLSmatTU" target="_blank" rel="noreferrer" aria-label="Visit TikTok"><img src="https://cdn.simpleicons.org/tiktok/f3f0ea" alt="" /></a>
        <a className="social-link" href="https://github.com/Learnlife001" target="_blank" rel="noreferrer" aria-label="Visit GitHub"><img src="https://cdn.simpleicons.org/github/f3f0ea" alt="" /></a>
        <a className="social-link email-link" href="mailto:info@greglabs.nl" aria-label="Email GregLabs"><img src="https://cdn.simpleicons.org/gmail/f3f0ea" alt="" /></a>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow reveal">Independent builder in Germany</p>
        <div className="hero-title reveal">
          <h1>I build things<br />for the <em>web.</em></h1>
          <div className="orb" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section id="work" className="work-intro">
        <p className="eyebrow">A growing collection</p>
        <h2>Selected<br /><em>work.</em></h2>
        <p>Each project starts with a question, then becomes something useful, visual, or quietly ambitious.</p>
      </section>

      <div className="projects">
        {projects.map((project) => (
          <section className={`project project-${project.style}`} key={project.title}>
            {project.video && <div className="project-video" aria-hidden="true">
              <video autoPlay loop muted playsInline preload="metadata">
                <source src={project.video} type="video/mp4" />
              </video>
            </div>}
            <div className="project-topline">
              <span>{project.number}</span>
              <span>{project.eyebrow}</span>
            </div>
            <div className="project-grid">
              <div className="project-copy">
                <h2>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
                <p>{project.description}</p>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-actions">
                  <a href={project.live} target="_blank" rel="noreferrer">View live <Arrow diagonal /></a>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">View source <Arrow diagonal /></a>}
                </div>
              </div>
              <div className="visual" aria-label={`${project.title.replace("\n", " ")} project preview`}>
                {project.style === "honeypot" && <HoneypotVisual />}
                {project.style === "api" && <ApiVisual />}
                {project.style === "sukuna" && <SukunaVisual />}
                {project.style === "cyberrecon" && <CyberReconVisual />}
                {project.style === "capstone" && <CapstoneVisual />}
              </div>
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}

function HoneypotVisual() {
  return <div className="console-frame"><div className="window-bar"><i /><i /><i /><b>LIVE MONITOR</b></div><div className="console-body"><small>HONEYPOT / INBOUND EVENTS</small><div className="chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="console-row"><b>SSH BRUTE FORCE</b><em>ACTIVE</em></div><div className="console-row"><b>45.89.192.14</b><span>ATTEMPT 0081</span></div><div className="console-row"><b>185.220.101.4</b><span>ATTEMPT 0080</span></div></div></div>;
}

function ApiVisual() {
  return <div className="api-frame"><div className="api-heading"><span>SecureTask API</span><b>v1.0.0</b></div><div className="endpoint"><strong>POST</strong><span>/api/v1/tasks</span></div><div className="endpoint"><strong>GET</strong><span>/api/v1/tasks</span></div><div className="endpoint"><strong>PATCH</strong><span>/api/v1/tasks/&#123;id&#125;</span></div><div className="api-status"><i /> API status <b>Operational</b></div></div>;
}

function SukunaVisual() {
  return <div className="sukuna-frame"><div className="seal">å®¿<br /><small>RYOMEN</small></div><div className="slash slash-one" /><div className="slash slash-two" /><p>THE KING<br />OF CURSES</p><span>å‘ªè¡“å»»æˆ¦</span></div>;
}

function CyberReconVisual() {
  return <div className="recon-frame"><div className="recon-bar"><span>CYBERRECON</span><b>LIVE SCAN</b></div><div className="recon-target">target: <strong>cgreglab.space</strong></div><div className="recon-grid"><div><small>DNS</small><b>12 records</b></div><div><small>PORTS</small><b>3 exposed</b></div><div><small>WHOIS</small><b>Resolved</b></div><div><small>SUBDOMAINS</small><b>08 found</b></div></div><div className="recon-line"><span>Recon status</span><b>COMPLETE</b></div></div>;
}

function CapstoneVisual() {
  return <div className="capstone-frame"><div className="capstone-heading"><span>CHIGOZIE G. OKUMA</span><b>AI BUILDER</b></div><div className="capstone-grid"><div><small>01</small><b>BUILD</b><span>Web &amp; apps</span></div><div><small>02</small><b>AUTOMATE</b><span>Smart workflows</span></div><div><small>03</small><b>CREATE</b><span>AI content</span></div><div><small>04</small><b>SECURE</b><span>Threat systems</span></div></div><div className="capstone-footer"><span>AI ACCELERATOR Â· FINAL PROJECT</span><b>2026</b></div></div>;
}

