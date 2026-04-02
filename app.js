const projectMeta = {
  title: "The Deepfake Dilemma",
  subtitle:
    "A class project testing how strongly mock jurors continue to rely on deepfake evidence even after they are warned that the footage may be fabricated.",
  purpose:
    "This website brings together our backstory, participant materials, methodology, results, and legal recommendations in one clean presentation.",
  team: ["Yuval Shilon", "Kate Leblanc", "Noah Penfold", "Liat Benchluch"],
};

const researchQuestions = [
  {
    title: "Research Question 1",
    text:
      "How much additional trustworthy evidence is needed to meaningfully reduce or eliminate continued reliance on deepfake evidence once authenticity is challenged?",
  },
  {
    title: "Research Question 2",
    text: "Is a standard warning enough to correct juror perception, or are stronger safeguards required?",
  },
];

const citations = [
  {
    title: "Humans detect deepfakes poorly",
    text:
      "Ordinary viewers are not well-equipped to identify AI-generated media, which means jurors can be highly vulnerable to persuasive fabricated video.",
    cite: "Alexander Diel et al. (2024), Computers in Human Behavior Reports 16, 100538.",
    href: "https://doi.org/10.1016/j.chbr.2024.100538",
  },
  {
    title: "Warnings often fail to fully correct belief",
    text:
      "A basic warning may reduce confidence, but it often does not erase the effect of the original exposure, especially once a believable visual narrative has taken hold.",
    cite: "Klaire Somoray, Dan J. Miller & Mary Holmes (2025), Human Behavior & Emerging Technologies 2025:1.",
    href: "https://doi.org/10.1155/hbe2/1833228",
  },
  {
    title: "Retracted misinformation can keep shaping judgment",
    text:
      "Even after information is challenged or corrected, people may continue to rely on it unless a strong replacement explanation fills the gap.",
    cite: "Ullrich K. H. Ecker & Luke M. Antonio (2021), Memory & Cognition 49.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33452666/",
    secondaryCite: "Amy J. Mickelberg et al. (2025), PLOS ONE 20:5.",
    secondaryHref: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0322045",
  },
];

const materials = [
  {
    title: "Participant Survey",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSetF7ECTcu0-T32aniQAbtOSWA6Z8Fz4z1mGDZD1SyK1RDeGg/viewform?usp=dialog",
    summary:
      "Google Form used to collect participant responses at each stage of the study, including confidence ratings, change reports, and the final verdict question.",
    excerpt:
      "This survey recorded how participants responded after the background story, the video, the warning, each evidence layer, and the final conviction decision.",
    external: true,
  },
  {
    title: "Participant Package",
    path: "docs/participant-package.pdf",
    summary:
      "Participant-facing study packet used to guide mock jurors through the case background, video, warning, evidence layers, and final verdict.",
    excerpt:
      "Participants were asked to act as mock jurors and reassess their confidence after each staged intervention.",
  },
  {
    title: "Master Instruction Sheet",
    path: "docs/final-master-instruction-sheet.pdf",
    summary:
      "Researcher protocol covering setup, delivery order, ethics reminders, timing, and debrief instructions.",
    excerpt:
      "Researchers were instructed not to reveal later evidence early and to present each phase one step at a time.",
  },
  {
    title: "Results Analysis Memo",
    path: "docs/results-analysis-memo.pdf",
    summary:
      "Full analysis memo with descriptive results, paired t-tests, findings by research question, limitations, and recommendations.",
    excerpt:
      "The memo concludes that procedural warnings alone were insufficient and that cumulative counter-evidence was needed to reduce continued reliance on the deepfake.",
  },
];

