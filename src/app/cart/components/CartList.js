// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Cart list should update");
    //     console.log(nextProps.items == this.props.items);

    //     return nextProps.items != this.props.items
    // }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* props items map with CartItem */ }

{
    items.map( item => (
        <CartItem item={item}
                  key={item.id} 
                  removeItem={this.props.removeItem}
                  
                  />
    ))
}        

                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}