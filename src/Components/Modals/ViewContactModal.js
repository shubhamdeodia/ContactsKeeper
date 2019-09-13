/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import Loader from '../../layout/Loader';

function ViewContactModal({ current }) {
    const modalStyle = {
        width: '70%',
        height: '70%'
    };

    if (!current) {
        return (
            <div id="view-contact-modal" className="modal" style={modalStyle}>
                <div className="modal-content">
                    <Loader />
                </div>
            </div>
        );
    }
    return (
        <div id="view-contact-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <input
                            disabled
                            type="text"
                            name="name"
                            value={current.name}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">home</i>
                        <textarea
                            id="textarea1"
                            className="materialize-textarea"
                            disabled
                            name="address"
                            value={current.address}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input
                            disabled
                            type="email"
                            name="email"
                            value={current.email}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">phone</i>
                        <input
                            disabled
                            type="text"
                            name="phone"
                            value={current.phone}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    disabled
                                    name="favorite"
                                    type="checkbox"
                                    className="filled-in"
                                    checked={current.favorite}
                                    value={current.favorite}
                                />
                                <span>Favorite</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    current: state.contactsState.current
});

export default connect(
    mapStateToProps,
    null
)(ViewContactModal);
