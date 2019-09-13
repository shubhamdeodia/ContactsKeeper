import React from 'react';

export default function AddButton() {
    return (
        <div className="fixed-action-btn">
            <a
                href="#add-contact-modal"
                className="btn-floating btn-large blue darken-2 modal-trigger"
            >
                <i className="large material-icons">add</i>
            </a>
        </div>
    );
}
