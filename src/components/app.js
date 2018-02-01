// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { createAppStore } from './state/stores/createAppStore';
import { AppRouter } from './routers/AppRouter';


// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <Fragment>
            <AppRouter />
        </Fragment>
    </Provider>
);