// @ts-nocheck
import React from "react";



const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const links = {
  email: "mailto:yashsinghai211996@gmail.com",
  linkedin: "https://linkedin.com/in/yash-singhai",
  project:
    "https://github.com/yashsinghai1996/lightspeed-project-transactions/tree/main/lightspeed_project_transactions",
};

const technologies = [
  "SQL",
  "Python",
  "BigQuery",
  "Databricks",
  "AWS Athena",
  "dbt",
  "Tableau",
  "Looker",
  "Looker Studio",
  "Power BI",
  "Git",
  "Dimensional Modeling",
  "Data Quality",
  "KPI Frameworks",
];

export default function Portfolio(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Yash Singhai</h1>
            <p className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Icon name="pin" className="h-4 w-4" /> Toronto, ON
              </span>
              <span>Analytics Engineer / Senior Data Analyst (Product & Growth)</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href={links.email}>
                <Icon name="mail" className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild className="rounded-2xl">
              <a href={links.project} target="_blank" rel="noreferrer">
                <Icon name="github" className="mr-2 h-4 w-4" /> dbt Project
              </a>
            </Button>
          </div>
        </header>

        <main>
          <section className="grid gap-8 py-16 md:grid-cols-[1.25fr_.75fr] md:items-center"
          >
            <div>
              <p className="mb-4 inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
                Fintech + Banking • SQL • Data Modeling • BI • dbt
              </p>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                I build analytics layers and product insights that turn messy data into confident product and business decisions.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I’m an analytics and BI professional with 5+ years of experience building data models,
                transformation layers, dashboards, and self-serve analytics foundations across fintech and banking.
                My work has improved reporting accuracy, standardized KPI logic, and helped drive measurable revenue impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#projects">
                    View Projects <Icon name="arrow" className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-slate-700 bg-transparent text-slate-100 hover:bg-slate-900"
                >
                  <a href="#experience">Experience</a>
                </Button>
              </div>
            </div>

            <Card className="rounded-3xl border-slate-800 bg-slate-900/70 shadow-2xl">
              <CardContent className="p-6">
                <h3 className="mb-5 text-lg font-semibold text-slate-100">Impact Snapshot</h3>
                <div className="grid gap-4">
                  <Metric value="$503K" label="incremental revenue impact from lifecycle analytics" />
                  <Metric value="40%" label="reporting accuracy improvement through validation checks" />
                  <Metric value="50%" label="manual reporting effort reduction through dashboards" />
                  <Metric value="100M+" label="records supported across financial reporting workflows" />
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="product" className="py-10">
            <SectionTitle eyebrow="Product Analytics" title="How I approach product & growth problems" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <SkillCard
                iconName="chart"
                title="Funnel & Lifecycle Analysis"
                text="Analyze user journeys (signup → activation → retention) to identify drop-offs, improve conversion, and drive product growth."
              />
              <SkillCard
                iconName="database"
                title="Metric Design & KPI Frameworks"
                text="Define north-star metrics, revenue KPIs, and lifecycle metrics to ensure consistent tracking across product and business teams."
              />
              <SkillCard
                iconName="branch"
                title="Experimentation & Insights"
                text="Evaluate product changes through cohort analysis, behavioral trends, and impact measurement to guide product decisions."
              />
            </div>
          </section>

          <section id="skills" className="py-10">
            <SectionTitle eyebrow="Core strengths" title="What I bring" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <SkillCard
                iconName="database"
                title="Data Modeling"
                text="Dimensional modeling, star schemas, semantic layer concepts, reusable datasets, KPI standardization."
              />
              <SkillCard
                iconName="branch"
                title="Analytics Engineering"
                text="SQL transformation layers, dbt-style workflows, data quality tests, Git-based development, Databricks projects."
              />
              <SkillCard
                iconName="chart"
                title="BI & Decision Enablement"
                text="Dashboards, executive-ready reporting, self-serve analytics, performance monitoring, stakeholder storytelling."
              />
            </div>
          </section>

          <section id="experience" className="py-12">
            <SectionTitle eyebrow="Experience" title="Where I’ve made impact" />
            <div className="mt-8 grid gap-5">
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

          <section id="projects" className="py-12">
            <SectionTitle eyebrow="Featured project" title="Improving Transaction Lifecycle Visibility for Revenue Analytics" />
            <Card className="mt-8 rounded-3xl border-slate-800 bg-slate-900/70">
              <CardContent className="p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">dbt + Databricks Personal Project</h3>
                    <p className="mt-3 max-w-3xl text-slate-300">
                      Built to solve lack of visibility into transaction lifecycle and revenue attribution by creating scalable, analytics-ready data models for product, revenue, and BI use cases.
                    </p>
                  </div>
                  <Button asChild variant="secondary" className="shrink-0 rounded-2xl">
                    <a href={links.project} target="_blank" rel="noreferrer">
                      View GitHub <Icon name="arrow" className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <h4 className="font-semibold text-slate-200">Problem</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Fragmented transaction data and inconsistent lifecycle metrics made it difficult to track revenue, activation, and user behavior reliably.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <h4 className="font-semibold text-slate-200">Approach</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Designed dbt transformation layers, star-schema models, validation checks, and reusable marts to standardize business logic.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <h4 className="font-semibold text-slate-200">Outcome</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Enabled consistent KPI definitions, reliable BI reporting, self-serve analytics, and product-style lifecycle analysis.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <ProjectPoint text="Built staging → intermediate → marts transformation layers for lifecycle and transaction datasets." />
                  <ProjectPoint text="Designed star-schema data models for scalable querying, dashboarding, and BI reporting." />
                  <ProjectPoint text="Handled incomplete and inconsistent transaction data through validation and transformation logic." />
                  <ProjectPoint text="Modeled business metrics and semantic layer concepts for consistent lifecycle and revenue reporting." />
                  <ProjectPoint text="Implemented data quality tests for reliability, relationships, and logic checks." />
                  <ProjectPoint text="Developed reusable datasets enabling self-serve analytics and reducing ad-hoc queries." />
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="py-12">
            <SectionTitle eyebrow="Toolbox" title="Technologies" />
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {technologies.map((item) => (
                <span key={item} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="py-14">
            <Card className="rounded-3xl border-slate-800 bg-slate-900/80">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold">Let’s build trusted data foundations.</h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  I’m interested in Business Intelligence Engineering, Analytics Engineering, and SQL-heavy Data Analyst roles where I can build reliable data assets that help teams make better decisions.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Button asChild className="rounded-2xl">
                    <a href={links.email}>Contact Me</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-slate-700 bg-transparent text-slate-100 hover:bg-slate-900"
                  >
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}

function Card({ className = "", children }: any) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }: any) {
  return <div className={className}>{children}</div>;
}

function Button({ asChild = false, size, variant, className = "", children }: any) {
  const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition rounded-2xl";
  const sizeClass = size === "lg" ? "px-5 py-3 text-base" : "";
  const variantClass =
    variant === "secondary"
      ? "bg-slate-800 text-slate-100 hover:bg-slate-700"
      : variant === "outline"
        ? "border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-900"
        : "bg-slate-100 text-slate-950 hover:bg-white";
  const combined = `${base} ${sizeClass} ${variantClass} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${combined} ${children.props.className || ""}`.trim(),
    });
  }

  return <button className={combined}>{children}</button>;
}

