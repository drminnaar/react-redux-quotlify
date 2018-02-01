// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchFavoriteQuotes } from '../state/actions/favoriteQuoteActions';
import { FavoriteQuoteCard } from './FavoriteQuoteCard';
import { LoadingIndicator } from '../shared/LoadingIndicator';


// COMPONENT

class FavoriteQuotes extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFavoriteQuotes();
    }

    renderQuoteCards() {
        return this.props
            .favorites
            .map((quote, index) => this.renderQuoteCard(index, quote));
    }

    renderQuoteCard(index, quote) {
        return <FavoriteQuoteCard key={quote.id} index={index} quote={quote} />;
    }

    render() {
        
        const busy = this.props.fetching || this.props.removing;

        return (
            <div className="mx-5 mt-2">
                {
                    !busy && this.props.favorites && 
                    <div className="card-columns">
                        {this.renderQuoteCards()}
                    </div>
                }
                {
                    <LoadingIndicator busy={busy} />
                }
            </div>
        );
    }
}


// CONFIGURE COMPONENT PROP TYPES

FavoriteQuotes.propTypes = {
    fetchFavoriteQuotes: PropTypes.func,
    favorites: PropTypes.array,
    fetching: PropTypes.bool,
    removing: PropTypes.bool
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { favorites, fetching } = state.favoriteQuotes;
    const { removing } = state.favoriteQuoteRemoval;
    
    return {
        favorites,
        fetching,
        removing,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchFavoriteQuotes }, dispatch);
};

const hoc = connect(mapStateToProps, mapDispatchToProps)(FavoriteQuotes);


// EXPORT COMPONENT

export { hoc as FavoriteQuotes };