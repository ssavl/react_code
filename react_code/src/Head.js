import React, { Component } from 'react';
import './mdb/css/base.css';
import './mdb/css/mdb.min.css';
import './mdb/css/mdb.min.css.map';
import Second from './Second'
import RealComponent from './RealComponent'
import Navbar from './Navbar';
import Cards from './Cards'
import InputCard from './InputCard'
import PropTypes from 'prop-types'


class Head extends Component {

    constructor(props) {
        super(props) 

            this.state =  {
                cardVisible: true,
                userAge: 14,
                userName: 'Savelii',
                title: 'off',
                button1: 'AboutUs',
                button2: 'Submit',
                navbar: [
                    'Главная',
                    'Клубная карта',
                    'О компании',
                    '8-800-987-54-78'
                ],
                btn: {
                    btnState: true,
                    btnTitle: "off"
                },
                news: [ 
                    {title: 'Россияне отдают приоритет МФО',date:'15.07.2021', body: "Доля россиян, берущих микрозаймы, стала максимальной за последние 4 года, сообщает РБК. В текущем году, по данным бюро 'Эквифакс', количество заемщиков МФО растет за счет того, что банковские клиенты становятся клиентами МФО."},
                    {title: 'Путин объявил дни с 1 по 10 мая выходными',date: "15.07.2021", body: "Президент Путин объявил дни с 1 по 10 мая выходными, 11 мая на работу. В этом году майские выходные должны были продлиться с 1 по 3 мая и с 8 по 10 мая. Согласно решению президента, теперь нерабочими станут и четыре дня между ними."},
                    {title: 'Займы выдуют бесплатно',date: "19.07.2021", body: "В этом году майские выходные должны были продлиться с 1 по 3 мая и с 8 по 10 мая. Согласно решению президента, теперь нерабочими станут и четыре дня между ними."},
        
                ],
        
            }
        
    }

    

    onDeleteCard (index) {
        const newCard = [...this.state.news]
        newCard.splice(index, 1)
        this.setState({
            news: newCard
        })
    }

    clickButtonHandler = (newTitle = 'on!') => {
        this.setState({
            title: newTitle,
        })
    }

    changeUserData = (event) => {
        if (event.target.name === "name") {
            let currentUserName = event.target.value
            this.setState({
                userName: currentUserName
            })
        }
        if (event.target.name === 'age') {
            let currentUserAge = event.target.value
            this.setState({
                userAge: currentUserAge
            })
        }
    }

    showCardHandler = () => {
        let card = !this.state.cardVisible
        this.setState({
            cardVisible: card
        })
    }

    render() {
        console.log('Render..')
        const nav = this.state.navbar

        return (
        <div className="App text-center">
            
            <Navbar navItem = {this.state.navbar} />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <form>
                        <div className="mb-4">
                                <input className="form-control" id="title" type="text" placeholder="Title"></input>
                        </div>
                        <div className="mb-4">
                                <input className="form-control" id="text" type="text" placeholder="Text"></input>
                        </div>
                        <button className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <h1 style= {{color: 'black', }}>
                            Click: {this.state.title}
                        </h1>
                        <button className="btn btn-primary my-3" onClick={this.showCardHandler}>Show news</button>
                        <Second name={this.state.userName} year={this.state.userAge} /> 
                        <RealComponent />
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="row">
                        { this.state.cardVisible 
                            ? this.state.news.map((news, index) => {
                                    return (
                                    <div className="col-4">
                                        <Cards 
                                            onDelete = {this.onDeleteCard.bind(this, index)}
                                            newsTitle={news.title} 
                                            newsBody={news.body}
                                            newsDate={news.date}
                                            key={index}    />
                                    </div>)
                                })
                            : null  }
                    
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Какой-то текст текст текст</p>
                        </div>
                    </div>
                </div>
                
            
                {/* <button onClick={this.clickButtonHandler.bind(this, 'Title')} className="btn btn-dark">{this.state.title}</button>
                <button onClick={this.clickButtonHandler.bind(this, 'Bingo!')} className="btn btn-dark">error</button>
            <InputCard /> */}
            

            {/* { this.state.users.map((user, index) => {
                return (
                    <div>
                        {user.key = index}
                    <h4>{user.name}</h4>
                    <h6>{user.age}</h6>
                    <hr></hr>
                    </div>
                )
            })} */}
    
        </div>
        );
    }
}

Cards.PropTypes = {
    newsTitle: PropTypes.string,
    newsBody: PropTypes.string,
}


export default Head;
