import * as actionTypes from './actionTypes';

// 'action creator', function that creates an action, usefull for asynchronous code, but can be used in synchronous as well
export const increment = () => {
    // action
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    // action
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = value => {
    // action
    return {
        type: actionTypes.ADD,
        value: value
    }
}

export const subtract = value => {
    // action
    return {
        type: actionTypes.SUBTRACT,
        value: value
    }
}