import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state); // makes a copy of source object 'state' into a new object '{}'

    switch(action.type){
        case actionTypes.INCREMENT:
            newState.counter = ++state.counter;
            return newState; // now this is a new object 
        case actionTypes.DECREMENT:
            // OR
            return { 
                ...state, // which will make a copy of all information of state into a new object too
                counter: --state.counter // and add/replace this new value to it
            }
        case actionTypes.ADD:
            return {
                ...state, 
                counter: state.counter + action.value 
            }
        case actionTypes.SUBTRACT:
            return {
                ...state, 
                counter: state.counter - action.value 
            }
        default:
            return {...state};
    }

    // return state;
}

export default reducer;