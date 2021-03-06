//从redux中导入applyMiddleware函数
import { createStore, applyMiddleware } from 'redux'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import reducer from './reducer'
//导入thunk中间件(下载)
import thunk from 'redux-thunk'
// 调用applyMiddleware,把thunk传入
const middleWare = applyMiddleware(thunk)
const devToolswithmiddleWare = composeWithDevTools(middleWare)
//返回值传入第三个参数位置，reducer后面
const store = createStore(reducer, devToolswithmiddleWare)
export default store