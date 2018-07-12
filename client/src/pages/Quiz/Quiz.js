import React, { Component } from "react";

import QuizAPI from "../../utils/QuizAPI";


class Quiz extends Component {
  state = {
    quiz: {}
  };

  componentDidMount() {
    // this.loadQuiz();
    
  };

  loadQuiz = () => {
    QuizAPI.getQuiz(this.props.match.params.id)
      .then(res => this.setState({
        quiz: res.data
      }))
      .catch(err => console.log(err))
      alert(this.state.quiz)
  }


  render() {
    return (
      <div>
        <div>
          Testing
                <Quiz
                    // quizTitle={this.state.quizTitle}

                    // Q1={this.state.q1.question}

                    // correctQ1A1={this.state.q1.answers.answer1.correct}
                    // Q1A1={this.state.q1.answers.answer1.answer}
                    // correctQ1A2={this.state.q1.answers.answer2.correct}
                    // Q1A2={this.state.q1.answers.answer2.answer}
                    // correctQ1A3={this.state.q1.answers.answer3.correct}
                    // Q1A3={this.state.q1.answers.answer3.answer}
                    // correctQ1A4={this.state.q1.answers.answer4.correct}
                    // Q1A4={this.state.q1.answers.answer4.answer}

                    // Q2={this.state.q1.question}

                    // correctQ2A1={this.state.q2.answers.answer1.correct}
                    // Q2A1={this.state.q2.answers.answer1.answer}
                    // correctQ2A2={this.state.q2.answers.answer2.correct}
                    // Q2A2={this.state.q2.answers.answer2.answer}
                    // correctQ2A3={this.state.q2.answers.answer3.correct}
                    // Q2A3={this.state.q1.answers.answer3.answer}
                    // correctQ2A4={this.state.q2.answers.answer4.correct}
                    // Q2A4={this.state.q2.answers.answer4.answer}

                    // Q3={this.state.q1.question}

                    // correctQ3A1={this.state.q3.answers.answer1.correct}
                    // Q3A1={this.state.q3.answers.answer1.answer}
                    // correctQ3A2={this.state.q3.answers.answer2.correct}
                    // Q3A2={this.state.q3.answers.answer2.answer}
                    // correctQ3A3={this.state.q3.answers.answer3.correct}
                    // Q3A3={this.state.q3.answers.answer3.answer}
                    // correctQ3A4={this.state.q3.answers.answer4.correct}
                    // Q3A4={this.state.q3.answers.answer4.answer}
                    // handleSubmit={this.handleSubmit}
                />

            </div>
      </div>
    );

  };
};


export default Quiz;
