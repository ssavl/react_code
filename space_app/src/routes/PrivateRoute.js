import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../actions/user'

const PrivateRoute = ({component: Component, user, setUser, ...rest}) => {
    const history = useHistory();

    if (localStorage.getItem('token') && !user) {
        fetch('http://127.0.0.1:8000/api/v1/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: 'admin', password: 'adminadmin123'})
        })
            .then(response => response.json())
            .then(response => {
                setUser(response)
            })
            .catch(error) {
            if (error.response.status === 401) {
                console.log(error)
                history.push('/login')
            }

        }
    }
    if (!user && !localStorage.getItem('token')) {
        history.push('/login');
        return null;
    }
    return (
        <Route component={Component} {...rest} />
    );
};

PrivateRoute.propTypes = {
    
};

const mapStateToProps = state => ({
    user: state.userReducer.user
})

export default connect(mapStateToProps, {setUser})(PrivateRoute);