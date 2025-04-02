// DOM Elements
const wordDisplay = document.getElementById('wordDisplay');
const partOfSpeechDisplay = document.getElementById('partOfSpeechDisplay');
const definitionDisplay = document.getElementById('definitionDisplay');
const exampleDisplay = document.getElementById('exampleDisplay');
const definitionSection = document.getElementById('definitionSection');
const currentCardNum = document.getElementById('currentCardNum');
const totalCards = document.getElementById('totalCards');
const toggleDefinitionBtn = document.getElementById('toggleDefinition');
const toggleListBtn = document.getElementById('toggleList');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const flashCardView = document.getElementById('flashCardView');
const listView = document.getElementById('listView');
const searchInput = document.getElementById('searchInput');
const toggleAlphabeticalBtn = document.getElementById('toggleAlphabetical');
const wordList = document.getElementById('wordList');

// State variables
let currentIndex = 0;
let showDefinition = false;
let isAlphabetical = false;
let filteredWords = [];

// Initialize the app
function initApp() {
    // Set total cards count
    totalCards.textContent = vocabularyWords.length;
    
    // Display first card
    displayCurrentCard();
    
    // Initialize filtered words
    filteredWords = [...vocabularyWords];
    
    // Setup event listeners
    setupEventListeners();
}

// Display the current flash card
function displayCurrentCard() {
    const currentWord = vocabularyWords[currentIndex];
    wordDisplay.textContent = currentWord.word;
    partOfSpeechDisplay.textContent = currentWord.partOfSpeech;
    definitionDisplay.textContent = currentWord.definition;
    exampleDisplay.textContent = currentWord.example;
    currentCardNum.textContent = currentIndex + 1;
}

// Toggle definition visibility
function toggleDefinitionVisibility() {
    showDefinition = !showDefinition;
    if (showDefinition) {
        definitionSection.classList.remove('hidden');
        toggleDefinitionBtn.textContent = 'Hide Definition';
    } else {
        definitionSection.classList.add('hidden');
        toggleDefinitionBtn.textContent = 'Show Definition';
    }
}

// Toggle between flash card and list view
function toggleView() {
    const isShowingList = flashCardView.classList.contains('hidden');
    
    if (isShowingList) {
        // Switch to flash card view
        listView.classList.add('hidden');
        flashCardView.classList.remove('hidden');
        toggleListBtn.textContent = 'Show Word List';
    } else {
        // Switch to list view
        flashCardView.classList.add('hidden');
        listView.classList.remove('hidden');
        toggleListBtn.textContent = 'Show Cards';
        renderWordList();
    }
}

// Navigate to next card
function nextCard() {
    currentIndex = (currentIndex + 1) % vocabularyWords.length;
    displayCurrentCard();
    if (showDefinition) {
        definitionSection.classList.remove('hidden');
    }
}

// Navigate to previous card
function prevCard() {
    currentIndex = (currentIndex - 1 + vocabularyWords.length) % vocabularyWords.length;
    displayCurrentCard();
    if (showDefinition) {
        definitionSection.classList.remove('hidden');
    }
}

// Filter word list based on search input
function filterWords() {
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredWords = vocabularyWords.filter(word => 
        word.word.toLowerCase().includes(searchTerm) || 
        word.definition.toLowerCase().includes(searchTerm)
    );
    
    renderWordList();
}

// Toggle alphabetical sorting
function toggleAlphabetical() {
    isAlphabetical = !isAlphabetical;
    
    if (isAlphabetical) {
        toggleAlphabeticalBtn.textContent = 'Show Original Order';
    } else {
        toggleAlphabeticalBtn.textContent = 'Sort Alphabetically';
    }
    
    renderWordList();
}

// Render the word list
function renderWordList() {
    // Clear current list
    wordList.innerHTML = '';
    
    // Sort if needed
    let displayWords = [...filteredWords];
    if (isAlphabetical) {
        displayWords.sort((a, b) => a.word.localeCompare(b.word));
    }
    
    // Create word items
    displayWords.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        
        wordItem.innerHTML = `
            <div class="word">${word.word} <span class="part-of-speech">(${word.partOfSpeech})</span></div>
            <div class="definition">${word.definition}</div>
        `;
        
        wordList.appendChild(wordItem);
    });
    
    // Show message if no results
    if (displayWords.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No words match your search.';
        wordList.appendChild(noResults);
    }
}

// Setup all event listeners
function setupEventListeners() {
    toggleDefinitionBtn.addEventListener('click', toggleDefinitionVisibility);
    toggleListBtn.addEventListener('click', toggleView);
    prevButton.addEventListener('click', prevCard);
    nextButton.addEventListener('click', nextCard);
    searchInput.addEventListener('input', filterWords);
    toggleAlphabeticalBtn.addEventListener('click', toggleAlphabetical);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
