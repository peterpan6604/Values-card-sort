// List of all values from the PDF
const allValues = [
  { id: 1, name: "ACCEPTANCE", description: "to be accepted as I am" },
  { id: 2, name: "ACCURACY", description: "to be accurate in my opinions and beliefs" },
  { id: 3, name: "ACHIEVEMENT", description: "to have important accomplishments" },
  { id: 4, name: "ADVENTURE", description: "to have new and exciting experiences" },
  { id: 5, name: "ATTRACTIVENESS", description: "to be physically attractive" },
  { id: 6, name: "AUTHORITY", description: "to be in charge of and responsible for others" },
  { id: 7, name: "AUTONOMY", description: "to be self-determined and independent" },
  { id: 8, name: "BEAUTY", description: "to appreciate beauty around me" },
  { id: 9, name: "CARING", description: "to take care of others" },
  { id: 10, name: "CHALLENGE", description: "to take on difficult tasks and problems" },
  { id: 11, name: "CHANGE", description: "to have a life full of change and variety" },
  { id: 12, name: "COMFORT", description: "to have a pleasant and comfortable life" },
  { id: 13, name: "COMMITMENT", description: "to make enduring, meaningful commitments" },
  { id: 14, name: "COMPASSION", description: "to feel and act on concern for others" },
  { id: 15, name: "CONTRIBUTION", description: "to make a lasting contribution in the world" },
  { id: 16, name: "COOPERATION", description: "to work collaboratively with others" },
  { id: 17, name: "COURTESY", description: "to be considerate and polite toward others" },
  { id: 18, name: "CREATIVITY", description: "to have new and original ideas" },
  { id: 19, name: "DEPENDABILITY", description: "to be reliable and trustworthy" },
  { id: 20, name: "DUTY", description: "to carry out my duties and obligations" },
  { id: 21, name: "ECOLOGY", description: "to live in harmony with the environment" },
  { id: 22, name: "EXCITEMENT", description: "to have a life full of thrills and stimulation" },
  { id: 23, name: "FAITHFULNESS", description: "to be loyal and true in relationships" },
  { id: 24, name: "FAME", description: "to be known and recognised" },
  { id: 25, name: "FAMILY", description: "to have a happy, loving family" },
  { id: 26, name: "FITNESS", description: "to be physically fit and strong" },
  { id: 27, name: "FLEXIBILITY", description: "to adjust to new circumstances easily" },
  { id: 28, name: "FORGIVENESS", description: "to be forgiving of others" },
  { id: 29, name: "FRIENDSHIP", description: "to have close, supportive friends" },
  { id: 30, name: "FUN", description: "to play and have fun" },
  { id: 31, name: "GENEROSITY", description: "to give what I have to others" },
  { id: 32, name: "GENUINENESS", description: "to act in a manner that is true to who I am" },
  { id: 33, name: "GOD'S WILL", description: "to seek and obey the will of God" },
  { id: 34, name: "GROWTH", description: "to keep changing and growing" },
  { id: 35, name: "HEALTH", description: "to be physically well and healthy" },
  { id: 36, name: "HELPFULNESS", description: "to be helpful to others" },
  { id: 37, name: "HONESTY", description: "to be honest and truthful" },
  { id: 38, name: "HOPE", description: "to maintain a positive and optimistic outlook" },
  { id: 39, name: "HUMILITY", description: "to be modest and unassuming" },
  { id: 40, name: "HUMOUR", description: "to see the humourous side of myself and the world" },
  { id: 41, name: "INDEPENDENCE", description: "to be free from dependence on others" },
  { id: 42, name: "INDUSTRY", description: "to work hard and well at my life tasks" },
  { id: 43, name: "INNER PEACE", description: "to experience personal peace" },
  { id: 44, name: "INTIMACY", description: "to share my innermost experiences with others" },
  { id: 45, name: "JUSTICE", description: "to promote fair and equal treatment for all" },
  { id: 46, name: "KNOWLEDGE", description: "to learn and contribute valuable knowledge" },
  { id: 47, name: "LEISURE", description: "to take time to relax and enjoy" },
  { id: 48, name: "LOVED", description: "to be loved by those close to me" },
  { id: 49, name: "LOVING", description: "to give love to others" },
  { id: 50, name: "MASTERY", description: "to be competent in my everyday activities" },
  { id: 51, name: "MINDFULNESS", description: "to live conscious and mindful of the present moment" },
  { id: 52, name: "MODERATION", description: "to avoid excesses and find a middle ground" },
  { id: 53, name: "MONOGAMY", description: "to have one close, loving relationship" },
  { id: 54, name: "NON-CONFORMITY", description: "to question and challenge authority and norms" },
  { id: 55, name: "NURTURANCE", description: "to take care of and nurture others" },
  { id: 56, name: "OPENNESS", description: "to be open to new experiences, ideas, and options" },
  { id: 57, name: "ORDER", description: "to have a life that is well-ordered and organised" },
  { id: 58, name: "PASSION", description: "to have deep feelings about ideas, activities, or people" },
  { id: 59, name: "PLEASURE", description: "to feel good" },
  { id: 60, name: "POPULARITY", description: "to be well-liked by many people" },
  { id: 61, name: "POWER", description: "to have control over others" },
  { id: 62, name: "PURPOSE", description: "to have meaning and direction in my life" },
  { id: 63, name: "RATIONALITY", description: "to be guided by reason and logic" },
  { id: 64, name: "REALISM", description: "to see and act realistically and practically" },
  { id: 65, name: "RESPONSIBILITY", description: "to make and carry out responsible decisions" },
  { id: 66, name: "RISK", description: "to take risks and chances" },
  { id: 67, name: "ROMANCE", description: "to have intense, exciting love in my life" },
  { id: 68, name: "SAFETY", description: "to be safe and secure" },
  { id: 69, name: "SELF-ACCEPTANCE", description: "to accept myself as I am" },
  { id: 70, name: "SELF-CONTROL", description: "to be disciplined in my own actions" },
  { id: 71, name: "SELF-ESTEEM", description: "to feel good about myself" },
  { id: 72, name: "SELF-KNOWLEDGE", description: "to have a deep and honest understanding of myself" },
  { id: 73, name: "SERVICE", description: "to be of service to others" },
  { id: 74, name: "SEXUALITY", description: "to have an active and satisfying sex life" },
  { id: 75, name: "SIMPLICITY", description: "to live life simply, with minimal needs" },
  { id: 76, name: "SOLITUDE", description: "to have time and space where I can be apart from others" },
  { id: 77, name: "SPIRITUALITY", description: "to grow and mature spiritually" },
  { id: 78, name: "STABILITY", description: "to have a life that stays fairly consistent" },
  { id: 79, name: "TOLERANCE", description: "to accept and respect those who differ from me" },
  { id: 80, name: "TRADITION", description: "to follow respected patterns of the past" },
  { id: 81, name: "VIRTUE", description: "to live a morally pure and excellent life" },
  { id: 82, name: "WEALTH", description: "to have plenty of money" },
  { id: 83, name: "WORLD PEACE", description: "to work to promote peace in the world" }
];

