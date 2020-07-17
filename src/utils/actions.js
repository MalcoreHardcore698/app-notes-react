import C from './types'

export function loadNotes(notes) {
    return {
        type: C.LOAD_NOTES,
        payload: {
            notes
        }
    }
}

export function createNote() {
    return {
        type: C.CREATE_NOTE
    }
}

export function editNote() {
    return {
        type: C.EDIT_NOTE
    }
}

export function deleteNote(noteId) {
    return {
        type: C.DELETE_NOTE,
        payload: {
            noteId
        }
    }
}

export function createTask(noteId) {
    return {
        type: C.CREATE_TASK,
        payload: {
            noteId
        }
    }
}

export function checkedTask(noteId, taskId, checked) {
    return {
        type: C.CHECKED_TASK,
        payload: {
            noteId, taskId, checked
        }
    }
}

export function editTask(noteId, taskId, title, edited) {
    return {
        type: C.EDIT_TASK,
        payload: {
            noteId, taskId, title, edited
        }
    }
}

export function deleteTask(noteId, taskId) {
    return {
        type: C.DELETE_TASK,
        payload: {
            noteId, taskId
        }
    }
}

export function setVisibleActions(noteId, isVisible) {
    return {
        type: C.VISIBLE_ACTIONS_NOTE,
        payload: {
            noteId, isVisible
        }
    }
}

export function showModal(key, body) {
    return {
        type: C.SHOW_MODAL,
        payload: {
            key, body
        }
    }
}

export function hideModal() {
    return {
        type: C.HIDE_MODAL
    }
}