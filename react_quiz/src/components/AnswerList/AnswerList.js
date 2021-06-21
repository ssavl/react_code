import React from 'react'
import  './AnswerList.css'
import AnswerItem from '../AnswerItem/AnswerItem'

const AnswersList = props => {
  return (
    <ul className='AnswersList'>
      { props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            answerHandler={props.answerHandler}
          />
        )
      }) }
    </ul>
  )
}

export default AnswersList