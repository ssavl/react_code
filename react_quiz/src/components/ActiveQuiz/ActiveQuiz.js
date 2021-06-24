import React from 'react'
import './ActiveQuiz.css'
import AnswerList from '../AnswerList/AnswerList'

const ActiveQuiz = (props) => (
    <div className="ActiveQuiz">
    <p className="Question">
        <span>
            <strong>{props.quizNumber}.</strong>&nbsp;
            {props.question}
        </span>
        <small>{props.quizNumber} из {props.quizLength}</small>
    </p>

    <AnswerList 
    answers={props.answers} 
    answerHandler={props.answerHandler}
    state={props.state}/>
    
    </div>
)

export default ActiveQuiz