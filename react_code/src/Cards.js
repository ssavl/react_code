import React from 'react';


export default (props) => (
    
    <div>
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
                    <h5 className="card-title font-weight-bold">{props.newsTitle}</h5>
                    <p className="card-text">
                        {props.newsBody}
                    </p>
                    <p className="card-text">
                    <small className="text-muted">Last updated {props.newsDate}</small>
                    </p>
                </div>
                <button className="btn btn-dark">Кнопка</button>
                </div>
            </div>
        </div>
    </div>
    
)