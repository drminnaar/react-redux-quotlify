// IMPORT ACTION CONSTANTS

import {
    FIND_QUOTES_PENDING,
    FIND_QUOTES_FULFILLED,
    FIND_QUOTES_REJECTED
} from '../actions/quoteActions';


// INITIALIZE STATE

const initialState = {
    data: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FindQuotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_QUOTES_PENDING:
            return {
                ...state,
                data: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FIND_QUOTES_FULFILLED:
            return {
                ...state,
                data: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FIND_QUOTES_REJECTED:
            return {
                ...state,
                data: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};