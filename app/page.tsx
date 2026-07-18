const Arrow = () => <span aria-hidden="true">↗</span>;

const workforce = [
  { id: "H-204", type: "Human employee", name: "Lena Ortiz", role: "Senior Platform Engineer", function: "Platform engineering", state: "Expected", risk: "08", image: "/lena-ortiz-engineer.png" },
  { id: "H-089", type: "Human employee", name: "Marcus Bennett", role: "HR Director", function: "People operations", state: "Expected", risk: "11", image: "/marcus-bennett-hr.png" },
  { id: "A-117", type: "AI agent", name: "Code Partner", role: "Coding Agent", function: "Software engineering", state: "Active", risk: "18", icon: "code", artwork: "/workforce-code-partner-generated-v2.png" },
  { id: "A-308", type: "AI agent", name: "Relay", role: "Customer Support Agent", function: "Customer support", state: "Threshold crossed", risk: "86", icon: "support", artwork: "/workforce-resolve-support-generated-v2.png", incident: "New external transcript route" },
];

const novaAgents = [
  ["01", "Threat Scoring", "Scores and ranks emerging risk", "threat", "Active", "/nova-threat-scoring-generated.png"],
  ["02", "Investigation", "Correlates evidence into cases", "investigation", "Ready", "/nova-investigation-generated.png"],
  ["03", "Analyst Assistant", "Guides analysts through the next best action", "assistant", "Available", "/nova-analyst-assistant-generated.png"],
  ["04", "Search", "Finds signals across every data tier", "search", "Listening", "/nova-search-generated.png"],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a href="#top" className="wordmark" aria-label="Exabeam home"><img src="/exabeam-logo-black.svg" alt="Exabeam" width="299" height="51" /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#workforce">Workforce</a>
          <a href="#behavior">Behavior Intelligence</a>
          <a href="#soc">Agentic SOC</a>
          <a href="#platform">Platform</a>
        </nav>
        <a href="#contact" className="header-cta">Get a demo <Arrow /></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><i /><i /></summary>
          <nav>
            <a href="#workforce">Workforce</a>
            <a href="#behavior">Behavior Intelligence</a>
            <a href="#soc">Agentic SOC</a>
            <a href="#platform">Platform</a>
            <a href="#contact">Get a demo</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-visual" role="img" aria-label="Human teams working alongside autonomous agents across security, engineering, and people operations">
          <span className="hero-scene hero-scene-1" aria-hidden="true" />
          <span className="hero-scene hero-scene-2" aria-hidden="true" />
          <span className="hero-scene hero-scene-3" aria-hidden="true" />
          <span className="hero-scene hero-scene-4" aria-hidden="true" />
          <span className="hero-scene hero-scene-5" aria-hidden="true" />
          <span className="hero-motion hero-glow" aria-hidden="true" />
          <span className="hero-motion hero-scan" aria-hidden="true" />
        </div>
        <div className="hero-copy">
          <p className="overline"><i /> Behavior intelligence</p>
          <h1>Securing the<br />agentic<br />enterprise.</h1>
          <p>Protect your people, AI agents, service identities, and machines—without slowing down the work they do together.</p>
          <a href="#workforce" className="pill-button">Explore the new workforce <Arrow /></a>
        </div>
        <div className="hero-signal" aria-label="A rotating story describing how Exabeam secures each agentic enterprise scene">
          <div className="signal-chrome"><span>Live behavior story</span><i /></div>
          <div className="signal-stage" aria-hidden="true">
            <article className="signal-story signal-story-1">
              <div><span>01 / Human + agent teaming</span><b>In command</b></div>
              <strong>Human judgment.<br />Agent speed.</strong>
              <p>People direct the mission while autonomous systems accelerate the work.</p>
            </article>
            <article className="signal-story signal-story-2">
              <div><span>02 / Agent orchestration</span><b>Live</b></div>
              <strong>Every agent.<br />One context.</strong>
              <p>Exabeam connects human and agent activity into one explainable sequence.</p>
            </article>
            <article className="signal-story signal-story-3">
              <div><span>03 / Distributed work</span><b>Protected</b></div>
              <strong>Work moves.<br />Policy follows.</strong>
              <p>Delegated actions stay tied to the employee, intent, and authority behind them.</p>
            </article>
            <article className="signal-story signal-story-4">
              <div><span>04 / Unified identity</span><b>Verified</b></div>
              <strong>Human or not.<br />Trust is earned.</strong>
              <p>People, services, and autonomous agents share one behavioral trust model.</p>
            </article>
            <article className="signal-story signal-story-5">
              <div><span>05 / Continuous access</span><b>Watching</b></div>
              <strong>Risk changes.<br />Trust adapts.</strong>
              <p>Protection follows the worker—and their agent—across every device and location.</p>
            </article>
          </div>
        </div>
        <a href="#manifesto" className="scroll" aria-label="Scroll down"><span>Scroll</span><i /></a>
      </section>

      <section className="manifesto" id="manifesto">
        <p className="section-label">01 / The workforce changed</p>
        <h2>Your workforce<br />no longer ends<br />with people.</h2>
        <div className="manifesto-copy">
          <p>AI agents now act, decide, and transact alongside employees. Service accounts move data. Robots touch the physical world.</p>
          <p>Exabeam gives every identity—human or not—a behavioral baseline, so security teams can tell trusted work from emerging risk.</p>
        </div>
      </section>

      <section className="workforce" id="workforce">
        <div className="workforce-head">
          <p className="section-label">02 / The agentic enterprise</p>
          <h2>One workforce.<br />Every behavior.</h2>
          <p>See the people and autonomous systems operating across your enterprise as one living system—not separate piles of telemetry.</p>
        </div>
        <div className="identity-grid">
          {workforce.map((identity) => (
            <article key={identity.id} className={`identity-card ${identity.image ? "human-card" : "agent-card"}${identity.incident ? " alert-card" : ""}`}>
              <div className="identity-top"><span>{identity.type}</span><span>{identity.id}</span></div>
              {identity.image ? (
                <div className="identity-portrait" style={{ backgroundImage: `url(${identity.image})` }} role="img" aria-label={`Employee portrait of ${identity.name}`} />
              ) : (
                <div className={`agent-symbol generated ${identity.icon}`} role="img" aria-label={`${identity.role} identity artwork`}>
                  <img src={identity.artwork} alt="" />
                </div>
              )}
              <h3>{identity.function}</h3>
              <div className="identity-person"><strong>{identity.name}</strong><span>{identity.role}</span></div>
              {identity.incident && <a className="identity-incident" href="#behavior"><span>Baseline break / 09:31</span><strong>{identity.incident} <b aria-hidden="true">↘</b></strong></a>}
              <div className="identity-status"><span>{identity.state}</span><b>Risk {identity.risk}</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="behavior" id="behavior">
        <div className="behavior-copy">
          <p className="section-label">03 / Behavior intelligence</p>
          <h2>Know normal.<br />See intent.</h2>
          <p>Relay normally reads assigned cases and drafts approved replies. Exabeam learned that baseline—then caught the moment it requested bulk transcript access and opened a new outbound route.</p>
          <a href="#platform" className="under-link">Follow the detection <Arrow /></a>
        </div>
        <div className="behavior-console" aria-label="Behavior risk timeline showing customer support agent Relay crossing its behavioral threshold">
          <div className="console-header">
            <div><span>Customer support agent</span><strong>RELAY / A-308</strong></div>
            <b>Risk score <em>86</em></b>
          </div>
          <div className="baseline">
            <span>Behavior baseline</span><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span>
            <div className="baseline-line">
              <img src="/behavior-anomaly-chart.png" alt="Relay's stable customer support behavior baseline followed by a sharp threshold-crossing anomaly" width="1792" height="1024" />
              <strong className="spike-label">Threshold +74</strong>
            </div>
          </div>
          <ol>
            <li><time>09:14</time><span>Reads assigned customer case history</span><b className="normal">Expected</b></li>
            <li><time>09:22</time><span>Requests bulk transcript export scope</span><b className="shift">Deviation</b></li>
            <li><time>09:31</time><span>Sends transcript bundle to new external destination</span><b className="risk">High risk</b></li>
          </ol>
          <div className="console-foot"><span>Sequence correlated by Exabeam</span><span>Threshold crossed / 09:31</span></div>
        </div>
      </section>

      <section className="soc" id="soc">
        <div className="soc-image" role="img" aria-label="Human SOC analysts and a humanoid AI coworker investigating an incident together" />
        <div className="soc-overlay">
          <p className="section-label light">04 / Human + agent teaming</p>
          <h2>A better SOC is<br />a mixed team.</h2>
          <p>AI agents bring machine speed. Analysts bring judgment. Exabeam turns both into one coordinated security operation.</p>
          <a href="#nova" className="pill-button inverse">Meet your agentic SOC <Arrow /></a>
        </div>
        <div className="soc-caption"><span>CASE 24-719</span><span>HUMAN AUTHORITY / ACTIVE</span></div>
      </section>

      <section className="nova" id="nova">
        <div className="nova-intro">
          <p className="section-label">05 / Exabeam Nova</p>
          <h2>Agents that work<br />for your analysts.</h2>
          <p>Exabeam Nova deploys specialized security agents across the investigation lifecycle. They gather, correlate, and prepare. Your team decides.</p>
        </div>
        <div className="agent-flow" aria-label="Exabeam Nova agent workflow">
          {novaAgents.map(([number, name, description, icon, status, artwork], index) => (
            <article key={name}>
              <div className="agent-step-head"><span>{number}</span><i className={index < 3 ? "complete" : "active"} /></div>
              <div className={`nova-agent-icon ${icon}`} aria-hidden="true"><img src={artwork} alt="" /></div>
              <h3>{name}</h3>
              <p>{description}</p>
              <small>{status}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="principles" id="platform">
        <div className="principles-title">
          <p className="section-label light">06 / Built for trust</p>
          <h2>Autonomy<br />with authority.</h2>
        </div>
        <div className="principle-list">
          <article><span>01</span><div><h3>Observe every entity</h3><p>Unified visibility across users, agents, services, and machines.</p></div></article>
          <article><span>02</span><div><h3>Understand behavior</h3><p>Dynamic baselines reveal intent hidden inside isolated events.</p></div></article>
          <article><span>03</span><div><h3>Keep humans in command</h3><p>Automate the work while preserving accountable decisions.</p></div></article>
        </div>
      </section>

      <section className="outcomes">
        <p className="section-label">07 / Operational impact</p>
        <div className="outcome-grid">
          <article><strong>5×</strong><span>more SOC<br />productivity</span></article>
          <article><strong>100:1</strong><span>agents per<br />human worker</span></article>
          <article><strong>1</strong><span>behavioral view<br />of every identity</span></article>
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="section-label">The next workforce is already here</p>
        <h2>Secure how<br />work gets done.</h2>
        <a href="mailto:agentic@exabeam.example" className="pill-button dark">Request a demo <Arrow /></a>
        <div className="closing-orbit" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <footer>
        <a href="#top" className="wordmark" aria-label="Exabeam home"><img src="/exabeam-logo-black.svg" alt="Exabeam" width="299" height="51" /></a>
        <p>Behavior intelligence for the agentic enterprise.</p>
        <nav><a href="#workforce">Workforce</a><a href="#behavior">Behavior</a><a href="#soc">SOC</a><a href="#contact">Contact</a></nav>
        <small>CONCEPT EXPERIENCE / 2026</small>
      </footer>
    </main>
  );
}
