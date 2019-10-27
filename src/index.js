import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { StoreProvider } from './store';
import App from './App';

ReactDOM.render(
    <StoreProvider>
        <App teste="lol" />
        {/* <App teste="lol">childen</App> */}
    </StoreProvider>
    , document.getElementById('root'));
