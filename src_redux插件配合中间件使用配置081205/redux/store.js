import {
  createStore
} from 'redux'
import { applyMiddleware } from 'redux'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'
const middleWare = applyMiddleware(thunk)
const store = createStore(reducer, composeWithDevTools(middleWare))
export default store