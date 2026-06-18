const allValues = [
  { id: 1,  name: "ACCEPTANCE",     description: "to be accepted as I am" },
  { id: 2,  name: "ACCURACY",       description: "to be accurate in my opinions and beliefs" },
  { id: 3,  name: "ACHIEVEMENT",    description: "to have important accomplishments" },
  { id: 4,  name: "ADVENTURE",      description: "to have new and exciting experiences" },
  { id: 5,  name: "ATTRACTIVENESS", description: "to be physically attractive" },
  { id: 6,  name: "AUTHORITY",      description: "to be in charge of and responsible for others" },
  { id: 7,  name: "AUTONOMY",       description: "to be self-determined and independent" },
  { id: 8,  name: "BEAUTY",         description: "to appreciate beauty around me" },
  { id: 9,  name: "CARING",         description: "to take care of others" },
  { id: 10, name: "CHALLENGE",      description: "to take on difficult tasks and problems" },
  { id: 11, name: "CHANGE",         description: "to have a life full of change and variety" },
  { id: 12, name: "COMFORT",        description: "to have a pleasant and comfortable life" },
  { id: 13, name: "COMMITMENT",     description: "to make enduring, meaningful commitments" },
  { id: 14, name: "COMPASSION",     description: "to feel and act on concern for others" },
  { id: 15, name: "CONTRIBUTION",   description: "to make a lasting contribution in the world" },
  { id: 16, name: "COOPERATION",    description: "to work collaboratively with others" },
  { id: 17, name: "COURTESY",       description: "to be considerate and polite toward others" },
  { id: 18, name: "CREATIVITY",     description: "to have new and original ideas" },
  { id: 19, name: "DEPENDABILITY",  description: "to be reliable and trustworthy" },
  { id: 20, name: "DUTY",           description: "to carry out my duties and obligations" },
  { id: 21, name: "ECOLOGY",        description: "to live in harmony with the environment" },
  { id: 22, name: "EXCITEMENT",     description: "to have a life full of thrills and stimulation" },
  { id: 23, name: "FAITHFULNESS",   description: "to be loyal and true in relationships" },
  { id: 24, name: "FAME",           description: "to be known and recognised" },
  { id: 25, name: "FAMILY",         description: "to have a happy, loving family" },
  { id: 26, name: "FITNESS",        description: "to be physically fit and strong" },
  { id: 27, name: "FLEXIBILITY",    description: "to adjust to new circumstances easily" },
  { id: 28, name: "FORGIVENESS",    description: "to be forgiving of others" },
  { id: 29, name: "FRIENDSHIP",     description: "to have close, supportive friends" },
  { id: 30, name: "FUN",            description: "to play and have fun" },
  { id: 31, name: "GENEROSITY",     description: "to give what I have to others" },
  { id: 32, name: "GENUINENESS",    description: "to act in a manner that is true to who I am" },
  { id: 33, name: "GOD'S WILL",     description: "to seek and obey the will of God" },
  { id: 34, name: "GROWTH",         description: "to keep changing and growing" },
  { id: 35, name: "HEALTH",         description: "to be physically well and healthy" },
  { id: 36, name: "HELPFULNESS",    description: "to be helpful to others" },
  { id: 37, name: "HONESTY",        description: "to be honest and truthful" },
  { id: 38, name: "HOPE",           description: "to maintain a positive and optimistic outlook" },
  { id: 39, name: "HUMILITY",       description: "to be modest and unassuming" },
  { id: 40, name: "HUMOUR",         description: "to see the humourous side of myself and the world" },
  { id: 41, name: "INDEPENDENCE",   description: "to be free from dependence on others" },
  { id: 42, name: "INDUSTRY",       description: "to work hard and well at my life tasks" },
  { id: 43, name: "INNER PEACE",    description: "to experience personal peace" },
  { id: 44, name: "INTIMACY",       description: "to share my innermost experiences with others" },
  { id: 45, name: "JUSTICE",        description: "to promote fair and equal treatment for all" },
  { id: 46, name: "KNOWLEDGE",      description: "to learn and contribute valuable knowledge" },
  { id: 47, name: "LEISURE",        description: "to take time to relax and enjoy" },
  { id: 48, name: "LOVED",          description: "to be loved by those close to me" },
  { id: 49, name: "LOVING",         description: "to give love to others" },
  { id: 50, name: "MASTERY",        description: "to be competent in my everyday activities" },
  { id: 51, name: "MINDFULNESS",    description: "to live conscious and mindful of the present moment" },
  { id: 52, name: "MODERATION",     description: "to avoid excesses and find a middle ground" },
  { id: 53, name: "MONOGAMY",       description: "to have one close, loving relationship" },
  { id: 54, name: "NON-CONFORMITY", description: "to question and challenge authority and norms" },
  { id: 55, name: "NURTURANCE",     description: "to take care of and nurture others" },
  { id: 56, name: "OPENNESS",       description: "to be open to new experiences, ideas, and options" },
  { id: 57, name: "ORDER",          description: "to have a life that is well-ordered and organised" },
  { id: 58, name: "PASSION",        description: "to have deep feelings about ideas, activities, or people" },
  { id: 59, name: "PLEASURE",       description: "to feel good" },
  { id: 60, name: "POPULARITY",     description: "to be well-liked by many people" },
  { id: 61, name: "POWER",          description: "to have control over others" },
  { id: 62, name: "PURPOSE",        description: "to have meaning and direction in my life" },
  { id: 63, name: "RATIONALITY",    description: "to be guided by reason and logic" },
  { id: 64, name: "REALISM",        description: "to see and act realistically and practically" },
  { id: 65, name: "RESPONSIBILITY", description: "to make and carry out responsible decisions" },
  { id: 66, name: "RISK",           description: "to take risks and chances" },
  { id: 67, name: "ROMANCE",        description: "to have intense, exciting love in my life" },
  { id: 68, name: "SAFETY",         description: "to be safe and secure" },
  { id: 69, name: "SELF-ACCEPTANCE",description: "to accept myself as I am" },
  { id: 70, name: "SELF-CONTROL",   description: "to be disciplined in my own actions" },
  { id: 71, name: "SELF-ESTEEM",    description: "to feel good about myself" },
  { id: 72, name: "SELF-KNOWLEDGE", description: "to have a deep and honest understanding of myself" },
  { id: 73, name: "SERVICE",        description: "to be of service to others" },
  { id: 74, name: "SEXUALITY",      description: "to have an active and satisfying sex life" },
  { id: 75, name: "SIMPLICITY",     description: "to live life simply, with minimal needs" },
  { id: 76, name: "SOLITUDE",       description: "to have time and space where I can be apart from others" },
  { id: 77, name: "SPIRITUALITY",   description: "to grow and mature spiritually" },
  { id: 78, name: "STABILITY",      description: "to have a life that stays fairly consistent" },
  { id: 79, name: "TOLERANCE",      description: "to accept and respect those who differ from me" },
  { id: 80, name: "TRADITION",      description: "to follow respected patterns of the past" },
  { id: 81, name: "VIRTUE",         description: "to live a morally pure and excellent life" },
  { id: 82, name: "WEALTH",         description: "to have plenty of money" },
  { id: 83, name: "WORLD PEACE",    description: "to work to promote peace in the world" }
];

