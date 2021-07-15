export const getAuthToken = () => {
    return localStorage.getItem('token');
};

export const getUserId = () => {
    return localStorage.getItem('userId');
};

export const setAuthToken = token => {
    localStorage.setItem('token', token);
};
export const setUserId = id => {
    localStorage.setItem('userId', id);
};

export const existAuthToken = () => !!localStorage.getItem('token');

export const existUserId = () => !!localStorage.getItem('userId');

export const removeAuthToken = () => {
    localStorage.removeItem('token');
};
export const removeUserId = () => {
    localStorage.removeItem('userId');
};
