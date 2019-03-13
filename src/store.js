import { applyMiddleware, createStore, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';
// import bodySaga from './containers/Body/sagas';

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware()));

// sagaMiddleware.run(bodySaga);

export default store;
