import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Quizzes from '../../pages/Quizzes/Quizzes'

class Home extends Component {
  state = {
    homes: [],

  };
  render() {
    return (
      <div>
        <Jumbotron />
        <p>Home Page</p>
        <Quizzes />
      </div>
    );
  }
}

export default Home;