const STORAGE_KEY = 'values-card-sort-v3';
const VI_CAP = 10;

let state = {
  categories: {
    important: [],
    veryImportant: [],
    notImportant: [],
    unsorted: [...allValues]
  },
  phase: 1,
  rankedValues: []  // ordered array of value IDs, set in Phase 2
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

// ── Toast notification ─────────────────────────────────

let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
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
  } else {
    actionsHTML = `
      <button class="btn-remove" aria-label="Move ${value.name} back to unsorted">↩ Move back</button>
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
  } else {
    card.querySelector('.btn-remove').addEventListener('click', () => moveValue(value.id, 'unsorted'));
  }

  return card;
}

// ── Phase 1 ────────────────────────────────────────────

function renderPhase1() {
  const vi = state.categories.veryImportant;
  const capped = vi.length >= VI_CAP;

  // Category columns
  ['important', 'veryImportant', 'notImportant'].forEach(cat => {
    const container = document.getElementById(`${cat}-container`);
    container.innerHTML = '';
    state.categories[cat].forEach(v => container.appendChild(createCard(v, 'categorised')));

    const count = state.categories[cat].length;
    const countEl = document.getElementById(`${cat}-count`);
    if (cat === 'veryImportant') {
      countEl.textContent = `(${count}/${VI_CAP})`;
      document.getElementById('category-veryImportant')
        .classList.toggle('category--capped', capped);
    } else {
      countEl.textContent = count > 0 ? `(${count})` : '';
    }
  });

  // Unsorted grid
  const unsortedContainer = document.getElementById('unsorted-container');
  unsortedContainer.innerHTML = '';
  state.categories.unsorted.forEach(v => {
    const card = createCard(v, 'unsorted');
    // Grey out the Very Important button when capped
    if (capped) {
      const viBtn = card.querySelector('.btn--very-important');
      if (viBtn) {
        viBtn.disabled = true;
        viBtn.title = 'Very Important is full (10/10) — move a card first';
      }
    }
    unsortedContainer.appendChild(card);
  });

  renderProgress();
}

function moveValue(id, target) {
  let source = null;
  for (const [cat, values] of Object.entries(state.categories)) {
    if (values.some(v => v.id === id)) { source = cat; break; }
  }
  if (!source || source === target) return;

  if (target === 'veryImportant' && state.categories.veryImportant.length >= VI_CAP) {
    showToast('Very Important is full (10/10). Move a card to Important first.');
    return;
  }

  const value = state.categories[source].find(v => v.id === id);
  state.categories[source] = state.categories[source].filter(v => v.id !== id);
  state.categories[target].push(value);

  // Keep rankedValues consistent if a card leaves Very Important
  if (source === 'veryImportant') {
    state.rankedValues = state.rankedValues.filter(rid => rid !== id);
  }

  saveState();
  renderPhase1();
}

// ── Phase 2: Ranking ───────────────────────────────────

function enterPhase2() {
  const vi = state.categories.veryImportant;

  // Initialise ranking from current Very Important order (preserving any prior ranking)
  const existingRanked = state.rankedValues.filter(id => vi.some(v => v.id === id));
  const unranked = vi.filter(v => !existingRanked.includes(v.id)).map(v => v.id);
  state.rankedValues = [...existingRanked, ...unranked];

  saveState();
  setPhase(2);
  renderPhase2();
}

function renderPhase2() {
  const container = document.getElementById('rank-container');
  container.innerHTML = '';

  const vi = state.categories.veryImportant;

  if (vi.length === 0) {
    container.innerHTML = '<p class="empty-message">You didn\'t mark any values as Very Important. Go back to Step 1 and sort some values there.</p>';
    document.getElementById('goToPhase3').disabled = true;
    return;
  }

  const total = state.rankedValues.length;

  document.getElementById('phase2-heading').textContent =
    total === 1 ? 'Your Very Important value' : `Rank your ${total} values`;

  document.getElementById('phase2-desc').innerHTML =
    total === 1
      ? 'You have one Very Important value. Continue to see your results.'
      : `Drag to reorder your values from <strong>1 (most significant)</strong> to <strong>${total} (least significant)</strong>. Take your time — you can adjust until you're happy.`;

  state.rankedValues.forEach((id, index) => {
    const value = allValues.find(v => v.id === id);
    if (!value) return;

    const li = document.createElement('li');
    li.className = 'rank-item';
    li.dataset.id = id;
    li.setAttribute('draggable', 'true');
    li.innerHTML = `
      <span class="drag-handle" aria-hidden="true">⠿</span>
      <span class="rank-number">${index + 1}</span>
      <div class="rank-body">
        <strong class="rank-name">${value.name}</strong>
        <span class="rank-desc">${value.description}</span>
      </div>
    `;

    li.addEventListener('dragstart', onDragStart);
    li.addEventListener('dragover',  onDragOver);
    li.addEventListener('dragleave', onDragLeave);
    li.addEventListener('drop',      onDrop);
    li.addEventListener('dragend',   onDragEnd);
    container.appendChild(li);
  });

  document.getElementById('goToPhase3').disabled = false;
}

