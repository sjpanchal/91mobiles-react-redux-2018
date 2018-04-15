// starting file
// mount virtual dom in to real dom

import "whatwg-fetch"; // fetch polyfill for old browser

import React from "react";
import ReactDOM from "react-dom";

// virtual dom, app comp
import {App} from "./app/App";

// Provider expose store as context variable
import {Provider} from "react-redux";
import store from "./app/store";

// diffing, patching virtual, real doms
ReactDOM.render(<Provider store={store}>
                     <App />
                </Provider>,
                 document.getElementById("root"));