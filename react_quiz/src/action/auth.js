import {
    AUTH_CHANGE_FIELD,
    AUTH_CLEAR_STATE,
    AUTH_CLOSE_MODAL,
    AUTH_LOGOUT,
    AUTH_OPEN_MODAL,
    AUTH_SET_AUTH_STEP,
    AUTH_SET_ERROR,
    AUTH_SET_USER,
} from './types'

// Auth Steps
import {STEPS} from '../constants/authSteps';

// Utils
import {removeAuthToken, removeUserId} from '../utils/localStorage';

export const changeField = (field, value) => dispatch => {
    dispatch({
        type: AUTH_CHANGE_FIELD,
        payload: {field, value},
    });
};

export const clearAuthState = () => dispatch => {
    dispatch({
        type: AUTH_CLEAR_STATE,
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: AUTH_CLOSE_MODAL,
    });
};
export const logout = () => dispatch => {
    removeAuthToken();
    removeUserId();
    dispatch({
        type: AUTH_LOGOUT,
    });
};
export const openModal = (step = STEPS.PHONE) => dispatch => {
    dispatch({
        type: AUTH_OPEN_MODAL,
        payload: {step},
    });
};

export const setAuthStep = step => dispatch => {
    dispatch({
        type: AUTH_SET_AUTH_STEP,
        payload: {step},
    });
};

export const setError = (field, error) => dispatch => {
    dispatch({
        type: AUTH_SET_ERROR,
        payload: {field, error},
    });
};

export const setUser = user => dispatch => {
    dispatch({
        type: AUTH_SET_USER,
        payload: {user},
    });
};