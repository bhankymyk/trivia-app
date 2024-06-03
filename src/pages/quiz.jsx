import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/quizStore";
import Question from "../components/question";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, status, error, score } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length && questions.length > 0) {
      navigate("/result");
    }
  }, [currentQuestionIndex, questions.length, navigate]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load questions: {error}</div>;
  }

  return (
    <div className="">
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <Question />
      )}
      <div className="flex flex-col justify-center items-center  mt-5">

      <div className="mt-5">Current Score: {score}</div>

        <div className="w-40 mt-5">
      <h2 className="bg-yellow-500  p-5 rounded-2xl text-white">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      </div>

        </div>
    </div>
  );
};

export default Quiz;
