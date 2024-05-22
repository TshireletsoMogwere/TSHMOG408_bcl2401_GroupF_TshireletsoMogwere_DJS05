// Define default state
const initialState = {count : 0}

// updateFunction
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': return { ...state.count + 1};
        case 'SUBSTRACT' : return {...state.count + 1};
        case 'RESET' : return {...state.count + 1};
        default: return state;
    }
}