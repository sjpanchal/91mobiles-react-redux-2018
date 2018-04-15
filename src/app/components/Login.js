
import React from "react";
import PropTypes from "prop-types";

export default function Login(props) { 
        let {authenticated} = props;

        return (
            <div> 
            <h2>Login</h2>

            {!authenticated  &&
                <button onClick={() => props.login()}>
                    Login
                </button>
            }

            {  authenticated && 
                <button onClick={() => props.logout()}>
                    Logout
                </button>
            }
            </div>
        )
} 


Login.defaultProps = {
    
}

Login.propTypes = {
    
}