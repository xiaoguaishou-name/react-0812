import {
  GET_USERS_SUCCESS,
  LOADING,
  ERROR,
  FILTER
} from './constants'
const initUsers = {
  users: [],
  loading: false,
  error:''
}
export function users(state = initUsers, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        loading:false
      }
    case LOADING:
      return {
        ...state,
        loading:true
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error:'网络错误'
      }
    default:
      return state
  }
}
const initFilter = 'all'
export function filter(state=initFilter,action) {
  switch (action.type) {
    case FILTER:
      return action.data
    default:
      return state
  }
}