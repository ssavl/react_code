// Actions
import { setError } from '../action/auth';

import ERRORS from '../constants/errors';

// Helpers
import { isObject } from './is';

// Store
import store from '../store';

export const validationEmail = email =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

export const validateState = state => {
    let isValid = true;
    Object.entries(state).forEach(([key, value]) => {
        if (value && isObject(value) && value.required) {
            if (!value.value) {
                isValid = false;
                store.dispatch(setError(key, ERRORS.FIELD_IS_REQUIRED));
            }
        }
    });
    return isValid;
};