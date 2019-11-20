import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './saga'

const bindMiddleware = middlewares => {
    const { composeWithDevTools } = require('redux-devtools-extension')
    const isDev = process.env.NODE_ENV !== 'production';
    if (isDev) {
        const { createLogger } = require(`redux-logger`);

        middlewares.push(
            createLogger({
                collapsed: true
            })
        );
    }
    return composeWithDevTools(applyMiddleware(...middlewares))
}

function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export default configureStore