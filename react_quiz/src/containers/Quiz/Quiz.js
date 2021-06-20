import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    render() {
        return (
            <div className="Quiz ">
                <div className="QuizWrapper">
                    <h1 className="h1h1">Пройдите тест:</h1>
                    <br/>
                    <ActiveQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz

