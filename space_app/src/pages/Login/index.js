import React from 'react';
import {useHistory, Link} from 'react-router-dom'
import {connect} from 'react-redux';

// Actions
import {changeField, setUser, clearState} from '../../actions/user'

const LoginPage = ({login, password, changeField, setUser, clearState}) => {
    const handleChange = e => {
        changeField(e.target.attributes.field.value, e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/api/v1/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: login, password})
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('token', response.auth_token)
                setUser(response)
            })
    }
    return (
        <div>
            <input type="text" placeholder='Login' field='login' onChange={handleChange}/>
            <input type="text" placeholder='Password' field='password' onChange={handleChange}/>
            <button type='submit' onClick={handleSubmit}>Login</button>
            <Link to={'/personal'}>To Personal Page</Link>
        </div>
    );
};

LoginPage.propTypes = {
    
};

const mapStateToProps = state => ({
    login: state.userReducer.login,
    password: state.userReducer.password,
})

export default connect(mapStateToProps, {changeField, setUser, clearState})(LoginPage);