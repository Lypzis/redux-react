import React from 'react';
import ReactDOM from 'react-dom';
// perfect place to create a global store (Redux)
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// the two reducers will merge together at the end
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ // right here
    ctr: counterReducer, 
    res: resultReducer
});

const store = createStore(rootReducer);

// Provider wrapps the app
ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();
