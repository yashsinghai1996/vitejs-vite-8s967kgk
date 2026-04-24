// @ts-nocheck
import React from "react";

const links = {
  email: "mailto:yashsinghai211996@gmail.com",
  linkedin: "https://linkedin.com/in/yash-singhai",
  project:
    "https://github.com/yashsinghai1996/lightspeed-project-transactions/tree/main/lightspeed_project_transactions",
};

const technologyGroups = [
  {
    title: "Analytics Engineering & Modeling",
    items: ["SQL", "dbt", "Dimensional Modeling", "Star Schema", "Semantic Layer", "KPI Frameworks"],
  },
  {
    title: "Data Platforms & Pipelines",
    items: ["BigQuery", "Databricks", "AWS Athena", "Data Pipelines", "Large-scale Processing"],
  },
  {
    title: "BI & Visualization",
    items: ["Tableau", "Looker", "Looker Studio", "Power BI", "Dashboard Design"],
  },
  {
    title: "Data Quality & Governance",
    items: ["Validation Checks", "Anomaly Detection", "Reconciliation", "Data Governance"],
  },
  {
    title: "Product & Business Analytics",
    items: ["Funnel Analysis", "Lifecycle Analytics", "Cohort Analysis", "Revenue Tracking", "Retention"],
  },
  {
    title: "Programming & Workflow",
    items: ["Python", "Git", "SQL Optimization", "Analytical Problem Solving"],
  },
];

