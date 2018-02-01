// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { QuoteCard } from './QuoteCard';


// RENDER HELPERS

const renderListItems = quotes => (
    quotes.map((quote, index) => renderListItem(index, quote))
);

const renderListItem = (index, quote) => (
    <QuoteCard key={index} index={index} quote={quote} />
);


// COMPONENT

const QuotesDisplay = (props) => (
    <div className="mx-5">
        {
            props.quotes &&
            <div className="card-columns">
                {renderListItems(props.quotes)}
            </div>
        }
        
    </div>
);

QuotesDisplay.propTypes = {
    quotes: PropTypes.array
};

const mapStateToProps = state => {

    const { data } = state.quotes;

    return {
        quotes: data
    };
};

const hoc = connect(mapStateToProps)(QuotesDisplay);

export { hoc as QuotesDisplay };