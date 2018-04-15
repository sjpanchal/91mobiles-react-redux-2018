
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";

function AuthRoute(props) { 
        return (
                props.authenticated? React.createElement(props.component):
                                     <Redirect to="/login" />
        )
} 


AuthRoute.defaultProps = {
    
}

AuthRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.object
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

//return container
export default connect (mapStateToProps, null) (AuthRoute);