// ── Phase 2: Drag & drop handlers ─────────────────────
let dragSrcId = null;

function onDragStart(e) {
  dragSrcId = parseInt(this.dataset.id);
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => this.classList.add('dragging'), 0);
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('.rank-item').forEach(el => el.classList.remove('drag-over'));
  this.classList.add('drag-over');
}

function onDragLeave() {
  this.classList.remove('drag-over');
}

function onDrop(e) {
  e.stopPropagation();
  const tgtId = parseInt(this.dataset.id);
  if (dragSrcId === tgtId) return;
  const srcIdx = state.rankedValues.indexOf(dragSrcId);
  const tgtIdx = state.rankedValues.indexOf(tgtId);
  state.rankedValues.splice(srcIdx, 1);
  state.rankedValues.splice(tgtIdx, 0, dragSrcId);
  saveState();
  renderPhase2();
}

function onDragEnd() {
  document.querySelectorAll('.rank-item').forEach(el => {
    el.classList.remove('dragging', 'drag-over');
  });
}

function moveRanked(id, direction) {
  const idx = state.rankedValues.indexOf(id);
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= state.rankedValues.length) return;

  [state.rankedValues[idx], state.rankedValues[newIdx]] =
    [state.rankedValues[newIdx], state.rankedValues[idx]];

  saveState();
  renderPhase2();
}

