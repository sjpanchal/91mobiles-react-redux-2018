import {createStore, combineReducers, applyMiddleware} from "redux";

import counterReducer from "./state/counterReducer";
import cartReducer from "./redux-cart/state/cartReducer";
import authReducer from "./state/authReducer";


function loggerMiddleware(store) {
    // next is a function, 
    return function(next) {
        // called for every action dispatch
        return function (action) {
            console.log("LOGGER ", action);
            let result;
            
            // forward action to next middleware/reducers
            result = next(action);

            if (action.type == 'INCREMENT' || 
                action.type == 'DECREMENT') {
                    let counter = store.getState().counter;
                    localStorage.setItem("counter", counter);
            }

            return result;
        }
    }
}


let rootReducer = combineReducers({
    // stateName: reducerFunc
    counter: counterReducer,
    items: cartReducer,
    auth: authReducer
})

let seed = {
    // stateName: seed value
    counter: parseInt(localStorage.getItem("counter")) || 0
}

let store = createStore(rootReducer, seed, applyMiddleware(loggerMiddleware));

console.log("STATE ", store.getState()); 
// STATE  0 (counterReducer)


// STATE  {counter: 0, items: []} (combineReducer)

export default store;