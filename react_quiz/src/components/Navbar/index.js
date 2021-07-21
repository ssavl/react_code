import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import axios from "axios";
import {token} from "../../url/api/auth";


// Components
import { ReactComponent as ImgMenu } from '../../img/menu.svg'
import '../SideBar'
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import UserInfo from "../UserInfo";

// Action
import {clearAuthState, closeModal, openModal, setAuthStep, setError, setUser} from "../../action/auth";
import { changeField } from '../../action/auth'

import './Navbar.sass'



const Navbar = ({
                    auth,
                    changeField,
                    openModal,
                    pushStyle,
                    clearAuthState,
                    closeModal,
                    setAuthStep,
                    setError,
                    setUser,
                }) => {

    const { isAuthModalOpen, phone, code, name, surname, email, step, password, username } = auth


    const [modalIsOpen, setModal] = useState(false)
    const [loginUser, setLogin] = useState('')
    const [passwordUser, setPassword] = useState('')
    const [statusAuthModal, setStatusModal] = useState('login')
    const [statusSuccessModal, setStatusSuccessModal] = useState(true)
    const [statusSignUpModal, setStatusSignUpModal] = useState(true)

    // Handlers
    const handleAuthModalOpen = () => {
        openModal()
    }

    const signUpHandler = () => {
        console.log('Регистрация =>',)
    }

    const handleAuthInputChange = (value, { field }) => {
        changeField(field, value);
    };

    const handleLoginUser = () => {
        loginHandler();
    };

    const handleRegisterUser = () => {
        registerHandler()
    }

    const loginHandler = (key, value) => {
        axios.post('http://127.0.0.1:8000/api/v1/api/auth/login', {
            username: auth.username.value,
            password: auth.password.value,
        }).then(response => {
            if (response && response.data.token) {
                localStorage.setItem('token', response.data.token)
                setModal(false)
                setStatusModal('success')
            }
        }).catch(error => {
            if (error.response.status === 400) {
                setStatusModal('signUp')
            }
            if (error.response.status === 500) {
                setStatusModal('login')
            }
        })

    }

    const registerHandler = (key, value) => {
        axios.post('http://127.0.0.1:8000/api/v1/api/auth/register', {
            username: auth.username.value,
            password: auth.password.value,
            first_name: auth.name.value,
            last_name: auth.surname.value,
            email: auth.email.value,
        }).then(response => {
            console.log(response)
            if (response && response.data.token) {
                localStorage.setItem('token', response.data.token)
                setModal(false)
                setStatusModal('success')
            }
        }).catch(error => {
            if (error.response.status === 400) {
                setStatusModal('signUp')
            }
            if (error.response.status === 500) {
                setStatusModal('login')
            }
        })

    }

    const user = {
        first_name: 'Константин',
        last_name: 'Петров',
    }

    return (
        <div className="Navbar">
            <h6 className="h1">React</h6>
            <div className="Navbar__bar">
                {/*<NavLink className="Navbar__item" to="/">Главная</NavLink>*/}
                {/*<NavLink className="Navbar__item" to="/quiz">Quiz</NavLink>*/}
                <a className="Navbar__item" onClick={handleAuthModalOpen}>Личный кабинет</a>
                <a className="Navbar__item" onClick={() => setModal(true)}>Login</a>
                <div style={{marginRight: 50, marginLeft: 120}}><UserInfo user={user} /></div>
                <div className={'Navbar__burger-wrapper'} onClick={pushStyle.bind(this)}>
                    <ImgMenu />
                </div>
            </div>

            {statusAuthModal === 'login' && (
                <Modal
                    title={'Вход'}
                    children={'Введите данные для входа в личный кабинет'}
                    confirmBtn={'Отправить'}
                    onConfirm={handleLoginUser}
                    isOpen={modalIsOpen}
                    onClose={() => setModal(false)}

                >
                    <Input
                           type='text'
                           field='username'
                           placeholder={'Введите login'}
                           onChange={handleAuthInputChange}
                           value={auth.username.value}
                           error={false}
                           disabled={false}
                    />
                    <Input type='password'
                           field='password'
                           placeholder={'Введите password'}
                           onChange={handleAuthInputChange}
                           value = {auth.password.value}
                           error={false}
                           disabled={false}
                    />

                </Modal>
            )}

            {statusAuthModal === 'success' && (
                <Modal
                    isOpen={statusSuccessModal}
                    title={'Ура! Вы авторизированы!'}
                    children={'Это однозначно успех!'}
                    confirmBtn={'Очень рад'}
                    onConfirm={() => setStatusSuccessModal(false)}
                    onClose={() => setStatusSuccessModal(false)}
                />
            )}

            {statusAuthModal === "signUp" && (
                <Modal
                    isOpen={statusSignUpModal}
                    onClose={() => setStatusSignUpModal(false)}
                    title={"Регистрация"}
                    children={"Пройдите регистрацию для доступа в сервис"}
                    confirmBtn={'Отправить'}
                    onConfirm={handleRegisterUser}
                >

                    <Input type='text'
                           field='username'
                           placeholder={'Введите login'}
                           onChange={handleAuthInputChange}
                           value = {auth.username.value}
                           error={false}
                           disabled={false}
                    /><Input type='text'
                           field='name'
                           placeholder={'Введите login'}
                           onChange={handleAuthInputChange}
                           value = {auth.name.value}
                           error={false}
                           disabled={false}
                    /><Input type='text'
                           field='surname'
                           placeholder={'Введите login'}
                           onChange={handleAuthInputChange}
                           value = {auth.surname.value}
                           error={false}
                           disabled={false}
                    />
                    <Input type='email'
                           field='email'
                           placeholder={'Введите email'}
                           onChange={handleAuthInputChange}
                           value = {auth.email.value}
                           error={false}
                           disabled={false}
                    />
                    <Input type='password'
                           field='password'
                           placeholder={'Введите password'}
                           onChange={handleAuthInputChange}
                           value = {auth.password.value}
                           error={false}
                           disabled={false}
                    />

                </Modal>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducer,
});

export default connect(mapStateToProps, {
    openModal,
    clearAuthState,
    closeModal,
    setAuthStep,
    setError,
    setUser,
    changeField,})(Navbar)