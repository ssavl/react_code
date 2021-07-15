import { NEW_ARTICLES } from './types'

export const setNews = (news) => (dispatch) => {
    dispatch({
        type: NEW_ARTICLES,
        payload: {news},
    })
}

