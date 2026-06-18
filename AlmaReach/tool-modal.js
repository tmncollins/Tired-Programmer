const modal = document.getElementById('toolModal');
const modalBody = document.getElementById('toolModalBody');

const content = {

  enrichment: `
    <h2>Data Enrichment</h2>

    <p>
      We enrich alumni records using publicly available professional,
      education, and geographic sources. Every claim is tagged with its source
      for full transparency.
    </p>

    <ul>
      <li>Current employment information</li>
      <li>Detailed carrer history</li>
      <li>Geographic location updates</li>
      <li>Education and professional qualifications</li>
      <li>Trusteeships, company directorships, and board memberships</li>
      <li>Awards and honours</li>
    </ul>
  `,

  duediligence: `
    <h2>Due Diligence</h2>

    <p>
      Identify potential reputational concerns before engagement.
    </p>

    <ul>
      <li>Media and public records monitoring</li>
      <li>Risk flagging</li>
      <li>Transparent source references</li>
    </ul>
  `,

  giving: `
    <h2>Giving Insights</h2>

    <p>
      We provide analytics using our bespoke predictive models.
    </p>

    <ul>
      <li>Giving capacity estimation</li>
      <li>Wealth breakdown by type</li>
      <li>Campaign prioritisation</li>
    </ul>
  `,

  leaders: `
    <h2>Future Leaders</h2>

    <p>
      We identify alumni demonstrating exceptional career momentum.
    </p>

    <ul>
      <li>Promotion tracking</li>
      <li>Future seniority prediction</li>
      <li>Industry influence indicators</li>
    </ul>
  `,

  verification: `
    <h2>Identity Verification</h2>

    <p>
      Cross-reference multiple independent sources to ensure accuracy.
    </p>

    <ul>
      <li>Multi-source matching</li>
      <li>Conflict detection</li>
      <li>Duplicate identification</li>
      <li>Confidence scoring</li>
    </ul>
  `,

  reports: `
    <h2>Holistic Reports</h2>

    <p>
      We provide executive-ready reporting tailored for development teams.
    </p>

    <ul>
      <li>Individual alumnus profiles</li>
      <li>Alumni overview reports</li>
      <li>Visual charts for geographic distribution, job sectors, and qualifications.</li>
    </ul>
  `,

  mentors: `
    <h2>Mentor Insights</h2>

    <p>
      We find suitable mentors, speakers, and panel members.
    </p>

    <ul>
      <li>Industry expertise matching</li>
      <li>Location-based recommendations</li>
      <li>Event panel suggestions</li>
      <li>Identify successful entrepreneurs</li>
    </ul>
  `,

  future: `
    <h2>More Tools Underway</h2>

    <p>
      AlmaReach is continuously expanding its analytics capabilities.
    </p>

    <ul>
      <li>Company valuation insights</li>
      <li>Historic giving analysis</li>
      <li>Obituary and legacy tracking</li>
      <li>Advanced engagement modelling</li>
    </ul>
  `,

  lists: `
    <h2>List Matching</h2>

    <p>
      We provide up-to-date cross-referencing of alumni against published lists.
    </p>

    <ul>
      <li>Rich lists</li>
      <li>Honours and awards</li>
      <li>Industry leaders</li>
      <li>30 under 30</li>
      <li>Updates every month</li>
    </ul>
  `,

  connections: `
    <h2>Alumni Connections</h2>

    <p>
      We identify professonial connections and networks among your alumni using our proprietary models.
    </p>

    <ul>
      <li>Current shared employer and roles</li>
      <li>Historic shared employer and job sectors</li>
      <li>Studied at the same institutions or courses</li>
    </ul>
  `,


};

document.querySelectorAll('.tool-card').forEach(card => {

  card.addEventListener('click', () => {

    const tool = card.dataset.tool;

    modalBody.innerHTML = content[tool];

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelector('.tool-modal-close')
  .addEventListener('click', closeModal);

document.querySelector('.tool-modal-overlay')
  .addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}