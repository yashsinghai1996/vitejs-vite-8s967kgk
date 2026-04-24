// @ts-nocheck
import React from "react";

const links = {
  email: "mailto:yashsinghai211996@gmail.com",
  linkedin: "https://linkedin.com/in/yash-singhai",
  project:
    "https://github.com/yashsinghai1996/lightspeed-project-transactions/tree/main/lightspeed_project_transactions",
};

const styles = `
  :root {
    --bg: #0f172a;
    --panel: #111827;
    --panel-2: #0b1220;
    --border: #253044;
    --text: #e5e7eb;
    --muted: #9ca3af;
    --soft: #cbd5e1;
    --accent: #38bdf8;
  }

  * { box-sizing: border-box; }
  body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }

  .page { min-height: 100vh; background: radial-gradient(circle at top left, rgba(56,189,248,.12), transparent 34%), var(--bg); }
  .container { max-width: 980px; margin: 0 auto; padding: 28px 20px 56px; }

  .nav { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding-bottom: 22px; border-bottom: 1px solid var(--border); }
  .name { font-size: 28px; line-height: 1.1; font-weight: 750; letter-spacing: -0.03em; margin: 0; }
  .subline { margin: 8px 0 0; color: var(--muted); font-size: 14px; }
  .links { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
  .btn { display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--border); border-radius: 999px; padding: 9px 14px; font-size: 14px; color: var(--soft); background: rgba(15,23,42,.72); transition: .18s ease; }
  .btn:hover { border-color: var(--accent); color: white; transform: translateY(-1px); }
  .btn.primary { background: #e5e7eb; color: #0f172a; border-color: #e5e7eb; font-weight: 650; }

  .hero { display: grid; grid-template-columns: 1.35fr .65fr; gap: 32px; align-items: start; padding: 58px 0 34px; }
  .badge { display: inline-flex; border: 1px solid var(--border); border-radius: 999px; padding: 7px 12px; color: var(--soft); font-size: 13px; margin-bottom: 18px; background: rgba(15,23,42,.7); }
  .headline { font-size: 42px; line-height: 1.07; letter-spacing: -0.045em; margin: 0; max-width: 760px; }
  .intro { color: var(--soft); font-size: 16px; line-height: 1.75; margin: 22px 0 0; max-width: 720px; }
  .hero-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; }

  .card { background: rgba(17,24,39,.78); border: 1px solid var(--border); border-radius: 22px; box-shadow: 0 20px 60px rgba(0,0,0,.22); }
  .card-pad { padding: 22px; }
  .impact-title { font-size: 15px; font-weight: 700; margin: 0 0 14px; color: var(--text); }
  .metric { border: 1px solid var(--border); background: rgba(11,18,32,.7); border-radius: 16px; padding: 14px; margin-top: 10px; }
  .metric-value { font-size: 24px; font-weight: 760; letter-spacing: -0.02em; }
  .metric-label { color: var(--muted); font-size: 13px; line-height: 1.5; margin-top: 2px; }

  section { padding: 34px 0; }
  .eyebrow { color: var(--accent); text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 700; margin: 0 0 9px; }
  .section-title { font-size: 28px; line-height: 1.15; letter-spacing: -0.03em; margin: 0 0 22px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .mini-card { background: rgba(17,24,39,.72); border: 1px solid var(--border); border-radius: 18px; padding: 18px; }
  .mini-title { font-size: 16px; margin: 0 0 9px; font-weight: 700; }
  .mini-text { color: var(--muted); line-height: 1.62; font-size: 14px; margin: 0; }

  .experience-card { padding: 22px; margin-top: 14px; }
  .exp-head { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
  .company { font-size: 20px; margin: 0; font-weight: 750; }
  .role { color: var(--muted); margin: 4px 0 0; font-size: 14px; }
  .date { color: var(--muted); font-size: 13px; white-space: nowrap; }
  .bullets { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 0; padding: 0; list-style: none; }
  .bullets li { background: rgba(11,18,32,.65); border: 1px solid var(--border); border-radius: 14px; padding: 13px; color: var(--soft); font-size: 13.5px; line-height: 1.55; }

  .project-top { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; }
  .project-title { margin: 0; font-size: 20px; letter-spacing: -0.02em; }
  .project-desc { color: var(--soft); line-height: 1.7; max-width: 720px; margin: 10px 0 0; font-size: 15px; }
  .chips { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 18px; }
  .chip { border: 1px solid var(--border); border-radius: 999px; color: var(--soft); padding: 8px 12px; font-size: 13px; background: rgba(17,24,39,.65); }
  .footer-card { text-align: center; padding: 28px; }
  .footer-card h2 { margin: 0; font-size: 24px; letter-spacing: -0.02em; }
  .footer-card p { color: var(--muted); max-width: 650px; margin: 12px auto 20px; line-height: 1.65; }

  @media (max-width: 820px) {
    .nav, .hero, .project-top, .exp-head { flex-direction: column; display: flex; }
    .links { justify-content: flex-start; }
    .hero { padding-top: 38px; }
    .headline { font-size: 32px; }
    .grid-3, .grid-2, .bullets { grid-template-columns: 1fr; }
    .date { white-space: normal; }
  }
`;

