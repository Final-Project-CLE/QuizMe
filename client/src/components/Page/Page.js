import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from '../Jumbotron/Jumbotron';
import Quizzes from "../../pages/Quizzes/Quizzes";
import Login from "../../pages/Login/Login";
import NewUser from "../../pages/NewUser";
import Home from "../../pages/Home/Home";
import NewQuiz from "../../pages/NewQuiz/newQuiz";
import Quiz from "../../pages/Quiz/Quiz";


class Page extends Component {
  render() {
    return (
    <Router>
      <div>
        
        <Jumbotron />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/newuser" component={NewUser} />
            <Route exact path="/quizzes" component={Quizzes} />
            <Route exact path="/newquiz" component={NewQuiz} />
            <Route exact path="/:id" component={Quiz} />
          </Switch>
     </div>
    </Router>
    );
  }
}

export default Page;
