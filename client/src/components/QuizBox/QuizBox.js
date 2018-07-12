import React from "react";
import { Link } from "react-router-dom";
const style = {
  margin: "10px"
}

const QuizBox = props => (

  <div className="card col-4-md" style={style}>
    <div className="card-body">
      <Link to={"/" + props.id} >
        {props.quizTitle}
      </Link>
    </div>
  </div>





)

export default QuizBox;