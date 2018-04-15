
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Login from "../components/Login";

const mapStateToProps = (state) => {
    return {
         authenticated: state.auth.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         login: function () {
             dispatch({type: 'LOGGED_IN'})
         },
         logout: function () {
            dispatch({type: 'LOGGED_OUT'})
        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Login)