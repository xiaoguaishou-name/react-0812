import {INCREMENT} from './constants'
function incrementCreator(num) {
  return {
    type: INCREMENT,
    num
  }
}
//如果项目中使用thunk中间件，需要在actions里面定义异步action
function incrementCreatorAsync(num){
  return function (dispatch) {
    setTimeout(() => {
      dispatch(incrementCreator(num))
    },1000)
  }
}
export {
  incrementCreator,
  incrementCreatorAsync
}