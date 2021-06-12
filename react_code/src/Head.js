import React, { Component } from 'react';
import './mdb/css/base.css';
import './mdb/css/mdb.min.css';
import './mdb/css/mdb.min.css.map';
import Second from './Second'
import RealComponent from './RealComponent'
import Navbar from './Navbar';
import Cards from './Cards'

class Head extends Component {

    state =  {
        navbar: [
            'Главная',
            'Клубная карта',
            'О компании',
            '8-800-987-54-78'
        ]
    }

    render() {

        const nav = this.state.navbar

        return (
        <div className="App text-center">

            <Navbar navItem = {this.state.navbar} />

            <h1 style= {{color: 'black', }}>
                 Hello World!
            </h1>
            <Second name="Savelii" year={14} /> 
            <RealComponent />
            <Cards />
        </div>
        );
    }
}

export default Head;
