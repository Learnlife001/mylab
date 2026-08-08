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
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className={diagonal ? "arrow diagonal" : "arrow"}>→</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand">GREG<span>LABS</span></a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#social">Profiles <Arrow /></a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow reveal">Independent builder · Germany</p>
        <div className="hero-title reveal">
          <h1>I build things<br />for the <em>web.</em></h1>
          <div className="orb" aria-hidden="true"><span /></div>
        </div>
        <div className="hero-bottom reveal">
          <div className="hero-intro">
            <p>I explore ideas through secure systems, useful APIs, and memorable digital experiences.</p>
            <div className="social-links" id="social" aria-label="Social profiles">
              <a className="social-link" href="https://www.facebook.com/CJLEARNLIFE" target="_blank" rel="noreferrer" aria-label="Visit Facebook"><img src="https://cdn.simpleicons.org/facebook/11110f" alt="" /></a>
              <a className="social-link" href="https://x.com/cjlearnlife" target="_blank" rel="noreferrer" aria-label="Visit X"><img src="https://cdn.simpleicons.org/x/11110f" alt="" /></a>
              <a className="social-link" href="https://www.tiktok.com/@allgreggames" target="_blank" rel="noreferrer" aria-label="Visit TikTok"><img src="https://cdn.simpleicons.org/tiktok/11110f" alt="" /></a>
              <a className="social-link" href="https://github.com/Learnlife001" target="_blank" rel="noreferrer" aria-label="Visit GitHub"><img src="https://cdn.simpleicons.org/github/11110f" alt="" /></a>
              <a className="social-link email-link" href="mailto:info@greglabs.nl" aria-label="Email GregLabs"><span aria-hidden="true">✉</span></a>
            </div>
          </div>
          <a className="text-link" href="#work">Explore the work <Arrow /></a>
        </div>
        <div className="scroll-cue" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="work" className="work-intro">
        <p className="eyebrow">A growing collection</p>
        <h2>Selected<br /><em>work.</em></h2>
        <p>Each project starts with a question, then becomes something useful, visual, or quietly ambitious.</p>
      </section>

      <div className="projects">
        {projects.map((project) => (
          <section className={`project project-${project.style}`} key={project.title}>
            <div className="project-video" aria-hidden="true">
              <video autoPlay loop muted playsInline preload="metadata">
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
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
                  <a href={project.github} target="_blank" rel="noreferrer">View source <Arrow diagonal /></a>
                </div>
              </div>
              <div className="visual" aria-label={`${project.title.replace("\n", " ")} project preview`}>
                {project.style === "honeypot" && <HoneypotVisual />}
                {project.style === "api" && <ApiVisual />}
                {project.style === "sukuna" && <SukunaVisual />}
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
  return <div className="sukuna-frame"><div className="seal">宿<br /><small>RYOMEN</small></div><div className="slash slash-one" /><div className="slash slash-two" /><p>THE KING<br />OF CURSES</p><span>呪術廻戦</span></div>;
}
