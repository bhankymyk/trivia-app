import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../store/quizStore";

const Question = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const isCorrect = answer === currentQuestion.correct_answer;
    dispatch(answerQuestion({ isCorrect, userAnswer: answer }));
  };

  return (
    <div>
      <h3>Category: {currentQuestion.category}</h3>
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h2>
      <button onClick={() => handleAnswer("True")}>True</button>
      <button onClick={() => handleAnswer("False")}>False</button>
    </div>
  );
};

export default Question;
