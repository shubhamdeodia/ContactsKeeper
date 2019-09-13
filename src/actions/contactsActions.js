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
} from './actionTypes';

import axios from '../axios';

// Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

// Get contacts from server
export const getContacts = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get('/contacts/');
        const { data } = res;

        dispatch({
            type: GET_CONTACTS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: CONTACTS_ERROR,
            payload: err.response
        });
    }
};

// Add new contact
export const addContacts = contact => async dispatch => {
    try {
        setLoading();

        const res = await axios.post('/contacts', contact);
        const { data } = res;

        dispatch({
            type: ADD_CONTACT,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: CONTACTS_ERROR,
            payload: err.response
        });
    }
};

// Delete contacts from server
export const deleteContacts = id => async dispatch => {
    try {
        setLoading();
        await axios.delete(`/contacts/${id}`);

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: CONTACTS_ERROR,
            payload: err.response
        });
    }
};

export const setCurrent = contact => {
    return {
        type: SET_CURRENT,
        payload: contact
    };
};

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    };
};

export const updateContact = contact => async dispatch => {
    try {
        setLoading();
        await axios.patch(`/contacts/${contact.id}`, contact);

        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        });
    } catch (err) {
        dispatch({
            type: CONTACTS_ERROR,
            payload: err.response
        });
    }
};

// Search Contacts
// We could alos implement it with the help of adebounce function
export const searchContacts = text => async dispatch => {
    try {
        setLoading();
        const res = await axios.get(`/contacts?q=${text}`);
        const { data } = res;

        dispatch({
            type: SEARCH_CONTACTS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: CONTACTS_ERROR,
            payload: err.response
        });
    }
};

export const toggleFavorite = id => {
    return {
        type: TOGGLE_FAVORITE,
        payload: id
    };
};
