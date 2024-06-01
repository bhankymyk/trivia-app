import axios from "axios";

export const getQuestions = async () => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
  return response.data.results;
};
