
import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://my-json-server.typicode.com/shubham2809/ContactsApp',
    headers: { 'Content-Type': 'application/json' }
});

export default instance;
