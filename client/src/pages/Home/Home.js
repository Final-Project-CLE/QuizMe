import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import "./Home.css"

class Home extends Component {
  state = {
    homes: [],

  };
  render() {
    return (
      <div>
        <Jumbotron />
        <p>Home Page</p>
      </div>
    );
  }
}

export default Home;