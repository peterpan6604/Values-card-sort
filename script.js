const allValues = [
  { id: 1,  name: "ACCEPTANCE",    description: "to be accepted as I am" },
  { id: 2,  name: "ACCURACY",      description: "to be accurate in my opinions and beliefs" },
  { id: 3,  name: "ACHIEVEMENT",   description: "to have important accomplishments" },
  { id: 4,  name: "ADVENTURE",     description: "to have new and exciting experiences" },
  { id: 5,  name: "ATTRACTIVENESS",description: "to be physically attractive" },
  { id: 6,  name: "AUTHORITY",     description: "to be in charge of and responsible for others" },
  { id: 7,  name: "AUTONOMY",      description: "to be self-determined and independent" },
  { id: 8,  name: "BEAUTY",        description: "to appreciate beauty around me" },
  { id: 9,  name: "CARING",        description: "to take care of others" },
  { id: 10, name: "CHALLENGE",     description: "to take on difficult tasks and problems" },
  { id: 11, name: "CHANGE",        description: "to have a life full of change and variety" },
  { id: 12, name: "COMFORT",       description: "to have a pleasant and comfortable life" },
  { id: 13, name: "COMMITMENT",    description: "to make enduring, meaningful commitments" },
  { id: 14, name: "COMPASSION",    description: "to feel and act on concern for others" },
  { id: 15, name: "CONTRIBUTION",  description: "to make a lasting contribution in the world" },
  { id: 16, name: "COOPERATION",   description: "to work collaboratively with others" },
  { id: 17, name: "COURTESY",      description: "to be considerate and polite toward others" },
  { id: 18, name: "CREATIVITY",    description: "to have new and original ideas" },
  { id: 19, name: "DEPENDABILITY", description: "to be reliable and trustworthy" },
  { id: 20, name: "DUTY",          description: "to carry out my duties and obligations" },
  { id: 21, name: "ECOLOGY",       description: "to live in harmony with the environment" },
  { id: 22, name: "EXCITEMENT",    description: "to have a life full of thrills and stimulation" },
  { id: 23, name: "FAITHFULNESS",  description: "to be loyal and true in relationships" },
  { id: 24, name: "FAME",          description: "to be known and recognised" },
  { id: 25, name: "FAMILY",        description: "to have a happy, loving family" },
  { id: 26, name: "FITNESS",       description: "to be physically fit and strong" },
  { id: 27, name: "FLEXIBILITY",   description: "to adjust to new circumstances easily" },
  { id: 28, name: "FORGIVENESS",   description: "to be forgiving of others" },
  { id: 29, name: "FRIENDSHIP",    description: "to have close, supportive friends" },
  { id: 30, name: "FUN",           description: "to play and have fun" },
  { id: 31, name: "GENEROSITY",    description: "to give what I have to others" },
  { id: 32, name: "GENUINENESS",   description: "to act in a manner that is true to who I am" },
  { id: 33, name: "GOD'S WILL",    description: "to seek and obey the will of God" },
  { id: 34, name: "GROWTH",        description: "to keep changing and growing" },
  { id: 35, name: "HEALTH",        description: "to be physically well and healthy" },
  { id: 36, name: "HELPFULNESS",   description: "to be helpful to others" },
  { id: 37, name: "HONESTY",       description: "to be honest and truthful" },
  { id: 38, name: "HOPE",          description: "to maintain a positive and optimistic outlook" },
  { id: 39, name: "HUMILITY",      description: "to be modest and unassuming" },
  { id: 40, name: "HUMOUR",        description: "to see the humourous side of myself and the world" },
  { id: 41, name: "INDEPENDENCE",  description: "to be free from dependence on others" },
  { id: 42, name: "INDUSTRY",      description: "to work hard and well at my life tasks" },
  { id: 43, name: "INNER PEACE",   description: "to experience personal peace" },
  { id: 44, name: "INTIMACY",      description: "to share my innermost experiences with others" },
  { id: 45, name: "JUSTICE",       description: "to promote fair and equal treatment for all" },
  { id: 46, name: "KNOWLEDGE",     description: "to learn and contribute valuable knowledge" },
  { id: 47, name: "LEISURE",       description: "to take time to relax and enjoy" },
  { id: 48, name: "LOVED",         description: "to be loved by those close to me" },
  { id: 49, name: "LOVING",        description: "to give love to others" },
  { id: 50, name: "MASTERY",       description: "to be competent in my everyday activities" },
  { id: 51, name: "MINDFULNESS",   description: "to live conscious and mindful of the present moment" },
  { id: 52, name: "MODERATION",    description: "to avoid excesses and find a middle ground" },
  { id: 53, name: "MONOGAMY",      description: "to have one close, loving relationship" },
  { id: 54, name: "NON-CONFORMITY",description: "to question and challenge authority and norms" },
  { id: 55, name: "NURTURANCE",    description: "to take care of and nurture others" },
  { id: 56, name: "OPENNESS",      description: "to be open to new experiences, ideas, and options" },
  { id: 57, name: "ORDER",         description: "to have a life that is well-ordered and organised" },
  { id: 58, name: "PASSION",       description: "to have deep feelings about ideas, activities, or people" },
  { id: 59, name: "PLEASURE",      description: "to feel good" },
  { id: 60, name: "POPULARITY",    description: "to be well-liked by many people" },
  { id: 61, name: "POWER",         description: "to have control over others" },
  { id: 62, name: "PURPOSE",       description: "to have meaning and direction in my life" },
  { id: 63, name: "RATIONALITY",   description: "to be guided by reason and logic" },
  { id: 64, name: "REALISM",       description: "to see and act realistically and practically" },
  { id: 65, name: "RESPONSIBILITY",description: "to make and carry out responsible decisions" },
  { id: 66, name: "RISK",          description: "to take risks and chances" },
  { id: 67, name: "ROMANCE",       description: "to have intense, exciting love in my life" },
  { id: 68, name: "SAFETY",        description: "to be safe and secure" },
  { id: 69, name: "SELF-ACCEPTANCE",description: "to accept myself as I am" },
  { id: 70, name: "SELF-CONTROL",  description: "to be disciplined in my own actions" },
  { id: 71, name: "SELF-ESTEEM",   description: "to feel good about myself" },
  { id: 72, name: "SELF-KNOWLEDGE",description: "to have a deep and honest understanding of myself" },
  { id: 73, name: "SERVICE",       description: "to be of service to others" },
  { id: 74, name: "SEXUALITY",     description: "to have an active and satisfying sex life" },
  { id: 75, name: "SIMPLICITY",    description: "to live life simply, with minimal needs" },
  { id: 76, name: "SOLITUDE",      description: "to have time and space where I can be apart from others" },
  { id: 77, name: "SPIRITUALITY",  description: "to grow and mature spiritually" },
  { id: 78, name: "STABILITY",     description: "to have a life that stays fairly consistent" },
  { id: 79, name: "TOLERANCE",     description: "to accept and respect those who differ from me" },
  { id: 80, name: "TRADITION",     description: "to follow respected patterns of the past" },
  { id: 81, name: "VIRTUE",        description: "to live a morally pure and excellent life" },
  { id: 82, name: "WEALTH",        description: "to have plenty of money" },
  { id: 83, name: "WORLD PEACE",   description: "to work to promote peace in the world" }
];

