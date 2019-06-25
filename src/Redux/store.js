import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import listReducer from './Reducers/listReducer'
import tabbarReducer from './Reducers/tabbarReducer'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  isShow:tabbarReducer,
  list:listReducer
})
// const store = createStore(reducer,applyMiddleware(promiseMiddleware,thunkMiddleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware,thunkMiddleware)
  )) 

export default store
