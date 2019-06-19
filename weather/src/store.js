import {createStore, applyMiddleware} from 'redux'
import rooter from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rooter);

export default store;