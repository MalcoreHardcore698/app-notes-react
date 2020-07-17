import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Note from '../ui/Note'

export default ({ setDisableSave }) => {
    const state = useSelector(state => state)
    const [note, setNote] = useState(null)
    const param = useParams()

    useEffect(() => {
        const founded = state.notes.find(note => note.id === param.id)
        setNote(founded)
    }, [state.notes, param.id, setNote])

    if (!note) return null

    return (
        <div className="nop-note">
            <Note
                edited
                note={note}
                setDisableSave={setDisableSave}
            />
        </div>
    )
}