export default function Portfolio() {
  return (
    <div className="page">
      <style>{styles}</style>
      <div className="container">
        <header className="nav">
          <div>
            <h1 className="name">Yash Singhai</h1>
            <p className="subline">Toronto, ON • Analytics Engineer / Senior Data Analyst (Product & Growth)</p>
          </div>
          <div className="links">
            <a className="btn" href={links.email}>Email</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn primary" href={links.project} target="_blank" rel="noreferrer">dbt Project</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div>
              <div className="badge">Fintech + Banking • SQL • Data Modeling • BI • dbt</div>
              <h2 className="headline">I build analytics layers and product insights that turn messy data into confident decisions.</h2>
              <p className="intro">
                I’m an analytics and BI professional with 5+ years of experience building data models, transformation layers,
                dashboards, and self-serve analytics foundations across fintech and banking. My work has improved reporting accuracy,
                standardized KPI logic, and helped drive measurable revenue impact.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">View Project</a>
                <a className="btn" href="#experience">Experience</a>
              </div>
            </div>

            <aside className="card card-pad">
              <h3 className="impact-title">Impact Snapshot</h3>
              <Metric value="$503K" label="incremental revenue impact from lifecycle analytics" />
              <Metric value="40%" label="reporting accuracy improvement through validation checks" />
              <Metric value="50%" label="manual reporting effort reduction through dashboards" />
              <Metric value="100M+" label="records supported across financial reporting workflows" />
            </aside>
          </section>

          <section id="product">
            <p className="eyebrow">Product Analytics</p>
            <h2 className="section-title">How I approach product & growth problems</h2>
            <div className="grid-3">
              <InfoCard title="Funnel & Lifecycle Analysis" text="Analyze user journeys from signup to activation and retention to identify drop-offs, improve conversion, and drive growth." />
              <InfoCard title="Metric Design & KPI Frameworks" text="Define lifecycle, revenue, and product KPIs so teams can track performance consistently and make aligned decisions." />
              <InfoCard title="Experimentation & Insights" text="Evaluate product changes using cohort analysis, behavioral trends, and impact measurement to guide roadmap decisions." />
            </div>
          </section>

          <section id="skills">
            <p className="eyebrow">Core Strengths</p>
            <h2 className="section-title">What I bring</h2>
            <div className="grid-3">
              <InfoCard title="Data Modeling" text="Dimensional modeling, star schemas, semantic layer concepts, reusable datasets, and KPI standardization." />
              <InfoCard title="Analytics Engineering" text="SQL transformation layers, dbt-style workflows, data quality tests, Git-based development, and Databricks projects." />
              <InfoCard title="BI & Decision Enablement" text="Dashboards, executive-ready reporting, self-serve analytics, performance monitoring, and stakeholder storytelling." />
            </div>
          </section>

          <section id="experience">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Where I’ve made impact</h2>
            <ExperienceCard
              company="TD Bank"
              title="Data Analyst — Business Intelligence & Analytics Engineering"
              date="Nov 2023 – Present"
              bullets={[
                "Improved reporting accuracy by 40% by implementing validation checks across financial datasets.",
                "Increased KPI consistency by 30% by standardizing metric definitions across 12+ reporting workflows.",
                "Supported scalable data transformations on 100M+ records by validating production pipeline logic.",
                "Built dashboards and reporting assets that reduced manual reporting effort by 50%.",
              ]}
            />
            <ExperienceCard
              company="Karmalife"
              title="Data Scientist — Business Intelligence & Analytics"
              date="Jun 2020 – Aug 2022"
              bullets={[
                "Drove $503K in incremental revenue by analyzing lifecycle funnels and conversion opportunities.",
                "Improved activation by 10–15% by identifying drop-off points from signup to first transaction.",
                "Reduced data inconsistencies by 35% by building a unified analytics layer across transaction, product, and billing data.",
                "Created reusable datasets and dashboards that reduced reporting cycle time by 50%.",
              ]}
            />
          </section>

          <section id="projects">
            <p className="eyebrow">Featured Project</p>
            <h2 className="section-title">Improving Transaction Lifecycle Visibility for Revenue Analytics</h2>
            <div className="card card-pad">
              <div className="project-top">
                <div>
                  <h3 className="project-title">dbt + Databricks Personal Project</h3>
                  <p className="project-desc">
                    Built to solve lack of visibility into transaction lifecycle and revenue attribution by creating scalable,
                    analytics-ready data models for product, revenue, and BI use cases.
                  </p>
                </div>
                <a className="btn primary" href={links.project} target="_blank" rel="noreferrer">View GitHub</a>
              </div>

              <div className="grid-3" style={{ marginTop: 22 }}>
                <InfoCard title="Problem" text="Fragmented transaction data and inconsistent lifecycle metrics made it difficult to track revenue, activation, and user behavior reliably." />
                <InfoCard title="Approach" text="Designed dbt transformation layers, star-schema models, validation checks, and reusable marts to standardize business logic." />
                <InfoCard title="Outcome" text="Enabled consistent KPI definitions, reliable BI reporting, self-serve analytics, and product-style lifecycle analysis." />
              </div>

              <div className="grid-2" style={{ marginTop: 14 }}>
                <ProjectPoint text="Built staging → intermediate → marts transformation layers for lifecycle and transaction datasets." />
                <ProjectPoint text="Designed star-schema data models for scalable querying, dashboarding, and BI reporting." />
                <ProjectPoint text="Handled incomplete and inconsistent transaction data through validation and transformation logic." />
                <ProjectPoint text="Modeled business metrics and semantic layer concepts for consistent lifecycle and revenue reporting." />
                <ProjectPoint text="Implemented data quality tests for reliability, relationships, and logic checks." />
                <ProjectPoint text="Developed reusable datasets enabling self-serve analytics and reducing ad-hoc queries." />
              </div>
            </div>
          </section>

          <section>
            <p className="eyebrow">Toolbox</p>
            <h2 className="section-title">Technologies</h2>
            <div className="chips">
              {technologies.map((item) => <span className="chip" key={item}>{item}</span>)}
            </div>
          </section>

          <section>
            <div className="card footer-card">
              <h2>Let’s build trusted data foundations.</h2>
              <p>
                I’m interested in Analytics Engineering, Business Intelligence Engineering, and Senior Data Analyst roles where I can build reliable data assets and product insights that help teams make better decisions.
              </p>
              <div className="links" style={{ justifyContent: "center" }}>
                <a className="btn primary" href={links.email}>Contact Me</a>
                <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function Metric({ value, label }: any) {
  return (
    <div className="metric">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

function InfoCard({ title, text }: any) {
  return (
    <div className="mini-card">
      <h3 className="mini-title">{title}</h3>
      <p className="mini-text">{text}</p>
    </div>
  );
}

function ExperienceCard({ company, title, date, bullets }: any) {
  return (
    <div className="card experience-card">
      <div className="exp-head">
        <div>
          <h3 className="company">{company}</h3>
          <p className="role">{title}</p>
        </div>
        <p className="date">{date}</p>
      </div>
      <ul className="bullets">
        {bullets.map((bullet: string) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </div>
  );
}

function ProjectPoint({ text }: any) {
  return <div className="mini-card"><p className="mini-text">{text}</p></div>;
}
