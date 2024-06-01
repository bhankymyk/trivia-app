import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../store/quizStore";
import { Link } from "react-router-dom";

const Results = () => {
  const dispatch = useDispatch();
  const { questions, score } = useSelector((state) => state.quiz);

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  return (
    <div>
      <h2>
        Your Scored {score} / {questions.length}
      </h2>

      <div className="mt-10">
        <h2>Questions and Answers Review</h2>
        {questions.map((question, index) => (
          <div key={index} className="mb-5">
            <p>
              <strong>Question:</strong> {question.question}
            </p>
            <p>
              <strong>Category:</strong> {question.category}
            </p>
            <p>
              <strong>Your Answer:</strong> {question.userAnswer}
            </p>
            <p>
              <strong>Correct Answer:</strong> {question.correct_answer}
            </p>
            <p
              className={
                question.userAnswer
                  ? question.userAnswer.toLowerCase() ===
                    question.correct_answer.toLowerCase()
                    ? "text-green-500 font-bold"
                    : "text-red-500 font-bold"
                  : ""
              }
            >
              {question.userAnswer
                ? question.userAnswer.toLowerCase() ===
                  question.correct_answer.toLowerCase()
                  ? "Correct"
                  : "Incorrect"
                : ""}
            </p>
          </div>
        ))}
        <button onClick={handleReset} className="mt-5">
          <Link to="/" className="text-blue-500">
            Play Again?
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Results;
