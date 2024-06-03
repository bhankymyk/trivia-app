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
    <div className="px-[6rem] mt-5">
      <h2 className="text-bold text-2xl">
        Your Scored {score} / {questions.length}
      </h2>

      <div className="mt-10">
        <h2 className="text-yellow-500 text-2xl">Questions and Answers Review</h2>
        {questions.map((question, index) => (
          <div key={index} className="mt-5">
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
          <Link to="/" className="bg-yellow-500 p-5 text-white rounded-2xl lg:w-40">
            Play Again?
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Results;
