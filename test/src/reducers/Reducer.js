import '../actions/types'
import {ADD_INPUT, MAIN_ADD, MAIN_SUB, CHANGE_INPUT} from "../actions/types";

const initState = {
    counter: 2021,
    input: null,
}

export default function Reducer (state = initState, action) {
    switch (action.type) {
        case MAIN_ADD: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case MAIN_SUB: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case ADD_INPUT: {
            return {
                ...state,
                counter: state.input
            }
        }
        case CHANGE_INPUT: {
            return {
                ...state,
                input: Number(action.payload)
            }
        }
        default: {
            return (
                state
            )
        }
    }


}
