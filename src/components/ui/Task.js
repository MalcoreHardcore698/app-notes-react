import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {
    checkedTask,
    editTask,
    deleteTask
} from '../../utils/actions'

export default ({ id, task }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(null)
    const checkboxTaskStyle = (isChecked) =>
      `nop-tasks-list__item${isChecked ? ' checked' : ''}${task.edited ? ' edited' : ''}`

    return (
        <li
            key={task.id} 
            className={checkboxTaskStyle(task.completed)}
        >
            <div className="manage">
                <button
                    className="task-edit"
                    onClick={() => dispatch(editTask(id, task.id, title, !task.edited))}
                ><FontAwesomeIcon icon={task.edited ? faCheck : faEdit}></FontAwesomeIcon></button>
                <button
                    className="task-delete"
                    onClick={() => dispatch(deleteTask(id, task.id))}
                ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>

            <div className="content">
                {task.edited
                ? <input
                    name="title"
                    placeholder={!task.title && 'Enter title your task...'}
                    defaultValue={task.title}
                    autoFocus={true}
                    onChange={(e) => setTitle(e.target.value)}
                />
                : <p className="title">{task.title}</p>}
                <span
                    className="checkmark"
                    onClick={() => dispatch(checkedTask(id, task.id, !task.completed))}
                >
                    {task.completed && (
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    )}
                </span>
            </div>
        </li>
    )
}