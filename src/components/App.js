import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Note from './Note'

import '../css/Root.css'
import '../css/App.css'

export default () => {
  return (
    <div className="nop-app">
      <Router>
        <Header />

        <main className="nop-main">
          <Switch>
            <Route path="/:id" component={Note} exact />
            <Route path="/" component={Main} exact />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  )
}
