/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Materialize from 'materialize-css/dist/js/materialize.min';
import {
    deleteContacts,
    setCurrent,
    toggleFavorite
} from '../../actions/contactsActions';

function ContactItem({ contact, deleteContacts, setCurrent, toggleFavorite }) {
    const onDelete = id => {
        deleteContacts(id);
        Materialize.toast({ html: 'Contact Deleted' });
    };

    return (
        <tr>
            <td>{contact.name}</td>
            <td> {contact.email}</td>
            <td> {contact.phone}</td>
            <td>
                <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleFavorite(contact.id)}
                >
                    <i
                        className={`material-icons ${
                            contact.favorite ? 'blue-text ' : 'grey-text '
                        }`}
                    >
                        grade
                    </i>
                </div>
            </td>
            <td>
                <a
                    onClick={() => setCurrent(contact)}
                    href="#view-contact-modal"
                    className=" waves-effect waves-light  card-action  modal-trigger"
                >
                    <i className="material-icons">unfold_more</i>
                </a>
            </td>
            <td>
                <a
                    onClick={() => setCurrent(contact)}
                    href="#edit-contact-modal"
                    className=" waves-effect waves-light  card-action  modal-trigger"
                >
                    <i className="material-icons">edit</i>
                </a>
            </td>
            <td>
                <i
                    onClick={() => onDelete(contact.id)}
                    className="material-icons  waves-effect waves-light red-text "
                >
                    delete
                </i>
            </td>
        </tr>
    );
}

ContactItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    contact: PropTypes.object.isRequired,
    deleteContacts: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteContacts, setCurrent, toggleFavorite }
)(ContactItem);
