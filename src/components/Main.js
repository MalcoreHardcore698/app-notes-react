import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
    checkedTask
} from '../utils/actions'

export default () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const checkboxTaskStyle = (isChecked) =>
      `checkmark${isChecked ? ' checked' : ''}`

    return (
        <React.Fragment>
            <ul className="nop-main__notes-list">
            {state.notes && state.notes.map(note =>
                <li key={note.id} className="nop-notes-list__item">
                <h3><NavLink to={`/${note.id}`}>{note.title}</NavLink></h3>
                <ul className="nop-notes-list__tasks-list">
                    {note.tasks && note.tasks.map(task =>
                    <li key={task.id} className="nop-tasks-list__item">
                        <span
                        className={checkboxTaskStyle(task.completed)}
                        onClick={() => dispatch(checkedTask(!task.completed))}
                        >
                        <span></span>
                        </span>
                        <p className="title">{task.title}</p>
                    </li>
                    )}
                </ul>
                </li>  
            )}
            </ul>
        </React.Fragment>
    )
}