// ── Phase 3: Results ───────────────────────────────────

function renderPhase3() {
  const ranked = state.rankedValues;
  const top5 = ranked.slice(0, 5);
  const rest = ranked.slice(5);

  // Top 5 list
  const topList = document.getElementById('results-top5');
  topList.innerHTML = '';
  top5.forEach(id => {
    const value = allValues.find(v => v.id === id);
    if (!value) return;
    const li = document.createElement('li');
    li.className = 'top-value-item';
    li.innerHTML = `<div><strong>${value.name}</strong><span>${value.description}</span></div>`;
    topList.appendChild(li);
  });

  // Values 6–10
  const setAsideSection = document.getElementById('set-aside-section');
  const restList = document.getElementById('results-6to10');
  restList.innerHTML = '';
  if (rest.length === 0) {
    setAsideSection.classList.add('hidden');
  } else {
    setAsideSection.classList.remove('hidden');
    rest.forEach((id, i) => {
      const value = allValues.find(v => v.id === id);
      if (!value) return;
      const li = document.createElement('li');
      li.className = 'set-aside-item';
      li.innerHTML = `<strong>${value.name}</strong><span>${value.description}</span>`;
      restList.appendChild(li);
    });
  }

  // Full breakdown
  ['veryImportant', 'important', 'notImportant'].forEach(cat => {
    const list = document.getElementById(`results-${cat}`);
    if (!list) return;
    list.innerHTML = '';
    state.categories[cat].forEach(v => {
      const li = document.createElement('li');
      li.textContent = v.name.charAt(0) + v.name.slice(1).toLowerCase();
      list.appendChild(li);
    });
  });
}

// ── PDF Download ───────────────────────────────────────

