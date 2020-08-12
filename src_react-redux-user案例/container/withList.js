import { connect } from 'react-redux'
import { getUsersAsync,loading,error } from '../redux/actions'
import List from '../pages/List'

const withList = connect(
  state => ({ users: state.users }),
  {
    getUsersAsync,
    loading,
    error
  }
)(List)

export default withList