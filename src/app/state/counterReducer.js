import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = 0;
// called by store
export default function counterReducer(state = INITIAL_STATE, action) {
    console.log("counterReducer", state, action);

    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value;

        case ActionTypes.DECREMENT:
            return state - action.payload.value;
        
        default:
            return state;
    }


}