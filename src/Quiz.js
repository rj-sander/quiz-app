import "./Quiz.css";
import React, { useState } from "react";
import questions from "./questions";
import { CSVLink } from "react-csv";
import App from "./App";

export default function Quiz() {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuestion, setQuestion] = useState(false);
  const [showContext, setContext] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showAnswer, setAnswers] = useState(false);
  const [showButton, setButton] = useState(true);

  const handleAnswerButtonClick = (correct, choice) => {
    setAnswers(false);
    setContext(true);
    setButton(true);
    results.push(choice);
    setResults(results);
    if (correct) {
      setScore(score + 1);
    }
    console.log(results);
  };

  const nextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length - 1) {
      setCurrentQuestion(nextQuestion);
      setQuestion(true);
      setAnswers(true);
      setContext(false);
      setButton(false);
    } else {
      setAnswers(false);
      setShowScore(true);
      results.push(score);
      setResults(results);
      console.log(results);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/answers");

      xhr.setRequestHeader("Content-Type", "application/json");

      let data = JSON.stringify(results);

      xhr.send(data);
      setButton(true);
    }
  };

  let buttonText = "Start";

  if (currentQuestion > 0) {
    buttonText = "Next";
  }

  if (currentQuestion > questions.length) {
    buttonText = "Restart";
  }

  return (
    <div className="app">
      {showScore && (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      )}
      {showQuestion && (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
        </>
      )}
      {showAnswer && (
        <>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((answers, index) => (
              <button
                className="button"
                onClick={() =>
                  handleAnswerButtonClick(answers.correct, answers.choice)
                }
              >
                {answers.text}
              </button>
            ))}
          </div>
        </>
      )}
      {showContext && (
        <>
          <div className="context-section">
            {questions[currentQuestion].context}
          </div>
        </>
      )}
      {showButton && (
        <button className="button nextButton" onClick={() => nextButtonClick()}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
