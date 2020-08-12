import {INCREMENT} from './constants'
export default function incrementCreator(num) {
  return ({
    type: INCREMENT,
    num
  })
}