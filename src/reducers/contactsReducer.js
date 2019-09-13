import {
    GET_CONTACTS,
    SET_LOADING,
    CONTACTS_ERROR,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    SEARCH_CONTACTS,
    TOGGLE_FAVORITE
} from '../actions/actionTypes';

const initialState = {
    contacts: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case CONTACTS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };

        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case ADD_CONTACT: {
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                loading: false
            };
        }

        case DELETE_CONTACT: {
            const updatedContacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
            return {
                ...state,
                contacts: updatedContacts,
                loading: false
            };
        }

        case SET_CURRENT: {
            return {
                ...state,
                current: action.payload,
                loading: false
            };
        }

        case CLEAR_CURRENT: {
            return {
                ...state,
                current: null,
                loading: false
            };
        }

        case UPDATE_CONTACT: {
            const updatedContacts = state.contacts.map(contact =>
                contact.id === action.payload.id ? action.payload : contact
            );

            return {
                ...state,
                contacts: updatedContacts,
                loading: false
            };
        }

        case SEARCH_CONTACTS: {
            return {
                ...state,
                contacts: action.payload
            };
        }

        case TOGGLE_FAVORITE: {
            const updatedContacts = state.contacts.map(contact =>
                contact.id === action.payload
                    ? { ...contact, favorite: !contact.favorite }
                    : contact
            );
            return {
                ...state,
                contacts: updatedContacts
            };
        }

        default:
            return state;
    }
};
