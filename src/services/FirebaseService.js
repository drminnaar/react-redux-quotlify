// IMPORT PACKAGE REFERENCES

import * as firebase from 'firebase';


// INITIALIZATION

const QUOTES_COLLECTION = 'favorite_quotes';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);


// COMMANDS

export const addToFavoriteQuotes = quote => {
    return firebase.database().ref(QUOTES_COLLECTION).push(quote);
};


export const removeFavoriteQuote = id => {
    return firebase.database().ref(`${QUOTES_COLLECTION}/${id}`).remove();
};


// QUERIES

export const fetchFavoriteQuotes = () => {
    return firebase.database().ref(QUOTES_COLLECTION).once('value');
};