function SectionTitle({ eyebrow, title }: any) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
    </div>
  );
}

function Metric({ value, label }: any) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="text-3xl font-bold text-slate-100">{value}</div>
      <div className="mt-1 text-sm leading-6 text-slate-400">{label}</div>
    </div>
  );
}

function SkillCard({ iconName, title, text }: any) {
  return (
    <Card className="rounded-3xl border-slate-800 bg-slate-900/70">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex rounded-2xl bg-slate-800 p-3 text-slate-200">
          <Icon name={iconName} className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{text}</p>
      </CardContent>
    </Card>
  );
}

function ExperienceCard({ company, title, date, bullets }: any) {
  return (
    <Card className="rounded-3xl border-slate-800 bg-slate-900/70">
      <CardContent className="p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-100">{company}</h3>
            <p className="mt-1 text-slate-400">{title}</p>
          </div>
          <p className="text-sm text-slate-500">{date}</p>
        </div>
        <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">
          {bullets.map((bullet: string) => (
            <li key={bullet} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 leading-7">
              {bullet}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProjectPoint({ text }: any) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-300">
      <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
      <p className="leading-7">{text}</p>
    </div>
  );
}

function Icon({ name, className = "h-5 w-5" }: any) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    arrow: (
      <>
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-5" />
        <path d="M12 16V8" />
        <path d="M16 16v-7" />
      </>
    ),
    branch: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 6h6" />
        <path d="M18 8v8" />
        <path d="M6 8v2c0 4.4 3.6 8 8 8h2" />
      </>
    ),
    check: (
      <>
        <path d="M20 6L9 17l-5-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    github: (
      <>
        <path d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2c-3 .7-3.6-1.2-3.6-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.2 0-1.1.4-2.1 1-2.8-.1-.3-.4-1.4.1-2.8 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.8.6.7 1 1.7 1 2.8 0 4-2.5 4.9-4.9 5.2.4.3.8 1 .8 2v3c0 .3.2.6.8.5A10 10 0 0 0 12 2z" />
      </>
    ),
  };

  return <svg {...commonProps}>{paths[name] || paths.check}</svg>;
}
