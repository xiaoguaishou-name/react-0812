import Count from '../pages/Count'
import {
  connect
} from 'react-redux'
import incrementCreator from '../redux/actions'

function mapStateToProps(state) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment() {
      dispatch(incrementCreator(2))
    }
  }
}
const withCount = connect(mapStateToProps, mapDispatchToProps)(Count)
export default withCount