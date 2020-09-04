window.logger = console.log.bind(window)

import React from 'react'
import ReactDOM from 'react-dom'
import {
    createStore
} from "redux";
import {
    Provider
} from 'react-redux'

import rootReducer from 'root/reducers'
import App from './app.jsx'

import 'root/styles/index.scss'

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


// logger("initial state: ", store.getState());

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// // Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));

// // Delete from Cart
// store.dispatch(deleteFromCart('Coffee 500gm'));




// unsubscribe();