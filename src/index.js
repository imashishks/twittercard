import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './partials/card';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
