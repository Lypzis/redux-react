// instead of importing multiple files of the folder 'actions', 
// imports only this from now on since it will "contain" everything
export {
    ADD,
    SUBTRACT,
    INCREMENT,
    DECREMENT,
    DELETE_RESULT,
    STORE_RESULT
} from './actionTypes';

export {
    add,
    subtract,
    increment,
    decrement
} from './counter';

export {
    storeResult,
    deleteResult
} from './result';