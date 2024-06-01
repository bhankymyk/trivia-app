import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockApiQuestions } from "../utils/mockApidata";
// import axios from "axios";

// export const fetchQuestions = createAsyncThunk(
//   "quiz/fetchQuestions",
//   async () => {
//     const response = await axios.get(
//       "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
//     );
//     return response.data.results;
//   }
// );

// API keeps returning 429 error code, i transfer the API respose to mockAPIdata

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async () => {
    try {
      return mockApiQuestions;
    } catch (error) {
      return "Failed to fetch questions.";
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    answerQuestion: (state, action) => {
      const { isCorrect, userAnswer } = action.payload;
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (currentQuestion) {
        currentQuestion.userAnswer = userAnswer;
      }
      if (isCorrect) {
        state.score += 1;
      }
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload.map((question) => ({
          ...question,
          userAnswer: null,
        }));
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
