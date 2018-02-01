// IMPORT SERVICES

import { fetchQuotes } from '../../../services/QuoteService';


// FIND QUOTE ACTION NAMES

export const FIND_QUOTES = 'FIND_QUOTES';
export const FIND_QUOTES_PENDING = 'FIND_QUOTES_PENDING';
export const FIND_QUOTES_FULFILLED = 'FIND_QUOTES_FULFILLED';
export const FIND_QUOTES_REJECTED = 'FIND_QUOTES_REJECTED';


// ACTIONS GENERATORS

const fetchQuotesAction = filter => ({
    type: FIND_QUOTES,
    payload: fetchQuotes(filter)
});


// EXPORT ACTIONS

export { fetchQuotesAction as fetchQuotes };