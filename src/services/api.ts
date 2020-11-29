import axios from 'axios';

const api = axios.create({
    baseURL: 'http://rafaelpadovani-test.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
