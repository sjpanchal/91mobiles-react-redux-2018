import React, {Component} from "react";

// action creators
import * as actions from "../state/actions";

import store from "../store";

//React.Component == Component

// stateless component

export default class ReduxHome extends Component {
    constructor() {
        super();
 
        console.log("Home comp created");
    }


    componentDidMount() {
        console.log("Home did mount");

        this.unsubscribeFn =  store.subscribe( () => {
            console.log("SUBS ", Math.random());
            this.forceUpdate();
        })
    }

    increment() {
        let action = actions.increment(1);
        // action => { type: 'INCREMENT', payload: {value: 1}}
        // shall call reducer
        store.dispatch(action);
    }

    // option 2 to solve this in context
    // ES.NEXT
    decrement = () => {
         let action = actions.decrement(1);
         store.dispatch(action);
    }

    componentWillUnmount() {
        console.log("Home will unmount")

        this.unsubscribeFn();
    }
    
    render() {
        //fixme: get from redux
        let counter = store.getState().counter;
        console.log("Home render", counter);

        return (
            <div>
                <h2>Redux Home</h2>

                <p>Counter : {counter}</p>

                <button onClick={ () => this.increment() }>
                    +1
                </button>

                <button onClick={this.decrement} >
                    -1
                </button>
            </div>
        )
    }
}