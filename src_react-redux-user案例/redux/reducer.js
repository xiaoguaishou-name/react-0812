import {
  GET_USERS_SUCCESS,
  LOADING,
  ERROR
} from './constants'


const initUsers = {
  users: [], //用户数据
  loading: false, //是否正在加载
  error:'', //error如果有值，表示加载错误
}
export default function reducer(state = initUsers, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        loading: false 
      }
    case LOADING: return {
      ...state,
      loading:true
    }
    case ERROR: return {
      ...state,
      error: '网络请求错误',
      loading:false
    }
    default: return state
  }
}


 