import  {ADD_INPUT, MAIN_ADD, MAIN_SUB, CHANGE_INPUT} from './types'


export const onAdd = () => dispatch => {
    dispatch({type: MAIN_ADD})

}

export const onSub = () => dispatch => {
    dispatch({type: MAIN_SUB})
}

export const onAddInput = (number) => dispatch => {
    dispatch({type: ADD_INPUT, payload: number})
}

export const onChangeInput = (change) => dispatch => {
    dispatch({type: CHANGE_INPUT, payload: change})
}