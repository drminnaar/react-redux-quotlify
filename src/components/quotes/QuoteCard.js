// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { addToFavoriteQuotes } from '../state/actions/favoriteQuoteActions';


// CONFIGURE COLORS

let bgColors = ['bg-light', 'bg-secondary'];
let colors = ['text-dark', 'text-light'];


// COMPONENT

const QuoteCard = (props) => {

    const index = props.index % 2;
    const className = `card mb-3 animated fadeIn ${bgColors[index]} ${colors[index]}`;
    const { quote } = props;
    const showQuotes = quote.content !== 'No quotes found';

    return (
        <div>
            {
                showQuotes &&
                <div className={className} >
                    <div className="card-body">
                        <p className="card-text">{quote.content}</p>
                        <div className="clearfix">
                            <h5 className="card-title float-left">-- {quote.author}</h5>
                            <span className="fa-stack fa-lg float-right"
                                style={{ cursor: 'pointer' }}
                                onClick={() => props.addToFavoriteQuotes(quote)}>
                                <i className="fa fa-circle fa-stack-2x button-icon"></i>
                                <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </div>
                </div>
            }
            {
                !showQuotes &&
                <div className={className} style={{ maxWidth: '20rem' }}>
                    <div className="card-body">
                        <p className="card-text">{quote.content}</p>
                    </div>
                </div>
            }
        </div>
    );
};


// CONFIGURE COMPONENT PROP TYPES

QuoteCard.propTypes = {
    quote: PropTypes.object,
    index: PropTypes.number,
    addToFavoriteQuotes: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addToFavoriteQuotes }, dispatch);
};

const hoc = connect(null, mapDispatchToProps)(QuoteCard);


// EXPORT COMPONENT

export { hoc as QuoteCard };