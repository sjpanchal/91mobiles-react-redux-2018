
import Counter from "../components/Counter";

import {connect} from "react-redux";

import * as actions from "../state/actions";

// state = store.getState()
export function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

//actions, dispatch
export function mapDispatchToProps(dispatch) {
    return {
        increment: function() {
            // alert('inc');
            let action = actions.increment(1);
            dispatch(action);
        },

        decrement: function () {
           // alert('dec')
           let action = actions.decrement(1);
            dispatch(action);
        }
    }
}

let connectFn = connect(mapStateToProps,  mapDispatchToProps);

let CounterContainer = connectFn(Counter);
export default CounterContainer;