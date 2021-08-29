const initialState = true

const toggleSidebar = (state = initialState, action) => {

    switch (action.type) {
        case "open":
            return state = true
        case "close":
            return state = false
        default:
            return state;
    }
}

export default toggleSidebar