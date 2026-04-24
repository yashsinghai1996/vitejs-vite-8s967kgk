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
    --soft: #94a3b8;
    --border: #e2e8f0;
    --accent: #2563eb;
    --accent-soft: #dbeafe;
    --shadow: 0 6px 18px rgba(0,0,0,0.06);
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

  .page {
    min-height: 100vh;
    background: var(--bg);
  }

  .container {
    width: min(100% - 48px, 1180px);
    margin: 0 auto;
    padding: 24px 0 48px;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 14px 0;
    margin-bottom: 28px;
    backdrop-filter: blur(14px);
  }
  .name {
    color: var(--text);
    font-size: 32px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0;
  }
  .subline {
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 14px;
  }
  .links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--text);
    background: var(--surface);
    transition: 0.15s ease;
  }
  .btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-soft);
  }
  .btn.primary {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
  }
  .btn.primary:hover {
    opacity: 0.9;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 40px 0 22px;
  }
  .hero-inner {
    max-width: 900px;
  }
  .badge {
    display: inline-flex;
    border: 1px solid var(--accent-soft);
    border-radius: 999px;
    padding: 7px 12px;
    color: var(--accent);
    font-size: 12.5px;
    font-weight: 700;
    margin-bottom: 16px;
    background: var(--accent-soft);
  }
  .headline {
    color: var(--text);
    font-size: clamp(34px, 4.6vw, 56px);
    line-height: 1.02;
    letter-spacing: -0.055em;
    margin: 0;
    max-width: 980px;
  }
  .intro {
    color: var(--muted);
    font-size: 17px;
    line-height: 1.72;
    margin: 22px 0 0;
    max-width: 860px;
  }
  .hero-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 24px;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
    margin: 26px 0 4px;
  }
  .metric {
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    background: white;
    border-radius: 16px;
    padding: 16px;
  }
  .metric::before { display: none; }
  .metric-value {
    font-size: 30px;
    font-weight: 850;
    letter-spacing: -0.04em;
    color: var(--text);
  }
  .metric-label {
    color: #374151;
    color: var(--soft);
    font-size: 13.5px;
    line-height: 1.45;
    margin-top: 5px;
  }

  section { padding: 34px 0; }
  .eyebrow {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11.5px;
    font-weight: 800;
    margin: 0 0 8px;
  }
  .section-title {
    color: #111827;
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -0.035em;
    margin: 0 0 22px;
  }
  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 20px;
    margin-bottom: 22px;
  }
  .section-note {
    color: var(--soft);
    font-size: 14px;
    line-height: 1.55;
    max-width: 420px;
    margin: 0;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
  .mini-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 18px;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  }
  .mini-card:hover {
    transform: translateY(-2px);
    border-color: #cbd5e1;
    box-shadow: var(--shadow);
  }
  .mini-title {
    font-size: 16px;
    margin: 0 0 9px;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  .mini-text {
    color: #1f2937;
    line-height: 1.65;
    font-size: 14px;
    margin: 0;
  }

  .experience-list {
    position: relative;
    display: grid;
    gap: 18px;
    margin-top: 10px;
  }
  .experience-list::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: var(--border);
  }
  .experience-item {
    position: relative;
    padding-left: 34px;
  }
  .experience-dot {
    position: absolute;
    left: 4px;
    top: 24px;
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: var(--accent);
    border: 4px solid var(--bg);
    z-index: 1;
  }
  .experience-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 20px;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  }
  .experience-card:hover {
    transform: translateY(-2px);
    border-color: #cbd5e1;
    box-shadow: var(--shadow);
  }
  .exp-head {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    gap: 16px;
    margin-bottom: 16px;
  }
  .company {
    font-size: 21px;
    margin: 0;
    font-weight: 850;
    letter-spacing: -0.03em;
  }
  .role {
    color: var(--muted);
    margin: 5px 0 0;
    font-size: 14px;
  }
  .date {
    color: var(--soft);
    font-size: 13px;
    white-space: nowrap;
    margin: 0;
  }
  .bullets {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .bullets li {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 14px;
    color: var(--muted);
    font-size: 13.5px;
    line-height: 1.55;
  }

  .project-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 22px;
    transition: box-shadow 0.16s ease, border-color 0.16s ease;
  }
  .project-card:hover {
    border-color: #cbd5e1;
    box-shadow: var(--shadow);
  }
  .impact-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 18px;
  }
  .impact-mini {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 14px;
  }
  .impact-mini strong {
    display: block;
    color: var(--text);
    font-size: 14px;
    margin-bottom: 4px;
  }
  .impact-mini span {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.45;
  }
  .project-top {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
  }
  .project-title {
    margin: 0;
    font-size: 22px;
    letter-spacing: -0.025em;
    font-weight: 850;
  }
  .project-desc {
    color: #1f2937;
    color: var(--muted);
    line-height: 1.7;
    max-width: 760px;
    margin: 10px 0 0;
    font-size: 15px;
  }
  .project-point {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 15px;
  }

  .toolbox-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 18px;
  }
  .toolbox-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 18px;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  }
  .toolbox-card:hover {
    transform: translateY(-2px);
    border-color: #cbd5e1;
    box-shadow: var(--shadow);
  }
  .toolbox-title {
    font-size: 15px;
    font-weight: 800;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .chip {
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--muted);
    padding: 7px 10px;
    font-size: 12.5px;
    background: var(--accent-soft);
  }

  .footer-card {
    text-align: center;
    padding: 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 18px;
  }
  .footer-card h2 { color: var(--text); margin-bottom: 12px; }
  .footer-card p { color: var(--muted); margin-bottom: 20px; }
  .footer-card .links { margin-top: 8px; }
  .footer-card .btn.primary { background: var(--text); color: white; border-color: var(--text); }
  .footer-card h2 { color: var(--text); }
  .footer-card p { color: var(--muted); }
  .footer-card .btn.primary { background: var(--text); color: white; border-color: var(--text); }

  @media (max-width: 980px) {
    .container { width: min(100% - 32px, 1180px); }
    .metrics-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-3, .toolbox-grid { grid-template-columns: 1fr; }
    .hero { padding-top: 28px; }
  }

  @media (max-width: 700px) {
    .nav, .project-top, .exp-head, .section-head {
      flex-direction: column;
      align-items: flex-start;
    }
    .links { justify-content: flex-start; }
    .headline { font-size: 34px; }
    .intro { font-size: 15.5px; }
    .metrics-grid, .grid-2, .bullets, .impact-strip { grid-template-columns: 1fr; }
    .date { white-space: normal; }
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
            <a className="btn" href={links.email}>Email</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn primary" href={links.project} target="_blank" rel="noreferrer">dbt Project</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="hero-inner">
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

            <div className="metrics-grid" aria-label="Impact metrics">
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
            <div className="grid-3">
              <InfoCard title="Funnel & Lifecycle Analysis" text="Analyze user journeys from signup to activation and retention to identify drop-offs, improve conversion, and drive growth." />
              <InfoCard title="Metric Design & KPI Frameworks" text="Define lifecycle, revenue, and product KPIs so teams can track performance consistently and make aligned decisions." />
              <InfoCard title="Experimentation & Insights" text="Evaluate product changes using cohort analysis, behavioral trends, and impact measurement to guide roadmap decisions." />
            </div>
          </section>

          <section id="skills">
            <div className="section-head">
              <div>
                <p className="eyebrow">Core Skills</p>
                <h2 className="section-title">Skillset Overview</h2>
              </div>
              <p className="section-note">Organized across analytics engineering, data platforms, BI, and product analytics.</p>
            </div>

            <div className="grid-3">
              <InfoCard
                title="Analytics Engineering & Modeling"
                text="SQL, dimensional modeling (star schema), fact & dimension design, dbt-style transformations, semantic layer design"
              />

              <InfoCard
                title="Data Platforms & Pipelines"
                text="BigQuery, Databricks, AWS Athena, data pipelines, large-scale data processing"
              />

              <InfoCard
                title="BI & Visualization"
                text="Tableau, Looker, Looker Studio, Power BI, dashboard design, executive reporting"
              />

              <InfoCard
                title="Data Quality & Governance"
                text="Validation checks (freshness, completeness, logic), anomaly detection, reconciliation, governance best practices"
              />

              <InfoCard
                title="Product & Business Analytics"
                text="KPI definition, lifecycle analytics, funnel analysis, retention, revenue tracking, cohort analysis"
              />

              <InfoCard
                title="Programming & Tools"
                text="Python (data processing, analysis), Git, SQL optimization, analytical problem solving"
              />
            </div>
          </section>

          <section id="experience">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Where I’ve made impact</h2>
            <div className="experience-list">
              <div className="experience-item">
                <div className="experience-dot" />
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
              </div>
              <div className="experience-item">
                <div className="experience-dot" />
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
            </div>
          </section>

          <section id="projects">
            <p className="eyebrow">Featured Project</p>
            <h2 className="section-title">Improving Transaction Lifecycle Visibility for Revenue Analytics</h2>
            <div className="project-card">
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

              <div className="impact-strip">
                <div className="impact-mini">
                  <strong>Analytics Engineering</strong>
                  <span>Created reusable modeled datasets rather than one-off SQL outputs.</span>
                </div>
                <div className="impact-mini">
                  <strong>Product Analytics</strong>
                  <span>Structured lifecycle data to analyze activation, retention, and revenue behavior.</span>
                </div>
                <div className="impact-mini">
                  <strong>BI Enablement</strong>
                  <span>Designed marts and metrics to support consistent self-serve reporting.</span>
                </div>
              </div>

              <div className="grid-3" style={{ marginTop: 18 }}>
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
            <h2 className="section-title">Technologies by Category</h2>
            <div className="toolbox-grid">
              {technologyGroups.map((group) => (
                <div className="toolbox-card" key={group.title}>
                  <h3 className="toolbox-title">{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>{item}</span>
                    ))}
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
