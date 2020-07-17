import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Note from '../ui/Note'

import { createNote } from '../../utils/actions'

export default ({ setDisableSave }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const handlerCreateNote = () => {
        dispatch(createNote())
        setDisableSave(false)
    }

    return (
        <React.Fragment>
            <div className="nop-main__notes-list">
                {state.notes && state.notes.map(note => <Note
                    key={note.id}
                    note={note}
                    setDisableSave={setDisableSave}
                />)}
                <div
                    className="nop-notes-list__item new-note"
                    onClick={() => handlerCreateNote()}
                >
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </div>
            </div>
        </React.Fragment>
    )
}