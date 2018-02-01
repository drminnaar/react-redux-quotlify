// IMPORT PACKAGE REFERENCES

import { createStore, applyMiddleware } from 'redux';

// IMPORT MIDDLEWARE

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// IMPORT REDUCERS

import { AppReducer } from '../reducers/AppReducer';


// CONFIGURE STORE

export const createAppStore = () => {
    const store = createStore(AppReducer, applyMiddleware(thunk, promiseMiddleware()));
    return store;
};