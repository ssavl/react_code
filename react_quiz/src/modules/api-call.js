import axios from 'axios';

// Actions
import { openModal } from '../action/auth';

// Helpers
import { isArray, isObject } from '../helpers/is';

// Store
import store from '../store';

// Utils
import { existAuthToken, getAuthToken } from '../utils/localStorage';

export default ({ addNotification = _ => _, historyPush = _ => _, isPrivate = false } = {}) => {
    return async function apiCall(params) {
        try {
            // Проверяем на токен при приватных запросах
            if (isPrivate) {
                if (!existAuthToken()) {
                    store.dispatch(openModal());
                    return;
                }
                params.headers = {
                    ...params.headers,
                    Authorization: `Token ${getAuthToken()}`,
                };
            }

            const { data, status } = await axios({
                ...params,
            });

            if (status >= 200 && status <= 299) {
                return data;
            }

            throw { data, status };
        } catch (error) {
            if (error.response.status === 401) {
                store.dispatch(openModal());
            }

            console.log('ERROR API:', error);
            throw isObject(error) || isArray(error) ? error : null;
        }
    };
};