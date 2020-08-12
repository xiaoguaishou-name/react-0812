import {
  connect
} from 'react-redux' //connect就是一个高阶组件
import {
  incrementCreator
} from '../redux/actions'
import Count from '../pages/Count'
function mapStateToProps(state) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function () {
      dispatch(incrementCreator(2))
    }
  }
}
//connect第二个参数作用就是将操作redux数据的方法，传递到组件中
const withCount = connect(mapStateToProps, mapDispatchToProps)(Count)
export default withCount