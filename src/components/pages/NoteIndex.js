import React from 'react'
import { useParams } from 'react-router-dom'

export default () => {
    const param = useParams()

    return (
        <React.Fragment>
            <p>Note {param.id}</p>
        </React.Fragment>
    )
}