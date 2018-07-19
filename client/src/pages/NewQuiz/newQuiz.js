import React, { Component } from "react";
import quizAPI from "../../utils/QuizAPI";
import { Input, Button, Label, FormGroup } from 'reactstrap';
import "./newQuiz.css"

// let quizSeed = {
//   "quizTitle": this.state.quizTitle,
//   "author": this.state.author,
//   "q1": {
//     "question": this.state.question1,
//     "answers": {
//       "answer1": {
//         "answer": this.state.answerq1a1,
//         "correct": this.state.correctq1a1
//       },
//       "answer2": {
//         "answer": this.state.answerq1a2,
//         "correct": this.state.correctq1a2
//       },
//       "answer3": {
//         "answer": this.state.answerq1a3,
//         "correct": this.state.correctq1a3
//       },
//       "answer4": {
//         "answer": this.state.answerq1a4,
//         "correct": this.state.correctq1a4
//       }
//     }
//   },
//   "q2": {
//     "question": this.state.question2,
//     "answers": {
//       "answer1": {
//         "answer": this.state.answerq2a1,
//         "correct": this.state.correctq2a1
//       },
//       "answer2": {
//         "answer": this.state.answerq2a2,
//         "correct": this.state.correctq2a2
//       },
//       "answer3": {
//         "answer": this.state.answerq2a3,
//         "correct": this.state.correctq2a3
//       },
//       "answer4": {
//         "answer": this.state.answerq2a4,
//         "correct": this.state.correctq2a4
//       }
//     }
//   },
//   "q3": {
//     "question": this.state.question3,
//     "answers": {
//       "answer1": {
//         "answer": this.state.answerq3a1,
//         "correct": this.state.correctq3a1
//       },
//       "answer2": {
//         "answer": this.state.answerq3a2,
//         "correct": this.state.correctq3a2
//       },
//       "answer3": {
//         "answer": this.state.answerq3a3,
//         "correct": this.state.correctq3a3
//       },
//       "answer4": {
//         "answer": this.state.answerq3a4,
//         "correct": this.state.correctq3a4
//       }
//     }
//   }
// }

class newQuiz extends Component {
  state = {
    title: "",
    author: "",
    question1: "",
    answerq1a1: "",
    correctq1a1: "",
    answerq1a2: "",
    correctq1a2: "",
    answerq1a3: "",
    correctq1a3: "",
    answerq1a4: "",
    correctq1a4: "",

    question2: "",
    answerq2a1: "",
    correctq2a1: "",
    answerq2a2: "",
    correctq2a2: "",
    answerq2a3: "",
    correctq2a3: "",
    answerq2a4: "",
    correctq2a4: "",

    question3: "",
    answerq3a1: "",
    correctq3a1: "",
    answerq3a2: "",
    correctq3a2: "",
    answerq3a3: "",
    correctq3a3: "",
    answerq3a4: "",
    correctq3a4: ""


  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   quizAPI.saveQuiz({ quizSeed }
  //   )
  //     .then(res => this.loadQuiz())
  //     .catch(err => console.log(err));


  // };


  render() {
    return (

      <div>
        <h2 className="guide">Create New Quiz</h2>
        <h5 className="guide">Please Keep Answers Short</h5>
        <form>
          <Input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Title"
          />
          <Input
            value={this.state.author}
            onChange={this.handleInputChange}
            name="author"

            placeholder="Author"

          />
          <Input
            value={this.state.question1}
            onChange={this.handleInputChange}
            name="question1"
            placeholder="question 1"
          />


          <Input
            value={this.state.answerq1a1}
            onChange={this.handleInputChange}
            name="answerq1a1"
            placeholder="Answer 1"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a1" onChange={this.handleInputChange} value={this.state.correctq1a1}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>


          <Input
            value={this.state.answerq1a2}
            onChange={this.handleInputChange}
            name="answerq1a2"
            placeholder="Answer 2 "
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a2" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>


          <Input
            value={this.state.answerq1a3}
            onChange={this.handleInputChange}
            name="answerq1a3"
            placeholder="Answer 3"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a3" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>

          <Input
            value={this.state.answerq1a4}
            onChange={this.handleInputChange}
            name="answerq1a4"
            placeholder="Answer 4"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a4" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>

          <Input
            value={this.state.question2}
            onChange={this.handleInputChange}
            name="question1"
            placeholder="question 2"
          />


          <Input
            value={this.state.answerq2a1}
            onChange={this.handleInputChange}
            name="answerq2a1"
            placeholder="Answer 1"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a1" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>


          <Input
            value={this.state.answerq2a2}
            onChange={this.handleInputChange}
            name="answerq2a2"
            placeholder="Answer 2 "
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a2" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>


          <Input
            value={this.state.answerq2a3}
            onChange={this.handleInputChange}
            name="answerq2a3"
            placeholder="Answer 3"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a3" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>

          <Input
            value={this.state.answerq2a4}
            onChange={this.handleInputChange}
            name="answerq2a4"
            placeholder="Answer 4"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq1a4" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>

          <Input
            value={this.state.question1}
            onChange={this.handleInputChange}
            name="question13"
            placeholder="question 3"
          />


          <Input
            value={this.state.answerq1a1}
            onChange={this.handleInputChange}
            name="answerq3a1"
            placeholder="Answer 1"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq3a1" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>


          <Input
            value={this.state.answerq1a2}
            onChange={this.handleInputChange}
            name="answerq3a2"
            placeholder="Answer 2 "
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq3a2" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>


          <Input
            value={this.state.answerq1a3}
            onChange={this.handleInputChange}
            name="answerq3a3"
            placeholder="Answer 3"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq3a3" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>

          <Input
            value={this.state.answerq1a4}
            onChange={this.handleInputChange}
            name="answerq3a4"
            placeholder="Answer 4"
          />
          <FormGroup>
            <Label for="correctAnswer" className="labelMe">Is this the Correct Answer?</Label>
            <Input type="select" name="correctq3a4" onChange={this.handleInputChange}>
              <option>true</option>
              <option>false</option>
            </Input>
          </FormGroup>

          <Button

            onClick={this.handleFormSubmit}
          >
            Submit New Quiz
              </Button>
        </form>
      </div>




    );
  }
}

export default newQuiz;