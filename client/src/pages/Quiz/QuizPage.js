import React, { Component } from "react";

import QuizAPI from "../../utils/QuizAPI";
import Quiz from "../../components/Quiz/Quiz";

class QuizPage extends Component {
  state = {
    quiz: {
        "quizTitle": "",
        "author": "",
        "q1": {
            "question": "",
            "answers": {
                "answer1": {
                    "answer": "",
                    "correct": ""
                },
                "answer2": {
                    "answer": "",
                    "correct": ""
                },
                "answer3": {
                    "answer": "",
                    "correct": ""
                },
                "answer4": {
                    "answer": "",
                    "correct": ""
                }
            }
        },
        "q2": {
            "question": "",
            "answers": {
                "answer1": {
                    "answer": "",
                    "correct": ""
                },
                "answer2": {
                    "answer": "",
                    "correct": ""
                },
                "answer3": {
                    "answer": "",
                    "correct": ""
                },
                "answer4": {
                    "answer": "",
                    "correct": ""
                }
            }
        },
        "q3": {
            "question": "",
            "answers": {
                "answer1": {
                    "answer": "",
                    "correct": ""
                },
                "answer2": {
                    "answer": "",
                    "correct": ""
                },
                "answer3": {
                    "answer": "",
                    "correct": ""
                },
                "answer4": {
                    "answer": "",
                    "correct": ""
                }
            }
        }
    }
  };

  componentDidMount() {
    QuizAPI.getQuiz(this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({ quiz: res.data })
        console.log("After set state:" + JSON.stringify(this.state.quiz))
      })
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    QuizAPI.getQuiz(this.props.match.params.id)
      .then(({ data }) => {
        this.setState({
          [name]: value,
          quiz: data
        })
      });
  }


  render() {
    return (
      <div>
        <div>
          <Quiz
          quizTitle={this.state.quiz.quizTitle}

          Q1={this.state.quiz.q1.question}

          correctQ1A1={this.state.quiz.q1.answers.answer1.correct}
          Q1A1={this.state.quiz.q1.answers.answer1.answer}
          correctQ1A2={this.state.quiz.q1.answers.answer2.correct}
          Q1A2={this.state.quiz.q1.answers.answer2.answer}
          correctQ1A3={this.state.quiz.q1.answers.answer3.correct}
          Q1A3={this.state.quiz.q1.answers.answer3.answer}
          correctQ1A4={this.state.quiz.q1.answers.answer4.correct}
          Q1A4={this.state.quiz.q1.answers.answer4.answer}

          Q2={this.state.quiz.q1.question}

          correctQ2A1={this.state.quiz.q2.answers.answer1.correct}
          Q2A1={this.state.quiz.q2.answers.answer1.answer}
          correctQ2A2={this.state.quiz.q2.answers.answer2.correct}
          Q2A2={this.state.quiz.q2.answers.answer2.answer}
          correctQ2A3={this.state.quiz.q2.answers.answer3.correct}
          Q2A3={this.state.quiz.q1.answers.answer3.answer}
          correctQ2A4={this.state.quiz.q2.answers.answer4.correct}
          Q2A4={this.state.quiz.q2.answers.answer4.answer}

          Q3={this.state.quiz.q1.question}

          correctQ3A1={this.state.quiz.q3.answers.answer1.correct}
          Q3A1={this.state.quiz.q3.answers.answer1.answer}
          correctQ3A2={this.state.quiz.q3.answers.answer2.correct}
          Q3A2={this.state.quiz.q3.answers.answer2.answer}
          correctQ3A3={this.state.quiz.q3.answers.answer3.correct}
          Q3A3={this.state.quiz.q3.answers.answer3.answer}
          correctQ3A4={this.state.quiz.q3.answers.answer4.correct}
          Q3A4={this.state.quiz.q3.answers.answer4.answer}
          handleSubmit={this.handleSubmit}
          />

        </div>
      </div>
    );

  };
};


export default QuizPage;
