import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron/Jumbotron'

class Home extends Component {
  state = {
    homes: [],

  };
  render() {
    return (
      <div>
        {/* Right now I have it making you login to view the home page  */}
        <Jumbotron />
        <p>Home Page</p>
      </div>
    );
  }
}

export default Home;