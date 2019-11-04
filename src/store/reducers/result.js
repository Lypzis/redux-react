import * as actions from '../actions/index';

import { updateObject } from '../utility';

const initialState = {
    results: []
}

// this one was separated because of the bigger body,
// now the switch statement below is simpler to read.
const deleteResult = (state, action) => {
    // const id = 2;
    // const newArray = [...state.results]; //copy of the array
    // newArray.splice(id, 1); // removes item

    //const updatedArray = state.results.filter(result => true); // returning true will just return all elements of it, this also creates a safe copy of an array
    const updatedArray = state.results.filter(result => result.id !== action.resultElId); // this will make a copy which leaves out the "deleted" element
    return updateObject(state, { results: updatedArray });
}

// using utility classes made the switch very clean :D
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT: return updateObject(state, { results: state.results.concat({ id: Math.random() * 10000, value: action.result }) }); // use concat instead of push in this case, to maintain immutability of the original state
        case actions.DELETE_RESULT: return deleteResult(state, action);
        default: return updateObject(state, {});
    }
}

export default reducer;