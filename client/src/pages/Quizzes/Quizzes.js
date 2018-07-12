import React, { Component } from 'react';
import QuizBox from "../../components/QuizBox/QuizBox";
// import data from "../../data.json";
import Container from "../../components/Container/Container";
import QuizAPI from "../../utils/QuizAPI";


class Quizzes extends Component {
  state = {
    quizzes: []
  }

  componentDidMount() {
    this.loadQuizzes();
       
  };

  loadQuizzes() {
    console.log('I AM A LOAD THING')
    QuizAPI.getQuizzes()
    .then(res =>
      this.setState({ 
        quizzes: res.data})
    )
    .catch(err => console.log(err))    
  }

  render() {
    return (
      <div>
        <Container>
          <div className="row">
            {this.state.quizzes.map(item => (
              <QuizBox
                key={item.id}
                id={item._id}
                quizTitle={item.quizTitle}
              />
            ))}
          </div>
        </Container>        

      </div>
    );
  }
}

export default Quizzes;