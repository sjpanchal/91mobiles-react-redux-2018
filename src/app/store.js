import {createStore, combineReducers} from "redux";

import counterReducer from "./state/counterReducer";
import cartReducer from "./redux-cart/state/cartReducer";
import authReducer from "./state/authReducer";

let rootReducer = combineReducers({
    // stateName: reducerFunc
    counter: counterReducer,
    items: cartReducer,
    auth: authReducer
})

let store = createStore(rootReducer);

console.log("STATE ", store.getState()); 
// STATE  0 (counterReducer)


// STATE  {counter: 0, items: []} (combineReducer)

export default store;