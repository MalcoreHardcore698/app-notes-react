import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NoteIndex from './../pages/NoteIndex'
import HomeIndex from './../pages/HomeIndex'

export default ({ setDisableSave }) => {
    return (
        <main className="nop-main">
          <Switch>
            <Route path="/:id" render={() =>
              <NoteIndex setDisableSave={setDisableSave} />} exact
            />
            <Route path="/" render={() =>
              <HomeIndex setDisableSave={setDisableSave} />} exact
            />
            <Redirect to="/" />
          </Switch>
        </main>
    )
}