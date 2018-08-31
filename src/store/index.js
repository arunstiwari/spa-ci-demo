import {createStore, applyMiddleware} from 'redux';
import sagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {initialState} from '../store/initialState';


const saga = new sagaMiddleware();



const store = createStore(reducers,initialState, devToolsEnhancer());

export default store;
