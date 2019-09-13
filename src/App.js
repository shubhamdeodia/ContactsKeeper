import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Materilize from 'materialize-css/dist/js/materialize.min';
import { Provider } from 'react-redux';
import SearchBar from './layout/SearchBar';
import Contacts from './Components/Contacts/Contacts';
import AddButton from './layout/AddButton';
import AddContactModal from './Components/Modals/AddContactModal';
import ViewContactModal from './Components/Modals/ViewContactModal';
import EditContactModal from './Components/Modals/EditContactModal';

import store from './store/store';

function App() {
    useEffect(() => {
        Materilize.AutoInit();
    });

    return (
        <Provider store={store}>
            {/*  Search Bar Component */}
            <SearchBar />

            {/*  Add Button Component */}
            <AddButton />

            {/* Modal for different screens */}
            <AddContactModal />
            <EditContactModal />
            <ViewContactModal />

            {/* Contact List */}
            <Contacts />
        </Provider>
    );
}

export default App;
