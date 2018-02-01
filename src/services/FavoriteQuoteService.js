// IMPORT PACKAGE REFERENCES

import * as firebase from './FirebaseService';


// HELPER FUNCTIONS

const getTimeStamp = () => Math.floor(+new Date() / 1000 | 0);


// SERVICES

export const addToFavoriteQuotes = (quote) => {

    quote.timestamp = getTimeStamp();

    return new Promise((resolve, reject) => {
        firebase
            .addToFavoriteQuotes(quote)
            .then(() => resolve(quote))
            .catch(error => reject(error));
    });
};


export const fetchFavoriteQuotes = () => {
    return new Promise((resolve, reject) => {
        firebase
            .fetchFavoriteQuotes()
            .then(data => {
                if (data === null || data.val() === null) {
                    return resolve([]);
                }

                const quotes = [];

                data.forEach(quote => {
                    quotes.push({
                        id: quote.key,
                        ...quote.val()
                    });
                });

                return resolve(quotes);
            })
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};


export const removeFavoriteQuote = id => {
    return new Promise((resolve, reject) => {
        firebase
            .removeFavoriteQuote(id)
            .then(() => resolve())
            .catch(error => {
                console.log(error);
                return reject(error);
            });
    });
};