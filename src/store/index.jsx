import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizStore";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
