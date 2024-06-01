import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <h2 className="text-5xl bg-blue-500"> Welcome to the trivia challenge</h2>
      <h4>You will be presented with 10 True or false question</h4>
      <h4>Can you score 100%</h4>
      <Link to="/quiz">
        <p>BEGIN</p>
      </Link>
    </div>
  );
}
