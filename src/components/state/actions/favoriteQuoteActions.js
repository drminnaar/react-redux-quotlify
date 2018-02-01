// IMPORT SERVICES

import {
    addToFavoriteQuotes,
    fetchFavoriteQuotes,
    removeFavoriteQuote
} from '../../../services/FavoriteQuoteService';

// IMPORT ACTIONS

import { fetchQuoteOfTheDay } from './quoteOfTheDayActions';


// ADD TO FAVORITE QUOTES ACTION NAMES

export const ADD_TO_FAVORITE_QUOTES = 'ADD_TO_FAVORITE_QUOTES';
export const ADD_TO_FAVORITE_QUOTES_PENDING = 'ADD_TO_FAVORITE_QUOTES_PENDING';
export const ADD_TO_FAVORITE_QUOTES_FULFILLED = 'ADD_TO_FAVORITE_QUOTES_FULFILLED';
export const ADD_TO_FAVORITE_QUOTES_REJECTED = 'ADD_TO_FAVORITE_QUOTES_REJECTED';

// FETCH FAVORITE QUOTES ACTION NAMES

export const FETCH_FAVORITE_QUOTES = 'FETCH_FAVORITE_QUOTES';
export const FETCH_FAVORITE_QUOTES_PENDING = 'FETCH_FAVORITE_QUOTES_PENDING';
export const FETCH_FAVORITE_QUOTES_FULFILLED = 'FETCH_FAVORITE_QUOTES_FULFILLED';
export const FETCH_FAVORITE_QUOTES_REJECTED = 'FETCH_FAVORITE_QUOTES_REJECTED';

// REMOVE FAVORITE QUOTE ACTION NAMES

export const REMOVE_FAVORITE_QUOTE = 'REMOVE_FAVORITE_QUOTE';
export const REMOVE_FAVORITE_QUOTE_PENDING = 'REMOVE_FAVORITE_QUOTE_PENDING';
export const REMOVE_FAVORITE_QUOTE_FULFILLED = 'REMOVE_FAVORITE_QUOTE_FULFILLED';
export const REMOVE_FAVORITE_QUOTE_REJECTED = 'REMOVE_FAVORITE_QUOTE_REJECTED';


// ACTION GENERATORS

const addToFavoriteQuotesAction = (quote) => {
    return dispatch => {
        return dispatch({
            type: ADD_TO_FAVORITE_QUOTES,
            payload: addToFavoriteQuotes(quote)
        }).then(() => dispatch(fetchQuoteOfTheDay()));
    };
};


const fetchFavoriteQuotesAction = () => ({
    type: FETCH_FAVORITE_QUOTES,
    payload: fetchFavoriteQuotes()
});


const removeFavoriteQuoteAction = id => {
    return dispatch => {
        return dispatch({
            type: REMOVE_FAVORITE_QUOTE,
            payload: removeFavoriteQuote(id)
        }).then(() => dispatch(fetchFavoriteQuotesAction()));
    };
};


// EXPORT ACTIONS

export {
    addToFavoriteQuotesAction as addToFavoriteQuotes,
    fetchFavoriteQuotesAction as fetchFavoriteQuotes,
    removeFavoriteQuoteAction as removeFavoriteQuote
};