import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../reducer/authReducer';
import { combineReducers } from 'redux';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    combineReducers({auth: authReducer}),
    composeEnhancers(
        applyMiddleware( thunk )
    )
);