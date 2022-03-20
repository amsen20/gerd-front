import {navigate} from "react-router-dom";
import {authPost} from "../utils";

export function setToken(token) {
    sessionStorage.setItem('token', token);
}

export function setUsername(username) {
    sessionStorage.setItem('username', username);
}

export function getToken() {
    return sessionStorage.getItem('token');
}

export function getUsername() {
    return sessionStorage.getItem('username');
}

export function removeToken() {
    sessionStorage.removeItem('token');
}

export function isAuth() {
    return !!getToken();
}


export async function loginUser(userPass) {
    return fetch( '/api-token-auth/', { // FIXME correct the urls
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPass)
    })
        .then(data => data.json());
}