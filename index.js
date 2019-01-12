import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "module";
import { Provider, connect } from "module";
import PropTypes from 'prop-types';

let counter = 1;
const conuntReducer = (state = null, action) => {
    switch (action.type) {
        case 'TEST':
            return action.counter;
        default: 
            return state;
    }
};

const store = createStore(
    combineReducers({ counter: counterReducer }),
    {counter}
);

store.subscribe(() => console.log(store.getState()));

@connect(
    state => ({
        counter: state.counter
    })
)

//console.log('Start React Application!!!');