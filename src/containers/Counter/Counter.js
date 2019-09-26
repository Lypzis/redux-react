import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsCreator from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState(prevState => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState(prevState => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState(prevState => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState(prevState => { return { counter: prevState.counter - value } })
                break;
            default:
                return -1;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} /> {/* SEE */}
                <CounterControl label="Increment" clicked={this.props.onActionCounter.bind(this, actionsCreator.increment)} />
                <CounterControl label="Decrement" clicked={this.props.onActionCounter.bind(this, actionsCreator.decrement)} />
                <CounterControl label="Add 5" clicked={this.props.onActionCounter.bind(this, actionsCreator.add, 5)} />
                <CounterControl label="Subtract 5" clicked={this.props.onActionCounter.bind(this, actionsCreator.subtract, 5)} />
                <hr />
                <button onClick={this.props.onStoreResult.bind(this, this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map(result => <li
                            key={result.id}
                            onClick={this.props.onDeleteResult.bind(this, result.id)}>
                            {result.value}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

// This function returns the properties I want inside 'Counter' Component, 
// It will then be accessible as 'this.props' 
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter, // check index.js to know where 'ctr' and 'res' are coming from.
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // instead of value, it could be 'payload' with all kinds of relevant data passed into the attribute
        onActionCounter: (action, value = 0) => dispatch(action(value)), // the dispatched object can have more attributes to use at the reducer
        onStoreResult: result => dispatch(actionsCreator.storeResult(result)),
        onDeleteResult: id => dispatch(actionsCreator.deleteResult(id))
    }
}

// This will connect this Component to the global redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // a function who returns a function 