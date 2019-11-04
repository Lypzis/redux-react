import * as actions from '../actions/index';
import {updateObject} from '../utility';

const initialState = {
    counter: 0
}

// using utility classes made the switch very clean :D
const reducer = (state = initialState, action) => {
    //DEPRECATED: const newState = Object.assign({}, state); // makes a copy of source object 'state' into a new object '{}'

    switch(action.type){
        case actions.INCREMENT:
            return updateObject(state, {counter: ++state.counter});
        case actions.DECREMENT:
            return updateObject(state, {counter: --state.counter});
        case actions.ADD:
            return updateObject(state, {counter: state.counter + action.value });
        case actions.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value })
        default:
            return updateObject(state, {});
    }

    // return state;
}

export default reducer;