import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layouts/Header'
import Main from './layouts/Main'

import '../css/Reset.css'
import '../css/Root.css'
import '../css/App.css'

export default () => {
  return (
    <div className="nop-app">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  )
}
