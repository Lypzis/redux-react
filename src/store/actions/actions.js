// For good practice reasons, avoid typo errors

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// 'action creator', function that creates an action, usefull for asynchronous code, but can be used in synchronous as well
export const increment = () => {
    // action
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    // action
    return {
        type: DECREMENT
    }
}

export const add = value => {
    // action
    return {
        type: ADD,
        value: value
    }
}

export const subtract = value => {
    // action
    return {
        type: SUBTRACT,
        value: value
    }
}

export const storeResult = result => {
    // action
    return {
        type: STORE_RESULT,
        result
    }
}

export const deleteResult = id => {
    // action
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
}