const STORAGE_KEY = 'values-card-sort-v2';
const TOP_LIMIT = 10;

let state = {
  categories: {
    important: [],
    veryImportant: [],
    notImportant: [],
    unsorted: [...allValues]
  },
  phase: 1,
  topValues: []
};

// ── Persistence ────────────────────────────────────────

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.categories && typeof parsed.phase === 'number') {
      state = parsed;
    }
  } catch (e) {
    console.error('Could not restore saved state', e);
  }
}

// ── Phase management ───────────────────────────────────

function setPhase(n) {
  state.phase = n;
  saveState();

  [1, 2, 3].forEach(i => {
    document.getElementById(`phase-${i}`).classList.toggle('hidden', i !== n);
    const step = document.getElementById(`step-${i}`);
    step.classList.toggle('active', i === n);
    step.classList.toggle('completed', i < n);
  });
}

// ── Progress ───────────────────────────────────────────

function renderProgress() {
  const total = allValues.length;
  const sorted = total - state.categories.unsorted.length;
  const pct = (sorted / total) * 100;

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-bar').setAttribute('aria-valuenow', sorted);
  document.getElementById('progress-text').textContent = `${sorted} of ${total} sorted`;

  const remaining = state.categories.unsorted.length;
  document.getElementById('unsorted-count').textContent =
    remaining > 0 ? `(${remaining} remaining)` : '';

  document.getElementById('phase1-complete').classList.toggle('hidden', sorted < total);
}

