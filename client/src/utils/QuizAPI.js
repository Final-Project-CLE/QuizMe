import axios from "axios";

export default {
  // Gets all quizzes
  getQuizzes: function () {
    return axios.get("/api/quiz");
  },
  // Gets the book with the given id
  getQuiz: function (id) {
    return axios.get("/api/quiz/" + id);
  },
  // Deletes the book with the given id
  deleteQuiz: function (id) {
    return axios.delete("/api/quiz/" + id);
  },
  // Saves a book to the database
  saveQuiz: function (quizData) {
    return axios.post("/api/books", quizData);
  }
};
