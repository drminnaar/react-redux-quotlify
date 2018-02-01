// IMPORT PACKAGE REFERENCES

import axios from 'axios';


// INITIALIZATION

const API_BASE_URL = 'https://favqs.com/api';
const API_KEY = process.env.FAVQS_API_KEY;

const requestConfig = {
    headers: {
        Authorization: `Token token="${API_KEY}"`
    }
};


// HELPER FUNCTIONS

const mapToQuoteOfTheDay = quote => ({
    quoteOfTheDay: {
        author: quote.author,
        content: quote.body,
        tags: [...quote.tags]
    }
});


const mapToQuotes = quotes => quotes.map(quote => mapToQuote(quote));


const mapToQuote = quote => ({
    author: quote.author,
    content: quote.body,
    tags: [...quote.tags]
});


// SERVICES

export const fetchQuoteOfTheDay = () => {
    
    const url = `${API_BASE_URL}/qotd`;

    return new Promise((resolve, reject) => {
        axios
            .get(url, requestConfig)
            .then(response => response.data)
            .then(({ quote }) => resolve(mapToQuoteOfTheDay(quote)))
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};


export const fetchQuotes = filter => {

    const url = `${API_BASE_URL}/quotes/?filter=${filter}`;

    return new Promise((resolve, reject) => {
        axios
            .get(url, requestConfig)
            .then(response => response.data)
            .then(({ quotes }) => resolve(mapToQuotes(quotes)))
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};