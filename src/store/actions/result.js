import * as actionTypes from './actionTypes';

export const saveResult = result => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    }
}

export const storeResult = result => {
    // this is only possible WITH redux-thunk middleware
    return dispatch =>
        // makes possible to run asynchronous code
        setTimeout(() => {
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