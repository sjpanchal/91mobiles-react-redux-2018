import React from "react";

import {NavLink} from "react-router-dom";

import store from "../store";

// class component
//export default
export default class Header extends React.Component {
    constructor() {
        super(); //MUST, ES6
    }

    componentDidMount() {
            store.subscribe ( () => {
                    this.forceUpdate();
            })
    }

    render() {
        // props is keyword
        // props hold data send by parent component
        
        //let title = this.props.title;

        //deconstruct
        let {title} = this.props;

        let counter = store.getState().counter;
        let length = store.getState().items.length;

        return (
            <div>
                {/*  comment */}

                <h1>{title}</h1>

                <NavLink to="/" className="button">
                        Home
                </NavLink>


                <NavLink to="/redux" className="button">
                        Redux {counter}
                </NavLink>


                
                <NavLink to="/hoc" className="button">
                        HoC
                </NavLink>


                <NavLink to="/connect" className="button">
                        Connect
                </NavLink>

                <NavLink to="/products" className="button">
                        Products
                </NavLink>

                
                <NavLink to="/redux-cart" className="button">
                        Redux Cart [ {length} ]
                </NavLink>

                <NavLink to="/cart" className="button">
                        Cart
                </NavLink>


                <NavLink to="/contact" className="button">
                        Contact
                </NavLink>

                <NavLink to="/about" className="button">
                        About
                </NavLink>


                <NavLink to="/login" className="button">
                        Login
                </NavLink>

            </div>
        )
    }
}