// IMPORT ACTION CONSTANTS

import {
    FETCH_FAVORITE_QUOTES_PENDING,
    FETCH_FAVORITE_QUOTES_FULFILLED,
    FETCH_FAVORITE_QUOTES_REJECTED,
} from '../actions/favoriteQuoteActions';


// INITIALIZE STATE

const initialState = {
    favorites: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchFavoriteQuotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAVORITE_QUOTES_PENDING:
            return {
                ...state,
                favorites: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_FAVORITE_QUOTES_FULFILLED:
            return {
                ...state,
                favorites: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_FAVORITE_QUOTES_REJECTED:
            return {
                ...state,
                favorites: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};