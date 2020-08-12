import { connect } from 'react-redux'
import { incrementCreator,incrementCreatorAsync } from '../redux/actions'
import Count from '../pages/Count'
// function mapStateToProps(state) {
//   return {
//     count:state
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: function () {
//       dispatch(incrementCreator(2))
//     }
//   }
// }
//简写
const withCount =
  connect(state => ({ count: state }),
    {
      incrementCreator,
      incrementCreatorAsync
    })
    (Count)
export default withCount