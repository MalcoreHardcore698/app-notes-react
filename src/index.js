import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import storeFactory from './storeFactory'
import App from './components/App'

import './index.css'

const store = storeFactory

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)