const studyPhases = [
  {
    kicker: "Phase 1",
    title: "Background and baseline",
    summary:
      "Participants entered a fictional ATM theft case involving two possible suspects, but the starting narrative pointed mainly toward Daniel Mercer. They were told that approximately $2,000 had been taken from a downtown Toronto ATM, that Mercer lived nearby, had worked close to the store, matched the witness's description of suspect's general build, and had phone-location data placing him in the area. At that stage, participants gave a baseline confidence rating about Mercer.",
    labels: [
      {
        short: "Q1",
        detail: "Asked participants to rate how confident they were that Daniel Mercer was guilty on a 1-5 scale.",
      },
    ],
  },
  {
    kicker: "Phase 2",
    title: "Video exposure",
    summary:
      "Participants were then shown CCTV footage that appeared to implicate Alex Rivera, a nearby gas station employee. This was the key narrative disruption in the study: after Mercer had been introduced as the initial suspect, the video redirected attention toward Rivera and participants were asked how confident they now were that Rivera was guilty.",
    labels: [
      {
        short: "Q2",
        detail: "Asked participants to rate how confident they were that Alex Rivera was guilty after viewing the video on a 1-5 scale.",
      },
    ],
  },
  {
    kicker: "Phase 3",
    title: "Authenticity challenge",
    summary:
      "Only after participants had absorbed the force of the video were they told that investigators were questioning whether the footage had been digitally altered or artificially generated using AI. This phase tested whether a standard warning, on its own, could undo the impression created by the deepfake.",
    labels: [
      {
        short: "Q3",
        detail: "Asked whether the participant's confidence regarding Rivera's guilt had changed after the warning: yes or no.",
      },
      {
        short: "Q4",
        detail: "Asked participants to re-rate how confident they were that Rivera was guilty on a 1-5 scale after the warning.",
      },
    ],
  },
  {
    kicker: "Phase 4",
    title: "Layered counter-evidence",
    summary:
      "Participants then received four additional pieces of evidence pointing back to Mercer, one layer at a time, so we could measure whether progressively stronger non-video evidence could reverse the narrative shift created by the video. The layers were: Mercer had recently been fired from a nearby job; he was experiencing financial difficulties including overdue rent; he posted on X, “I'mmm tired of being down and out,, somethings gotta change😒💸💸”; and his search history included “How ATM machines work” and “ATM cash box access.”",
    labels: [
      {
        short: "Q5-Q6",
        detail: "After the employment termination evidence, participants said whether confidence changed and then rated Rivera's guilt again on a 1-5 scale.",
      },
      {
        short: "Q7-Q8",
        detail: "After the financial difficulties evidence, participants said whether confidence changed and then rated Rivera's guilt again on a 1-5 scale.",
      },
      {
        short: "Q9-Q10",
        detail: "After the social media post, participants said whether confidence changed and then rated Rivera's guilt again on a 1-5 scale.",
      },
      {
        short: "Q11-Q12",
        detail: "After the ATM search history, participants said whether confidence changed and then rated Rivera's guilt again on a 1-5 scale.",
      },
    ],
  },
  {
    kicker: "Phase 5",
    title: "Final verdict and debrief",
    summary:
      "At the end, participants were asked whether they would still convict Rivera despite the uncertainty surrounding the video and the counter-evidence pointing toward Mercer. This final step revealed how much deepfake influence remained after the full corrective sequence.",
    labels: [
      {
        short: "Q13",
        detail: "Asked whether the participant would still convict Alex Rivera despite the uncertainty around the video's authenticity: yes or no.",
      },
    ],
  },
];

const statsSeries = [
  { label: "Mercer baseline", value: 2.7 },
  { label: "After video", value: 4.15 },
  { label: "After warning", value: 3.0 },
  { label: "After layer 1", value: 2.75 },
  { label: "After layer 2", value: 2.5 },
  { label: "After layer 3", value: 2.2 },
  { label: "After layer 4", value: 1.75 },
];

const significance = [
  {
    comparison: "Baseline -> After video",
    meaning: "The deepfake produced a highly significant increase in confidence toward Rivera.",
    pValue: "0.0006",
    significant: true,
  },
  {
    comparison: "After video -> After warning",
    meaning: "The warning significantly reduced confidence, but not enough to fully dislodge the deepfake.",
    pValue: "0.0003",
    significant: true,
  },
  {
    comparison: "After warning -> Layer 1",
    meaning: "The first evidence layer reduced confidence somewhat, but not enough to clear the significance threshold alone.",
    pValue: "0.0563",
    significant: false,
  },
  {
    comparison: "Layer 1 -> Layer 2",
    meaning: "The second evidence layer produced a significant additional decline.",
    pValue: "0.0210",
    significant: true,
  },
  {
    comparison: "Layer 2 -> Layer 3",
    meaning: "The third evidence layer also significantly reduced confidence.",
    pValue: "0.0102",
    significant: true,
  },
  {
    comparison: "Layer 3 -> Layer 4",
    meaning: "The fourth evidence layer produced the strongest later-stage decline.",
    pValue: "0.0035",
    significant: true,
  },
];

