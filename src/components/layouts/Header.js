import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <header className="nop-header">
            <h1 className="nop-header__title">
                <NavLink to="/">Notes</NavLink>
            </h1>
        </header>
    )
}