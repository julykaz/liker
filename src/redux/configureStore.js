import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import suggestions from './modules/suggestions';

const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const rootReducer = combineReducers({
  suggestions,
});

const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default configureStore;