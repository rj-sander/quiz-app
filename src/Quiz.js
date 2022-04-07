import "./Quiz.css";
import React, { useState } from "react";
import questions from "./questions";

export default function Quiz() {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuestion, setQuestion] = useState(false);
  const [showContext, setContext] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showAnswer, setAnswers] = useState(false);
  const [showButton, setButton] = useState(true);
  const [correctText, setCorrectText] = useState(false);
  const [wrongText, setWrongText] = useState(false);

  const handleAnswerButtonClick = (correct, choice) => {
    if (correct) {
      setCorrectText(true);
      setScore(score + 1);
    } else {
      setWrongText(true);
    }
    setAnswers(false);
    setContext(true);
    setButton(true);
    results.push(choice);
    setResults(results);
    console.log(results);
  };

  const nextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setCorrectText(false);
    setWrongText(false);
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
    <div className="app bg-stone-300 p-6 max-w-2xl mx-auto rounded-xl shadow-lg space-x-4 flex flex-col space-y-4 m-6">
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
              <p className="font-bold">{questions[currentQuestion].question}</p>
            </div>
          </div>
        </>
      )}
      {showAnswer && (
        <>
          <div className="answer-section grid gap-4 grid-cols-2">
            {questions[currentQuestion].answers.map((answers, index) => (
              <button
                className="button bg-white p-6 rounded-sm font-mono m-6"
                onClick={() =>
                  handleAnswerButtonClick(answers.correct, answers.choice)
                }
              >
                <p>{answers.text}</p>
              </button>
            ))}
          </div>
        </>
      )}
      {correctText && <p>Correct!</p>}
      {wrongText && <p>Incorrect!</p>}
      {showContext && (
        <>
          <div className="context-section">
            {questions[currentQuestion].context}
          </div>
        </>
      )}
      {showButton && (
        <button
          className="button nextButton bg-white p-6 rounded-sm font-mono m-6"
          onClick={() => nextButtonClick()}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
