// NOTE: Redux is independent of React, that is why it is 'outside'
const redux = require('redux'); //for execution with node, for now
const createStore = redux.createStore;

// The order of creation is important
const initialState = { // this will be the default state value
    counter: 0
}

// Reducer /////////////////////////////////////////
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return { // remember to NEVER mutate the state directly
            ...state, // first make a copy of the actual state information using spread
            counter: state.counter + 1 // then mutate the property you want to change 
                                       // using the current state information
        };
    }
    else if(action.type === 'ADD_COUNTER') {
        return {
            ...state, 
            counter: state.counter + action.value // 'value' in dispatch
        };
    }

    return state  // if no action, return the state as it is currently
}; // simple reducer which is just returning an state
////////////////////////////////////////////////////

// Store ///////////////////////////////////////////
const store = createStore(rootReducer); 
////////////////////////////////////////////////////

console.log(store.getState()); // expected output: {counter: 0}

// Subscription ////////////////////////////////////
// executes whenever an action is dispatched and change the store
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});
////////////////////////////////////////////////////

// Dispatching Action //////////////////////////////
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
///////////////////////////////////////////////////

console.log(store.getState()); // expected output: {counter: 11}