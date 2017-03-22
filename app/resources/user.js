import axios from 'axios';

function userLogin(data) {
    return axios.post('http://localhost/user/login', data);
}

function userLogout(data) {
    return axios.get('http://localhost/user/logout');
}
