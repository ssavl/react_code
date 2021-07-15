import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import {
    changeField,
    clearAuthState,
    closeModal,
    setUser,
    setAuthStep,
    setError,
} from '../../action/auth';

// Components
import Input from '../../components/Input';
import Modal from '../../components/Modal';

// Constants
import { STEPS } from '../../constants/authSteps';
import ERRORS from '../../constants/errors';

// Helpers
import { validationEmail, validateState } from '../../helpers/validations';

// Modules
import createApiCaller from '../../modules/api-call';

// Utils
import { formatPhoneForBack } from '../../utils/formatters';
import { getUserId, setAuthToken, setUserId } from '../../utils/localStorage';

// Url
import url from '../../url';

import './styles.sass';

const AuthModalContainer = ({
                                auth,
                                changeField,
                                clearAuthState,
                                closeModal,
                                setAuthStep,
                                setError,
                                setUser,
                            }) => {
    const { isAuthModalOpen, phone, code, name, surname, email, step } = auth;

    const apiCall = createApiCaller();
    const apiCallPrivate = createApiCaller({ isPrivate: true });

    // Methods
    const checkPhone = () => {
        apiCall({
            method: 'GET',
            url: url.api.auth.checkPhone({ username: formatPhoneForBack(phone.value) }),
        })
            .then(data => {
                sendSMS(data);
                setUserId(data.id);
            })
            .catch(error => {
                setAuthStep(STEPS.REGISTRATION);
            });
    };

    const sendSMS = data => {
        apiCall({
            method: 'GET',
            url: url.api.auth.sendSMS({ username: data.username }),
        }).then(data => {
            setAuthStep(STEPS.CODE);
        });
    };

    const codeVerification = () => {
        apiCall({
            method: 'POST',
            url: url.api.auth.token(),
            data: {
                username: formatPhoneForBack(phone.value),
                password: code.value,
            },
        }).then(data => {
            if (data && data.token) {
                setAuthToken(data.token);
                closeModal();
                clearAuthState();
                loadUser();
            }
        });
    };

    const loadUser = () => {
        apiCallPrivate({
            method: 'GET',
            url: url.api.auth.loadUser({ id: getUserId() }),
        }).then(data => {
            setUser(data);
        });
    };

    const createUser = () => {
        const isValid = validateState({ phone, name, surname, email });
        if (isValid) {
            apiCall({
                method: 'POST',
                url: url.api.auth.createUser(),
                data: {
                    username: formatPhoneForBack(phone.value),
                    first_name: name.value,
                    last_name: surname.value,
                    email: email.value,
                },
            }).then(data => {
                sendSMS(data);
            });
        }
    };

    // Handlers
    const handleAuthInputChange = (value, { field }) => {
        changeField(field, value);
    };

    const handleCheckPhone = () => {
        checkPhone();
    };

    const handleCodeVerification = () => {
        codeVerification();
    };

    const handleCreateUser = () => {
        createUser();
    };

    const handleEmailValidation = (value, { field }) => {
        const isValid = validationEmail(value);
        if (!isValid) {
            setError(field, ERRORS.EMAIL_IS_INVALID);
        }
    };

    return (
        <>
            {step === STEPS.PHONE && (
                <Modal
                    isOpen={isAuthModalOpen}
                    title='Введите номер телефона'
                    confirmBtn='Отправить'
                    onConfirm={handleCheckPhone}
                    onClose={closeModal}
                >
                    <Input
                        field='phone'
                        mask='+7 (999) 999-99-99'
                        placeholder='+7 (___) ___--'
                        size='l'
                        error={phone.error}
                        value={phone.value}
                        onChange={handleAuthInputChange}
                    />
                </Modal>
            )}
            {step === STEPS.CODE && (
                <Modal
                    isOpen={isAuthModalOpen}
                    title='Вход'
                    confirmBtn='Войти'
                    onConfirm={handleCodeVerification}
                    onClose={closeModal}
                >
                    <Input
                        field='code'
                        placeholder='Код из смс'
                        size='l'
                        error={code.error}
                        value={code.value}
                        onChange={handleAuthInputChange}
                    />
                </Modal>
            )}
            {step === STEPS.REGISTRATION && (
                <Modal
                    isOpen={isAuthModalOpen}
                    title='Регистрация'
                    confirmBtn='Войти'
                    onConfirm={handleCreateUser}
                    onClose={closeModal}
                >
                    <div className='AuthModalContainer__row'>
                        <Input
                            field='phone'
                            mask='+7 (999) 999-99-99'
                            placeholder='+7 (___) ___--'
                            size='l'
                            error={phone.error}
                            value={phone.value}
                            onChange={handleAuthInputChange}
                        />
                    </div>
                    <div className='AuthModalContainer__row'>
                        <Input
                            field='name'
                            placeholder='Имя'
                            size='l'
                            error={name.error}
                            value={name.value}
                            onChange={handleAuthInputChange}
                        />
                    </div>
                    <div className='AuthModalContainer__row'>
                        <Input
                            field='surname'
                            placeholder='Фамилия'
                            size='l'
                            error={surname.error}
                            value={surname.value}
                            onChange={handleAuthInputChange}
                        />
                    </div>
                    <div className='AuthModalContainer__row'>
                        <Input
                            field='email'
                            placeholder='Email'
                            size='l'
                            error={email.error}
                            value={email.value}
                            onChange={handleAuthInputChange}
                            onBlur={handleEmailValidation}
                        />
                    </div>
                </Modal>
            )}
        </>
    );
};

AuthModalContainer.propTypes = {
    auth: PropTypes.shape({
        isAuthModalOpen: PropTypes.bool,
        phone: PropTypes.object,
        code: PropTypes.object,
        name: PropTypes.object,
        surname: PropTypes.object,
        email: PropTypes.object,
    }),
    changeField: PropTypes.func,
    closeModal: PropTypes.func,
    setAuthStep: PropTypes.func,
    setError: PropTypes.func,
};

const mapStateToProps = state => ({
    auth: state.authReducer,
});

export default connect(mapStateToProps, {
    changeField,
    clearAuthState,
    closeModal,
    setAuthStep,
    setError,
    setUser,
})(AuthModalContainer);