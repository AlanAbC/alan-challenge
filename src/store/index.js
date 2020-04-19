
import  {createStore, applyMiddleware, compose} from 'redux';
import  rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { loadState } from '../localStorage';

const init = loadState();

export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);


export default  function configureStore(initialState = null) {
  return createStore(
    rootReducer,
    init,
    composedEnhancers);
}
