// action creators as per flux 
import * as ActionTypes from "./ActionTypes";
import { Action } from "rxjs/scheduler/Action";

export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            value
        }
    }
}


export function decrement(value) {
    return {
        type: ActionTypes.DECREMENT,
        payload: {
            value
        }
    }
}