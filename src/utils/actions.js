import C from './types'

export function createNote() {
    return {
        type: C.CREATE_NOTE
    }
}

export function checkedTask(checked) {
    return {
        type: C.CHECKED_TASK,
        payload: {
            checked
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