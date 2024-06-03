import React from "react";
import NavBar from "./Nav";
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
    <div className="">
            <NavBar/>
        
            <div className="flex flex-col justify-center items-center  mt-10">
        <div className="shadow-2xl p-5 bg-gray-100 lg:w-[500px] lg:h-[200px]  w-[200px] h-[400px] rounded-xl mt-10 px-6 text-center" >
      <h3 className="font-semibold text-2xl text-center">Category: <br /> {currentQuestion.category}</h3>
      <h2  className="p-7" dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h2>
        </div>
        <div className="flex mt-10 space-x-10">
      <button  className="bg-green-500 text-white p-3 rounded-2xl w-40 " onClick={() => handleAnswer("True")}>True</button>
      <button  className="bg-red-500 text-white p-3 rounded-2xl w-40" onClick={() => handleAnswer("False")}>False</button>
        </div>
            </div>
              </div>
      

  );
};

export default Question;
