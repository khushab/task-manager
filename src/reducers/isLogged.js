const initialState = true

const loggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return state = true
        case 'LOGIN':
            return state = true
        case 'LOGOUT':
            return state = false
        default:
            return state
    }
}

export default loggedReducer