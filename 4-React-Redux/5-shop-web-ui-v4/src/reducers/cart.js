
import {BUY} from '../constants'

export function cartReducer(state = [], action) {
    switch (action.type) {
        case 'BUY_ASYNC': {
            let { item } = action
            return [...state, item]
        }
        default:
            return state
    }
}
