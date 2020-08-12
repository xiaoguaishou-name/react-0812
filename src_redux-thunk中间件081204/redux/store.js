import {
  createStore
} from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const middleWare = applyMiddleware(thunk)
const store = createStore(reducer,middleWare)
export default store