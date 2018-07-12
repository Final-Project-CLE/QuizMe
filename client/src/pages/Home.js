import React, { Component } from 'react';
import QuizBox from "../components/QuizBox/QuizBox";
import data from "../data.json";
import Container from "../components/Container/Container";
import Example from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';


class Test extends Component {
  state = {
    data
  }

  render() {
    return (
      <div>
        <Example />
        <Jumbotron />
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

export default Test;
