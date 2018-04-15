// first react component 

import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import ReduxHome from "./components/ReduxHome";

import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

//TODO: lazy loading/code split
import Cart from "./cart/components/Cart";

import ProductList from "./product/components/ProductList";

// Custom HoC
import CounterContainer from "./containers/CounterContainer";

// React-Redux Connect
import CounterReduxContainer
             from "./containers/CounterReduxContainer";

import ReduxCart from "./redux-cart/containers/Cart";

import PropTypes from 'prop-types';

import Login from "./containers/Login";
import AuthRoute from "./components/AuthRoute";

// browser navigation in SPA
import {BrowserRouter,
        Route, 
        Switch } from 'react-router-dom';

// virtual dom
export class App extends React.Component {

    constructor() {
        super();

        this.state = {
            title: 'Product App',
            year: 2018,
            address: {city: 'Delhi'}
        }
    }

    //ES Next, static var inside class
    static childContextTypes = {
        theme: PropTypes.string
    }

    getChildContext() {
        return {
            theme: 'white-blue'
        }
    }

    // parent callback, to be called by child
    changeAddress = (city) => {
        console.log("called by child ", city);
        // trigger render method
        this.setState({
            address: {city: city}
        })
    }

    // create and return virtual dom
    render() {
        console.log("App render");
        // JSX JavaScript + XML
        
        return (
            <BrowserRouter>
                <div>
                    <Header title={this.state.title} />
                    <h1>Welcome to React</h1>
                    
                    {/* switch shall pick the top match */}
                    
                    <Switch>
                        <Route path="/" exact component={Home} />
                        
                        <Route path="/login" component={Login} />

                        <Route path="/redux" component={ReduxHome} />
                        <Route path="/hoc" component={CounterContainer} />


                        <Route path="/connect" component={CounterReduxContainer} />

                        <Route path="/cart" component={Cart} />

                        <AuthRoute path="/redux-cart" component={ReduxCart} />
                        
                        <Route path="/products" component={ProductList} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>

                    <Footer title={this.state.title}
                            year={this.state.year}
                            address={this.state.address}
                            changeAddress={this.changeAddress}
                    >
                    <p>Contact Time: 9:00 am to 5:00 pm</p>
                    <p>Phone 111-333-4444 </p>
                    </Footer>
                </div>
            </BrowserRouter>
        );

    }
}