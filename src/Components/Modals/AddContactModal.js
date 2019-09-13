import React, { useState } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { addContacts } from '../../actions/contactsActions';

function AddContactModal({ addContacts }) {
    const modalStyle = {
        width: '75%',
        height: '75%'
    };

    const [isfavorite, setFavorite] = useState(false);

    const contactTemplate = {
        name: '',
        address: '',
        email: '',
        phone: ''
    };
    const [contact, setContact] = useState(contactTemplate);

    const handleChange = event => {
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
        const newContact = { id: uuidv4(), ...contact, favorite: isfavorite };
        addContacts(newContact);
        setContact(contactTemplate);
    };

    return (
        <div id="add-contact-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Contact Details</h4>
                <div className="row">
                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={contact.name}
                            onChange={e => handleChange(e)}
                            placeholder="Name"
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
                            placeholder="Address"
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
                            placeholder="Email"
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
                            placeholder="Phone"
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

AddContactModal.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    // eslint-disable-next-line react/forbid-prop-types

    addContacts: PropTypes.func.isRequired
};

export default connect(
    null,
    { addContacts }
)(AddContactModal);
