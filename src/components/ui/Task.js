import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'

import {
    checkedTask,
    editTask
} from '../../utils/actions'

export default ({ id, task }) => {
    const dispatch = useDispatch()

    const checkboxTaskStyle = (isChecked) =>
      `nop-tasks-list__item${isChecked ? ' checked' : ''}`

    return (
        <li
            key={task.id} 
            className={checkboxTaskStyle(task.completed)}
        >
            <button
                className="task-edit"
                onClick={() => dispatch(editTask(id, task.id, !task.edited))}
            ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>
            <div
                className="content"
                onClick={() => dispatch(checkedTask(id, task.id, !task.completed))}
            >
                <p className="title">{task.title}</p>
                <span className="checkmark">
                    {task.completed && (
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    )}
                </span>
            </div>
        </li>
    )
}