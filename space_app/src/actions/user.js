export const changeField = (field, value) => dispatch => {
    dispatch({
        type: 'CHANGE_FIELD',
        payload: {field, value}
    })
}

export const setUser = user => dispatch => {
    dispatch({
        type: 'SET_USER',
        payload: {user}
    })
}

export const clearState = () => dispatch => {
    dispatch({
        type: 'CLEAR_STATE'
    })
}