const resultsSummary = {
  lead:
    "Confidence did decline over the course of the study, but it declined gradually and required repeated intervention. That slow correction is exactly what makes deepfake evidence so dangerous for the justice system.",
  findings: [
    "The deepfake sharply redirected confidence toward Rivera, jumping from a Mercer baseline mean of 2.70 to a Rivera mean of 4.15 after the video.",
    "The authenticity warning mattered, but the post-warning mean still sat at 3.00, showing that a simple caution did not undo the force of the visual evidence.",
    "Meaningful correction only emerged through cumulative evidence layers, and even then 4 of 20 participants still said they would convict Rivera. This matters because it shows how hard the system may have to work once fabricated evidence has already been seen.",
  ],
  conclusion:
    "Taken together, the results suggest a system under strain: once a believable deepfake enters the reasoning process, the legal response may have to work much harder and much longer to neutralize it. The four participants who remained willing to convict Rivera after the warning and all four evidence layers should not be treated as an anomaly to ignore. Across the materials, they represent the persistent subgroup that ordinary corrective tools could not reach, which is exactly why stronger front-end safeguards and access to technical expertise matter.",
};

const recommendations = [
  {
    title: "Presumption of inadmissibility",
    text:
      "If authenticity cannot be resolved on a balance of probabilities, contested video evidence should presumptively be excluded before a jury sees it.",
  },
  {
    title: "Stronger lawyer verification duties",
    text:
      "Lawyers introducing AI-sensitive digital evidence should be expected to verify authenticity and disclose the steps taken before relying on it.",
  },
  {
    title: "Neutral, state-supported forensic experts",
    text:
      "Courts should be able to appoint certified neutral forensic experts, with public funding available where a party cannot afford expert review on its own.",
  },
];

const limitations = [
  "The sample size of 20 participants is indicative rather than broadly representative.",
  "Individual cognitive bias could affect responses.",
  "The controlled research setting is not identical to full jury deliberation.",
  "The fabricated media used here may be less sophisticated than deepfakes available to well-resourced actors.",
];

