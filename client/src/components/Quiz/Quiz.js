import React from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, ButtonGroup,
    Container, Row, Col
} from 'reactstrap';

import "./Quiz.css";


const Quiz = props => (
    <body>
        <div id="box">
            <Container>
                <Row>
                    <Col>
                            <Row>
                                <Col>
                                    <CardBody>
                                        <CardTitle><p id="title">{props.quizTitle}</p></CardTitle>
                                        <CardSubtitle><p id="subtitle">{props.Q1}</p></CardSubtitle>

                                    <ButtonGroup id="btn-group">
                                                <Button id="ansbtn" value={props.correctQ1A1}><p id="answer">{props.Q1A1}</p></Button><br></br>
                                                <Button  id="ansbtn" value={props.correctQ1A2}><p id="answer">{props.Q1A2}</p></Button><br></br>
                                                <Button id="ansbtn" value={props.correctQ1A3}><p id="answer">{props.Q1A3}</p></Button><br></br>
                                                <Button id="ansbtn" value={props.correctQ1A4}><p id="answer">{props.Q1A4}</p></Button><br></br>
                                            </ButtonGroup>

                                        <CardSubtitle><p id="subtitle">{props.Q2}</p></CardSubtitle>

                                            <ButtonGroup >
                                                <Button id="ansbtn" value={props.correctQ2A1}><p id="answer">{props.Q2A1}</p></Button>
                                                <Button id="ansbtn" value={props.correctQ2A2}><p id="answer">{props.Q2A2}</p></Button>
                                                <Button id="ansbtn" value={props.correctQ2A3}><p id="answer">{props.Q2A3}</p></Button>
                                                <Button id="ansbtn" value={props.correctQ2A4}><p id="answer">{props.Q2A4}</p></Button>
                                            </ButtonGroup>

                                        <CardSubtitle><p id="subtitle">{props.Q3}</p></CardSubtitle>

                                            <ButtonGroup >
                                                <Button id="ansbtn" value={props.correctQ3A1}><p id="answer">{props.Q3A1}</p></Button>
                                                <Button id="ansbtn" value={props.correctQ3A2}><p id="answer">{props.Q3A2}</p></Button>
                                                <Button id="ansbtn" value={props.correctQ3A3}><p id="answer">{props.Q3A3}</p></Button>
                                                <Button id="ansbtn" value={props.correctQ3A4}><p id="answer">{props.Q3A4}</p></Button>
                                            </ButtonGroup>

                                    </CardBody>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="d-flex justify-content-center">
                                        <Button className="btn-lg" onClick={props.handleSubmit}>Submit</Button>
                                    </div>
                                </Col>

                            </Row>



                    </Col>
                </Row>


            </Container>

        </div>
    </body>
)

export default Quiz;