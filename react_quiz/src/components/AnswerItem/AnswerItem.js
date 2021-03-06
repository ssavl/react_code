import React from 'react'
import './AnswerItem.css'

const AnswerItem = (props) => {
    
    return(

    <div>
        <li className="AnswerItem" onClick={props.answerHandler.bind(this, props.answer.id)}>
            {props.answer.text}
        </li>
    </div>

    )
}

export default AnswerItem

