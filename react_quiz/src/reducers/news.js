// Types
import { NEW_ARTICLES } from '../action/types'

// Store
const initialState = {
    news: [],
}

export default function newsReducer (state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case NEW_ARTICLES : {
            return {
                ...state,
                news: action.payload.news
            }
        }
        default:
            return state

    }

}