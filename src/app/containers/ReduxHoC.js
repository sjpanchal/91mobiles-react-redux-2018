// BRIDGE BETWEEN REACT AND REDUX

import React, {Component} from "react";
 
import PropTypes from "prop-types";
// taken from context
// import store from "../store";

export default function ReduxConnect(ChildComponent, 
                                    mapStateToProps,
                                    mapDispatchToProps
                                ) {

    return class ReduxHoC extends Component {
        constructor() {
            super();
    
            console.log("ReduxHoC comp created");
        }

        // store is coming from Provider (main.js)
        static contextTypes = {
            store: PropTypes.object
        }

        componentDidMount() {
            console.log("ReduxHoC did mount");

            this.unsubscribeFn =  this.context.store.subscribe( () => {
                console.log("ReduxHoC SUBS ", Math.random());
                this.forceUpdate();
            })
        }

        componentWillUnmount() {
            console.log("ReduxHoC will unmount")

            this.unsubscribeFn();
        }
        
        render() {
            
    let childProps = mapStateToProps(this.context.store.getState());
    // {counter: 0}

    let childDispatchProps = mapDispatchToProps(this.context.store.dispatch)
    // {increment: fn(), decrement: fn()}

    console.log("ReduxHoC render");

    return (
        <ChildComponent {...childProps} {...childDispatchProps} />
    )
        }
    }
}