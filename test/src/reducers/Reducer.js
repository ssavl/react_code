import '../actions/types'
import {ADD_INPUT, MAIN_ADD, MAIN_SUB, CHANGE_INPUT} from "../actions/types";

const initState = {
    counter: 2021,
    input: null,
}

export default function Reducer (state = initState, action) {
    if (action.type === MAIN_ADD) {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === MAIN_SUB) {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === ADD_INPUT) {
        return {
            counter: state.input
        }
    }
    if (action.type === CHANGE_INPUT) {
        return {
            ...state,
            input: Number(action.payload)
        }
    }

    return (
        state
    )
}
