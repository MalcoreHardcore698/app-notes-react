import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

export default ({ isDisableSave, setDisableSave }) => {
    const state = useSelector(state => state)

    const handlerSave = () => {
        document.cookie = `nop=${JSON.stringify(state.notes)}`
        setDisableSave(true)
    }

    return (
        <header className="nop-header">
            <h1 className="nop-header__title">
                <NavLink to="/">Notes</NavLink>
            </h1>
            <button
                className="nop-header__save"
                onClick={handlerSave}
                disabled={isDisableSave}
            >
                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
            </button>
        </header>
    )
}