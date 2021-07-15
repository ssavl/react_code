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
            console.log('payload', payload)
            return {
                ...state,
                news: payload.news
            }
        }
        default:
            return state

    }

}