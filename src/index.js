import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeServiceWorkers } from './serviceWorkers';


// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
initializeServiceWorkers();
