import React from 'react'
import './Navbar.sass'
import '../SideBar'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <h6 className="h1">React</h6>
            <div className="Navbar__bar">
                <NavLink className="Navbar__item" to="/">Главная</NavLink>
                <NavLink className="Navbar__item" to="/quiz">Quiz</NavLink>
                <NavLink className="Navbar__item" to="/todo">ToDo List</NavLink>
                <NavLink className="Navbar__item" to="/">Main</NavLink>
                <button className="btn-red" onClick={props.pushStyle.bind(this)}>Sidebar</button>
            </div>

        </div>
    )
}

export default Navbar