function loadImageAsBase64(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function downloadPDF() {
  if (!window.jspdf) {
    showToast('PDF library not loaded. Please check your internet connection.');
    return;
  }

  const [logoImg, straplineImg] = await Promise.all([
    loadImageAsBase64('TeachFirst Brand toolkit/TF_Landscape_White.png'),
    loadImageAsBase64('TeachFirst Brand toolkit/Rewrite_Landscape_White_CMYK.png')
  ]);

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210;
  const margin = 20;
  const maxW = pageW - margin * 2;
  let y = 20;

  const addPage = () => { doc.addPage(); y = 20; };
  const checkY = (needed = 14) => { if (y + needed > 275) addPage(); };

  // Header bar
  const headerH = 38;
  doc.setFillColor(55, 100, 240);
  doc.rect(0, 0, pageW, headerH, 'F');

  // TF Landscape logo — left
  if (logoImg) doc.addImage(logoImg, 'PNG', 6, 7, 44, 18);

  // Title — centre
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Values Card Sort', pageW / 2, 17, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('My Core Values', pageW / 2, 24, { align: 'center' });

  // Rewrite strapline — bottom right
  if (straplineImg) doc.addImage(straplineImg, 'PNG', pageW - 56, headerH - 13, 50, 10);

  y = headerH + 12;
  doc.setTextColor(0, 0, 0);

  // Date
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(`Completed: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`, margin, y);
  doc.setTextColor(0);
  y += 12;

  // Top 5
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(55, 100, 240);
  doc.text('My Top 5 Values', margin, y);
  y += 8;

  state.rankedValues.slice(0, 5).forEach((id, i) => {
    const value = allValues.find(v => v.id === id);
    if (!value) return;
    checkY(16);

    // Number circle
    doc.setFillColor(55, 100, 240);
    doc.circle(margin + 4, y - 1, 4, 'F');
    doc.setTextColor(255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(String(i + 1), margin + 4, y + 0.8, { align: 'center' });

    // Value name
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(value.name, margin + 12, y);
    y += 6;

    // Description
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100);
    const lines = doc.splitTextToSize(value.description, maxW - 12);
    doc.text(lines, margin + 12, y);
    doc.setTextColor(0);
    y += lines.length * 4.5 + 5;
  });

  // Values 6–10
  const rest = state.rankedValues.slice(5);
  if (rest.length > 0) {
    checkY(20);
    y += 4;
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 100, 100);
    doc.text('Values 6–10 (set aside)', margin, y);
    y += 8;

    rest.forEach((id, i) => {
      const value = allValues.find(v => v.id === id);
      if (!value) return;
      checkY(12);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(80);
      doc.text(`${i + 6}. ${value.name}`, margin + 4, y);
      y += 5;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(130);
      const lines = doc.splitTextToSize(value.description, maxW - 8);
      doc.text(lines, margin + 4, y);
      y += lines.length * 4.5 + 4;
    });
  }

  // All sorted categories
  checkY(20);
  y += 6;
  doc.setDrawColor(220);
  doc.line(margin, y, pageW - margin, y);
  y += 8;

  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0);
  doc.text('All Sorted Values', margin, y);
  y += 8;

  const catConfig = [
    { key: 'veryImportant', label: 'Very Important', r: 55,  g: 100, b: 240 },
    { key: 'important',     label: 'Important',      r: 46,  g: 117, b: 182 },
    { key: 'notImportant',  label: 'Not Important',  r: 107, g: 114, b: 128 }
  ];

  catConfig.forEach(({ key, label, r, g, b }) => {
    const values = state.categories[key];
    if (values.length === 0) return;
    checkY(16);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(r, g, b);
    doc.text(label, margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(60);

    const names = values.map(v => v.name.charAt(0) + v.name.slice(1).toLowerCase());
    const cols = 3;
    const colW = maxW / cols;
    for (let i = 0; i < names.length; i += cols) {
      checkY(6);
      for (let c = 0; c < cols; c++) {
        if (names[i + c]) {
          doc.text(`• ${names[i + c]}`, margin + c * colW, y);
        }
      }
      y += 5.5;
    }
    doc.setTextColor(0);
    y += 4;
  });

  doc.save('my-values.pdf');
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
    rankedValues: []
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
  document.getElementById('downloadPdfBtn').addEventListener('click', downloadPDF);

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
