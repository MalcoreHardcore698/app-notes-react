import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Note from '../ui/Note'

import {
    createNote
} from '../../utils/actions'

export default () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <ul className="nop-main__notes-list">
                {state.notes && state.notes.map(note => <Note key={note.id} note={note} />)}
                <li
                    className="nop-notes-list__item new-note"
                    onClick={() => dispatch(createNote())}
                >
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </li>
            </ul>
        </React.Fragment>
    )
}