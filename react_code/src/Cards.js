import React from 'react';


export default (props) => (
    
    <div className="container mt-5">
        <br/>
        <div className="row">
            <div className="col-6">
            <div className="card mb-3 shadow-5-strong" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="..."
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                        <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                    <button className="btn btn-dark">{props.btnState.title}</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-6">
            <div className="card mb-3 shadow-5-strong" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img
                        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                        alt="img"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                        <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago {props.btnState.btnTitle}</small>
                        </p>
                    </div>
                        <button onClick={props.handler} className="btn btn-dark">{props.btnState.title}</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
)