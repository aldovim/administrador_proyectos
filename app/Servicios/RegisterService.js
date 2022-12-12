import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000';

export function register(email, telefono, nombreEmpresa, password) {
    const usuario = {
        email: email,
        telefono: telefono,
        nombreEmpresa: nombreEmpresa,
        password: password
    };

    return axios({ method: 'post', url: baseUrl + '/register', data: usuario });
}
