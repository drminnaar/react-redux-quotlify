// IMPORT ACTION CONSTANTS

import {
    ADD_TO_FAVORITE_QUOTES_PENDING,
    ADD_TO_FAVORITE_QUOTES_FULFILLED,
    ADD_TO_FAVORITE_QUOTES_REJECTED
} from '../actions/favoriteQuoteActions';


// INITIALISE STATE

const initialState = {
    favorite: {},
    added: false,
    adding: false,
    failed: false
};


// REDUCER

export const AddFavoriteQuoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE_QUOTES_PENDING:        
            return {
                ...state,
                favorite: {},
                added: false,
                adding: true,
                failed: false
            };
        case ADD_TO_FAVORITE_QUOTES_FULFILLED:
            return {
                ...state,
                favorite: action.payload,
                added: true,
                adding: false,
                failed: false
            };
        case ADD_TO_FAVORITE_QUOTES_REJECTED:
            return {
                ...state,
                favorite: {},
                added: false,
                adding: false,
                failed: true
            };
        default:
            return state;
    }
};