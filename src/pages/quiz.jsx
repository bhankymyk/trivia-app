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
    <div>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <Question />
      )}
      <div>Current Score: {score}</div>

      <h2>
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
    </div>
  );
};

export default Quiz;
