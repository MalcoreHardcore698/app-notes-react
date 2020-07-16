import {
    createStore,
    applyMiddleware
} from 'redux'

import logger from 'redux-logger'
import { reducers } from './utils/reducers'
import initialStore from './initialStore'

const env = process.env.NODE_ENV

export default (env === 'production')
    ? createStore(
        reducers,
        initialStore,
        applyMiddleware(logger)
    )
    : createStore(reducers, initialStore)