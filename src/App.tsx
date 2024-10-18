import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

function App() {
  const [inputText, setInputText] = useState('');
  const reversedText = inputText.split('').reverse().join('');

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Text Reversal App</h1>
        <div className="mb-4">
          <label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your text:
          </label>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
          />
        </div>
        <div className="mb-4 flex items-center justify-center">
          <ArrowRightLeft className="text-gray-500" size={24} />
        </div>
        <div className="mb-4">
          <label htmlFor="reversedText" className="block text-sm font-medium text-gray-700 mb-2">
            Reversed text:
          </label>
          <div
            id="reversedText"
            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
          >
            {reversedText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;