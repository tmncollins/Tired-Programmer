const modal = document.getElementById('toolModal');
const modalBody = document.getElementById('toolModalBody');

const content = {

  enrichment: `
    <h2>Data Enrichment</h2>

    <p>
      We enrich alumni records using publicly available professional,
      corporate and geographic information sources.
    </p>

    <ul>
      <li>Current employment information</li>
      <li>Career progression tracking</li>
      <li>Geographic location updates</li>
      <li>Trusteeships and board memberships</li>
      <li>Public engagement indicators</li>
    </ul>
  `,

  duediligence: `
    <h2>Due Diligence</h2>

    <p>
      Identify potential reputational concerns before engagement.
    </p>

    <ul>
      <li>Media monitoring</li>
      <li>Public legal records</li>
      <li>Risk flagging</li>
      <li>Transparent source references</li>
    </ul>
  `,

  giving: `
    <h2>Giving Insights</h2>

    <p>
      Predictive models estimate both capacity and likelihood to give.
    </p>

    <ul>
      <li>Propensity modelling</li>
      <li>Capacity estimation</li>
      <li>Campaign prioritisation</li>
      <li>Portfolio segmentation</li>
    </ul>
  `,

  leaders: `
    <h2>Future Leaders</h2>

    <p>
      Identify alumni demonstrating exceptional career momentum.
    </p>

    <ul>
      <li>Promotion tracking</li>
      <li>Executive trajectory analysis</li>
      <li>Industry influence indicators</li>
      <li>Emerging leadership scoring</li>
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
      Executive-ready reporting tailored for development teams.
    </p>

    <ul>
      <li>Campaign readiness reports</li>
      <li>Prospect summaries</li>
      <li>Alumni landscape analysis</li>
      <li>Board-ready presentation materials</li>
    </ul>
  `,

  mentors: `
    <h2>Mentor Insights</h2>

    <p>
      Find suitable mentors, speakers and panel members.
    </p>

    <ul>
      <li>Industry expertise matching</li>
      <li>Location-based recommendations</li>
      <li>Event panel suggestions</li>
      <li>Mentorship programme support</li>
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
  `
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