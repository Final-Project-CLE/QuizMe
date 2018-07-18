import React, { Component } from "react";

import QuizAPI from "../../utils/QuizAPI";
import Quiz from "../../components/Quiz/Quiz";

let Q1Correct = "";
let Q2Correct = "";
let Q3Correct = "";
let score = 0;

class QuizPage extends Component {
    constructor(props){
        super(props);
    this.state = {
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
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
}

    handleSubmit() {
        alert("You got " + score + " out of 3 correct.")
        score = 0;
        window.location.reload();
    }

    handleClick1(event) {
        Q1Correct = event.target.value;
        
        if (Q1Correct === "true"){
            score++
        }
    }


    handleClick2(event) {
        Q2Correct = event.target.value;
        
        if (Q2Correct === "true"){
            score++
        }
    }

    handleClick3(event) {
        Q3Correct = event.target.value;
        
        if (Q3Correct === "true"){
            score++
        }
    }

    componentDidMount() {
        QuizAPI.getQuiz(this.props.match.params.id)
            .then(res => {
                this.setState({ quiz: res.data })             
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            
                <div>
                    <Quiz
                        quizTitle={this.state.quiz.quizTitle}

                        Q1={this.state.quiz.q1.question}
                        handleClick1={this.handleClick1}

                        correctQ1A1={this.state.quiz.q1.answers.answer1.correct}
                        Q1A1={this.state.quiz.q1.answers.answer1.answer}
                        
                        correctQ1A2={this.state.quiz.q1.answers.answer2.correct}
                        Q1A2={this.state.quiz.q1.answers.answer2.answer}
                        correctQ1A3={this.state.quiz.q1.answers.answer3.correct}
                        Q1A3={this.state.quiz.q1.answers.answer3.answer}
                        correctQ1A4={this.state.quiz.q1.answers.answer4.correct}
                        Q1A4={this.state.quiz.q1.answers.answer4.answer}

                        Q2={this.state.quiz.q2.question}
                        handleClick2={this.handleClick2}

                        correctQ2A1={this.state.quiz.q2.answers.answer1.correct}
                        Q2A1={this.state.quiz.q2.answers.answer1.answer}
                        correctQ2A2={this.state.quiz.q2.answers.answer2.correct}
                        Q2A2={this.state.quiz.q2.answers.answer2.answer}
                        correctQ2A3={this.state.quiz.q2.answers.answer3.correct}
                        Q2A3={this.state.quiz.q2.answers.answer3.answer}
                        correctQ2A4={this.state.quiz.q2.answers.answer4.correct}
                        Q2A4={this.state.quiz.q2.answers.answer4.answer}

                        Q3={this.state.quiz.q3.question}
                        handleClick3={this.handleClick3}

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
            
        );

    };
};


export default QuizPage;
