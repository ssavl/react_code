const initialState = {
    login: '',
    password: '',
    user: null
}

export default function reducer (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case 'CHANGE_FIELD': {
            const {field, value} = payload;
            return {
                ...state,
                [field]: value
            }
        }
        case 'SET_USER': {
            const {user} = payload;
            return {
                ...state,
                user
            }
        }
        case 'CLEAR_STATE': {
            return initialState
        }
        default:
            return state
    }
}