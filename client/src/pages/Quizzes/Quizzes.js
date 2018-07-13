import React, { Component } from 'react';
import QuizBox from "../../components/QuizBox/QuizBox";
import data from "../../data.json";
import Container from "../../components/Container/Container";
import axios from "axios";


class Quizzes extends Component {
  state = {
    data
  }

  componentDidMount(){
    axios.get('/routeName').then(res =>{
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Container>
          <div className="row">
            {this.state.data.map(item => (
              <QuizBox
                key={item.id}
                id={item.id}
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