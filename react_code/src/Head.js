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
        }
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
            <Cards btnState={this.state} handler={this.clickButtonHandler} />
                <button onClick={this.clickButtonHandler.bind(this, 'Title')} className="btn btn-dark">{this.state.title}</button>
                <button onClick={this.clickButtonHandler.bind(this, 'Bingo!')} className="btn btn-dark">error</button>
            <InputCard userData={this.changeUserData} />
        </div>
        );
    }
}

export default Head;
