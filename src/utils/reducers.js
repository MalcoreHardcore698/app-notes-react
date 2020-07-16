import { combineReducers } from 'redux'
import C from './types'

const notesReducer = (state = [], action) => {
    switch (action.type) {
        case C.CREATE_NOTE:
            return [
                ...state,
                {
                    id: state.length,
                    title: 'New Note',
                    tasks: [],
                    visibleActions: false,
                    createdBy: new Date(),
                    editedBy: new Date()
                }
            ]
        case C.EDIT_NOTE:
            return state
        case C.DELETE_NOTE:
            return state.filter(note => (note.id !== action.payload.noteId))
        case C.VISIBLE_ACTIONS_NOTE:
            return state.map(note => (note.id === action.payload.noteId)
                ? ({
                    ...note,
                    visibleActions: action.payload.isVisible
                }) : ({
                    ...note,
                    visibleActions: false
                }))
        case C.CREATE_TASK:
            return state.map(note => (note.id === action.payload.noteId)
                ? ({
                    ...note,
                    tasks: [
                        ...note.tasks,
                        {
                            id: note.tasks.length,
                            title: 'New Task',
                            edited: false,
                            completed: false
                        }
                    ] 
                }) : ({
                    ...note
                }))
        case C.EDIT_TASK:
            return state
        case C.DELETE_TASK:
            return state
        case C.CHECKED_TASK:
            return state.map(note => (note.id === action.payload.noteId)
                ? ({
                    ...note,
                    tasks: note.tasks.map(task => (task.id === action.payload.taskId)
                        ? ({
                            ...task,
                            completed: action.payload.checked
                        }) : ({
                            ...task
                        }))
                }) : ({
                    ...note
                }))
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