const appendixTables = {
  stageMeans: [
    { label: "Initial confidence in Mercer (Q1)", value: "2.70", tooltip: "Confidence in Mercer committing offence" },
    { label: "Post-video confidence in Rivera (Q2)", value: "4.15", tooltip: "Confidence in Rivera committing offence" },
    { label: "Post-warning confidence in Rivera (Q4)", value: "3.00", tooltip: "Confidence in Rivera committing offence" },
    { label: "After Layer 1 (Q6)", value: "2.75", tooltip: "Confidence in Rivera committing offence" },
    { label: "After Layer 2 (Q8)", value: "2.50", tooltip: "Confidence in Rivera committing offence" },
    { label: "After Layer 3 (Q10)", value: "2.20", tooltip: "Confidence in Rivera committing offence" },
    { label: "After Layer 4 (Q12)", value: "1.75", tooltip: "Confidence in Rivera committing offence" },
  ],
  outcomes: [
    ["Changed after warning (Q3)", "14 yes / 6 no", "70% yes"],
    ["Changed after Layer 1 (Q5)", "5 yes / 15 no", "25% yes"],
    ["Changed after Layer 2 (Q7)", "7 yes / 13 no", "35% yes"],
    ["Changed after Layer 3 (Q9)", "8 yes / 12 no", "40% yes"],
    ["Changed after Layer 4 (Q11)", "11 yes / 9 no", "55% yes"],
    ["Final willingness to convict Rivera (Q13)", "4 yes / 16 no", "20% yes"],
  ],
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function createStatPills(target, items) {
  items.forEach((item) => {
    const node = document.createElement("div");
    node.className = "stat-pill";
    node.innerHTML = `<span class="stat-value">${item.value}</span><span class="stat-label">${item.label}</span>`;
    target.appendChild(node);
  });
}

function renderOverview() {
  qs("#overview").innerHTML = `
    <div class="section-stack">
      <section class="hero-card">
        <p class="eyebrow">Overview</p>
        <h2 class="hero-title">${projectMeta.title}</h2>
        <p class="hero-copy">${projectMeta.subtitle}</p>
        <p class="hero-copy">${projectMeta.purpose}</p>
        <div class="team-row">
          <span class="team-inline">${projectMeta.team.join("  ·  ")}</span>
        </div>
      </section>

      <section class="two-column">
        <article class="content-card">
          <h3 class="section-title">Research Question 1</h3>
          <div class="question-list clean-list">
            <div class="question-card plain-card">
              <p>${researchQuestions[0].text}</p>
            </div>
            <div class="question-card plain-card">
              <h3 class="section-title section-subtitle">Research Question 2</h3>
              <p>${researchQuestions[1].text}</p>
            </div>
          </div>
        </article>

        <article class="content-card">
          <p class="eyebrow">Core Finding</p>
          <h3 class="section-title">A persuasive deepfake can outlast the warning that follows it</h3>
          <p class="body-copy">
            Our study suggests two things at once. First, additional trustworthy evidence was needed to meaningfully reduce continued reliance on the deepfake; the effect was not undone by a single correction and instead weakened only through cumulative layers of probative evidence. Second, a standard warning on its own was not enough to fully correct juror perception. That matters because it suggests the justice system may need stronger safeguards before or alongside exposure, not just after it.
          </p>
        </article>
      </section>

      <section class="content-card">
        <h3 class="section-title">Limitations</h3>
        <details class="plain-details">
          <summary>View limitations</summary>
          <div class="limitations-large">
            ${limitations.map((item) => `<p class="limitation-line">${item}</p>`).join("")}
          </div>
        </details>
      </section>
    </div>
  `;
}

function renderWhy() {
  qs("#why").innerHTML = `
    <div class="section-stack">
      <section class="hero-card">
        <p class="eyebrow">Why This Matters</p>
        <h2 class="section-title">The legal danger is not only that a deepfake can deceive people. It is that correction may come too slowly.</h2>
        <p class="hero-copy">
          Our research review and project design were built around a simple concern: once jurors see persuasive synthetic media, later warnings or retractions may not fully neutralize its influence.
        </p>
      </section>

      <section class="citation-grid">
        ${citations
          .map(
            (item) => `
              <article class="content-card">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-copy">${item.text}</p>
                <div class="citation-links">
                  <p class="citation-line"><a class="source-link" href="${item.href}" target="_blank" rel="noreferrer">${item.cite}</a></p>
                  ${
                    item.secondaryCite
                      ? `<p class="citation-line"><a class="source-link" href="${item.secondaryHref}" target="_blank" rel="noreferrer">${item.secondaryCite}</a></p>`
                      : ""
                  }
                </div>
              </article>
            `,
          )
          .join("")}
      </section>

      <section class="content-card">
        <p class="eyebrow">Why We Ran This Study</p>
        <h3 class="section-title">Our project tested the evidentiary threshold for correction</h3>
        <p class="body-copy">
          Instead of asking only whether people notice deepfakes, we tested something more practically urgent for courts: how much additional trustworthy evidence is needed after the authenticity of a video is challenged, and whether a standard procedural warning is enough on its own.
        </p>
      </section>
    </div>
  `;
}

function renderMaterials() {
  qs("#materials").innerHTML = `
    <div class="section-stack">
      <section class="hero-card">
        <p class="eyebrow">Materials</p>
        <h2 class="section-title">The study materials and source documents used throughout the project</h2>
        <p class="hero-copy">
          This section separates the underlying materials from the legal recommendations so people can review the project record more clearly.
        </p>
      </section>

      <section class="details-list">
        ${materials
          .map(
            (item) => `
              <details>
                <summary>${item.title}</summary>
                <p>${item.summary}</p>
                <p><strong>Excerpt:</strong> ${item.excerpt}</p>
                <a class="source-link" href="${item.path}" ${item.external ? 'target="_blank" rel="noreferrer"' : "download"}>
                  ${item.external ? "Open survey" : "Open PDF"}
                </a>
              </details>
            `,
          )
          .join("")}
      </section>
    </div>
  `;
}

function renderMethodology() {
  qs("#methodology").innerHTML = `
    <div class="section-stack">
      <section class="hero-card">
        <p class="eyebrow">Methodology</p>
        <h2 class="section-title">How we conducted the study and walked participants through the case</h2>
        <p class="hero-copy">
          We combined the scenario, the video, the authenticity warning, and the counter-evidence into one sequential mock trial exercise so we could observe how confidence changed at each stage.
        </p>
      </section>

      <section class="two-column">
        <article class="content-card">
          <p class="eyebrow">Case Materials</p>
          <h3 class="section-title">The two defendants shown to participants</h3>
          <div class="defendant-grid">
            <article class="portrait-card">
              <img src="assets/defendant-a.png" alt="Headshot of Daniel Mercer" />
              <div class="portrait-copy">
                <strong>Daniel Mercer</strong>
                <p>Initial suspect connected through background evidence.</p>
              </div>
            </article>
            <article class="portrait-card">
              <img src="assets/defendant-b.png" alt="Headshot of Alex Rivera" />
              <div class="portrait-copy">
                <strong>Alex Rivera</strong>
                <p>Second suspect implicated once the video was introduced.</p>
              </div>
            </article>
          </div>
        </article>

        <article class="content-card">
          <p class="eyebrow">Project Media</p>
          <h3 class="section-title">CCTV footage shown during the study</h3>
          <div class="video-frame">
            <video controls preload="metadata">
              <source src="assets/cctv-footage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p class="video-note">* NOTE - this is an AI generated deepfake using Rivera's face</p>
        </article>
      </section>

      <section class="content-card">
        <p class="eyebrow">Methodology</p>
        <h3 class="section-title">How the study unfolded from first impression to final verdict</h3>
        <p class="body-copy">
          The study was built to track a narrative shift. Participants began with background information that pointed toward Mercer, then saw a video that redirected suspicion toward Rivera, then received a warning that the video might be fabricated, and only after that were they given increasingly probative evidence pointing back toward Mercer. The goal was to see how hard it was to pull judgment away from the deepfake once it had already shaped the story in the participant's mind.
        </p>
        <div class="phase-list">
          ${studyPhases
            .map(
              (item) => `
                <div class="phase-card">
                  <span class="phase-kicker">${item.kicker}</span>
                  <h4>${item.title === "Background and baseline" ? `Background Story and baseline` : item.title}</h4>
                  <p>${item.summary}</p>
                  <div class="question-row">
                    ${item.labels
                      .map(
                        (label) =>
                          `<details class="question-detail"><summary class="question-pill">${label.short}</summary><p>${label.detail}</p></details>`,
                      )
                      .join("")}
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderResults() {
  qs("#results").innerHTML = `
    <div class="section-stack">
      <section class="hero-card">
        <p class="eyebrow">Results</p>
        <h2 class="section-title">Confidence did move downward, but the correction was slow and required repeated reinforcement</h2>
        <p class="hero-copy">${resultsSummary.lead}</p>
      </section>

      <section class="two-column">
        <article class="chart-card">
          <p class="eyebrow">Mean At Every Stage Of The Study</p>
          <h3 class="section-title">Confidence trajectory</h3>
          ${buildLineChart(statsSeries)}
        </article>

        <article class="chart-card">
          <p class="eyebrow">Final Outcome</p>
          <h3 class="section-title">4 yes / 16 no</h3>
          <div class="conviction-bar" aria-label="Final conviction split">
            <div class="conviction-yes">20% yes</div>
            <div class="conviction-no">80% no</div>
          </div>
          <p class="footer-note">
            Even after the warning and all four evidence layers, four participants still said they would convict Rivera.
          </p>
        </article>
      </section>

      <section class="content-card">
        <p class="eyebrow">Key Findings</p>
        <h3 class="section-title">What the results show</h3>
        <ul class="findings-list">
          ${resultsSummary.findings.map((item) => `<li class="findings-item">${item}</li>`).join("")}
        </ul>
      </section>

      <section class="two-column">
        <article class="content-card">
          <p class="eyebrow">Statistical Significance</p>
          <h3 class="section-title">Where the strongest shifts happened</h3>
          <ul class="significance-list">
            ${significance
              .map(
                (item) => `
                  <li class="significance-item">
                    <div class="significance-header">
                      <span>${item.comparison}</span>
                      <span class="significance-badge ${item.significant ? "significant" : "not-significant"}">
                        ${item.significant ? "Significant" : "Not significant"}
                      </span>
                    </div>
                    <p>${item.meaning}</p>
                    <p class="footer-note">p-value: ${item.pValue}</p>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </article>

        <article class="content-card">
          <p class="eyebrow">Appendix</p>
          <h3 class="section-title">Analysis Tools</h3>
          <div class="analysis-tools">
            <p class="body-copy">We analyzed the study using stage-by-stage means, response distributions, and yes/no change reports to track how confidence shifted across the experiment.</p>
          </div>
          <div class="details-list">
            <details>
              <summary>Stage means and confidence trajectory</summary>
              <p>Here, the mean refers to the average confidence rating on a 1-5 scale at each stage of the study.</p>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr><th>Stage</th><th>Mean</th></tr>
                  </thead>
                  <tbody>
                    ${appendixTables.stageMeans
                      .map(
                        (row) =>
                          `<tr><td>${row.label}</td><td>${row.value}<span class="info-chip" tabindex="0">(i)<span class="info-bubble">${row.tooltip}</span></span></td></tr>`,
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>
            </details>
            <details>
              <summary>Change reports and final outcome counts</summary>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr><th>Measure</th><th>Count</th><th>Share</th></tr>
                  </thead>
                  <tbody>
                    ${appendixTables.outcomes.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderRecommendations() {
  qs("#recommendations").innerHTML = `
    <div class="section-stack">
      <section class="hero-card">
        <p class="eyebrow">Recommendations</p>
        <h2 class="section-title">A slow correction process places real strain on the justice system</h2>
        <p class="hero-copy">
          Our recommendations respond to a core problem revealed by the study: once fabricated video has been seen, even a warning plus repeated counter-evidence may not be enough for everyone.
        </p>
      </section>

      <section class="recommendation-grid">
        ${recommendations
          .map(
            (item) => `
              <article class="content-card">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-copy">${item.text}</p>
              </article>
            `,
          )
          .join("")}
      </section>

      <section class="content-card">
        <p class="eyebrow">Conclusion</p>
        <h3 class="section-title">Why the persistent subgroup matters</h3>
        <p class="body-copy">${resultsSummary.conclusion}</p>
      </section>
    </div>
  `;
}

function buildLineChart(series) {
  const width = 760;
  const height = 320;
  const padding = 42;
  const min = 1;
  const max = 5;
  const stepX = (width - padding * 2) / (series.length - 1);

  const points = series.map((item, index) => {
    const x = padding + stepX * index;
    const y = height - padding - ((item.value - min) / (max - min)) * (height - padding * 2);
    return { ...item, x, y };
  });

  const line = points.map((point) => `${point.x},${point.y}`).join(" ");
  const labels = points
    .map(
      (point) => `
        <text x="${point.x}" y="${height - 10}" text-anchor="middle" fill="#5d6470" font-size="12">${point.label}</text>
        <circle cx="${point.x}" cy="${point.y}" r="6" fill="#2667ff"></circle>
        <text x="${point.x}" y="${point.y - 14}" text-anchor="middle" fill="#101114" font-size="12" font-weight="700">${point.value.toFixed(2)}</text>
      `,
    )
    .join("");

  const gridLines = [1, 2, 3, 4, 5]
    .map((tick) => {
      const y = height - padding - ((tick - min) / (max - min)) * (height - padding * 2);
      return `
        <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(16,17,20,0.1)" stroke-dasharray="4 6"></line>
        <text x="${padding - 14}" y="${y + 4}" text-anchor="end" fill="#5d6470" font-size="12">${tick}</text>
      `;
    })
    .join("");

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Mean confidence trajectory chart">
      ${gridLines}
      <polyline fill="none" stroke="#2667ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${line}"></polyline>
      ${labels}
    </svg>
  `;
}

function setupTabs() {
  const buttons = qsa(".tab-button");
  const panels = qsa(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((node) => node.classList.remove("active"));
      panels.forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      qs(`#${button.dataset.tab}`).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function init() {
  renderOverview();
  renderWhy();
  renderMaterials();
  renderMethodology();
  renderResults();
  renderRecommendations();
  setupTabs();
}

init();
