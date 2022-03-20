import {getToken, getUsername} from "./auth/token";

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

export function getSortedPlayers(room) {
    let players = JSON.parse(JSON.stringify(room.players));
    players.sort();
    return players;
}

export function getCurrentPlayer(room) {
    let players = getSortedPlayers(room);
    if(!room.match)
        return null;
    return players[room.match.current_turn];
}

export function amCurrentPlayer(room) {
    return getUsername() === getCurrentPlayer(room);
}