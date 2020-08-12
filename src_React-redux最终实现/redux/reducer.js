import {
  INCREMENT
} from './constants'

//定义reducer
export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.num
    default:
      return state
  }
}