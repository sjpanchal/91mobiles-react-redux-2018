const INITIAL_STATE = {
    username: '',
    authenticated: false
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "LOGGED_IN" : 
            return {...state, authenticated: true}

        case "LOGGED_OUT": 
        return {...state, authenticated: false}

        default:
            return state;
    }
}