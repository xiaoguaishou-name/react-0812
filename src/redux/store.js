import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { users, filter } from './reducer'
const rootReducers = combineReducers({
  users,
  filter
})
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store