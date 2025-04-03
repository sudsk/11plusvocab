import React, { useState } from 'react';
import vocabularyWords from './vocabularyData';

const FlashCardApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showList, setShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlphabetical, setShowAlphabetical] = useState(false);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabularyWords.length);
    setShowDefinition(false);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vocabularyWords.length) % vocabularyWords.length);
    setShowDefinition(false);
  };

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  const toggleAlphabetical = () => {
    setShowAlphabetical(!showAlphabetical);
  };

  const filteredWords = vocabularyWords.filter(wordObj => 
    wordObj.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wordObj.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedWords = showAlphabetical 
    ? [...filteredWords].sort((a, b) => a.word.localeCompare(b.word))
    : filteredWords;

  return (
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Year 5 Vocabulary Flash Cards</h1>
      
      <div className="flex gap-4 mb-4 w-full justify-center">
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
      </div>
      
      {!showList ? (
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 flex flex-col min-h-64">
            <div className="bg-gray-200 px-4 py-2 text-sm text-gray-600">
              Card {currentIndex + 1} of {vocabularyWords.length}
            </div>
            <div className="flex-grow flex flex-col justify-center items-center p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">{vocabularyWords[currentIndex].word}</h2>
              <p className="text-gray-500 italic mb-2">{vocabularyWords[currentIndex].partOfSpeech}</p>
              
              {showDefinition && (
                <div className="mt-2 text-left w-full">
                  <p className="font-semibold">Definition:</p>
                  <p className="mb-2">{vocabularyWords[currentIndex].definition}</p>
                  <p className="font-semibold">Example:</p>
                  <p className="italic">{vocabularyWords[currentIndex].example}</p>
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
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default FlashCardApp;
