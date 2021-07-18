import React, {useState} from 'react'
import './Navbar.sass'
import '../SideBar'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";

// Action
import {openModal} from "../../action/auth";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import axios from "axios";
import {token} from "../../url/api/auth";


const Navbar = ({openModal, pushStyle}) => {

    const [modalIsOpen, setModal] = useState(false)
    const [loginUser, setLogin] = useState('')
    const [passwordUser, setPassword] = useState('')
    const [statusAuthModal, setStatusModal] = useState('login')
    const [statusSuccessModal, setStatusSuccessModal] = useState(true)
    const [statusSignUpModal, setStatusSignUpModal] = useState(true)

    const handleAuthModalOpen = () => {
        openModal()
    }

    const signUpHandler = () => {
        console.log('Регистрация =>', )
    }


    const testHandler = (key, value) => {
        axios.post('http://127.0.0.1:8000/api/v1/api-token-auth/', {
            username: loginUser,
            password: passwordUser
        }).then(response => {
            if (response && response.data.token) {
                localStorage.setItem('token', response.data.token)
                setModal(false)
                setStatusModal('success')
            }
        }).catch(error => {console.log(error.response.status)})

    }

    return (
        <div className="Navbar">
            <h6 className="h1">React</h6>
            <div className="Navbar__bar">
                <NavLink className="Navbar__item" to="/">Главная</NavLink>
                <NavLink className="Navbar__item" to="/quiz">Quiz</NavLink>
                <a className="Navbar__item" onClick={handleAuthModalOpen}>Личный кабинет</a>
                <a className="Navbar__item" onClick={() => setModal(true)}>Login</a>
                <button className="btn-red" onClick={pushStyle.bind(this)}>Sidebar</button>
            </div>

            {statusAuthModal === 'login' && (
                <Modal
                    title={'Вход'}
                    children={'Введите данные для входа в личный кабинет'}
                    confirmBtn={'Отправить'}
                    onConfirm={testHandler}
                    isOpen={modalIsOpen}
                    onClose={() => setModal(false)}

                >
                    <input type={'text'}
                           onChange={(event) => setLogin(event.target.value)}
                           placeholder='login'
                    />
                    <br/>
                    <input type={'password'}
                           onChange={(event) => setPassword(event.target.value)}
                           placeholder='password'
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
                onConfirm={signUpHandler}
                >

                <input type="text" placeholder={'login'}/>
                <br/>
                <input type="password" placeholder={'password'}/>
                <br/>
                <input type="password" placeholder={'password confirm'}/>

                </Modal>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
})

export default connect(mapStateToProps, {openModal})(Navbar)