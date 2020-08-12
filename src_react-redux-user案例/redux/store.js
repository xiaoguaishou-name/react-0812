import { createStore,applyMiddleware } from 'redux'
import users from './reducer'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(users, composeWithDevTools(applyMiddleware(thunk)))

export default store