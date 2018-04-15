// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ {id: 1, name: 'P1', price: 100, qty: 1}],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO
        //BAD, mutating
        // this.state.items.push(item);

        //GOOD PART, immutable
        let items = [...this.state.items, item];
        this.setState({
            items
        })

        this.recalculate(items);
        
        //this.forceUpdate();
    }
    
    removeItem = (id) => {
        //todo
        let items = this.state.items.filter( item => item.id != id);
        this.setState({
            items
        })
        this.recalculate(items);
    }

    updateItem = (id, qty) => {
        //todo
    }

    empty = () => {
        //todo
        // GOOD, async
        this.setState({
            items: []
        }, () => {
            // called after render
            console.log("Empty setstate callback");
            // calls render again
            //this.recalculate(this.state.items);
        })

        this.recalculate([]);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    componentWillMount() {
        this.recalculate(this.state.items);
    }

    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            
            {/* todo */}

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}