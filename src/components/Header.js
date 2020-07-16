import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import {
  createNote
} from '../utils/actions'

export default () => {
    const dispatch = useDispatch()

    return (
        <header className="nop-header">
            <h1 className="nop-header__title">
                <NavLink to="/">Notes</NavLink>
            </h1>
            <button
            className="nop-header__new-note"
            onClick={() => dispatch(createNote())}
            ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
        </header>
    )
}