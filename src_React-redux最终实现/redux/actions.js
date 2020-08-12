import {INCREMENT} from './constants'
function incrementCreator(num) {
  return {
    type: INCREMENT,
    num
  }
}
export {incrementCreator}