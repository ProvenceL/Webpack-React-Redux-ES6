import { connect } from 'react-redux'
import TopNav from '../components/TopNav'
let mapStateToProps = (state) => {
  return {
    test: state.test
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNav)