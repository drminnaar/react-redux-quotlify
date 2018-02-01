// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES REFERENCES

import { fetchQuotes } from '../state/actions/quoteActions';


// COMPONENT

class SearchBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        };

        this.onFilterChangeHandler = this.onFilterChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onFilterChangeHandler(e) {
        const filter = e.target.value;

        this.setState(() => ({ filter }));
    }

    onSubmitHandler(e) {
        e.preventDefault();
        
        this.props.fetchQuotes(this.state.filter);

        this.setState(() => ({ filter: '' }));
    }

    render() {
        return (
            <form className="animated fadeIn" onSubmit={this.onSubmitHandler}>
                <div className="input-group mb-3 col-md-6 mx-auto">
                    <input type="text"
                        className="form-control"
                        placeholder="quote text filter"
                        value={this.state.filter}
                        onChange={this.onFilterChangeHandler} />

                    <div className="input-group-append">
                        <button className="btn btn-outline-info" type="submit">SEARCH</button>
                    </div>
                </div>
            </form>
        );
    }
}


// CONFIGURE COMPONENT PROP TYPES

SearchBar.propTypes = {
    fetchQuotes: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchQuotes }, dispatch);
};

const hoc = connect(null, mapDispatchToProps)(SearchBar);


// EXPORT COMPONENT

export { hoc as SearchBar };