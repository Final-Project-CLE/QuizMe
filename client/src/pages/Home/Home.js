import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import "./Home.css"

import Quizzes from '../../pages/Quizzes/Quizzes'


class Home extends Component {
  state = {
    homes: [],

  };
  render() {
    return (

      <body>
        <div className="home">
          <Jumbotron />
          <div id="p1"><p>Home Page</p></div>
          <div id="p2"><p>Other Stuff Here</p></div>
          <Quizzes />
        </div>
      </body>
    );
  }
}

export default Home;