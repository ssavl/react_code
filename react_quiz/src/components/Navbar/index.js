import React from 'react'
import './Navbar.sass'
import '../SideBar'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";

// Action
import { openModal } from "../../action/auth";


const Navbar = ({openModal, pushStyle}) => {

    const handleAuthModalOpen = () => {
        openModal()
    }

    return (
        <div className="Navbar">
            <h6 className="h1">React</h6>
            <div className="Navbar__bar">
                <NavLink className="Navbar__item" to="/">Главная</NavLink>
                <NavLink className="Navbar__item" to="/quiz">Quiz</NavLink>
                <a className="Navbar__item" onClick={handleAuthModalOpen}>Личный кабинет</a>
                <NavLink className="Navbar__item" to="/">Main</NavLink>
                <button className="btn-red" onClick={pushStyle.bind(this)}>Sidebar</button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {openModal})(Navbar)