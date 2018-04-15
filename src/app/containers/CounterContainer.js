
import Counter from "../components/Counter";

import ReduxConnect from "./ReduxHoC";

import * as actions from "../state/actions";

import {bindActionCreators} from "redux";

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

        decrement: bindActionCreators(actions.decrement, dispatch)
        // decrement: function (value) {
        //    // alert('dec')
        //    let action = actions.decrement(value);
        //     dispatch(action);
        // }
    }
}

// Component
let CounterContainer = ReduxConnect(Counter, 
                                    mapStateToProps, 
                                    mapDispatchToProps);
export default CounterContainer;