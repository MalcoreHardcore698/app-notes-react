import { combineReducers } from 'redux'
import C from './types'
import { v4 as uuidv4 } from 'uuid'

const notesReducer = (state = [], action) => {
    switch (action.type) {
        case C.LOAD_NOTES:
            return action.payload.notes
        case C.CREATE_NOTE:
            return [
                ...state,
                {
                    id: uuidv4(),
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
                            id: uuidv4(),
                            title: 'New Task',
                            edited: false,
                            completed: false
                        }
                    ] 
                }) : ({
                    ...note
                }))
        case C.EDIT_TASK:
            return state.map(note => (note.id === action.payload.noteId)
                ? ({
                    ...note,
                    tasks: note.tasks.map(task => task.id === action.payload.taskId
                        ? ({
                            ...task,
                            title: action.payload.title ? action.payload.title : task.title,
                            edited: !task.edited
                        }) : ({
                            ...task
                        }))
                }) : ({
                    ...note
                }))
        case C.DELETE_TASK:
            return state.map(note => (note.id === action.payload.noteId)
                ? ({
                    ...note,
                    tasks: note.tasks.filter(task => task.id !== action.payload.taskId)
                }) : ({
                    ...note
                }))
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