// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { QuotesDisplay } from './QuotesDisplay';
import { LoadingIndicator } from '../shared/LoadingIndicator';
import { SearchBar } from './SearchBar';


// COMPONENT

const Quotes = (props) => (
    <Fragment>
        <div className="mt-4">
            <SearchBar />
        </div>
        {
            props.fetched &&
            <div className="mt-4">
                <QuotesDisplay className="m-2" />
            </div>
        }
        {
            <LoadingIndicator busy={props.fetching || props.adding} />
        }
    </Fragment>
);


// CONFIGURE COMPONENT PROP TYPES

Quotes.propTypes = {
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    adding: PropTypes.bool,
    added: PropTypes.bool
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {

    const { fetching, fetched } = state.quotes;
    const { adding, added } = state.favoriteQuote;

    return {
        fetching,
        fetched,
        adding,
        added
    };
};

const hoc = connect(mapStateToProps)(Quotes);


// EXPORT COMPONENT

export { hoc as Quotes };