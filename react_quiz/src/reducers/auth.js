// Action types
import {
    AUTH_CHANGE_FIELD,
    AUTH_CLEAR_STATE,
    AUTH_CLOSE_MODAL,
    AUTH_LOGOUT,
    AUTH_OPEN_MODAL,
    AUTH_SET_AUTH_STEP,
    AUTH_SET_ERROR,
    AUTH_SET_USER,
} from '../action/types';

// Steps
import { STEPS } from '../constants/authSteps';

const initialState = {
    phone: {
        error: '',
        value: '',
        required: true,
    },
    username: {
        error: '',
        value: '',
        required: true,
    },
    password: {
        error: '',
        value: '',
        required: true,
    },
    code: {
        error: '',
        value: '',
        required: true,
    },
    name: {
        error: '',
        value: '',
        required: true,
    },
    surname: {
        error: '',
        value: '',
        required: true,
    },
    email: {
        error: '',
        value: '',
        required: true,
    },
    token: null,
    user: null,
    isAuthModalOpen: false,
    isAuthenticated: false,
    step: STEPS.PHONE,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_CHANGE_FIELD: {
            const { field } = payload;
            return {
                ...state, [field]: {...state.field, value: payload.value, error: '',
                },
            };
        }
        case AUTH_CLEAR_STATE: {
            return initialState;
        }
        case AUTH_CLOSE_MODAL: {
            return {
                ...state,
                isAuthModalOpen: false,
            };
        }
        case AUTH_LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
            };
        }
        case AUTH_OPEN_MODAL: {
            const { step } = payload;
            return {
                ...state,
                step,
                isAuthModalOpen: true,
            };
        }
        case AUTH_SET_AUTH_STEP: {
            const { step } = payload;
            return {
                ...state,
                step,
            };
        }
        case AUTH_SET_ERROR: {
            const { field, error } = payload;
            return {
                ...state,
                [field]: {
                    ...state[field],
                    error,
                },
            };
        }
        case AUTH_SET_USER: {
            return {...state, user: payload.user, isAuthenticated: true,
            };
        }

        default: {
            return state;
        }
    }
}