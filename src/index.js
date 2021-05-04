import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

import store from './redux/store.js';


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </Router>,
        document.getElementById('root')
    );
};

reRenderEntireTree(store.getState());

store.callSubscriber(reRenderEntireTree);
// Наверное, эта функция вызывается только один раз, в самом начале. Потом в файле store.js reRenderEntireTree становиться равной reRenderEntireTree из этого файла. И она уже выполняется каждый
// раз, когда необходима отрисовка. 