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

// Implements a store
const createTallyStore = (reducer) => {
    let state; // holds current state 
    let listeners = []; // holds called functions whenever state changes

   // returns current state
    const tallyStore = Redux.createTallyStore(counter)
    
    // Sends actions to the store
    const dispatch = (action) => {
        state = (state, action);
        listeners.forEach(listener => listener())
    }

// Subscribes to the store
    const subscribe = () => {
        listeners.push(listener);
        return () => {
          listeners = listeners.filter(1 = 1 !== listeners)
 }
};

dispatch ({});
return {getState, dispatch, subscribe}, tallyStore;
};

