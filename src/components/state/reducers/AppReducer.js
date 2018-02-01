// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

// IMPORT REDUCERS

import { QuoteOfTheDayReducer } from './QuoteOfTheDayReducer';
import { AddFavoriteQuoteReducer } from './AddFavoriteQuoteReducer';
import { FetchFavoriteQuotesReducer} from './FetchFavoriteQuotesReducer';
import { RemoveFavoriteQuoteReducer} from './RemoveFavoriteQuoteReducer';
import { FindQuotesReducer } from './FindQuotesReducer';


// EXPORT REDUCER

export const AppReducer = combineReducers({
    quoteOfTheDay: QuoteOfTheDayReducer,
    favoriteQuote: AddFavoriteQuoteReducer,
    favoriteQuoteRemoval: RemoveFavoriteQuoteReducer,
    favoriteQuotes: FetchFavoriteQuotesReducer,
    quotes: FindQuotesReducer
});