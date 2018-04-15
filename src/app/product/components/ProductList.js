
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }
    
    componentWillMount() {
        console.log("WILL MOUNT ", Date.now())
       
    }


    componentDidMount() {
        console.log("DID MOUNT ", Date.now())

        let start = new Date();
        console.log("START FETCH ", Date.now())
        //console.log("START ", start, start.getMilliseconds());
        fetch("http://localhost:7070/api/products")
        .then ( response => {
            let end = new Date();
            console.log("END FETCH ", Date.now())
            console.log("RESP ", response);
            return response.json()
        })
        .then ( products => {
            //  products = products.filter (product => product.year == 2011)

            this.setState({products});
        })

        console.log("LEAVING DID MOUNT ", Date.now())
        
    }
    
    render() {
        console.log("RENDER ", Date.now())
        let products = this.state.products;
        console.log("Products ", products);

        return (
            <div> 
            <h2>Product List</h2>

            <div className="flex two">
            {
                products.map (product => (
                    <article className="card" key={product.id}>
                        <header>
                            <h2>{product.name}</h2>
                        </header>
                            <p> Price: {product.price}</p>
                            <p> Weight: {product.weight}</p>
                            <p> Year: {product.year}</p>
                        <footer>
                        </footer>
                    </article>
                ))
            }
            </div>
            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}