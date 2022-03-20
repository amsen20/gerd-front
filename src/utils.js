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

export function getTeams(room) {
    let teams = []

    switch (room.teams) {
        case 1:
            teams = [1, 1, 2, 2];
            break;
        case 2:
            teams = [1, 2, 1, 2];
            break;
        case 3:
            teams = [1, 2, 2, 1];
            break;
        default:
            console.error("bad teams");
    }

    return teams;
}

function getAllIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

export function getGuessingPlayer(room) {
    let players = getSortedPlayers(room);
    if(!room.match)
        return null;
    const teams = getTeams(room);
    return players[
        getAllIndexes(teams, teams[room.match.current_turn])
            .filter(item => item !== room.match.current_turn)[0]
    ];

}

export function amCurrentPlayer(room) {
    return getUsername() === getCurrentPlayer(room);
}