import React from 'react';
import ReactDOM from 'react-dom';
// perfect place to create a global store (Redux)
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

// Provider wrapps the app
ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();
