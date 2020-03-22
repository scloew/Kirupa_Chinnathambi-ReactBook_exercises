import { connect } from 'react-redux'
import Counter from './Counter';

//map redux state to component props
function mapStateToProps(state) {
  return {
    countValue: state.count
  };
}

//define actions
var increaseAction = { type: 'increase' };
var decreaseAction = { type: 'decrease' };

//map redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => { return dispatch(increaseAction) },
    decreaseCount: () => { return dispatch(decreaseAction) }
  };
}

//the HOC (High Order Component)
//HOCs provide easy way to extend functionality of a prexisting component simply
//by wrapping it and injecting their own additional functionaiity into it
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;
