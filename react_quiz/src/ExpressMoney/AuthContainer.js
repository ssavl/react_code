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
} from '../actions/auth';

// Components
import Input from '../components/Input';
import Modal from '../components/Modal';

// Constants
import { STEPS } from '../constants/authSteps';
import ERRORS from '../constants/errors';

// Helpers
import { validationEmail, validateState } from '../helpers/validations';

// Modules
import createApiCaller from '../modules/api-call';

// Utils
import { formatPhoneForBack } from '../utils/formatters';
import { getUserId, setAuthToken, setUserId } from '../utils/localStorage';

// Url
import url from '../url';

import './AuthModalContainer.sass';

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