// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { removeFavoriteQuote } from '../state/actions/favoriteQuoteActions';


// INITIALIZE COLORS

let bgColors = ['bg-light', 'bg-secondary'];
let colors = ['text-dark', 'text-light'];


// COMPONENT

const FavoriteQuoteCard = (props) => {

    const index = props.index % 2;
    const className = `card mb-3 animated fadeIn ${bgColors[index]} ${colors[index]}`;

    return (
        <div>
            <div className={className}>
                <div className="card-body">
                    <p className="card-text">{props.quote.content}</p>
                    <div className="clearfix">
                        <h5 className="card-title float-left">-- {props.quote.author}</h5>
                        <span className="fa-stack fa-lg float-right"
                            style={{ cursor: 'pointer' }}
                            onClick={() => props.removeFavoriteQuote(props.quote.id)}>
                            <i className="fa fa-circle fa-stack-2x button-icon"></i>
                            <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};


// CONFIGURE COMPONENT PROP TYPES

FavoriteQuoteCard.propTypes = {
    quote: PropTypes.object,
    index: PropTypes.number,
    removeFavoriteQuote: PropTypes.func
};


// CONFIGURE REACT-REDUX

const mapDispatchToProps = dispatch => (
    bindActionCreators({ removeFavoriteQuote }, dispatch)
);

const hoc = connect(null, mapDispatchToProps)(FavoriteQuoteCard);


// EXPORT COMPONENT

export { hoc as FavoriteQuoteCard };