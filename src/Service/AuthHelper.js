import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
    return localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    localStorage.setItem('auth_token', token);
};

export const request = (method, url,data) => {

    let headers = {};
    if(getAuthToken() !== null && getAuthToken() !== 'null')
        headers = {'Authorization': `Bearer ${getAuthToken()}`};

    return axios({
        method,
        url,
        headers,
        data
    })
}