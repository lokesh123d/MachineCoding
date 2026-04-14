import React, { useEffect, useState } from "react";
import quizData from "../data/quizData.json";

const QuizGame = () => {
  const [questionList, setquestionList] = useState(quizData.questions);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState({});
  const [message, setmessage] = useState("");
  const [rightAns, setrightAns] = useState(0);

  useEffect(() => {
    setcurrentQuestion(questionList[currentQuestionIndex]);
  }, [currentQuestionIndex, questionList]);

  function checkAnswer(item) {
    if (currentQuestion.correctAnswer == item) {
      setrightAns((prev) => prev + 1);
      setcurrentQuestionIndex((prev) => prev + 1);
      setmessage("");
    } else {
      setmessage("wrong answer");
    }
  }

  return (
    <div>
      <div className="header">
        <h3>{quizData.title}</h3>
        <span>Total Question : {quizData.totalQuestions}</span> |{" "}
        <span>Right Answer : {rightAns}</span> |{" "}
              {message}
      </div>

      {questionList.length > 0 &&
        questionList.length !== currentQuestionIndex && (
          <div>
            {" "}
            <div className="question">
              <h2>{currentQuestion?.question}</h2>

              {currentQuestion?.options?.map((item, index) => {
                return (
                  <button onClick={() => checkAnswer(item)} key={index}>
                    {item}
                  </button>
                );
              })}
        
            </div>
            <div>
              <span>current Question : {currentQuestionIndex + 1}</span>
              <br />
              <button
                onClick={() => setcurrentQuestionIndex((prev) => prev - 1)}
                disabled={currentQuestionIndex == 0}
              >
                Prev Question
              </button>
              <button
                onClick={
                  currentQuestionIndex != questionList.length - 1
                    ? () => setcurrentQuestionIndex((prev) => prev + 1)
                    :()=>setmessage(`You won with ${rightAns}`)
                }
              >
                {currentQuestionIndex == questionList.length - 1
                  ? "Submit Quiz"
                  : "Next Question"}
              </button>
            </div>{" "}
          </div>
        )}
    </div>
  );
};

export default QuizGame;
