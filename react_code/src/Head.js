import React, { Component } from 'react';
import './mdb/css/base.css';
import './mdb/css/mdb.min.css';
import './mdb/css/mdb.min.css.map';
import Second from './Second'
import RealComponent from './RealComponent'
import Navbar from './Navbar';
import Cards from './Cards'
import InputCard from './InputCard'

class Head extends Component {

    state =  {
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

    render() {
        console.log('Render..')
        const nav = this.state.navbar

        return (
        <div className="App text-center">

            <Navbar navItem = {this.state.navbar} />

            <h1 style= {{color: 'black', }}>
                 Click: {this.state.title}
            </h1>
            <Second name={this.state.userName} year={this.state.userAge} /> 
            <RealComponent />
            <div className="container">
                <div className="row">
                        {this.state.news.map((news, index) => {
                            return (
                            <div className="col-4">
                                <Cards 
                                    newsTitle={news.title} 
                                    newsBody={news.body}
                                    newsDate={news.date}
                                    key={index}    />
                            </div>)
                        })}
                    
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

export default Head;