// ── Card creation ──────────────────────────────────────

function createCard(value, context) {
  const card = document.createElement('article');
  card.className = 'value-card';
  card.dataset.id = value.id;

  const isSelected = context === 'selectable' && state.topValues.includes(value.id);
  if (isSelected) card.classList.add('selected');

  let actionsHTML = '';
  if (context === 'unsorted') {
    actionsHTML = `
      <button class="btn-category btn--very-important" data-target="veryImportant"
              aria-label="Mark ${value.name} as Very Important">Very Important</button>
      <button class="btn-category btn--important" data-target="important"
              aria-label="Mark ${value.name} as Important">Important</button>
      <button class="btn-category btn--not-important" data-target="notImportant"
              aria-label="Mark ${value.name} as Not Important">Not Important</button>
    `;
  } else if (context === 'categorised') {
    actionsHTML = `
      <button class="btn-remove" aria-label="Move ${value.name} back to unsorted">↩ Move back</button>
    `;
  } else if (context === 'selectable') {
    actionsHTML = `
      <button class="btn-select" aria-label="${isSelected ? 'Deselect' : 'Select'} ${value.name}">
        ${isSelected ? 'Deselect' : 'Select'}
      </button>
    `;
  }

  card.innerHTML = `
    <div class="card-body">
      <h3 class="value-name">${value.name}</h3>
      <p class="value-desc">${value.description}</p>
    </div>
    <div class="card-actions">${actionsHTML}</div>
  `;

  if (context === 'unsorted') {
    card.querySelectorAll('.btn-category').forEach(btn => {
      btn.addEventListener('click', () => moveValue(value.id, btn.dataset.target));
    });
  } else if (context === 'categorised') {
    card.querySelector('.btn-remove').addEventListener('click', () => moveValue(value.id, 'unsorted'));
  } else if (context === 'selectable') {
    const selectBtn = card.querySelector('.btn-select');
    selectBtn.addEventListener('click', e => {
      e.stopPropagation();
      toggleTopValue(value.id);
    });
    card.addEventListener('click', () => toggleTopValue(value.id));
  }

  return card;
}

// ── Phase 1 ────────────────────────────────────────────

function renderPhase1() {
  ['important', 'veryImportant', 'notImportant'].forEach(cat => {
    const container = document.getElementById(`${cat}-container`);
    container.innerHTML = '';
    state.categories[cat].forEach(v => container.appendChild(createCard(v, 'categorised')));

    const countEl = document.getElementById(`${cat}-count`);
    const n = state.categories[cat].length;
    countEl.textContent = n > 0 ? `(${n})` : '';
  });

  const unsortedContainer = document.getElementById('unsorted-container');
  unsortedContainer.innerHTML = '';
  state.categories.unsorted.forEach(v => unsortedContainer.appendChild(createCard(v, 'unsorted')));

  renderProgress();
}

function moveValue(id, target) {
  let source = null;
  for (const [cat, values] of Object.entries(state.categories)) {
    if (values.some(v => v.id === id)) { source = cat; break; }
  }
  if (!source || source === target) return;

  const value = state.categories[source].find(v => v.id === id);
  state.categories[source] = state.categories[source].filter(v => v.id !== id);
  state.categories[target].push(value);

  // Keep topValues consistent if a Very Important card is moved away
  if (source === 'veryImportant') {
    state.topValues = state.topValues.filter(tid => tid !== id);
  }

  saveState();
  renderPhase1();
}

// ── Phase 2 ────────────────────────────────────────────

function enterPhase2() {
  const vi = state.categories.veryImportant;

  // If <= 10 Very Important, auto-select all so user can deselect if they want
  if (vi.length > 0 && vi.length <= TOP_LIMIT) {
    state.topValues = vi.map(v => v.id);
    saveState();
  }

  setPhase(2);
  renderPhase2();
}

