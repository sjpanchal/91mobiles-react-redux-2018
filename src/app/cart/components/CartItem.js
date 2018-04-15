// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        theme: PropTypes.string
    }
     

    // called after render
    componentDidMount() {
        console.log("CartItem did mount");
        // refs is react keyword, contains all your ref
        this.refs.qtyElement.focus();
    }

    // called before removing component
    componentWillUnmount() {
        console.log("CartItem will unmount");
    }
    
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} - {this.context.theme}</td>
                <td>{item.price}</td>
                <td>
                     <input value={item.qty}
                            ref="qtyElement"
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => this.props.removeItem(item.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}