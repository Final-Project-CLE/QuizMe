import React, { Component } from "react";

import API from "../../utils/QuizAPI";
import { Link } from "react-router-dom";
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Input, Button } from 'reactstrap';

let correct=false;
class newQuiz extends Component {
  state = {
    title: "",
    author: "",
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:"",
    correct:"",
    rightAnswer:""
    

  };
  loadQuiz = ()=> {
    API.getQuiz()
      .then(res =>
        this.setState({ quiz:res.data , title: "", author: "", question: ""})
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadQuiz();
  }
  handleRightAnswer=event=>{
    const correct=true;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    if(name===this.state.answer1){
      this.setState({correct});
    } else if(name===this.state.answer2){
      this.setState({correct});
    }else if(name===this.state.answer3){
      this.setState({correct});
    } else{this.setState({correct});}
    
  }
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  
  handleFormSubmit = event => {
    event.preventDefault();
    API.saveQuiz({
        title: this.state.title,
        author: this.state.author,
        question: this.state.question,
        answer1:this.state.answer1,
        answer2:this.state.answer2,
        answer3:this.state.answer3,
        answer4:this.state.answer4,
        correct:this.state.correct
      }
    
    )
        .then(res => this.loadQuiz())
        .catch(err => console.log(err));
    

  };


  render() {
    return (

      <div>
          <h2>Create New Quiz</h2>
          <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                
                placeholder="Author (required)"
                
              />
              <Input
                value={this.state.question}
                onChange={this.handleInputChange}
                name="question"
                placeholder="question (required)"
              />
             
      
               <Input
                value={this.state.answer1}
                onChange={this.handleInputChange}
                name="answer1"
                correct={this.state.correct}
                placeholder="Answer 1 (required)"
              />
              
        
                <Input
                value={this.state.answer2}
                onChange={this.handleInputChange}
                name="answer2"
                correct={this.state.correct}
                placeholder="Answer 2 (required)"
              />
            
        
      
               <Input
                value={this.state.answer3}
                onChange={this.handleInputChange}
                correct={this.state.correct}
                name="answer3"
                placeholder="Answer 3 (required)"
              />
               
       
               <Input
                value={this.state.answer4}
                onChange={this.handleInputChange}
                correct={this.state.correct}
                name="answer4"
                placeholder="Answer 4 (required)"
              />
                <Input
                value={this.state.rightAnswer}
                onChange={this.handleInputChange}
                correct={this.handleRightAnswer}
                name="rightAnswer"
                placeholder="Type right answer here (required)"
              />
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