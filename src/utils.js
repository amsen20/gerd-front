import {getToken, getUsername} from "./auth/token";
import PN from "persian-number";

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

export function getTeamsByType(teamType) {
    let teams = []

    switch (teamType) {
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

export function getTeams(room) {
    return getTeamsByType(room.teams);
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

export const getPersian = PN.convertEnToPe;

export function getDevice() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return "mobile";
    }else{
        return "laptop";
    }
}

export function getLastWord(room) {
    let lastWord = '';
    if(room.match && room.match.words && room.match.words.length > 0)
        lastWord = room.match.words[room.match.words.length - 1].text;
    return lastWord;
}