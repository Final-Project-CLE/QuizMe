import React, { Component } from 'react';
import QuizBox from "../../components/QuizBox/QuizBox";
import data from "../../data.json";
import Container from "../../components/Container/Container";
import axios from "axios";


class Quizzes extends Component {
  state = {
    data
  }

<<<<<<< HEAD
  componentDidMount() {
    this.loadQuizzes();
       
  };

  loadQuizzes() {
    QuizAPI.getQuizzes()
    .then(res =>
      this.setState({ 
        quizzes: res.data})
    )
    .catch(err => console.log(err))    
=======
  componentDidMount(){
    axios.get('/routeName').then(res =>{
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
>>>>>>> 785d12760bb0832cc6c063599b1c50aee9600b01
  }

  render() {
    return (
      <div>
        <Container>
          <div className="row">
            {this.state.data.map(item => (
              <QuizBox
<<<<<<< HEAD
                key={item._id}
                id={item._id}
=======
                key={item.id}
                id={item.id}
>>>>>>> 785d12760bb0832cc6c063599b1c50aee9600b01
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