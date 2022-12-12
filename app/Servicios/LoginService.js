import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000';

export function login(email, password) {
    const usuario = {
        email: email,
        password: password
    };

    return axios({ method: 'post', url: baseUrl + '/login', data: usuario });
}