function renderPhase2() {
  const vi = state.categories.veryImportant;
  const container = document.getElementById('top10-container');
  container.innerHTML = '';

  if (vi.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'empty-message';
    msg.textContent =
      "You didn't mark any values as Very Important. Go back to Step 1 and move some values there.";
    container.appendChild(msg);
    document.getElementById('goToPhase3').disabled = true;
    document.getElementById('selection-count').textContent = '0 chosen';
    document.getElementById('phase2-heading').textContent = 'Choose your top values';
    return;
  }

  const limit = Math.min(TOP_LIMIT, vi.length);

  document.getElementById('phase2-heading').textContent =
    vi.length <= TOP_LIMIT
      ? `Your Very Important values (${vi.length})`
      : `Choose your top ${TOP_LIMIT}`;

  vi.forEach(v => container.appendChild(createCard(v, 'selectable')));

  updatePhase2Controls(limit);
}

function updatePhase2Controls(limitOverride) {
  const vi = state.categories.veryImportant;
  const limit = limitOverride !== undefined ? limitOverride : Math.min(TOP_LIMIT, vi.length);
  const selected = state.topValues.length;

  document.getElementById('selection-count').textContent =
    vi.length <= TOP_LIMIT
      ? `${selected} of ${vi.length} selected`
      : `${selected} of ${TOP_LIMIT} chosen`;

  // Require at least 1 selection; if > 10 available require exactly 10
  const minRequired = vi.length <= TOP_LIMIT ? 1 : TOP_LIMIT;
  document.getElementById('goToPhase3').disabled = selected < minRequired;
}

function toggleTopValue(id) {
  const vi = state.categories.veryImportant;
  const limit = Math.min(TOP_LIMIT, vi.length);
  const idx = state.topValues.indexOf(id);

  if (idx !== -1) {
    state.topValues.splice(idx, 1);
  } else {
    if (state.topValues.length >= limit) return;
    state.topValues.push(id);
  }

  saveState();
  renderPhase2();
}

// ── Phase 3 ────────────────────────────────────────────

function renderPhase3() {
  const topList = document.getElementById('results-top10');
  topList.innerHTML = '';

  state.topValues.forEach(id => {
    const value = allValues.find(v => v.id === id);
    if (!value) return;
    const li = document.createElement('li');
    li.className = 'top-value-item';
    li.innerHTML = `
      <div>
        <strong>${value.name}</strong>
        <span>${value.description}</span>
      </div>
    `;
    topList.appendChild(li);
  });

  ['veryImportant', 'important', 'notImportant'].forEach(cat => {
    const list = document.getElementById(`results-${cat}`);
    if (!list) return;
    list.innerHTML = '';
    state.categories[cat].forEach(v => {
      const li = document.createElement('li');
      const name = v.name.charAt(0) + v.name.slice(1).toLowerCase();
      li.textContent = name;
      list.appendChild(li);
    });
  });
}

// ── Reset ──────────────────────────────────────────────

function resetAll() {
  if (!confirm('Start over? All your progress will be lost.')) return;
  state = {
    categories: {
      important: [],
      veryImportant: [],
      notImportant: [],
      unsorted: [...allValues]
    },
    phase: 1,
    topValues: []
  };
  saveState();
  setPhase(1);
  renderPhase1();
}

// ── Init ───────────────────────────────────────────────

function init() {
  loadState();

  document.getElementById('resetButton').addEventListener('click', resetAll);
  document.getElementById('startOverBtn').addEventListener('click', resetAll);
  document.getElementById('printBtn').addEventListener('click', () => window.print());

  document.getElementById('goToPhase2').addEventListener('click', enterPhase2);
  document.getElementById('backToPhase1').addEventListener('click', () => {
    setPhase(1);
    renderPhase1();
  });
  document.getElementById('goToPhase3').addEventListener('click', () => {
    setPhase(3);
    renderPhase3();
  });
  document.getElementById('backToPhase2').addEventListener('click', () => {
    setPhase(2);
    renderPhase2();
  });

  if (state.phase === 2) {
    setPhase(2);
    renderPhase2();
  } else if (state.phase === 3) {
    setPhase(3);
    renderPhase3();
  } else {
    setPhase(1);
    renderPhase1();
  }
}

document.addEventListener('DOMContentLoaded', init);
