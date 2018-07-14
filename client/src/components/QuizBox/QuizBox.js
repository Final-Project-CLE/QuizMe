import React from "react";
import { Link } from "react-router-dom";
const style = {
  margin: "10px"
}

const QuizBox = props => (

  <div className="card col-4-md" style={style}>
    <div className="card-body">
      <Link to={"/quiz/" + props.id} >
        {props.quizTitle}
      </Link>
    </div>
  </div>





)

export default QuizBox;