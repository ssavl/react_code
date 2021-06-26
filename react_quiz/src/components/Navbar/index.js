import React from 'react'
import './Navbar.css'
import '../SideBar'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className="Navbar">
            <h6 className="h1">React</h6>
            <button  className="btn-red" onClick={props.pushStyle.bind(this)}>sidebar</button>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/quiz">Quiz</NavLink></li>
                <li><NavLink to="/todo">ToDo List</NavLink></li>
                <li><i onClick={props.pushStyle.bind(this)}  class="fas fa-bars"></i></li>
            </ul>

        </div>
    )
}

export default Navbar