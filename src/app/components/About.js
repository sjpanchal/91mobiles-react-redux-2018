import React, {Component} from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            members: ['Venkat', 'Krish'],
            show: true
        }
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
     
    
    render() {

        return (
            <div> 
            <h2>About</h2>
            
            <button onClick={this.toggle}>
                {this.state.show? "Hide": "Show"}
            </button>
            
            {this.state.show && 
                <ul>
                {
                    this.state.members
                        .map (name => (
                            <li  key={name}>{name}</li>
                        ))
                }
                </ul>
            }

            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}