

import { REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_ERROR } from '../constants'



export function loadingStatus(state = {}, action) {
    let { message } = action;
    switch (action.type) {
        case REQUEST_BEGIN:
        case REQUEST_ERROR:
            {
                return Object.assign({}, state, { message })
            }
        case REQUEST_SUCCESS: return Object.assign({}, state, { message: '' })
        default: return state
    }
}