// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuoteOfTheDay } from '../state/actions/quoteOfTheDayActions';

// IMPORT COMPONENTS

import { LoadingIndicator } from '../shared/LoadingIndicator';
import { QuoteDisplay } from './QuoteDisplay';


// COMPONENT

class QuoteOfTheDay extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuoteOfTheDay();
    }

    render() {
        const busy = this.props.fetching || this.props.adding;
        
        return (
            <div>
                {
                    !busy && <QuoteDisplay />
                }
                {
                    <LoadingIndicator busy={busy} />
                }
            </div>
        );
    }
}

// CONFIGURE COMPONENT PROP TYPES

QuoteOfTheDay.propTypes = {
    fetchQuoteOfTheDay: PropTypes.func,
    fetched: PropTypes.bool,
    fetching: PropTypes.bool,
    added: PropTypes.bool,
    adding: PropTypes.bool
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetched, fetching } = state.quoteOfTheDay;
    const { adding, added } = state.favoriteQuote;

    return {
        fetched,
        fetching,
        added,
        adding
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchQuoteOfTheDay }, dispatch);
};

const hoc = connect(mapStateToProps, mapDispatchToProps)(QuoteOfTheDay);


// EXPORT COMPONENT

export { hoc as QuoteOfTheDay };