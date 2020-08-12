import {INCREMENT} from './constants'
function incrementCreator(num) {
  return ({
    type: INCREMENT,
    num
  })
}
function incrementCreatorAsync(num) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(incrementCreator(num))
    },2000)
  }
}
export {
  incrementCreator,
  incrementCreatorAsync
}