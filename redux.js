// Define default state
const initialState = {count : 0}

// updateFunction
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': return { ...state.count + 1};
        case 'SUBSTRACT' : return {...state.count + 1};
        case 'RESET' : return {...state.count - 1};
        return {count : 0}
        default: return state;
    }
}

// Implements a store
const createTallyStore = (reducer) => {
    let state; // holds current state 
    let listeners = []; // holds called functions whenever state changes

    const getState = () => state; // returns current state
    
    // Sends actions to the store
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    }

// Subscribes to the store
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
          listeners = listeners.filter(i = 1 !== listener)
 }
};

dispatch ({});
return {getState, dispatch, subscribe};
}
