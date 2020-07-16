import { combineReducers } from 'redux'
import C from './types'

const notesReducer = (state = {}, action) => {
    switch (action.type) {
        case C.CREATE_NOTE:
            return state
        case C.EDIT_NOTE:
            return state
        case C.DELETE_NOTE:
            return state
        case C.CREATE_TASK:
            return state
        case C.EDIT_TASK:
            return state
        case C.DELETE_TASK:
            return state
        case C.CHECKED_TASK:
            return state
        case C.SHOW_MODAL:
            return state
        case C.HIDE_MODAL:
            return state
        default:
            return state
    }
}

export const reducers = combineReducers({
    notes: notesReducer
})