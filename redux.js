// Define default state
const initialState = {count : 0}

// updateFunction
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': return { ...state,count: state.count + 1};
        case 'SUBSTRACT' : return {...state,count: state.count - 1};
        case 'RESET' : return {...state, count: 0 };
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
            listeners = listeners.filter(l => l  !== listener);
        }; 
    };


dispatch ({});

return {getState, dispatch, subscribe};

}

// Initializes state and action 
const store = createTallyStore(reducer);

// Retrieves current state of store
console.log(store.getState());

// Displays counter
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
console.log(store.getState());

store.dispatch({type: 'SUBSTRACT'});
console.log(store.getState());

store.dispatch({type: 'RESET'});
console.log(store.getState());

