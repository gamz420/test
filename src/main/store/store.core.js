import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { reducers } from './index';

export const initStore = (initialState = {}) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
