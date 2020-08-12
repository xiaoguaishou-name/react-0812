//导入store
import {
  createStore
} from 'redux'
import reducer from './reducer'
//创建store对象
const store = createStore(reducer)
export default store