const styles = `
  :root {
    --bg: #f8fafc;
    --surface: #ffffff;
    --surface-2: #f1f5f9;
    --text: #0f172a;
    --muted: #475569;
    --soft: #64748b;
    --border: #e2e8f0;
    --accent: #2563eb;
    --accent-soft: #dbeafe;
    --shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--bg);
    color: var(--text);
  }
  a { color: inherit; text-decoration: none; }

  .page { min-height: 100vh; background: var(--bg); }
  .container {
    width: min(100% - 32px, 1040px);
    margin: 0 auto;
    padding: 16px 0 32px;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 12px 0;
    margin-bottom: 18px;
    background: rgba(248, 250, 252, 0.9);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  }
  .name {
    color: var(--text);
    font-size: 34px;
    line-height: 1.05;
    font-weight: 850;
    letter-spacing: -0.045em;
    margin: 0;
  }
  .subline { margin: 7px 0 0; color: var(--muted); font-size: 14px; }
  .links { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 13.5px;
    font-weight: 650;
    color: var(--text);
    background: var(--surface);
    transition: 0.15s ease;
  }
  .btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
  .btn.primary { background: var(--accent); color: white; border-color: var(--accent); }
  .btn.primary:hover { color: white; opacity: 0.92; }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 28px;
    align-items: center;
    padding: 32px 0 24px;
  }
  .hero-inner { max-width: 760px; }
  .badge {
    display: inline-flex;
    border: 1px solid var(--accent-soft);
    border-radius: 999px;
    padding: 7px 12px;
    color: var(--accent);
    font-size: 12.5px;
    font-weight: 750;
    margin-bottom: 16px;
    background: var(--accent-soft);
  }
  .headline {
    color: var(--text);
    font-size: clamp(30px, 3.6vw, 44px);
    line-height: 1.05;
    letter-spacing: -0.045em;
    margin: 0;
  }
  .intro {
    color: var(--muted);
    font-size: 16.5px;
    line-height: 1.72;
    margin: 20px 0 0;
    max-width: 740px;
  }
  .hero-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; }

  .capability-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    padding: 18px 0 8px;
  }
  .capability-strip span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface);
    color: var(--muted);
    font-size: 13.5px;
    font-weight: 700;
  }

  .metrics-panel {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .metric {
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    background: var(--surface);
    border-radius: 16px;
    padding: 16px;
    box-shadow: var(--shadow);
  }
  .metric-value {
    font-size: 30px;
    font-weight: 850;
    letter-spacing: -0.04em;
    color: var(--text);
  }
  .metric-label {
    color: var(--muted);
    font-size: 13.5px;
    line-height: 1.45;
    margin-top: 5px;
  }

  section { padding: 24px 0; }
  .eyebrow {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11.5px;
    font-weight: 800;
    margin: 0 0 8px;
  }
  .section-title {
    color: var(--text);
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -0.035em;
    margin: 0 0 20px;
  }
  .section-head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 420px;
    align-items: end;
    gap: 28px;
    margin-bottom: 22px;
  }
  .section-note {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.55;
    margin: 0;
  }

  .grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: stretch; }
  .grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; align-items: stretch; }

  .story-flow {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 16px;
    align-items: stretch;
  }
  .story-step {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 20px;
    min-height: 170px;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  }
  .story-step:hover {
    transform: translateY(-2px);
    border-color: #cbd5e1;
    box-shadow: var(--shadow);
  }
  .story-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 12px;
    font-weight: 850;
    margin-bottom: 12px;
  }

  .project-flow {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;
    margin-top: 18px;
    align-items: stretch;
  }
  .project-flow-step {
    position: relative;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
    min-height: 150px;
  }
  .project-flow-step:not(:last-child)::after {
    content: "→";
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--accent);
    font-weight: 850;
    z-index: 2;
  }
  .project-flow-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: var(--accent);
    color: white;
    font-size: 11px;
    font-weight: 850;
    margin-bottom: 10px;
  }

  .mini-card,
  .toolbox-card,
  .experience-card,
  .project-card { padding: 22px; margin-top: 12px; }
  .mini-card:hover,
  .toolbox-card:hover,
  .experience-card:hover,
  .project-card:hover {
    transform: translateY(-2px);
    border-color: #cbd5e1;
    box-shadow: var(--shadow);
  }
  .mini-card { padding: 18px; }
  .mini-title { font-size: 16px; margin: 0 0 9px; font-weight: 800; letter-spacing: -0.02em; color: var(--text); }
  .mini-text { color: var(--muted); line-height: 1.65; font-size: 14px; margin: 0; }

  .experience-list {
    position: relative;
    display: grid;
    gap: 22px;
    margin-top: 18px;
    padding-left: 18px;
  }
  .experience-list::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: var(--border);
  }
  .experience-card {
    position: relative;
    padding: 20px;
  }
  .experience-card::before {
    content: "";
    position: absolute;
    left: -14px;
    top: 24px;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: var(--accent);
    border: 3px solid var(--bg);
  }
  .exp-head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 16px;
    margin-bottom: 16px;
  }
  .company { font-size: 21px; margin: 0; font-weight: 850; letter-spacing: -0.03em; text-align: left; color: var(--text); }
  .role { color: var(--muted); margin: 5px 0 0; font-size: 14px; text-align: left; }
  .date { color: var(--soft); font-size: 13px; white-space: nowrap; margin: 3px 0 0; text-align: right; }
  .bullets { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 0; padding: 0; list-style: none; }
  .bullets li { background: var(--surface-2); border: 1px solid var(--border); border-radius: 14px; padding: 13px; color: var(--muted); font-size: 13.5px; line-height: 1.55; }

  .project-card { padding: 22px; margin-top: 8px; }
  .project-top { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; align-items: start; }
  .project-title { margin: 0; font-size: 22px; letter-spacing: -0.025em; font-weight: 850; color: var(--text); }
  .project-desc { color: var(--muted); line-height: 1.7; max-width: 760px; margin: 10px 0 0; font-size: 15px; }
  .project-impact-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 24px;
  }
  .project-point { background: var(--surface-2); border: 1px solid var(--border); border-radius: 16px; padding: 14px; }

  .toolbox-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 18px; align-items: stretch; }
  .toolbox-card { padding: 18px; }
  .toolbox-title { font-size: 15px; font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; color: var(--text); }
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { border: 1px solid var(--border); border-radius: 999px; color: var(--muted); padding: 7px 10px; font-size: 12.5px; background: var(--accent-soft); }

  .footer-card {
    text-align: center;
    padding: 32px;
    background: linear-gradient(180deg, var(--surface), var(--surface-2));
    border: 1px solid var(--border);
    border-radius: 20px;
  }
  .footer-card h2 { color: var(--text); margin: 0 0 12px; font-size: 26px; letter-spacing: -0.03em; }
  .footer-card p { color: var(--muted); margin: 0 auto 22px; max-width: 720px; line-height: 1.65; }
  .footer-card .links { justify-content: center; margin-top: 6px; }
  .footer-card .btn.primary { background: var(--text); color: white; border-color: var(--text); }

  @media (max-width: 980px) {
    .container { width: min(100% - 32px, 1180px); }
    .hero { grid-template-columns: 1fr; align-items: start; }
    .metrics-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .section-head { grid-template-columns: 1fr; align-items: start; }
    .grid-3, .toolbox-grid, .project-impact-grid, .story-flow, .capability-strip { grid-template-columns: 1fr; }
    .project-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .project-flow-step:not(:last-child)::after { display: none; }
  }

  @media (max-width: 700px) {
    .nav, .project-top, .exp-head { grid-template-columns: 1fr; }
    .links { justify-content: flex-start; }
    .headline { font-size: 34px; }
    .intro { font-size: 15.5px; }
    .metrics-panel, .grid-2, .bullets { grid-template-columns: 1fr; }
    .date { text-align: left; white-space: normal; }
    section { padding: 28px 0; }
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
            <a className="btn" href="#experience">Experience</a>
            <a className="btn" href="#projects">Project</a>
            <a className="btn" href="#toolbox">Toolbox</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn primary" href={links.email}>Contact</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="hero-inner">
              <div className="badge">Product Analytics • Analytics Engineering • SQL • Data Modeling • BI • dbt</div>
              <h2 className="headline">I build analytics layers and product insights that turn messy data into confident decisions.</h2>
              <p className="intro">
                I’m an analytics and BI professional with 5+ years of experience building data models, transformation layers,
                dashboards, and self-serve analytics foundations across high-scale transactional and product data environments.
                I bring deep fintech and banking expertise, having worked on credit, transaction, and financial reporting data to improve
                accuracy, standardize KPI logic, and drive measurable revenue impact.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">View Case Study</a>
                <a className="btn" href={links.project} target="_blank" rel="noreferrer">GitHub Project</a>
              </div>
            </div>

            <div className="metrics-panel" aria-label="Impact metrics">
              <Metric value="$503K" label="incremental revenue impact from lifecycle analytics" />
              <Metric value="40%" label="reporting accuracy improvement through validation checks" />
              <Metric value="50%" label="manual reporting effort reduction through dashboards" />
              <Metric value="100M+" label="records supported across financial reporting workflows" />
            </div>
          </section>

          <section id="product">
            <div className="section-head">
              <div>
                <p className="eyebrow">Product Analytics</p>
                <h2 className="section-title">How I approach product & growth problems</h2>
              </div>
              <p className="section-note">I connect product behavior, business metrics, and data foundations so teams can move from questions to decisions faster.</p>
            </div>
            <div className="story-flow">
              <StoryStep
                number="01"
                title="Understand the Journey"
                text="Map the user lifecycle from signup to activation, retention, and revenue to identify where the business needs clarity."
              />
              <StoryStep
                number="02"
                title="Define the Metrics"
                text="Standardize lifecycle, revenue, and product KPIs so product and business teams are aligned on what success means."
              />
              <StoryStep
                number="03"
                title="Drive Decisions"
                text="Use funnel, cohort, and behavioral analysis to explain what changed, why it happened, and what teams should do next."
              />
            </div>
          </section>

          <section className="capability-strip" aria-label="Core positioning">
            <span>Analytics Engineering</span>
            <span>Product Analytics</span>
            <span>Data Modeling</span>
            <span>BI Enablement</span>
          </section>

          <section id="experience">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Where I’ve made impact</h2>
            <div className="experience-list">
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
            </div>
          </section>

          <section id="projects">
            <p className="eyebrow">Featured Project</p>
            <h2 className="section-title">Case Study: Building a Reliable Transaction Lifecycle Analytics Layer</h2>
            <div className="project-card">
              <div className="project-top">
                <div>
                  <h3 className="project-title">dbt + Databricks Personal Project</h3>
                  <p className="project-desc">
                    A production-style analytics engineering project that turns raw user, card, and transaction data into trusted marts for transaction performance, cohort retention, user segmentation, and time-of-day behavior analysis.
                  </p>
                </div>
                <a className="btn primary" href={links.project} target="_blank" rel="noreferrer">View GitHub</a>
              </div>

              <div className="project-impact-grid">
                <InfoCard title="Business Problem" text="Raw transaction, user, and card datasets were difficult to analyze directly because key business questions required consistent joins, cleaned fields, reliable transaction grain, and reusable metric definitions." />
                <InfoCard title="What I Built" text="A medallion-style analytics layer with Bronze source-aligned models, Silver cleaned/enriched transaction models, Gold fact and dimension tables, and metric marts for daily performance, retention, segmentation, and time-of-day trends." />
                <InfoCard title="Real-World Value" text="The model supports real use cases like tracking daily transaction volume, monitoring errors, analyzing chip vs non-chip usage, measuring cohort retention, segmenting users by financial attributes, and identifying peak transaction windows." />
              </div>

              <div className="project-flow">
                <ProjectFlowStep label="01" title="Raw Sources" text="Users, cards, and transactions start as separate source tables with different grains." />
                <ProjectFlowStep label="02" title="Bronze" text="Source-aligned models preserve raw structure for lineage, debugging, and reproducibility." />
                <ProjectFlowStep label="03" title="Silver" text="Users, cards, and transactions are cleaned, typed, standardized, and enriched at transaction grain." />
                <ProjectFlowStep label="04" title="Gold" text="Fact and dimension models expose users, cards, and transactions for BI and downstream analytics." />
                <ProjectFlowStep label="05" title="Quality" text="Generic and reconciliation tests validate row counts, ID coverage, relationships, and mart logic." />
                <ProjectFlowStep label="06" title="Decision Layer" text="Metric marts support daily performance, cohort retention, segmentation, and time-of-day analysis." />
              </div>

              <div className="project-impact-grid">
                <InfoCard title="Scalable Modeling" text="Modeled fact_transactions as an incremental event table using transaction_id and transaction_date to support append-heavy transaction data." />
                <InfoCard title="Historical Tracking" text="Added a user snapshot to demonstrate SCD Type 2 tracking for changing demographic, address, financial, and credit attributes." />
                <InfoCard title="Analytics Use Cases" text="Designed marts for daily transaction KPIs, user segments, cohort retention, and peak transaction time buckets." />
              </div>
            </div>
          </section>

          <section id="toolbox">
            <p className="eyebrow">Toolbox</p>
            <h2 className="section-title">Technologies by Category</h2>
            <div className="toolbox-grid">
              {technologyGroups.map((group) => (
                <div className="toolbox-card" key={group.title}>
                  <h3 className="toolbox-title">{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="footer-card">
              <h2>Let’s build trusted data foundations.</h2>
              <p>
                I’m interested in Analytics Engineering, Business Intelligence Engineering, and Senior Data Analyst roles where I can build reliable data assets and product insights that help teams make better decisions.
              </p>
              <div className="links">
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

function StoryStep({ number, title, text }: any) {
  return (
    <div className="story-step">
      <div className="story-number">{number}</div>
      <h3 className="mini-title">{title}</h3>
      <p className="mini-text">{text}</p>
    </div>
  );
}

function ProjectFlowStep({ label, title, text }: any) {
  return (
    <div className="project-flow-step">
      <div className="project-flow-label">{label}</div>
      <h3 className="mini-title">{title}</h3>
      <p className="mini-text">{text}</p>
    </div>
  );
}

function ExperienceCard({ company, title, date, bullets }: any) {
  return (
    <div className="experience-card">
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
  return <div className="project-point"><p className="mini-text">{text}</p></div>;
}
