import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layouts/Header'
import Main from './layouts/Main'

import {
  loadNotes
} from '../utils/actions'

import { getCookie } from '../utils/functions'

import '../css/Reset.css'
import '../css/Root.css'
import '../css/App.css'

export default () => {
  const dispatch = useDispatch()
  const [isDisableSave, setDisableSave] = useState(false)

  useEffect(() => {
    const notes = getCookie('nop')
    if (notes) {
      dispatch(loadNotes(JSON.parse(notes)))
    }
  }, [dispatch])

  return (
    <div className="nop-app">
      <Router>
        <Header isDisableSave={isDisableSave} setDisableSave={setDisableSave} />
        <Main setDisableSave={setDisableSave} />
      </Router>
    </div>
  )
}
