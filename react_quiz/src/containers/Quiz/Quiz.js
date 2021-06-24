import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {

    state = {
        isAnswerTrue: 'false',
        answerState: null,
        activeQuestion: 0,
        quiz: [
            {
              id: 0,
              rightAnswer: 1,
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
              rightAnswer: 2,
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


        const currentQuestion = this.state.quiz[this.state.activeQuestion]

        if (Number(currentQuestion.rightAnswer) === Number(answerID)) {
            this.setState({
                answerState: {[answerID]: 'success'}
            })
            
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                }
                else {
                    this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                })}

                window.clearTimeout(timeout)
            }, 1000)
            console.log("ПРАВИЛЬНЫЙ ОТВЕТ!")
        }
        else {
            this.setState({
                answerState: {[answerID]: 'error'}
            })
            console.log("НЕВЕРНЫЙ ОТВЕТ :(")
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
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
                    answerHandler={this.onAnswerHandler}
                    state={this.state.answerState}/>
                </div>
            </div>
        )
    }
}