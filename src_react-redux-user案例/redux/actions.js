import axios from 'axios'
import { GET_USERS_SUCCESS ,LOADING,ERROR} from './constants'
import regeneratorRuntime from 'regenerator-runtime'
//配合异步action的同步action，因为不用在外面使用，所以不用导出
function getUsersSync(data) {
  return {
    type: GET_USERS_SUCCESS, data
  }
}
export function getUsersAsync() {
  return async function (dispatch) {
    dispatch(loading())
    // 发送异步请求
    let res
    try {
      res = await axios.get('http://localhost:5000/search/users')
      dispatch(getUsersSync(res.data.items))
    } catch {
      dispatch(error())
    }
  }
}
export function loading() {
  return {
    type:LOADING
  }
}
export function error() {
  return {
    type:ERROR
  }
}