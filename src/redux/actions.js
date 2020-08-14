import {
  GET_USERS_SUCCESS,
  LOADING,
  ERROR,
  FILTER
} from './constants'
import axios from 'axios'
export function loading() {
  return {
    type: LOADING
  }
}
export function error() {
  return {
    type: ERROR
  }
}
function getUsersSync(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  }
}
export function getUsersAsync() {
  return async function (dispatch) {
    dispatch(loading())
    let res
    try {
      res = await axios.get('http://localhost:5000/search/users')
      dispatch(getUsersSync(res.data.items))
    } catch  {
      dispatch(error())
    }
  }
}
export function filterFn(data) {
  return {
    type: FILTER,
    data
  }
}