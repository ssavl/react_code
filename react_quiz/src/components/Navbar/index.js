import React from 'react'
import './Navbar.css'
import '../SideBar'

const Navbar = (props) => {
    return(
        <div className="Navbar">
            <h6 className="h1">React</h6>
            <button  className="btn-red" onClick={props.pushStyle.bind(this)}>sidebar</button>
            <i onClick={props.pushStyle.bind(this)}  class="fas fa-bars"></i>
        </div>
    )
}

export default Navbar