// IMPORT PACKAGE  REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchQuoteOfTheDay } from '../state/actions/quoteOfTheDayActions';
import { addToFavoriteQuotes } from '../state/actions/favoriteQuoteActions';


// COMPONENT

const QuoteDisplay = (props) => (
    <div>
        {
            props.quote &&
            <div className="quote-display animated fadeIn">
                <div className="quote-display-quote">
                    <i className="fa fa-quote-left fa-lg quote-display-quotes"></i>
                    <div style={{ display: 'inline-block' }}>
                        <div className="quote-display-content">{props.quote.content}</div>
                        <div className="quote-display-author">-- {props.quote.author}</div>
                    </div>
                    <i className="fa fa-quote-right fa-lg quote-display-quotes"></i>
                </div>

                <span className="fa-stack fa-2x"
                    style={{ cursor: 'pointer' }}
                    onClick={() => props.addToFavoriteQuotes(props.quote)}>
                    <i className="fa fa-circle fa-stack-2x button-icon"></i>
                    <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
                </span>

                <span className="fa-stack fa-2x"
                    style={{ cursor: 'pointer' }}
                    onClick={props.fetchQuoteOfTheDay}>
                    <i className="fa fa-circle fa-stack-2x button-icon"></i>
                    <i className="fa fa-refresh fa-stack-1x fa-inverse"></i>
                </span>
            </div>
        }
    </div>
);


// CONFIGURE COMPONENT PROP TYPES

QuoteDisplay.propTypes = {
    quote: PropTypes.object,
    fetchQuoteOfTheDay: PropTypes.func,
    addToFavoriteQuotes: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { quote } = state.quoteOfTheDay;
    return { quote };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchQuoteOfTheDay, addToFavoriteQuotes }, dispatch);
};

const hoc = connect(mapStateToProps, mapDispatchToProps)(QuoteDisplay);


// EXPORT COMPONENT

export { hoc as QuoteDisplay };