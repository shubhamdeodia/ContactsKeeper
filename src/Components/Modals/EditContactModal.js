/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateContact } from '../../actions/contactsActions';

function EditContactModal({ current, updateContact }) {
    const modalStyle = {
        width: '75%',
        height: '75%'
    };

    const contactTemplate = {
        name: '',
        address: '',
        email: '',
        phone: ''
    };

    const [contact, setContact] = useState(contactTemplate);
    const [isfavorite, setFavorite] = useState(false);

    useEffect(() => {
        if (current) {
            setContact(current);
            setFavorite(current.favorite);
        }
    }, [current]);

    const handleChange = event => {
        event.preventDefault();
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = () => {
        if (
            contact.name === '' ||
            contact.email === '' ||
            contact.nickname === '' ||
            contact.phone === ''
        ) {
            Materialize.toast({ html: 'Please fill all the fields' });
            return;
        }

        const updatedContact = {
            id: current.id,
            ...contact,
            favorite: isfavorite
        };

        updateContact(updatedContact);
        Materialize.toast({ html: 'Contact Updated' });
    };

    return (
        <div id="edit-contact-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Contact Details</h4>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <input
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">home</i>
                        <textarea
                            id="textarea1"
                            className="materialize-textarea"
                            name="address"
                            value={contact.address}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">phone</i>
                        <input
                            type="text"
                            name="phone"
                            value={contact.phone}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    name="favorite"
                                    type="checkbox"
                                    className="filled-in"
                                    checked={isfavorite}
                                    value={isfavorite}
                                    onChange={() => setFavorite(!isfavorite)}
                                />
                                <span>Mark as Favorite</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div
                    onClick={onSubmit}
                    className="modal-close waves-effect blue btn"
                >
                    Enter
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    current: state.contactsState.current
});

EditContactModal.propTypes = {
    updateContact: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { updateContact }
)(EditContactModal);
