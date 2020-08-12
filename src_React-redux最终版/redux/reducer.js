import {DIANJIJIAYI} from './constants'
export default function reducer(state = 0, action) {
  switch (action.type) {
    case DIANJIJIAYI: return state + action.num
    default: return state
  }
}