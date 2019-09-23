import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:


        
            return {
                ...state,
                results: state.results.concat({id: Math.random() * 10000, value: action.result}) // use concat instead of push in this case, to maintain immutability of the original state
            };
        case actionTypes.DELETE_RESULT: 
            // const id = 2;
            // const newArray = [...state.results]; //copy of the array
            // newArray.splice(id, 1); // removes item

            //const updatedArray = state.results.filter(result => true); // returning true will just return all elements of it, this also creates a safe copy of an array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); // this will make a copy which leaves out the "deleted" element

            return {
                ...state,
                results: updatedArray
            }
        default:
            return {...state};
    }

    // return state;
}

export default reducer;