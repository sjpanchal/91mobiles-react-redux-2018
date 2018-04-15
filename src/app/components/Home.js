import React, {Component} from "react";

//React.Component == Component

 
export default class Home extends Component {
    constructor() {
        super();

        // state is a keyword for react
        this.state = {
            counter: 0
        }

        console.log("Home comp created");
    }


    componentDidMount() {
        console.log("Home did mount");
    }

    increment() {
        console.log("increment called");
        //BAD, mutation
        this.state.counter++;
        console.log("Counter ", this.state.counter);

        //keyword react: trigger react to call render method
        this.forceUpdate();
    }

    // option 2 to solve this in context
    // ES.NEXT
    decrement = () => {
        console.log("decrement called");
        
        console.log("Counter before ", this.state.counter);
        // Good, immutable state update
        // setState is react keyword
        // setState is async
        // setState calls render method
        this.setState({
            counter: this.state.counter - 1
        })

        console.log("Counter after ", this.state.counter);
    }

    componentWillUnmount() {
        console.log("Home will unmount")
    }
    
    render() {
        console.log("Home render", this.state.counter);

        return (
            <div>
                <h2>Home</h2>

                <p>Counter : {this.state.counter}</p>

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