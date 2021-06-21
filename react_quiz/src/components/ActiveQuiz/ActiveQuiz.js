import React from 'react'
import './ActiveQuiz.css'
import AnswerList from '../AnswerList/AnswerList'

const ActiveQuiz = (props) => (
    <div className="ActiveQuiz">
    <p className="Question">
        <span>
            <strong>2.</strong>&nbsp;
            {props.question}
        </span>
        <small>{props.quizNumber} из {props.quizLength}</small>
    </p>

    <AnswerList answers={props.answers} answerHandler={props.answerHandler}/>

    </div>
)

export default ActiveQuiz