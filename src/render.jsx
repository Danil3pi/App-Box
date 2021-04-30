import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

export let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={state} />
            </React.StrictMode>
        </Router>,
        document.getElementById('root')
    );
};


