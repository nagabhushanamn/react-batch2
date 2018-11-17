
import {BUY} from '../constants'

export function cartReducer(state = [], action) {
    switch (action.type) {
        case BUY: {
            let { item } = action
            return [...state, item]
        }
        default:
            return state
    }
}
