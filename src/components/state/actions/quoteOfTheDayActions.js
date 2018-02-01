// IMPORT SERVICES

import { fetchQuoteOfTheDay } from '../../../services/QuoteService';

// FETCH QOD ACTION NAMES

export const FETCH_QUOTE_OF_THE_DAY = 'FETCH_QUOTE_OF_THE_DAY';
export const FETCH_QUOTE_OF_THE_DAY_PENDING = 'FETCH_QUOTE_OF_THE_DAY_PENDING';
export const FETCH_QUOTE_OF_THE_DAY_FULFILLED = 'FETCH_QUOTE_OF_THE_DAY_FULFILLED';
export const FETCH_QUOTE_OF_THE_DAY_REJECTED = 'FETCH_QUOTE_OF_THE_DAY_REJECTED';


// ACTION GENERATORS

const fetchQuoteOfTheDayAction = () => ({
    type: FETCH_QUOTE_OF_THE_DAY,
    payload: fetchQuoteOfTheDay()
});


// EXPORT ACTIONS

export { fetchQuoteOfTheDayAction as fetchQuoteOfTheDay };