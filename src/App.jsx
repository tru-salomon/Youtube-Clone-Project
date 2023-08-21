import { useState } from 'react'
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.css'

function App() {
  const userInput = 'Examplee'; // Simulated misspelling

  // Set a condition for displaying the ErrorPage component (when there's a misspelling)
  const showErrorPage = userInput.includes('Examplee'); // Change this to your specific misspelled word

  return (
    <>
      {showErrorPage ? (
        <ErrorPage /> // Render ErrorPage when showErrorPage is true
      ) : (

        <div>
          {/* Content to display when showErrorPage is false */}
        
          <h1>Welcome to My App</h1>
          <p>Type the correct word: {userInput}</p>
        </div>
      )}
    </>
  );
}

export default App;