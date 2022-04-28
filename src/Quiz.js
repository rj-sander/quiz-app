// import "./Quiz.css";
import React, { useState } from "react";
import questions from "./questions";

export default function Quiz() {
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
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
    if (nextQuestion < questions.length) {
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

  if (currentQuestion > questions.length - 2) {
    buttonText = "Finish";
  }

  return (
    <body class="bg-gradient-to-r from-indigo-200 to-blue-100">
      <div class="h-screen py-6 snap-y">
        <div class="bg-red-300 lg:w-2/3 w-3/4 p-6 m-auto rounded-xl shadow-lg grid grid-cols-1m-6 justify-items-center h-full text-slate-50 leading-loose snap-center">
          {showScore && (
            <div className="score-section pt-6 text-center mx-auto space-y-4">
              <p>
                You scored {score} out of {questions.length}
              </p>
            </div>
          )}
          {showQuestion && (
            <>
              <div className="question-section mx-auto">
                <div className="question-count">
                  <span className="">Question {currentQuestion + 1}</span>/
                  {questions.length}
                </div>
                <div className="question-text">
                  <p className="font-bold">
                    {questions[currentQuestion].question}
                  </p>
                </div>
              </div>
            </>
          )}
          {showAnswer && (
            <>
              <div className="answer-section grid grid-cols-2">
                {questions[currentQuestion].answers.map((answers, index) => (
                  <button
                    className="h-10 font-semibold rounded-md bg-sky-700"
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
              <div className="context-section ">
                {questions[currentQuestion].context}
              </div>
            </>
          )}
          {showButton && (
            <>
              <div className="mx-auto">
                <button
                  className="h-10 px-10 font-semibold rounded-md bg-sky-700"
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      nextButtonClick();
                    } else {
                      window.location.href = "/results";
                    }
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </body>
  );
}
