import * as actionTypes from './actionTypes';

export const saveResult = result => {
    //const updatedResult = result * 2; 
    return {
        type: actionTypes.STORE_RESULT,
        result //: updatedResult
    }
}

export const storeResult = result => {
    // this is only possible WITH redux-thunk middleware
    return dispatch => //'getState' second argument gets state, case NEEDED, DON'T OVERUSE
        // makes possible to run asynchronous code
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
}

export const deleteResult = id => {
    // action
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
}