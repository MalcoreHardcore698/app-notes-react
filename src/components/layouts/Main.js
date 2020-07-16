import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NoteIndex from './../pages/NoteIndex'
import HomeIndex from './../pages/HomeIndex'

export default () => {
    return (
        <main className="nop-main">
          <Switch>
            <Route path="/:id" component={NoteIndex} exact />
            <Route path="/" component={HomeIndex} exact />
            <Redirect to="/" />
          </Switch>
        </main>
    )
}