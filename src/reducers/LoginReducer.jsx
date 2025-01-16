const LoginReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.status
        default:
            return state
    }
}

export default LoginReducer