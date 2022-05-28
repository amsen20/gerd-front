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

export function getPlayerTeam(room) {
    const userName = getUsername();
    const teams = getTeams(room);
    const players = getSortedPlayers(room);
    const playerIndex = players.findIndex(player => player === userName);

    return teams[playerIndex];
}

export function getPlayer(styles, isJoined, team, isCurrent, isStarted) {

    let color;

    if (!isStarted)
        color = "#FFFFFF";
    else
        color = team === 1 ? "#F79F79" : "#007EA8";

    if(!isJoined)
        return <svg className={styles.circles} viewBox="-2 -2 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="32.5" stroke={color} strokeWidth="5"/>
        </svg>

    return <svg className={styles.circles} viewBox="-2 -2 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        {isCurrent ? <circle cx="35" cy="35" r="35" fill={color} stroke="#F6F8FC" strokeWidth="3" /> :
            <circle cx="35" cy="35" r="35" fill={color} />}
    </svg>;
};