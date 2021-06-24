import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './SocketContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);