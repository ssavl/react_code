import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
              id: 0,
              question:'Какого цвета сейчас небо?',
              answers: [
                  {text: 'Синий', id: 1},
                  {text: 'Зеленый', id: 2},
                  {text: 'Желтый', id: 3},
                  {text: 'Красный', id: 4},
              ],
            },  
            {
              id: 1,
              question:'Год основания supreme?',
              answers: [
                  {text: '2003', id: 1},
                  {text: '1990', id: 2},
                  {text: '1989', id: 3},
                  {text: '2000', id: 4},
              ],
            },  
  
        ],
    }

    onAnswerHandler = (answerID) => {
        console.log(answerID)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }
  
   
    render() {
        return (
            <div className="Quiz ">
                <div className="QuizWrapper">
                    <h1 className="h1h1">Пройдите тест:</h1>
                    <br/>
                    <ActiveQuiz 
                    quizLength={this.state.quiz.length}
                    quizNumber={this.state.quiz[this.state.activeQuestion].id + 1}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    answerHandler={this.onAnswerHandler}/>
                </div>
            </div>
        )
    }
}

export default Quiz

