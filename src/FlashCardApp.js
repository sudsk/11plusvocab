import React, { useState, useEffect } from 'react'; // Add useEffect import
//import vocabularyWords from './vocabularyData';

const FlashCardApp = () => {
  // Original state variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlphabetical, setShowAlphabetical] = useState(false);

  // Add these hooks at the top of your component:
  const [vocabularyWords, setVocabularyWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // New state variables for randomness
  const [isRandomized, setIsRandomized] = useState(false);
  const [randomizedWords, setRandomizedWords] = useState([]);
  
  // New state variables for quiz feature
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizWords, setQuizWords] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizLength, setQuizLength] = useState(10); // Default quiz length
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizOptions, setQuizOptions] = useState([]);

  const [jumpToCard, setJumpToCard] = useState('');

  // Add this useEffect to load data:
  useEffect(() => {
    const loadVocabulary = async () => {
      try {
        const response = await fetch('./vocabularyData.json');
        if (!response.ok) {
          throw new Error('Failed to load vocabulary data');
        }
        const data = await response.json();
        
        // Deduplicate here
        const deduplicatedData = removeDuplicates(data);
        setVocabularyWords(deduplicatedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    loadVocabulary();
  }, []);
  
  // Add the deduplication function to your component:
  const removeDuplicates = (wordArray) => {
    const wordMap = new Map();
    
    return wordArray.filter(wordObj => {
      const lowerCaseWord = wordObj.word.toLowerCase();
      
      if (!wordMap.has(lowerCaseWord)) {
        wordMap.set(lowerCaseWord, true);
        return true;
      }
      
      return false;
    });
  };

  const handleJumpToCard = () => {
    const cardNumber = parseInt(jumpToCard);
    if (cardNumber >= 1 && cardNumber <= displayWords.length) {
      setCurrentIndex(cardNumber - 1); // Convert to 0-based index
      setJumpToCard('');
      setShowDefinition(false);
    }
  };

  // Function to shuffle cards
  const shuffleCards = () => {
    // Create a copy of the original array
    const shuffled = [...vocabularyWords];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setRandomizedWords(shuffled);
    setIsRandomized(true);
    setCurrentIndex(0); // Reset to first card
    setShowDefinition(false); // Hide definition
  };

  // Determine which word array to use
  const displayWords = isRandomized ? randomizedWords : vocabularyWords;

  // Original navigation functions, updated to use the correct array
  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayWords.length);
    setShowDefinition(false);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + displayWords.length) % displayWords.length);
    setShowDefinition(false);
  };

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  const toggleList = () => {
    setShowList(!showList);
    if (!showList) {
      setShowQuiz(false); // Exit quiz mode when showing list
    }
  };

  const toggleAlphabetical = () => {
    setShowAlphabetical(!showAlphabetical);
  };

  // Quiz functions
  const startQuiz = () => {
    // Create a copy of all words and shuffle them
    const allWords = [...vocabularyWords];
    for (let i = allWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
    }
    
    // Take only the number of words needed for the quiz
    const selectedWords = allWords.slice(0, quizLength);
    setQuizWords(selectedWords);
    
    // Reset quiz state
    setCurrentQuizIndex(0);
    setScore(0);
    setQuizComplete(false);
    setSelectedOption(null);
    
    // Generate options for the first question
    generateQuizOptions(selectedWords, 0);
    
    // Show quiz view
    setShowQuiz(true);
    setShowList(false);
  };

  // Function to generate multiple-choice options for a question
  const generateQuizOptions = (words, index) => {
    const correctWord = words[index];
    
    // Get 3 random incorrect definitions
    const otherWords = vocabularyWords.filter(word => word.word !== correctWord.word);
    const shuffledWords = [...otherWords];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }
    
    // Create options array with the correct answer and 3 wrong answers
    const options = [
      { definition: correctWord.definition, isCorrect: true },
      { definition: shuffledWords[0].definition, isCorrect: false },
      { definition: shuffledWords[1].definition, isCorrect: false },
      { definition: shuffledWords[2].definition, isCorrect: false }
    ];
    
    // Shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    setQuizOptions(options);
  };

  // Function to handle option selection in the quiz
  const handleOptionSelect = (option, index) => {
    setSelectedOption(index);
    
    // Update score if correct
    if (option.isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  // Function to move to the next question
  const nextQuestion = () => {
    const nextIndex = currentQuizIndex + 1;
    
    if (nextIndex < quizWords.length) {
      setCurrentQuizIndex(nextIndex);
      setSelectedOption(null);
      generateQuizOptions(quizWords, nextIndex);
    } else {
      // Quiz is complete
      setQuizComplete(true);
    }
  };

  // Original filtering for word list
  const filteredWords = vocabularyWords.filter(wordObj => 
    wordObj.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wordObj.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedWords = showAlphabetical 
    ? [...filteredWords].sort((a, b) => a.word.localeCompare(b.word))
    : filteredWords;

  // Add loading state to your render:
  if (loading) {
    return <div className="flex justify-center items-center h-64 text-xl">Loading vocabulary...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-64 text-red-500 text-xl">Error: {error}</div>;
  }

  // Add safety check for empty vocabulary
  if (vocabularyWords.length === 0) {
    return <div className="flex justify-center items-center h-64 text-xl">No vocabulary words found.</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Year 5 Vocabulary Flash Cards</h1>
      
      {/* Main control buttons */}
      <div className="flex gap-4 mb-4 w-full justify-center flex-wrap">
        {!showQuiz && (
          <>
            <button 
              onClick={toggleDefinition}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {showDefinition ? "Hide Definition" : "Show Definition"}
            </button>
            <button 
              onClick={toggleList}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {showList ? "Show Cards" : "Show Word List"}
            </button>
            <button 
              onClick={shuffleCards}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Shuffle Cards
            </button>
          </>
        )}
        
        {/* Quiz buttons - show only when not in quiz mode */}
        {!showQuiz && !showList && (
          <div className="flex gap-4 mt-2 w-full justify-center">
            <button 
              onClick={() => {
                setQuizLength(10);
                startQuiz();
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Quick Quiz (10 words)
            </button>
            <button 
              onClick={() => {
                setQuizLength(20);
                startQuiz();
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              Full Quiz (20 words)
            </button>
          </div>
        )}
      </div>
      
      {/* Flash Card View */}
      {!showList && !showQuiz ? (
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 flex flex-col min-h-64">
            <div className="bg-gray-200 px-4 py-2 text-sm text-gray-600">
              Card {currentIndex + 1} of {displayWords.length}
              {isRandomized && <span className="ml-2 text-blue-600">(Shuffled)</span>}
            </div>
            <div className="flex-grow flex flex-col justify-center items-center p-6 pb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">{displayWords[currentIndex]?.word}</h2>
              <p className="text-gray-500 italic mb-2">{displayWords[currentIndex]?.partOfSpeech}</p>
              
              {showDefinition && (
                <div className="mt-2 text-left w-full">
                  <p className="font-semibold">Definition:</p>
                  <p className="mb-2">{displayWords[currentIndex]?.definition}</p>
                  <p className="font-semibold">Example:</p>
                  <p className="italic">{displayWords[currentIndex]?.example}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <button 
              onClick={handlePrevCard}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Previous
            </button>
            <button 
              onClick={handleNextCard}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
          {/* ADD THE JUMP BOX HERE */}
          <div className="flex justify-center mt-2 gap-2 items-center">
            <label className="text-sm">Jump To:</label>
            <input 
              type="number" 
              min="1" 
              max={displayWords.length}
              value={jumpToCard}
              onChange={(e) => setJumpToCard(e.target.value)}
              className="w-16 p-1 border rounded text-center"
              placeholder="1"
            />
            <button 
              onClick={handleJumpToCard}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
            >
              Go
            </button>
          </div>                
        </div>
      ) : showList ? (
        /* Word List View */
        <div className="w-full">
          <div className="mb-4 flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search words or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 border rounded"
            />
            <button 
              onClick={toggleAlphabetical}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              {showAlphabetical ? "Show Original Order" : "Sort Alphabetically"}
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-300">
            <h2 className="text-xl font-bold mb-4">Vocabulary Word List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedWords.map((wordObj, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="font-bold">{wordObj.word} <span className="text-gray-500 text-sm italic">({wordObj.partOfSpeech})</span></div>
                  <div className="text-sm">{wordObj.definition}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Quiz View */
        <div className="w-full max-w-2xl mx-auto">
          {!quizComplete ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-300">
              <div className="bg-gray-200 px-4 py-2 flex justify-between">
                <div className="text-sm text-gray-600">Question {currentQuizIndex + 1} of {quizWords.length}</div>
                <div className="text-sm text-gray-600">Score: {score}/{quizWords.length}</div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">{quizWords[currentQuizIndex]?.word}</h2>
                <p className="text-gray-500 italic text-center mb-6">{quizWords[currentQuizIndex]?.partOfSpeech}</p>
                
                <p className="mb-4 font-medium">What is the definition of this word?</p>
                
                <div className="space-y-3">
                  {quizOptions.map((option, index) => (
                    <div 
                      key={index} 
                      onClick={() => selectedOption === null && handleOptionSelect(option, index)}
                      className={`p-3 border rounded cursor-pointer transition-colors ${
                        selectedOption === null 
                          ? 'hover:bg-gray-100' 
                          : selectedOption === index 
                            ? (option.isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500')
                            : option.isCorrect && 'bg-green-100 border-green-500'
                      }`}
                    >
                      {option.definition}
                    </div>
                  ))}
                </div>
                
                {selectedOption !== null && (
                  <div className="mt-6 flex justify-center">
                    <button 
                      onClick={nextQuestion}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                    >
                      {currentQuizIndex === quizWords.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
              <p className="text-xl mb-6">Your score: {score} out of {quizWords.length}</p>
              <p className="mb-6">
                {score === quizWords.length 
                  ? 'Perfect score! Amazing work!' 
                  : score >= quizWords.length * 0.8 
                    ? 'Great job! You know these words well!' 
                    : score >= quizWords.length * 0.6 
                      ? 'Good effort! Keep practicing these words.' 
                      : 'Keep studying! You\'ll get better with practice.'}
              </p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                <button 
                  onClick={() => {
                    setQuizLength(10);
                    startQuiz();
                  }}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Try Again (10 Words)
                </button>
                <button 
                  onClick={() => {
                    setQuizLength(20);
                    startQuiz();
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Try Again (20 Words)
                </button>
                <button 
                  onClick={() => {
                    setShowQuiz(false);
                  }}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Back to Cards
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FlashCardApp;
