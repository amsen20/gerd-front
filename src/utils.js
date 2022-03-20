import {getToken} from "./auth/token";

export function authPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${getToken()}`
        },
        body: JSON.stringify(body)
    })
        .then(data => {
            if (data.headers.get("content-type") && data.headers.get("content-type").indexOf("application/json"))
                return data.json();
            else
                return Promise.resolve()
        });
}

export function authGet(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${getToken()}`
        }
    })
        .then(data => data && data.json());
}