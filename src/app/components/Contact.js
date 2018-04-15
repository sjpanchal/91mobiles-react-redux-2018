// Forms


import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            state: '',
            description: ''
        }
    }

    onChangeValue = (e) => {
        // real dom control
        let target = e.target;
        
        let {name, value} = target;

        console.log("value change ", name, value);

        this.setState({
            [name]: value
        })
    }
     
    render() {
        console.log("Contact render");

        return (
            <div> 
            <h2>Contact</h2>

            <form >
                <label>Name</label>
                <input name="name" 
                      value={this.state.name} 
                      onChange={this.onChangeValue}
                      
                      />


                <label>Email</label>
                <input name="email" 
                      value={this.state.email} 
                      onChange={this.onChangeValue}
                      
                      />
                 
                <label>State</label>
                <select name="state"
                        value={this.state.state}
                        onChange={this.onChangeValue}>
                    <option value="DL">Delhi</option>
                    <option value="TN">Tamilnadu</option>
                </select>

                <textarea  name="description"
                           value={this.state.description}
                           onChange={this.onChangeValue}>
                </textarea>

            </form>
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}