// State to track where each value is categorized
let categories = {
  important: [],
  veryImportant: [],
  notImportant: [],
  unsorted: [...allValues]
};

// Load saved state from localStorage
function loadSavedState() {
  const savedState = localStorage.getItem('valuesCardSort');
  if (savedState) {
    try {
      categories = JSON.parse(savedState);
    } catch (error) {
      console.error('Error loading saved state:', error);
    }
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('valuesCardSort', JSON.stringify(categories));
}

// Create a value card element
function createValueCard(value, container) {
  const card = document.createElement('div');
  card.className = 'value-card';
  card.dataset.id = value.id;
  
  card.innerHTML = `
    <h3>${value.name}</h3>
    <p>${value.description}</p>
    <div class="buttons">
      ${container === 'unsorted' ? `
        <button class="move-btn important-btn">Important</button>
        <button class="move-btn veryImportant-btn">Very Important</button>
        <button class="move-btn notImportant-btn">Not Important</button>
      ` : `
        <button class="remove-btn">Remove</button>
      `}
    </div>
  `;
  
  // Add event listeners to buttons
  if (container === 'unsorted') {
    card.querySelector('.important-btn').addEventListener('click', () => moveValue(value.id, 'important'));
    card.querySelector('.veryImportant-btn').addEventListener('click', () => moveValue(value.id, 'veryImportant'));
    card.querySelector('.notImportant-btn').addEventListener('click', () => moveValue(value.id, 'notImportant'));
  } else {
    card.querySelector('.remove-btn').addEventListener('click', () => moveValue(value.id, 'unsorted'));
  }
  
  return card;
}

// Move a value from one category to another
function moveValue(valueId, targetCategory) {
  // Find which category the value is currently in
  let sourceCategory = null;
  for (const [category, values] of Object.entries(categories)) {
    if (values.some(v => v.id === valueId)) {
      sourceCategory = category;
      break;
    }
  }
  
  if (sourceCategory === targetCategory) return;
  
  // Find the value object
  const value = categories[sourceCategory].find(v => v.id === valueId);
  
  // Remove from source category
  categories[sourceCategory] = categories[sourceCategory].filter(v => v.id !== valueId);
  
  // Add to target category
  categories[targetCategory].push(value);
  
  // Update the UI
  renderCards();
  
  // Save to localStorage
  saveState();
}

// Render all cards in their respective containers
function renderCards() {
  // Clear all containers
  document.getElementById('important-container').innerHTML = '';
  document.getElementById('veryImportant-container').innerHTML = '';
  document.getElementById('notImportant-container').innerHTML = '';
  document.getElementById('unsorted-container').innerHTML = '';
  
  // Render cards in each container
  categories.important.forEach(value => {
    const card = createValueCard(value, 'important');
    document.getElementById('important-container').appendChild(card);
  });
  
  categories.veryImportant.forEach(value => {
    const card = createValueCard(value, 'veryImportant');
    document.getElementById('veryImportant-container').appendChild(card);
  });
  
  categories.notImportant.forEach(value => {
    const card = createValueCard(value, 'notImportant');
    document.getElementById('notImportant-container').appendChild(card);
  });
  
  categories.unsorted.forEach(value => {
    const card = createValueCard(value, 'unsorted');
    document.getElementById('unsorted-container').appendChild(card);
  });
}

// Reset all cards
function resetCards() {
  categories = {
    important: [],
    veryImportant: [],
    notImportant: [],
    unsorted: [...allValues]
  };
  renderCards();
  saveState();
}

// Initialize the app
function init() {
  loadSavedState();
  renderCards();
  
  // Add event listener to reset button
  document.getElementById('resetButton').addEventListener('click', resetCards);
}

// Start the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
