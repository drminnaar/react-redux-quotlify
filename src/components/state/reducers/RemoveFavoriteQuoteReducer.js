// IMPORT ACTION CONSTANTS

import {
    REMOVE_FAVORITE_QUOTE_PENDING,
    REMOVE_FAVORITE_QUOTE_FULFILLED,
    REMOVE_FAVORITE_QUOTE_REJECTED
} from '../actions/favoriteQuoteActions';


// INITIALIZE STATE

const initialState = {
    removed: false,
    removing: false,
    failed: false
};


// REDUCER

export const RemoveFavoriteQuoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FAVORITE_QUOTE_PENDING:        
            return {
                ...state,
                removed: false,
                removing: true,
                failed: false
            };
        case REMOVE_FAVORITE_QUOTE_FULFILLED:
            return {
                ...state,
                removed: true,
                removing: false,
                failed: false
            };
        case REMOVE_FAVORITE_QUOTE_REJECTED:
            return {
                ...state,
                removed: false,
                removing: false,
                failed: true
            };
        default:
            return state;
    }
};