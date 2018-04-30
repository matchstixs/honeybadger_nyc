import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';
import createdHistory from 'history/createBrowserHistory';

const middleware = applyMiddleware(promise(), thunk);

export const history = createdHistory();

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);
