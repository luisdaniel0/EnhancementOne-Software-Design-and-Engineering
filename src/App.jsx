/*
  File: App.js
  Programmer: Luis Sanchez
  Contact: luisanchezdh@gmail.com
  Date: 10/10/2024
  Version: 1.0
  Purpose: This file contains the main component for the Trivia App, a quiz game where users guess the artist based on album covers. The app utilizes React's useState to manage the state of the quiz, track the score, and handle game flow. 
  Issues: Enhancement involves refactoring the original code from vanilla JavaScript to React with modular components, improved state management using React hooks, and dynamic rendering.
*/

import React, { useState } from 'react';  // Importing React and useState hook
import './App.css';  // Importing CSS styles for the app
import MBDTF from "./assets/MBDTF.jpeg";  // Importing images for album covers
import xxx from "./assets/17_xxxtentacion.png";
import illmaticNas from "./assets/IllmaticNas.jpeg";
import readyToDie from "./assets/Ready_To_Die.jpeg";
import TLOP from "./assets/The_life_of_pablo_alternate.jpeg";
import trilogy from "./assets/trilogy.png";
import GRODT from "./assets/Get-rich-or-die-tryin.jpeg";
import carter from "./assets/Carter3.jpeg";
import blond from "./assets/blond.jpeg";
import cam from "./assets/come-home-with-me.jpeg";

// Questions array containing album details, possible answers, and the correct answer for each question
const questions = [
  // Example question object format: question, image, possible answers, correct answer
  {
    question: "Illmatic (1994)",  // The question or album name
    img: illmaticNas,  // Album cover image
    a: "Biggie",  // Possible answer A
    b: "Jay Z",  // Possible answer B
    c: "Drake",  // Possible answer C
    d: "Nas",  // Possible answer D
    answer: "D",  // Correct answer (Nas)
  },
  // Additional questions follow...
];

function App() {
  // State to manage quiz position, score, game start state, selected answer, and quiz completion
  const [pos, setPos] = useState(0);  // Current question index
  const [correct, setCorrect] = useState(0);  // Tracks score (correct answers)
  const [gameStarted, setGameStarted] = useState(false);  // Whether the game has started
  const [selectedChoice, setSelectedChoice] = useState('');  // Tracks the selected answer
  const [quizFinished, setQuizFinished] = useState(false);  // Tracks if the quiz is finished

  // Function to handle starting the game, resets the quiz
  const handleStartGame = () => {
    setGameStarted(true);
    setPos(0);  // Reset the question position
    setCorrect(0);  // Reset the score
  };

  // Function to track the selected answer
  const handleChoiceChange = (e) => {
    setSelectedChoice(e.target.value);  // Updates the selected answer when the user clicks a radio button
  };

  // Function to check the answer and move to the next question
  const checkAnswer = () => {
    if (selectedChoice === questions[pos].answer) {
      setCorrect(correct + 10);  // Add 10 points for each correct answer
    }
    if (pos < questions.length - 1) {
      setPos(pos + 1);  // Move to the next question if there are more questions
    } else {
      // End of the quiz, display the score
      setGameStarted(false);  
      setQuizFinished(true);  // Mark the quiz as finished
    }
    setSelectedChoice('');  // Clear the selected choice for the next question
  };

  return (
    <div className="App">
      <h1>Guess the Artist by their Albums</h1>
      <h1 className="rules">
        Choose one of four choices <br />
        Use the album covers as hints
      </h1>

      {/* Show the "Play Now" button before the game starts */}
      {!gameStarted && !quizFinished ? (
        <button className="playNow button" onClick={handleStartGame}>
          Play Now!
        </button>
      ) : null}

      {/* Render the current question and choices when the game is started */}
      {gameStarted && (
        <div>
          <div id="test_status">
            Question {pos + 1} of {questions.length}  {/* Display current question number */}
          </div>

          {/* Show album cover image */}
          <img
            className="questionImg"
            src={questions[pos].img}
            alt="Album cover"
          />

          <div id="test">
            <h3>{questions[pos].question}</h3>

            {/* Radio buttons for answer choices */}
            <label>
              <input
                type="radio"
                name=""
                value="A"
                onChange={handleChoiceChange}
                checked={selectedChoice === 'A'}
              />
              {questions[pos].a}
            </label>
            <br />

            <label>
              <input
                type="radio"
                name=""
                value="B"
                onChange={handleChoiceChange}
                checked={selectedChoice === 'B'}
              />
              {questions[pos].b}
            </label>
            <br />

            <label>
              <input
                type="radio"
                name=""
                value="C"
                onChange={handleChoiceChange}
                checked={selectedChoice === 'C'}
              />
              {questions[pos].c}
            </label>
            <br />

            <label>
              <input
                type="radio"
                name=""
                value="D"
                onChange={handleChoiceChange}
                checked={selectedChoice === 'D'}
              />
              {questions[pos].d}
            </label>
            <br />
            <button className="submit answer button" onClick={checkAnswer}>
              Submit Answer  {/* Button to submit the selected answer */}
            </button>
          </div>
        </div>
      )}

      {/* Display the score when the quiz is finished */}
      {quizFinished && (
        <div>
          <h2>You got a score of {correct}/100!</h2>
          <button className="restart button" onClick={handleStartGame}>
            Restart  {/* Button to restart the quiz */}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;  // Export the App component as the default export
