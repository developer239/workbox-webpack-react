import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeServiceWorkers } from './workbox';


// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
initializeServiceWorkers();
