import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchContacts } from '../actions/contactsActions';

function SearchBar({ searchContacts }) {
    // useRef to get the reference to searchbar
    const text = useRef('');

    const onChange = () => {
        searchContacts(text.current.value);
    };

    return (
        <div className="navbar-fixed">
            <nav
                style={{ marginBottom: '30px' }}
                className="deep-purple darken-3"
            >
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input
                                id="search"
                                type="search"
                                placeholder="Search Contacts..."
                                ref={text}
                                onChange={onChange}
                            />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

SearchBar.propTypes = {
    searchContacts: PropTypes.func.isRequired
};

export default connect(
    null,
    { searchContacts }
)(SearchBar);
