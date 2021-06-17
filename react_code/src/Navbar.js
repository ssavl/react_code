import React from 'react';
export default (props) => (
    
    <nav className="navbar text-white navbar-dark bg-dark mb-5">
    <div className="container-fluid text-white">
        <a className="navbar-brand" href="#">React</a>
        <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.navItem[0]}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">{props.navItem[1]}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">{props.navItem[2]}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"
                >{ props.navItem[3] }</a
            >
            </li>
        </ul>
        </div>
    </div>
    </nav>

)