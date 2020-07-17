import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons'
import Task from './Task'

import {
    deleteNote,
    createTask,
    setVisibleActions
} from '../../utils/actions'

export default ({ note, setDisableSave }) => {
    const dispatch = useDispatch()

    const handlerCreateTask = () => {
        dispatch(createTask(note.id))
        setDisableSave(false)
    }

    const handlerDeleteNote = (note) => {
        dispatch(deleteNote(note.id))
        dispatch(setVisibleActions(note.id, !note.visibleActions))
        setDisableSave(false)
    }

    const handlerVisibleActions = (id, key) => {
        dispatch(setVisibleActions(id, key))
    }

    return (
        <li key={note.id} className="nop-notes-list__item">
            <div className="nop-notes-list__note-header">
                <h3><NavLink to={`/${note.id}`}>{note.title}</NavLink></h3>
                <button
                    className={`nop-header__new-note${note.visibleActions ? ' visible' : ''}`}
                    onClick={() => handlerVisibleActions(note.id, !note.visibleActions)}
                ><FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon></button>
            </div>

            {note.visibleActions && (
                <ul className="nop-notes-list__note-actions">
                    <li><NavLink
                        to={`/${note.id}`}
                        onClick={() => handlerVisibleActions(note.id, !note.visibleActions)}
                    >Edit</NavLink></li>
                    <li onClick={() => handlerDeleteNote(note)}>Delete</li>
                </ul>
            )}
            
            <ul className="nop-notes-list__tasks-list">
                {note.tasks && note.tasks.map((task, i) => <Task key={i} id={note.id} task={task} />)}
                <li
                    className="nop-tasks-list__item new-task"
                    onClick={() => handlerCreateTask()}
                >
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </li>
            </ul>
        </li>
    )
}