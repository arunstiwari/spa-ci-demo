import {createStore} from 'redux';
import reducers from '../reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {initialState} from '../store/initialState';


const store = createStore(reducers,initialState, devToolsEnhancer());

export default store;
